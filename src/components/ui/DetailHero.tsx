import { cn } from "@/lib/utils";

type DetailHeroProps = {
  images: string[];
  title: string;
  badges?: string[];
  className?: string;
};

export default function DetailHero({
  images,
  title,
  badges,
  className,
}: DetailHeroProps) {
  const mainImage = images[0];
  const thumbnails = images.slice(1, 5);

  return (
    <section className={cn("bg-slate-100", className)}>
      {/* Main image */}
      <div className="relative aspect-[16/9] max-h-[480px] w-full overflow-hidden sm:aspect-[21/9]">
        {mainImage ? (
          <img
            src={mainImage}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
            No image available
          </div>
        )}

        {/* Title overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {badges && badges.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Thumbnail gallery row */}
      {thumbnails.length > 0 && (
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-2 sm:grid-cols-4 sm:px-6 lg:px-8">
          {thumbnails.map((src, index) => (
            <div
              key={src}
              className="aspect-[4/3] overflow-hidden rounded-lg"
            >
              <img
                src={src}
                alt={`${title} - view ${index + 2}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
