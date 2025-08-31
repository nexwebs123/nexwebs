import arcjet, { tokenBucket } from "@arcjet/next";
import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email/email-template";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    tokenBucket({
      mode: "LIVE",
      characteristics: ["ip.src"],
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

const requestSchema = z.object({
  fullName: z.string().min(2, { message: "name is too short" }),
  email: z.string().email({ message: "invalid email" }),
  phoneNumber: z
    .string()
    .min(10, { message: "phone number is too short" })
    .max(13, { message: "phone number is too long" }),
  projectDetails: z
    .string()
    .min(2, { message: "project details is too short" }),
});

export async function POST(request: NextRequest) {
  try {
    const decision = await aj.protect(request, { requested: 5 });
    if (decision.isDenied()) {
      return NextResponse.json(
        { error: "Too Many Requests", reason: decision.reason },
        { status: 429 }
      );
    }
    const requestBody = await request.json();
    const parsedBody = requestSchema.safeParse(requestBody);
    if (!parsedBody.success) {
      return NextResponse.json(
        { error: parsedBody.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    const { data, error } = await resend.emails.send({
      from: "NEXWEBS <nilavtalukdar06@imagify.space>",
      to: [process.env.EMAIL!],
      subject: "Hello world",
      react: EmailTemplate({
        fullName: parsedBody.data.fullName,
        email: parsedBody.data.email,
        phone: parsedBody.data.phoneNumber,
        projectDetails: parsedBody.data.projectDetails,
      }),
    });

    if (error) {
      throw error;
    } else {
      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "failed to send email" },
      { status: 500 }
    );
  }
}
