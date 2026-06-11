import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsAppButton from "@/components/layout/FloatingWhatsAppButton";

// Lazy loaded pages
const HomePage = lazy(() => import("@/pages/HomePage"));
const AirportShuttlePage = lazy(() => import("@/pages/AirportShuttlePage"));
const CarRentalPage = lazy(() => import("@/pages/CarRentalPage"));
const CarDetailPage = lazy(() => import("@/pages/CarDetailPage"));
const HomestayPage = lazy(() => import("@/pages/HomestayPage"));
const HomestayDetailPage = lazy(() => import("@/pages/HomestayDetailPage"));
const ToursPage = lazy(() => import("@/pages/ToursPage"));
const TourDetailPage = lazy(() => import("@/pages/TourDetailPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center bg-white">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-brand-600" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout Wrapper Component
function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

// Router configuration
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "airport-shuttle",
        element: <AirportShuttlePage />,
      },
      {
        path: "car-rental",
        element: <CarRentalPage />,
      },
      {
        path: "car-rental/:slug",
        element: <CarDetailPage />,
      },
      {
        path: "homestay",
        element: <HomestayPage />,
      },
      {
        path: "homestay/:slug",
        element: <HomestayDetailPage />,
      },
      {
        path: "tours",
        element: <ToursPage />,
      },
      {
        path: "tours/:slug",
        element: <TourDetailPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);
