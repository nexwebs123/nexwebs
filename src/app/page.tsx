import { HeroSection } from "@/components/shared/hero-section";
import { Services } from "@/components/shared/services-section";
import { MaksedDivBox } from "@/components/video/masked";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <HeroSection />
      <MaksedDivBox />
      <Services />
    </section>
  );
}
