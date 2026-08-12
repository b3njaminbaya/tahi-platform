import { MapPinned, HeartHandshake, Award, Clock3 } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TeamCard } from "@/components/about/TeamCard";
import { CTASection } from "@/components/ui/CTASection";
import { business } from "@/config/business";
import { team } from "@/config/team";
import { seoDefaults } from "@/config/seo";

const coreValueIcons = [MapPinned, HeartHandshake, Award, Clock3];

export default function About() {
  return (
    <>
      <Seo {...seoDefaults.about} />
      <Container className="py-6">
        <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "About Us" }]} />
      </Container>

      <section className="pb-16 pt-4 sm:pb-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="About us" title="Who we are" />
          <p className="mt-5 text-base leading-relaxed text-neutral-600">{business.description.short}</p>
          {business.description.isPlaceholder ? (
            <PlaceholderNotice className="mt-6">
              This company background is a placeholder. It will be replaced with Tahi Home-Based Care's official
              description once supplied.
            </PlaceholderNotice>
          ) : null}
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-8">
              <h2 className="text-2xl">Our Vision</h2>
              {business.vision.isPlaceholder ? (
                <PlaceholderNotice className="mt-3">Awaiting client-approved vision statement.</PlaceholderNotice>
              ) : (
                <p className="mt-3 text-neutral-600">{business.vision.value}</p>
              )}
            </div>
            <div className="rounded-lg border border-neutral-200 p-8">
              <h2 className="text-2xl">Our Mission</h2>
              <p className="mt-3 text-neutral-600">{business.mission.value}</p>
              {business.mission.isPlaceholder ? (
                <PlaceholderNotice className="mt-5">Awaiting client-approved mission statement.</PlaceholderNotice>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="Our core values" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {business.coreValues.items.map((value, index) => {
              const Icon = coreValueIcons[index % coreValueIcons.length];
              return (
                <div key={value.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                  <Icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  <h3 className="mt-4 text-lg">{value.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{value.description}</p>
                </div>
              );
            })}
          </div>
          {business.coreValues.isPlaceholder ? (
            <PlaceholderNotice className="mt-6">
              Core values shown above are placeholders pending confirmation from the client.
            </PlaceholderNotice>
          ) : null}
        </Container>
      </section>

      <div className="bg-white">
        <WhyChooseUs />
      </div>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Meet the team" title="Our team" description="Profiles below are placeholders until real staff information is supplied." />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
