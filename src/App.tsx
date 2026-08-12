import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { PageLoader } from "@/components/ui/PageLoader";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const About = lazy(() => import("@/pages/About"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
const Appointment = lazy(() => import("@/pages/Appointment"));
const Contact = lazy(() => import("@/pages/Contact"));
const Terms = lazy(() => import("@/pages/Terms"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Accessibility = lazy(() => import("@/pages/Accessibility"));
const Cookies = lazy(() => import("@/pages/Cookies"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <OrganizationJsonLd />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:slug" element={<ServiceDetail />} />
                <Route path="about" element={<About />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route path="appointment" element={<Appointment />} />
                <Route path="contact" element={<Contact />} />
                <Route path="terms-of-service" element={<Terms />} />
                <Route path="privacy-policy" element={<Privacy />} />
                <Route path="accessibility-statement" element={<Accessibility />} />
                <Route path="cookie-policy" element={<Cookies />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
