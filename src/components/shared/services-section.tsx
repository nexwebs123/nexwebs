import { MinimalCardContainer } from "./minimal-card";
import MaskedDiv from "../ui/masked-div";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../theme/badge";

export function Services() {
  return (
    <section className="mt-12 sm:mt-24 mb-12">
      <Badge title="Our Services" />
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Related Services We Offer
        </h2>
        <p className="mt-4 text-lg md:text-xl font-medium text-neutral-400">
          See this section to view the services we offer that can help you take
          a decision.
        </p>
      </div>
      <div className="my-6 md:my-12">
        <MinimalCardContainer />
      </div>
      <div className="my-6 md:my-12">
        <MaskedDiv maskType="type-4" className="my-4">
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105"
            autoPlay
            loop
            muted
          >
            <source
              src="https://videos.pexels.com/video-files/18069701/18069701-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </MaskedDiv>
      </div>
      <div className="my-6 flex flex-col justify-center items-center text-center">
        <p className="text-lg text-neutral-600">
          Need a custom solution tailored to your business?
        </p>
        <Link href="/#contact">
          <Button className="my-4" size="lg" variant="secondary">
            Request Custom Quote
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
