import { Link } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { business } from "@/config/business";
import { seoDefaults } from "@/config/seo";

export default function Terms() {
  return (
    <>
      <Seo {...seoDefaults.terms} />
      <LegalLayout title="Terms of Service">
        <p className="text-sm leading-relaxed text-neutral-600">
          This is general draft website content and does not constitute legal advice. It should be reviewed by a
          qualified professional before {business.name} relies on it as a binding legal document.
        </p>

        <LegalSection title="1. Acceptance of these terms">
          <p>
            By accessing or using the {business.name} website, you agree to be bound by these Terms of Service. If
            you do not agree with any part of these terms, please do not use this website.
          </p>
        </LegalSection>

        <LegalSection title="2. About our services">
          <p>
            {business.name} provides information about home-based healthcare services and allows visitors to request
            appointments or consultations. Submitting a request through this website does not guarantee that a
            specific service will be provided; all appointments are subject to confirmation by our team.
          </p>
        </LegalSection>

        <LegalSection title="3. Not a substitute for emergency care">
          <p>
            This website is for general informational purposes only and is not a substitute for professional medical
            advice, diagnosis, or treatment. If you are experiencing a medical emergency, contact your local
            emergency services immediately rather than relying on this website or its forms.
          </p>
        </LegalSection>

        <LegalSection title="4. Appointment requests">
          <p>
            Forms on this website (including the appointment and contact forms) are used to submit a request to our
            team. Submitting a form does not create a confirmed appointment — our team will follow up with you
            directly by phone, email, or WhatsApp to confirm details, availability, and next steps.
          </p>
        </LegalSection>

        <LegalSection title="5. Website content">
          <p>
            We aim to keep information on this website accurate and up to date, but we make no warranties about the
            completeness, reliability, or accuracy of this information. Service descriptions are general in nature
            and may be updated from time to time.
          </p>
        </LegalSection>

        <LegalSection title="6. Intellectual property">
          <p>
            The content, layout, and design of this website are the property of {business.name} unless otherwise
            stated, and may not be reproduced without permission.
          </p>
        </LegalSection>

        <LegalSection title="7. Limitation of liability">
          <p>
            To the fullest extent permitted by law, {business.name} will not be liable for any indirect, incidental,
            or consequential damages arising from your use of this website.
          </p>
        </LegalSection>

        <LegalSection title="8. Changes to these terms">
          <p>
            We may update these Terms of Service from time to time. Continued use of the website after changes are
            posted constitutes acceptance of the revised terms.
          </p>
        </LegalSection>

        <LegalSection title="9. Contact">
          <p>
            Questions about these terms can be directed to us via the{" "}
            <Link to="/contact" className="font-medium text-primary-700 underline underline-offset-2">
              Contact page
            </Link>{" "}
            or WhatsApp.
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
