import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEO } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import TourCard from "@/components/cards/TourCard";
import ImageGalleryLightbox from "@/components/ui/ImageGalleryLightbox";
import { getTourBySlug, getRelatedTours } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import {
  Clock,
  MapPin,
  Star,
  Tag,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Users,
  Calendar,
  Compass,
  Coffee,
  Anchor,
  Car,
  ChevronRight} from "lucide-react";

// Feature Icon Mapping
const featureIconMap: Record<string, any> = {
  "Private Chauffeur": Car,
  "Guided City Tour": Compass,
  "Lunch Included": Coffee,
  "River Cruise": Anchor};

export default function TourDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const tour = slug ? getTourBySlug(slug) : undefined;

  // Sticky booking card state
  const [tourDate, setTourDate] = useState("");
  const [guestCount, setGuestCount] = useState("2");

  useEffect(() => {
    if (!tour) {
      navigate("/404", { replace: true });
    }
  }, [tour, navigate]);

  if (!tour) return null;

  const relatedTours = getRelatedTours(tour.slug);
  const galleryImages = tour.gallery && tour.gallery.length > 0 ? tour.gallery : [tour.image];

  // Dynamic WhatsApp Link generation including booking date & guests
  const getDynamicWhatsAppLink = () => {
    return generateWhatsAppLink({
      serviceType: "Private Tour",
      itemName: tour.name,
      pageSource: `Tour Detail - ${tour.name}`,
      travelDate: tourDate || undefined,
      pickupLocation: `Group size: ${guestCount} guests`});
  };

  return (
    <>
      <SEO
        title={`${tour.name} - Private Tour | Narmaa Transport`}
        description={
          tour.description ||
          `${tour.name} - ${tour.duration}. Private chauffeur tour with pickup included from KL.`
        }
        canonical={`/tours/${tour.slug}`}
      />

      <section className="pt-24 pb-16 md:pt-28 md:pb-24 bg-white">
        <Container>
          {/* Breadcrumb / Back Link */}
          <Link
            to="/tours"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Tours
          </Link>

          {/* Premium Image Gallery Grid */}
          <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-slate-100">
            {(() => {
              const images = galleryImages;
              if (images.length === 0) return null;
              
              const ImageOverlay = () => <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />;
              
              const ViewAllBtn = () => (
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/70 hover:bg-black/80 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-3 py-2 md:px-5 md:py-2.5 rounded-lg shadow-lg flex items-center gap-2 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  <span className="hidden sm:inline">View all photos</span>
                  <span className="sm:hidden">All</span>
                </div>
              );

              if (images.length === 1) {
                return (
                  <div className="w-full h-full relative cursor-pointer group overflow-hidden" onClick={() => { setGalleryIndex(0); setIsGalleryOpen(true); }}>
                    <img src={images[0]} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <ImageOverlay />
                  </div>
                );
              }

              if (images.length === 2) {
                return (
                  <div className="flex w-full h-full gap-2 md:gap-3">
                    {[0, 1].map(i => (
                      <div key={i} className="w-1/2 h-full relative cursor-pointer group overflow-hidden" onClick={() => { setGalleryIndex(i); setIsGalleryOpen(true); }}>
                        <img src={images[i]} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <ImageOverlay />
                      </div>
                    ))}
                  </div>
                );
              }

              if (images.length === 3 || images.length === 4) {
                return (
                  <div className="flex w-full h-full gap-2 md:gap-3">
                    <div className="w-1/2 h-full relative cursor-pointer group overflow-hidden" onClick={() => { setGalleryIndex(0); setIsGalleryOpen(true); }}>
                      <img src={images[0]} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <ImageOverlay />
                    </div>
                    <div className="w-1/2 h-full flex flex-col gap-2 md:gap-3">
                      {[1, 2].map(i => (
                        <div key={i} className="h-1/2 relative cursor-pointer group overflow-hidden" onClick={() => { setGalleryIndex(i); setIsGalleryOpen(true); }}>
                          <img src={images[i]} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <ImageOverlay />
                          {i === 2 && <ViewAllBtn />}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div className="flex w-full h-full gap-2 md:gap-3">
                  <div className="w-1/2 h-full relative cursor-pointer group overflow-hidden" onClick={() => { setGalleryIndex(0); setIsGalleryOpen(true); }}>
                    <img src={images[0]} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <ImageOverlay />
                  </div>
                  <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-2 md:gap-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="relative cursor-pointer group overflow-hidden" onClick={() => { setGalleryIndex(i); setIsGalleryOpen(true); }}>
                        <img src={images[i]} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <ImageOverlay />
                        {i === 4 && <ViewAllBtn />}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
          
          <ImageGalleryLightbox
            images={galleryImages}
            isOpen={isGalleryOpen}
            initialIndex={galleryIndex}
            onClose={() => setIsGalleryOpen(false)}
          />

          {/* Gallery Metadata row */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex flex-wrap items-center gap-3">
              {tour.pickupIncluded && (
                <span className="inline-flex items-center rounded-full bg-green-50 px-3.5 py-1 text-xs font-semibold text-green-700 border border-green-200">
                  Pickup Included
                </span>
              )}
            </div>
            <div className="text-slate-500 text-sm font-medium">
              * Fully customizable private itineraries
            </div>
          </div>

          {/* Header titles */}
          <div className="mt-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {tour.name}
            </h1>
            
            {/* Location, Duration, Group info row */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm md:text-base text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="h-5 w-5 text-blue-600" />
                {tour.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-5 w-5 text-blue-600" />
                {tour.location || "Malaysia"}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-5 w-5 text-blue-600" />
                {tour.groupType || "Private Group"}
              </span>
            </div>
          </div>

          {/* Main Grid: Info columns vs Sidebar booking card */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column (8 cols): Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Description */}
              {tour.description && (
                <div className="prose prose-slate max-w-none">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Tour Description</h2>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    {tour.description}
                  </p>
                </div>
              )}

              {/* Feature Cards Row */}
              {tour.features && tour.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Tour Features</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {tour.features.map((feat) => {
                      const IconComponent = featureIconMap[feat] || Star;
                      return (
                        <div
                          key={feat}
                          className="flex flex-col items-center justify-center text-center p-5 rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-3">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-semibold text-slate-800 leading-snug">
                            {feat}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Itinerary Section */}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <div className="bg-slate-50/50 rounded-3xl border border-slate-200 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-slate-950 mb-6">Suggested Itinerary</h2>
                  <div className="border-l-2 border-blue-100 pl-6 space-y-8 relative ml-3">
                    {tour.itinerary.map((step, index) => (
                      <div key={index} className="relative">
                        <span className="absolute -left-[35px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold ring-4 ring-white">
                          {index + 1}
                        </span>
                        <h4 className="text-base font-bold text-slate-900">{step}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Flexible scheduling</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suitable For Tags */}
              {tour.suitableFor.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Tag className="h-5 w-5 text-blue-600" />
                    Suitable For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tour.suitableFor.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 border border-blue-100 px-4 py-1 text-sm font-semibold text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Notes */}
              {tour.notes && tour.notes.length > 0 && (
                <div className="border-t border-slate-200 pt-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    Important Notes
                  </h3>
                  <ul className="space-y-3">
                    {tour.notes.map((note) => (
                      <li key={note} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column (4 cols): Sticky Booking Sidebar Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="text-slate-500 text-sm font-medium mb-1">Starting from</div>
              {tour.priceFrom && (
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-3xl font-extrabold text-slate-950">RM {tour.priceFrom}</span>
                  <span className="text-sm text-slate-500 font-semibold">/ vehicle</span>
                </div>
              )}

              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="tour-date" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                    Date of Tour
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="tour-date"
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tour-guests" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    id="tour-guests"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5">5 Passengers</option>
                    <option value="6">6 Passengers</option>
                    <option value="7">7 Passengers</option>
                    <option value="8">8 Passengers</option>
                    <option value="9">9 Passengers</option>
                    <option value="10+">10+ Passengers</option>
                  </select>
                </div>
              </div>

              {/* Green WhatsApp CTA */}
              <Button
                as="anchor"
                href={getDynamicWhatsAppLink()}
                external
                variant="whatsapp"
                size="lg"
                className="w-full justify-center shadow-md font-bold"
                iconLeft={<img src="/images/general/whatsapp-logo.svg" className="h-6 w-6 shrink-0" alt="" />}
              >
                Plan This Tour on WhatsApp
              </Button>

              {/* Reassurance notes */}
              <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-500 leading-normal font-medium">
                <div className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <span>Instant Booking Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-slate-400 shrink-0" />
                  <span>Free Consultation & Itinerary Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-slate-400 shrink-0" />
                  <span>Final pricing confirmed before payment</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Journeys (Explore More Journeys) */}
      {relatedTours.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-150">
          <Container>
            <SectionHeader
              title="Explore More Journeys"
              subtitle="Discover other exciting day trips and tour packages across Peninsular Malaysia."
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedTours.map((related) => (
                <TourCard key={related.id} tour={related} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
