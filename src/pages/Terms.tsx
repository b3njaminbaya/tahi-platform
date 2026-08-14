import { Link } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { business } from "@/config/business";
import { seoDefaults } from "@/config/seo";

const sections = [
  { id: "acceptance", title: "Acceptance of these terms" },
  { id: "about-services", title: "About our services" },
  { id: "eligibility", title: "Eligibility to use this website" },
  { id: "emergency", title: "Not a substitute for emergency care" },
  { id: "appointments", title: "Appointment & consultation requests" },
  { id: "cancellations", title: "Cancellations & rescheduling" },
  { id: "your-responsibilities", title: "Your responsibilities" },
  { id: "website-content", title: "Website content & accuracy" },
  { id: "intellectual-property", title: "Intellectual property" },
  { id: "third-party-links", title: "Third-party links & services" },
  { id: "liability", title: "Limitation of liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing law" },
  { id: "changes", title: "Changes to these terms" },
  { id: "severability", title: "Severability" },
  { id: "contact", title: "Contact us" },
];

export default function Terms() {
  return (
    <>
      <Seo {...seoDefaults.terms} />
      <LegalLayout title="Terms of Service" sections={sections}>
        <p className="text-sm leading-relaxed text-neutral-600">
          This is general draft website content and does not constitute legal advice. It should be reviewed by a
          qualified professional before {business.name} relies on it as a binding legal document.
        </p>

        <LegalSection id="acceptance" title="1. Acceptance of these terms">
          <p>
            By accessing or using the {business.name} website (the "Website"), you agree to be bound by these Terms
            of Service and our{" "}
            <Link to="/privacy-policy" className="font-medium text-primary-700 underline underline-offset-2">
              Privacy Policy
            </Link>
            . If you do not agree with any part of these terms, please do not use this Website.
          </p>
        </LegalSection>

        <LegalSection id="about-services" title="2. About our services">
          <p>
            {business.legalName} provides information about home-based healthcare services and allows visitors to
            request appointments or consultations. Submitting a request through this Website does not guarantee that
            a specific service will be provided; all appointments are subject to confirmation by our team and the
            availability of qualified staff.
          </p>
          <p>
            Services described on this Website are general in nature. The exact scope of care provided in any
            individual case is agreed directly between {business.legalName} and the client (or their representative)
            once contact has been made.
          </p>
        </LegalSection>

        <LegalSection id="eligibility" title="3. Eligibility to use this website">
          <p>
            This Website is intended for use by individuals seeking home-based healthcare services, or their family
            members, guardians, or authorized representatives acting on their behalf. By submitting a request through
            this Website, you confirm that you are legally authorized to do so for yourself or the person you are
            enquiring on behalf of.
          </p>
        </LegalSection>

        <LegalSection id="emergency" title="4. Not a substitute for emergency care">
          <p>
            This Website is for general informational purposes only and is not a substitute for professional medical
            advice, diagnosis, or treatment. If you are experiencing a medical emergency, contact your local
            emergency services immediately rather than relying on this Website, its forms, or WhatsApp messaging.
          </p>
        </LegalSection>

        <LegalSection id="appointments" title="5. Appointment & consultation requests">
          <p>
            Forms on this Website (including the appointment and contact forms) are used to submit a request to our
            team. Submitting a form does not create a confirmed appointment — our team will follow up with you
            directly by phone, email, or WhatsApp to confirm details, availability, and next steps.
          </p>
          <p>
            Please provide accurate and complete information when submitting a request, including a valid phone
            number and/or email address, so that we can reach you to confirm your appointment.
          </p>
        </LegalSection>

        <LegalSection id="cancellations" title="6. Cancellations & rescheduling">
          <p>
            If you need to cancel or reschedule a confirmed appointment, please contact us as early as possible by
            phone or WhatsApp so we can adjust our schedule and offer the slot to another client. Specific
            cancellation notice periods, if any, will be communicated to you directly when your appointment is
            confirmed.
          </p>
        </LegalSection>

        <LegalSection id="your-responsibilities" title="7. Your responsibilities">
          <p>When using this Website and our services, you agree to:</p>
          <ul>
            <li>Provide accurate, current and complete information when making a request</li>
            <li>Treat our staff with courtesy and respect during home visits and communications</li>
            <li>Provide a safe environment for our staff to deliver care during home visits</li>
            <li>Inform us promptly of any change in circumstances relevant to the care being provided</li>
          </ul>
        </LegalSection>

        <LegalSection id="website-content" title="8. Website content & accuracy">
          <p>
            We aim to keep information on this Website accurate and up to date, but we make no warranties about the
            completeness, reliability, or accuracy of this information. Service descriptions are general in nature
            and may be updated from time to time without prior notice.
          </p>
        </LegalSection>

        <LegalSection id="intellectual-property" title="9. Intellectual property">
          <p>
            The content, layout, design, graphics and branding of this Website are the property of{" "}
            {business.legalName} unless otherwise stated, and may not be copied, reproduced, or used without prior
            written permission.
          </p>
        </LegalSection>

        <LegalSection id="third-party-links" title="10. Third-party links & services">
          <p>
            This Website may include links to third-party services, including WhatsApp and social media platforms.
            We are not responsible for the content, privacy practices, or terms of any third-party website or service
            you access through these links.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="11. Limitation of liability">
          <p>
            To the fullest extent permitted by law, {business.legalName} will not be liable for any indirect,
            incidental, or consequential damages arising from your use of this Website. Nothing in these terms
            excludes or limits liability that cannot be excluded or limited under applicable Kenyan law.
          </p>
        </LegalSection>

        <LegalSection id="indemnification" title="12. Indemnification">
          <p>
            You agree to indemnify and hold {business.legalName} harmless from any claims, damages, or expenses
            arising from your misuse of this Website or violation of these Terms of Service.
          </p>
        </LegalSection>

        <LegalSection id="governing-law" title="13. Governing law">
          <p>
            These Terms of Service are governed by the laws of Kenya. Any disputes arising from your use of this
            Website or our services will be subject to the jurisdiction of the courts of Kenya.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="14. Changes to these terms">
          <p>
            We may update these Terms of Service from time to time. The "Last updated" date at the top of this page
            reflects the most recent revision. Continued use of the Website after changes are posted constitutes
            acceptance of the revised terms.
          </p>
        </LegalSection>

        <LegalSection id="severability" title="15. Severability">
          <p>
            If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will
            be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in
            full force and effect.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="16. Contact us">
          <p>
            Questions about these terms can be directed to us via the{" "}
            <Link to="/contact" className="font-medium text-primary-700 underline underline-offset-2">
              Contact page
            </Link>
            , by WhatsApp, or by email at{" "}
            {business.email.value ? (
              <a href={`mailto:${business.email.value}`} className="font-medium text-primary-700 underline underline-offset-2">
                {business.email.value}
              </a>
            ) : (
              "our contact email"
            )}
            .
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
