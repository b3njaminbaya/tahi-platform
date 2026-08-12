import { Link } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { seoDefaults } from "@/config/seo";

export default function Cookies() {
  return (
    <>
      <Seo {...seoDefaults.cookies} />
      <LegalLayout title="Cookie Policy">
        <p className="text-sm leading-relaxed text-neutral-600">
          This is general draft website content and does not constitute legal advice.
        </p>

        <LegalSection title="What are cookies">
          <p>
            Cookies are small text files placed on your device when you visit a website. They are commonly used to
            make websites function correctly, remember preferences, and understand how a site is used.
          </p>
        </LegalSection>

        <LegalSection title="How this website uses cookies">
          <p>
            This website currently uses only cookies or local storage that may be strictly necessary for the site to
            function (for example, remembering that you've interacted with a notice). It does not currently use
            advertising or third-party tracking cookies.
          </p>
          <p>
            If analytics or marketing tools are added in the future, this page will be updated to describe what is
            used and how you can manage your preferences.
          </p>
        </LegalSection>

        <LegalSection title="Managing cookies">
          <p>
            Most web browsers allow you to control cookies through their settings, including blocking or deleting
            them. Restricting cookies may affect how parts of this website function.
          </p>
        </LegalSection>

        <LegalSection title="Contact us">
          <p>
            Questions about this Cookie Policy can be directed to us via the{" "}
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
