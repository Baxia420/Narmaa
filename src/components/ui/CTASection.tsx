import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

type CTASectionProps = {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  variant?: "whatsapp" | "link";
  className?: string;
};

export default function CTASection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  variant = "link",
  className}: CTASectionProps) {
  const isWhatsApp = variant === "whatsapp";
  const isExternal = ctaHref.startsWith("http");

  const buttonClasses = cn(
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700",
    isWhatsApp
      ? "bg-whatsapp text-white hover:bg-whatsapp-dark focus-visible:ring-whatsapp"
      : "bg-white text-brand-700 hover:bg-brand-50 focus-visible:ring-white",
  );

  const icon = isWhatsApp ? (
    <img src="/images/general/whatsapp-logo.svg" className="h-6 w-6 shrink-0" alt="" />
  ) : (
    <ArrowRight className="h-5 w-5" aria-hidden="true" />
  );

  return (
    <section
      className={cn(
        "bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 py-16 sm:py-20",
        className,
      )}
    >
      <Container className="text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            {subtitle}
          </p>
        )}
        <div className="mt-8">
          {isExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses}
            >
              {icon}
              {ctaText}
            </a>
          ) : (
            <Link to={ctaHref} className={buttonClasses}>
              {icon}
              {ctaText}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
