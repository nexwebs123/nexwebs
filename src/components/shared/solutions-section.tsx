import { Badge } from "../theme/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { SolutionCards } from "./ui/solution-cards";

export function Solutions() {
  return (
    <section className="mt-12 sm:mt-24 mb-12">
      <Badge title="Industry Solutions" />
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Tailored Solutions for Every Industry
        </h2>
        <p className="mt-4 text-lg md:text-xl font-medium text-neutral-400">
          Specialized software solutions designed to meet the unique challenges
          of your industry.
        </p>
      </div>
      <div className="my-6 md:my-12">
        <SolutionCards />
      </div>
      <div className="my-6 md:my-12"></div>
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
