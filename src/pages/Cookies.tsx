import { Link } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { seoDefaults } from "@/config/seo";
import { business } from "@/config/business";

const sections = [
  { id: "what-are-cookies", title: "What are cookies" },
  { id: "types-of-cookies", title: "Types of cookies we use" },
  { id: "how-we-use-cookies", title: "How this website uses cookies" },
  { id: "third-party-cookies", title: "Third-party cookies" },
  { id: "managing-cookies", title: "Managing cookies" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
];

export default function Cookies() {
  return (
    <>
      <Seo {...seoDefaults.cookies} />
      <LegalLayout title="Cookie Policy" sections={sections}>
        <p className="text-sm leading-relaxed text-neutral-600">
          This is general draft website content and does not constitute legal advice.
        </p>

        <LegalSection id="what-are-cookies" title="1. What are cookies">
          <p>
            Cookies are small text files placed on your device when you visit a website. Similar technologies include
            local storage and session storage, which browsers provide for websites to remember information between
            page loads. These are commonly used to make websites function correctly, remember preferences, and
            understand how a site is used.
          </p>
        </LegalSection>

        <LegalSection id="types-of-cookies" title="2. Types of cookies we use">
          <p>Cookies are generally grouped into the following categories:</p>
          <ul>
            <li>
              <strong>Strictly necessary</strong> — required for the website to function, such as remembering that
              you've dismissed a notice
            </li>
            <li>
              <strong>Functional</strong> — remember choices you've made to improve your experience
            </li>
            <li>
              <strong>Analytics</strong> — help us understand how visitors use the site, in aggregate
            </li>
            <li>
              <strong>Marketing/advertising</strong> — used to track visitors across websites for advertising
              purposes
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="how-we-use-cookies" title="3. How this website uses cookies">
          <p>
            This website currently uses only cookies or local storage that may be strictly necessary for the site to
            function. It does not currently use analytics, advertising, or third-party tracking cookies.
          </p>
          <p>
            If analytics or marketing tools are added in the future, this page will be updated to describe what is
            used, why, and how you can manage your preferences — including a cookie consent mechanism where required
            by law.
          </p>
        </LegalSection>

        <LegalSection id="third-party-cookies" title="4. Third-party cookies">
          <p>
            Some pages on this website link out to third-party services, such as WhatsApp and social media platforms.
            If you follow one of these links, that third-party site may set its own cookies in accordance with its
            own cookie and privacy policies, which are outside our control.
          </p>
        </LegalSection>

        <LegalSection id="managing-cookies" title="5. Managing cookies">
          <p>
            Most web browsers allow you to control cookies through their settings, including viewing, blocking, or
            deleting them. You can typically find these settings in your browser's "Privacy" or "Security" menu.
            Restricting cookies may affect how parts of this website function.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="6. Changes to this policy">
          <p>
            We may update this Cookie Policy from time to time, for example as new features are added to the
            website. The "Last updated" date at the top of this page reflects the most recent revision.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="7. Contact us">
          <p>
            Questions about this Cookie Policy can be directed to us via the{" "}
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
            )}
            .
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
