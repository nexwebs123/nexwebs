"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, User, Users } from "lucide-react";
import { ContactForm } from "./contact-form";
import { ContactChatDialog } from "./contact-chat";
import Link from "next/link";

export function ContactCards() {
  const message = "Hello, I want to know more!";

  const handleClick = () => {
    const url = `https://wa.me/916001612607?text=${encodeURIComponent(
      message
    )}`;
    console.log(url);
    window.open(url, "_blank");
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>
            <Button
              variant="secondary"
              size="sm"
              className="pointer-events-none"
            >
              <MessageSquare />
            </Button>
          </CardTitle>
          <CardDescription>Live Chat</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Chat with our experts right now and Get your project done</p>
        </CardContent>
        <CardFooter>
          <ContactChatDialog />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Button
              variant="secondary"
              size="sm"
              className="pointer-events-none"
            >
              <User />
            </Button>
          </CardTitle>
          <CardDescription>Get In Touch</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Submit your personal and project details in the form</p>
        </CardContent>
        <CardFooter>
          <ContactForm />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Button variant="secondary" size="sm">
              <Users />
            </Button>
          </CardTitle>
          <CardDescription>Meet Our Team</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Learn more about our experts which will get your work done</p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" asChild>
            <Link href="/team">View Team</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
