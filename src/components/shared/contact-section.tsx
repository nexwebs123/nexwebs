import { Badge } from "../theme/badge";
import { ContactCards } from "./ui/contact-cards";

export function ContactUs() {
  return (
    <section className="my-6 md:my-12 w-full">
      <Badge title="Get In Touch" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Let's Build Something Amazing Together
        </h2>
        <p className="mt-4 text-lg md:text-xl font-medium text-neutral-400">
          Ready to transform your business with cutting-edge software solutions?
          Our team of experts is here to help you every step of the way.
        </p>
      </div>
      <div className="my-6 md:my-12">
        <ContactCards />
      </div>
    </section>
  );
}
