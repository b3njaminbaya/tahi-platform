import { Link } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { business } from "@/config/business";
import { seoDefaults } from "@/config/seo";

const sections = [
  { id: "commitment", title: "Our commitment" },
  { id: "conformance-target", title: "Conformance target" },
  { id: "what-weve-done", title: "What we've done" },
  { id: "known-limitations", title: "Known limitations" },
  { id: "assistive-technology", title: "Assistive technology & browsers" },
  { id: "ongoing-work", title: "Ongoing work" },
  { id: "feedback", title: "Feedback" },
];

export default function Accessibility() {
  return (
    <>
      <Seo {...seoDefaults.accessibility} />
      <LegalLayout title="Accessibility Statement" sections={sections}>
        <LegalSection id="commitment" title="1. Our commitment">
          <p>
            {business.name} is committed to making this website accessible to as many people as possible, including
            people who use assistive technology such as screen readers, keyboard-only navigation, voice control, or
            switch devices. Accessibility matters especially to us as a healthcare provider — many of the people who
            need our services, or who are arranging care on behalf of a family member, may themselves rely on
            assistive technology.
          </p>
        </LegalSection>

        <LegalSection id="conformance-target" title="2. Conformance target">
          <p>
            We aim for this website to conform to the{" "}
            <a
              href="https://www.w3.org/WAI/WCAG22/quickref/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-700 underline underline-offset-2"
            >
              Web Content Accessibility Guidelines (WCAG) 2.2, Level AA
            </a>{" "}
            where practical. This is a target we work toward continuously rather than a certified or audited claim of
            full conformance.
          </p>
        </LegalSection>

        <LegalSection id="what-weve-done" title="3. What we've done">
          <p>This website has been built with accessibility in mind, including:</p>
          <ul>
            <li>Semantic HTML structure and a logical heading hierarchy on every page</li>
            <li>Visible keyboard focus states throughout the site — never suppressed</li>
            <li>Labeled, accessible forms with clear, programmatically associated error messaging</li>
            <li>Sufficient color contrast between text and background</li>
            <li>A "skip to main content" link for keyboard users</li>
            <li>Descriptive alternative text for meaningful images, and decorative images hidden from assistive technology</li>
            <li>A mobile navigation menu that traps focus appropriately and closes on the Escape key</li>
            <li>Respect for reduced-motion preferences set at the operating system level</li>
            <li>Touch targets sized for comfortable use on mobile devices</li>
          </ul>
        </LegalSection>

        <LegalSection id="known-limitations" title="4. Known limitations">
          <p>
            In the interest of transparency, some areas of this website are still evolving and may not yet fully meet
            our accessibility target:
          </p>
          <ul>
            <li>
              Photography across the site (team, service and client images) is currently placeholder artwork pending
              real photography from {business.legalName} — final alt text will be reviewed once real images are added
            </li>
            <li>Testimonials and team content are placeholders pending client submission, and will be reviewed for accessibility once real content is added</li>
          </ul>
          <p>
            If you encounter any other accessibility barrier not listed here, please let us know using the feedback
            details below.
          </p>
        </LegalSection>

        <LegalSection id="assistive-technology" title="5. Assistive technology & browsers">
          <p>
            This website is built using standard, modern web technologies and semantic HTML, which are designed to
            work with current versions of major browsers (Chrome, Safari, Firefox, Edge) and commonly used screen
            readers on both desktop and mobile devices.
          </p>
        </LegalSection>

        <LegalSection id="ongoing-work" title="6. Ongoing work">
          <p>
            Accessibility is an ongoing effort, not a one-time fix. As real content, photography, and features are
            added to this site, we will continue reviewing them against WCAG 2.2 AA guidance where practical, and
            will update this statement to reflect that work.
          </p>
        </LegalSection>

        <LegalSection id="feedback" title="7. Feedback">
          <p>
            If you encounter any accessibility barriers while using this website, please let us know via the{" "}
            <Link to="/contact" className="font-medium text-primary-700 underline underline-offset-2">
              Contact page
            </Link>
            , WhatsApp, or email at{" "}
            {business.email.value ? (
              <a href={`mailto:${business.email.value}`} className="font-medium text-primary-700 underline underline-offset-2">
                {business.email.value}
              </a>
            ) : (
              "our contact email"
            )}{" "}
            so we can address them. Please include the page you were on and, if possible, the assistive technology or
            browser you were using.
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
