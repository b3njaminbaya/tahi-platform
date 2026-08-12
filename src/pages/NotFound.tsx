import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { seoDefaults } from "@/config/seo";

export default function NotFound() {
  return (
    <>
      <Seo {...seoDefaults.notFound} noindex />
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-serif text-7xl text-primary-200 sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">Page not found</h1>
        <p className="mt-4 max-w-md text-neutral-600">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className={buttonStyles({ variant: "primary", size: "lg" })}>
            <Home className="h-5 w-5" aria-hidden="true" />
            Back to Home
          </Link>
          <WhatsAppButton size="lg" label="Ask us on WhatsApp" />
        </div>
      </Container>
    </>
  );
}
