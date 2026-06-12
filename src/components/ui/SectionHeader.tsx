import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
  accent?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
  className,
  accent}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      {accent && (
        <span className="mb-2 block font-satisfy text-xl md:text-2xl text-blue-500 font-medium">
          {accent}
        </span>
      )}
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 font-jost">
          {badge}
        </span>
      )}
      <h2 className="font-jost text-3xl font-bold tracking-tight text-slate-900 sm:text-[36px] md:text-[40px] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-xl text-base text-slate-500 leading-relaxed font-sans",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
