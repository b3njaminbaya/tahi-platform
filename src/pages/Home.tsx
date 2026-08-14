import { Seo } from "@/components/seo/Seo";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { seoDefaults } from "@/config/seo";

export default function Home() {
  return (
    <>
      <Seo {...seoDefaults.home} />
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <AboutPreview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <FAQ />
      <CTASection />
    </>
  );
}
