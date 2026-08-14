import { Link } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { business } from "@/config/business";
import { seoDefaults } from "@/config/seo";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-use-information", title: "How we use your information" },
  { id: "legal-basis", title: "Our legal basis for processing" },
  { id: "health-information", title: "Health-related information" },
  { id: "data-sharing", title: "Sharing your information" },
  { id: "data-retention", title: "How long we keep information" },
  { id: "data-security", title: "How we protect your information" },
  { id: "childrens-privacy", title: "Children's privacy" },
  { id: "cookies", title: "Cookies" },
  { id: "your-rights", title: "Your rights" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
];

export default function Privacy() {
  return (
    <>
      <Seo {...seoDefaults.privacy} />
      <LegalLayout title="Privacy Policy" sections={sections}>
        <p className="text-sm leading-relaxed text-neutral-600">
          This is general draft website content and does not constitute legal advice. It should be reviewed by a
          qualified professional — with attention to Kenya's Data Protection Act, 2019, and any other applicable data
          protection law — before {business.name} relies on it as a binding policy.
        </p>

        <LegalSection id="introduction" title="1. Introduction">
          <p>
            {business.legalName} ("we", "us", "our") respects your privacy. This Privacy Policy explains what
            information we collect through this website, how we use it, who we may share it with, and the choices
            you have — including information submitted when you request an appointment or contact us.
          </p>
        </LegalSection>

        <LegalSection id="information-we-collect" title="2. Information we collect">
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
          <p>
            We may also collect basic technical information automatically when you browse this website (such as
            browser type and general usage patterns) for the limited purposes described in our{" "}
            <Link to="/cookie-policy" className="font-medium text-primary-700 underline underline-offset-2">
              Cookie Policy
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection id="how-we-use-information" title="3. How we use your information">
          <p>Information submitted through this website is used to:</p>
          <ul>
            <li>Respond to appointment requests and general enquiries</li>
            <li>Coordinate and confirm home-based care visits</li>
            <li>Communicate with you by phone, email, or WhatsApp about your request</li>
            <li>Maintain records necessary for the continuity and quality of care</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </LegalSection>

        <LegalSection id="legal-basis" title="4. Our legal basis for processing">
          <p>
            We process your personal information on the basis that it is necessary to respond to your request, to
            take steps toward providing you with care services at your request, and/or with your consent when you
            voluntarily submit information through our forms. Where health-related information is involved, we treat
            it with an appropriate heightened standard of confidentiality, consistent with the sensitivity of that
            information under Kenya's Data Protection Act, 2019.
          </p>
        </LegalSection>

        <LegalSection id="health-information" title="5. Health-related information">
          <p>
            As a home-based healthcare provider, any health-related information you share with our team — whether
            through this website or directly — is treated as confidential and is used only to plan and deliver the
            care services you request, and shared only with those directly involved in providing your care.
          </p>
        </LegalSection>

        <LegalSection id="data-sharing" title="6. Sharing your information">
          <p>We may share your information with:</p>
          <ul>
            <li>Members of our care team directly involved in delivering your requested service</li>
            <li>Third-party laboratories or pharmacies, where necessary to fulfil a specific service you request</li>
            <li>Regulatory or legal authorities, where required by law</li>
          </ul>
          <p>We do not share your information with third parties for their own marketing purposes.</p>
        </LegalSection>

        <LegalSection id="data-retention" title="7. How long we keep information">
          <p>
            We retain personal and health-related information only for as long as necessary to provide our services,
            maintain appropriate care records, and meet any legal or record-keeping obligations that apply to
            healthcare providers. This website does not yet connect to a live backend system for storing form
            submissions — once a backend is in place, this section will be updated with specific retention periods.
          </p>
        </LegalSection>

        <LegalSection id="data-security" title="8. How we protect your information">
          <p>
            We take reasonable steps to protect the personal information we hold from loss, misuse, unauthorized
            access, and disclosure. However, no method of electronic storage or transmission is completely secure,
            and we cannot guarantee absolute security.
          </p>
        </LegalSection>

        <LegalSection id="childrens-privacy" title="9. Children's privacy">
          <p>
            Our services may be requested on behalf of a child by a parent or guardian. We do not knowingly collect
            personal information directly from children through this website; requests involving a minor should be
            submitted by a parent, guardian, or authorized adult.
          </p>
        </LegalSection>

        <LegalSection id="cookies" title="10. Cookies">
          <p>
            This website may use cookies for basic functionality. See our{" "}
            <Link to="/cookie-policy" className="font-medium text-primary-700 underline underline-offset-2">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
        </LegalSection>

        <LegalSection id="your-rights" title="11. Your rights">
          <p>Subject to applicable law, you may:</p>
          <ul>
            <li>Ask us what personal information we hold about you</li>
            <li>Request that inaccurate information be corrected</li>
            <li>Request that your information be deleted, subject to any legal or record-keeping obligations that apply to healthcare providers</li>
            <li>Object to certain uses of your information, or withdraw consent where processing is based on consent</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the details below. We will respond within a reasonable
            timeframe.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="12. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page
            reflects the most recent revision. We encourage you to review this page periodically.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="13. Contact us">
          <p>
            For privacy-related questions or requests, please reach us via the{" "}
            <Link to="/contact" className="font-medium text-primary-700 underline underline-offset-2">
              Contact page
            </Link>
            , WhatsApp, or by email at{" "}
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
