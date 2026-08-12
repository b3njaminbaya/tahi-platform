import { Link } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { business } from "@/config/business";
import { seoDefaults } from "@/config/seo";

export default function Accessibility() {
  return (
    <>
      <Seo {...seoDefaults.accessibility} />
      <LegalLayout title="Accessibility Statement">
        <LegalSection title="Our commitment">
          <p>
            {business.name} is committed to making this website accessible to as many people as possible, including
            people who use assistive technology such as screen readers, keyboard-only navigation, or switch devices.
          </p>
        </LegalSection>

        <LegalSection title="What we've done">
          <p>This website has been built with accessibility in mind, including:</p>
          <ul>
            <li>Semantic HTML structure and heading hierarchy</li>
            <li>Visible keyboard focus states throughout the site</li>
            <li>Labeled, accessible forms with clear error messaging</li>
            <li>Sufficient color contrast between text and background</li>
            <li>A "skip to main content" link for keyboard users</li>
            <li>Descriptive alternative text for meaningful images</li>
            <li>Respect for reduced-motion preferences set at the operating system level</li>
          </ul>
        </LegalSection>

        <LegalSection title="Ongoing work">
          <p>
            Accessibility is an ongoing effort. As real content, photography, and features are added to this site,
            we will continue reviewing them against WCAG 2.2 AA guidance where practical.
          </p>
        </LegalSection>

        <LegalSection title="Feedback">
          <p>
            If you encounter any accessibility barriers while using this website, please let us know via the{" "}
            <Link to="/contact" className="font-medium text-primary-700 underline underline-offset-2">
              Contact page
            </Link>{" "}
            or WhatsApp, so we can address them.
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
