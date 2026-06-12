import { cn } from "@/lib/utils";

type ImageGalleryPlaceholderProps = {
  images: string[];
  alt: string;
  className?: string;
};

export default function ImageGalleryPlaceholder({
  images,
  alt,
  className}: ImageGalleryPlaceholderProps) {
  if (images.length === 0) {
    return (
      <div
        className={cn(
          "flex aspect-video items-center justify-center rounded-xl bg-slate-100 text-slate-400",
          className,
        )}
      >
        No images available
      </div>
    );
  }

  const [mainImage, ...thumbnails] = images;

  return (
    <div className={cn("space-y-3", className)}>
      {/* Main image — full width */}
      <div className="aspect-video overflow-hidden rounded-xl bg-slate-100">
        <img
          src={mainImage}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Thumbnails row */}
      {thumbnails.length > 0 && (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
          {thumbnails.map((src, index) => (
            <div
              key={src}
              className="aspect-[4/3] overflow-hidden rounded-lg bg-slate-100"
            >
              <img
                src={src}
                alt={`${alt} - view ${index + 2}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
