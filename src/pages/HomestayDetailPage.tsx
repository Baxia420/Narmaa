import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImageGalleryPlaceholder from "@/components/ui/ImageGalleryPlaceholder";
import SectionHeader from "@/components/ui/SectionHeader";
import HomestayCard from "@/components/cards/HomestayCard";
import { getHomestayBySlug, getRelatedHomestays } from "@/lib/data";
import bookingSvg from "@/assets/booking-ar21.svg";
import {
  MapPin,
  Users,
  BedDouble,
  Bath,
  CheckCircle2,
  AlertCircle,
  Navigation,
  ArrowLeft,
  } from "lucide-react";

export default function HomestayDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const homestay = slug ? getHomestayBySlug(slug) : undefined;

  useEffect(() => {
    if (!homestay) {
      navigate("/404", { replace: true });
    }
  }, [homestay, navigate]);

  if (!homestay) return null;

  const relatedHomestays = getRelatedHomestays(homestay.slug);

  const overviewItems = [
    { icon: MapPin, label: "Location", value: homestay.location },
    { icon: Users, label: "Guests", value: `Up to ${homestay.guests} guests` },
    {
      icon: BedDouble,
      label: "Bedrooms",
      value: `${homestay.bedrooms} bedroom${homestay.bedrooms > 1 ? "s" : ""}`},
    {
      icon: Bath,
      label: "Bathrooms",
      value: `${homestay.bathrooms} bathroom${homestay.bathrooms > 1 ? "s" : ""}`},
  ];

  return (
    <>
      <SEO
        title={`${homestay.name} - Homestay | Narmaa Transport`}
        description={
          homestay.description ||
          `Stay at ${homestay.name} in ${homestay.location}. Fits up to ${homestay.guests} guests with ${homestay.bedrooms} bedrooms.`
        }
        canonical={`/homestay/${homestay.slug}`}
      />

      <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-white">
        <Container>
          {/* Back link */}
          <Link
            to="/homestay"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Homestays
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Gallery */}
            <ImageGalleryPlaceholder
              images={homestay.gallery || [homestay.image]}
              alt={homestay.name}
            />

            {/* Details */}
            <div>
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                {homestay.name}
              </h1>
              <p className="mt-1 text-slate-500 flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {homestay.location}
              </p>

              {homestay.description && (
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {homestay.description}
                </p>
              )}

              {/* Price */}
              {homestay.priceFrom && (
                <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Starting from</p>
                  <p className="text-2xl font-bold text-slate-900">
                    RM {homestay.priceFrom}
                    <span className="text-base font-normal text-slate-500">
                      {" "}
                      / night
                    </span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Final price confirmed before booking
                  </p>
                </div>
              )}

              {/* Overview Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {overviewItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-3"
                  >
                    <item.icon className="h-5 w-5 text-blue-600 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="text-sm font-medium text-slate-900">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              {homestay.amenities.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Amenities
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {homestay.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-100"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Nearby */}
              {homestay.nearby && homestay.nearby.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-blue-600" />
                    Nearby Attractions
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {homestay.nearby.map((place) => (
                      <li
                        key={place}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <MapPin className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notes */}
              {homestay.notes && homestay.notes.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Important Notes
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {homestay.notes.map((note) => (
                      <li
                        key={note}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Booking CTA */}
              <div className="mt-8">
                <a
                  href={homestay.bookingUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#003580] hover:bg-[#002255] px-6 py-3.5 text-base font-bold text-white shadow-md shadow-[#003580]/30 transition-all hover:shadow-[#003580]/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#003580] focus:ring-offset-2"
                >
                  View on
                  <img src={bookingSvg} alt="Booking.com" className="h-5 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Homestays */}
      {relatedHomestays.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50">
          <Container>
            <SectionHeader
              title="More Homestays"
              subtitle="Explore other places to stay during your trip."
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedHomestays.map((related) => (
                <HomestayCard key={related.id} homestay={related} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
