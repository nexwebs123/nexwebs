import { Badge } from "../theme/badge";
import { TestimonialCards } from "./ui/testimonials";
import MaskedDiv from "../ui/masked-div";

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
      <div className="my-6 md:my-12">
        <MaskedDiv maskType="type-3" className="my-4">
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105"
            autoPlay
            loop
            muted
          >
            <source
              src="https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </MaskedDiv>
      </div>
    </section>
  );
}
