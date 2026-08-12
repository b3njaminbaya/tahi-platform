import { Link } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { business } from "@/config/business";
import { seoDefaults } from "@/config/seo";

export default function Privacy() {
  return (
    <>
      <Seo {...seoDefaults.privacy} />
      <LegalLayout title="Privacy Policy">
        <p className="text-sm leading-relaxed text-neutral-600">
          This is general draft website content and does not constitute legal advice. It should be reviewed by a
          qualified professional — with attention to applicable data protection law — before {business.name} relies
          on it as a binding policy.
        </p>

        <LegalSection title="1. Introduction">
          <p>
            {business.name} respects your privacy. This Privacy Policy explains what information we collect through
            this website, how we use it, and the choices you have — including information submitted when you request
            an appointment or contact us.
          </p>
        </LegalSection>

        <LegalSection title="2. Information we collect">
          <p>When you use the appointment or contact forms on this website, we may collect:</p>
          <ul>
            <li>Your full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>The service you are enquiring about or requesting</li>
            <li>Your preferred appointment date and time</li>
            <li>Any additional message or details you choose to share with us</li>
          </ul>
          <p>
            We only ask for the information needed to respond to your request. Please avoid including sensitive
            medical details in these forms beyond what is necessary — our team will discuss your specific care needs
            with you directly and confidentially once we make contact.
          </p>
        </LegalSection>

        <LegalSection title="3. How we use your information">
          <p>Information submitted through this website is used to:</p>
          <ul>
            <li>Respond to appointment requests and general enquiries</li>
            <li>Coordinate and confirm home-based care visits</li>
            <li>Communicate with you by phone, email, or WhatsApp about your request</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </LegalSection>

        <LegalSection title="4. Health-related information">
          <p>
            As a home-based healthcare provider, any health-related information you share with our team — whether
            through this website or directly — is treated as confidential and is used only to plan and deliver the
            care services you request, and shared only with those directly involved in providing your care.
          </p>
        </LegalSection>

        <LegalSection title="5. How we store information">
          <p>
            This website does not yet connect to a live backend system for storing form submissions. Once a backend
            is in place, this section will be updated to describe where and how your information is stored, and for
            how long it is retained.
          </p>
        </LegalSection>

        <LegalSection title="6. Cookies">
          <p>
            This website may use cookies for basic functionality. See our{" "}
            <Link to="/cookie-policy" className="font-medium text-primary-700 underline underline-offset-2">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
        </LegalSection>

        <LegalSection title="7. Your rights">
          <p>
            You may ask us what personal information we hold about you, request that it be corrected, or request
            that it be deleted, subject to any legal or record-keeping obligations that apply to healthcare
            providers.
          </p>
        </LegalSection>

        <LegalSection title="8. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page
            reflects the most recent revision.
          </p>
        </LegalSection>

        <LegalSection title="9. Contact us">
          <p>
            For privacy-related questions, please reach us via the{" "}
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
