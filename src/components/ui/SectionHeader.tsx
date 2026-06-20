import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
  accent?: string;
  accentFont?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
  className,
  accent,
  accentFont}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      {accent && (
        <span className={cn(
          "mb-2 block text-[40px] sm:text-[48px] md:text-[56px] text-blue-500 font-medium leading-tight",
          accentFont || "font-faustina"
        )}>
          {accent}
        </span>
      )}
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 font-jost">
          {badge}
        </span>
      )}
      <h2 className="font-jost text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[32px] leading-tight">
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
