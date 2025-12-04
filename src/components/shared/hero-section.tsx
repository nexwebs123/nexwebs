import Image from "next/image";
import { AuroraText } from "../magicui/aurora-text";
import { avatars, tabItems } from "@/lib/constants";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import StarRating from "../star-rating";
import { Badge } from "../theme/badge";

export function HeroSection() {
  return (
    <section className="w-full my-6 pt-24 md:pt-32">
      <div className="max-w-3xl mx-auto text-center text-5xl sm:text-6xl md:text-8xl leading-1.2 font-semibold md:font-bold">
        Transform Your <AuroraText>Business Digital</AuroraText>
        <p>Experience</p>
      </div>
      <div className="my-4 w-full flex justify-center items-center">
        <Button variant="secondary" size="lg">
          <Link href="/#contact">Get Started</Link>
          <ArrowRight />
        </Button>
      </div>
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 place-items-center my-12 gap-6">
        {tabItems.map((item, index) => (
          <div
            className="flex justify-center items-center gap-x-2 max-sm:scale-50"
            key={index}
          >
            <Image src={item.image} height={45} width={45} alt="openai" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="my-6 flex justify-center items-center">
        <ContainerTextFlip words={["better", "modern", "awesome"]} />
      </div>
      <div className="my-12 flex justify-center items-center gap-4 flex-wrap">
        <AvatarCircles numPeople={99} avatarUrls={avatars} />
        <StarRating />
      </div>
    </section>
  );
}
