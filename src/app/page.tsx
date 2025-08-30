import { About } from "@/components/shared/about-section";
import { ContactUs } from "@/components/shared/contact-section";
import { HeroSection } from "@/components/shared/hero-section";
import { Services } from "@/components/shared/services-section";
import { Solutions } from "@/components/shared/solutions-section";
import { TestimonialSection } from "@/components/shared/testimonial-section";
import { MaksedDivBox } from "@/components/video/masked";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <HeroSection />
      <MaksedDivBox />
      <Services />
      <Solutions />
      <About />
      <TestimonialSection />
      <ContactUs />
    </section>
  );
}
