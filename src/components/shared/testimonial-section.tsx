import { Badge } from "../theme/badge";
import { TestimonialCards } from "./ui/testimonials";

export function TestimonialSection() {
  return (
    <section className="my-12 md:mt-44 md:mb-12 relative z-30">
      <Badge title="Client Success Stories" />
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg md:text-xl font-medium text-neutral-400">
          Don't just take our word for it. Here's what industry leaders say
          about working with NEXWEBS.
        </p>
      </div>
      <div className="my-6 md:my-12">
        <TestimonialCards />
      </div>
    </section>
  );
}
