import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
};

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[320px] items-center justify-center overflow-hidden bg-brand-900 py-20 sm:min-h-[380px]",
        className,
      )}
    >
      {/* Background image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-900/70 to-brand-950/90"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
