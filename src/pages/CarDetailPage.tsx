import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ImageGalleryPlaceholder from "@/components/ui/ImageGalleryPlaceholder";
import SectionHeader from "@/components/ui/SectionHeader";
import CarCard from "@/components/cards/CarCard";
import { getCarBySlug, getRelatedCars } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import {
  Users,
  Settings2,
  Fuel,
  Luggage,
  CheckCircle2,
  AlertCircle,
  Tag,
  ArrowLeft,
  } from "lucide-react";

export default function CarDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const car = slug ? getCarBySlug(slug) : undefined;

  useEffect(() => {
    if (!car) {
      navigate("/404", { replace: true });
    }
  }, [car, navigate]);

  if (!car) return null;

  const relatedCars = getRelatedCars(car.slug);
  const whatsappLink = generateWhatsAppLink({
    serviceType: "Car Rental",
    itemName: car.name,
    pageSource: `Car Detail - ${car.name}`});

  const specs = [
    { icon: Users, label: "Seats", value: `${car.seats} seats` },
    { icon: Settings2, label: "Transmission", value: car.transmission },
    { icon: Fuel, label: "Fuel", value: car.fuel },
    ...(car.luggage
      ? [{ icon: Luggage, label: "Luggage", value: car.luggage }]
      : []),
  ];

  return (
    <>
      <SEO
        title={`${car.name} — Car Rental | Narmaa Transport`}
        description={
          car.description ||
          `Rent a ${car.name} from Narmaa Transport. ${car.category} category, ${car.seats} seats, ${car.transmission} transmission.`
        }
        canonical={`/car-rental/${car.slug}`}
      />

      <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-white">
        <Container>
          {/* Back link */}
          <Link
            to="/car-rental"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Cars
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Gallery */}
            <ImageGalleryPlaceholder
              images={car.gallery || [car.image]}
              alt={car.name}
            />

            {/* Details */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  {car.category}
                </span>
                {car.popular && (
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    Popular
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                {car.name}
              </h1>

              {car.description && (
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {car.description}
                </p>
              )}

              {/* Price */}
              {car.priceFrom && (
                <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Starting from</p>
                  <p className="text-2xl font-bold text-slate-900">
                    RM {car.priceFrom}
                    <span className="text-base font-normal text-slate-500">
                      {" "}
                      / day
                    </span>
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Final price confirmed before booking
                  </p>
                </div>
              )}

              {/* Specs Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-3"
                  >
                    <spec.icon className="h-5 w-5 text-blue-600 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500">{spec.label}</p>
                      <p className="text-sm font-medium text-slate-900">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suitable For */}
              {car.suitableFor.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-blue-600" />
                    Suitable For
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {car.suitableFor.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Included */}
              {car.included && car.included.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    What's Included
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {car.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notes */}
              {car.notes && car.notes.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Important Notes
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {car.notes.map((note) => (
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

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <Button
                  as="anchor"
                  href={whatsappLink}
                  external
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto"
                  iconLeft={<img src="/images/general/whatsapp-logo.svg" className="h-6 w-6 shrink-0" alt="" />}
                >
                  Check Availability on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Cars */}
      {relatedCars.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50">
          <Container>
            <SectionHeader
              title="You Might Also Like"
              subtitle="Explore more vehicles from our fleet."
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedCars.map((relatedCar) => (
                <CarCard key={relatedCar.id} car={relatedCar} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
