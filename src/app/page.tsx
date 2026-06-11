import { Hero } from "@/components/sections/Hero";
import { Strengths } from "@/components/sections/Strengths";
import { Services } from "@/components/sections/Services";
import { Works } from "@/components/sections/Works";
import { Company } from "@/components/sections/Company";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Strengths />
      <Services />
      <Works />
      <Company />
      <CTASection />
    </>
  );
}
