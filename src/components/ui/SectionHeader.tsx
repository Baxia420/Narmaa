import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-lg text-slate-600",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
