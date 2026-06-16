import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "/images/general/New_Narma_Main.webp",
    topText: "Malaysia made simple",
    headline: (
      <>
        Malaysia <span className="text-blue-300 drop-shadow-md">Truly Asia</span>
      </>
    ),
    description: "Seamless travel across beautiful Malaysia. We provide reliable airport shuttles, private tours, car rentals, and homestays for a perfect experience.",
  },
  {
    id: 2,
    image: "/images/general/Narma_Main_2.webp",
    topText: "Explore further",
    headline: (
      <>
        Unforgettable <span className="text-blue-300 drop-shadow-md">Private Tours</span>
      </>
    ),
    description: "Discover the hidden gems and iconic landmarks of Malaysia with our expert chauffeurs and tailored itineraries.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative flex h-[100vh] min-h-[620px] items-center pb-20 overflow-hidden bg-slate-950"
      aria-label="Hero Slideshow"
    >
      {/* Background images with crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity ease-in-out",
            index === currentSlide 
              ? "opacity-100 z-10 duration-1000" 
              : "opacity-0 z-0 duration-[1500ms] delay-[500ms]"
          )}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
          {/* Optional dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Left: Copy with crossfade */}
          <div className="max-w-xl relative min-h-[250px] w-full flex items-center">
            {slides.map((slide, index) => (
              <div
                key={`content-${slide.id}`}
                className={cn(
                  "absolute inset-0 transition-all ease-in-out flex flex-col justify-center",
                  index === currentSlide 
                    ? "opacity-100 translate-y-0 z-10 duration-1000 delay-[200ms]" 
                    : "opacity-0 translate-y-4 -z-10 duration-500"
                )}
              >
                <span className="mb-4 block font-satisfy text-[38px] md:text-[50px] text-blue-300 font-medium leading-none drop-shadow-md">
                  {slide.topText}
                </span>
                <h1 className="font-jost text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-[66px]">
                  {slide.headline}
                </h1>
                <p className="mt-6 text-base md:text-lg leading-[1.8] text-slate-200 max-w-lg drop-shadow-sm">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side navigation dots */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
              index === currentSlide
                ? "bg-blue-400 border-blue-400 scale-125"
                : "bg-transparent border-white/70 hover:border-white hover:bg-white/30"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
}
