import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Variant & size maps ─────────────────────────────────────────────────── */

const variantStyles = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500 shadow-sm",
  secondary:
    "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 focus-visible:ring-brand-500",
  outline:
    "border border-slate-300 text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-400",
  ghost:
    "text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-400",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark focus-visible:ring-whatsapp shadow-sm",
} as const;

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3 text-base gap-2.5",
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

/* ─── Shared props ────────────────────────────────────────────────────────── */

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children: ReactNode;
};

/* ─── Discriminated union for render target ────────────────────────────────── */

type AsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    as?: "button";
    href?: never;
    to?: never;
    external?: never;
  };

type AsLink = SharedProps &
  Omit<LinkProps, keyof SharedProps | "to"> & {
    as: "link";
    to: string;
    href?: never;
    external?: never;
  };

type AsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    as: "anchor";
    href: string;
    to?: never;
    external?: boolean;
  };

export type ButtonProps = AsButton | AsLink | AsAnchor;

/* ─── Component ───────────────────────────────────────────────────────────── */

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      loading = false,
      iconLeft,
      iconRight,
      className,
      children,
      ...rest
    } = props;

    const baseClasses = cn(
      "inline-flex items-center justify-center font-jost font-semibold rounded-lg transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      "select-none whitespace-nowrap",
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    const content = (
      <>
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          iconLeft && <span aria-hidden="true">{iconLeft}</span>
        )}
        <span>{children}</span>
        {!loading && iconRight && <span aria-hidden="true">{iconRight}</span>}
      </>
    );

    /* ── Render as react-router Link ──────────────────────────────────────── */
    if (props.as === "link") {
      const { as: _as, to, variant: _v, size: _s, loading: _l, iconLeft: _il, iconRight: _ir, ...linkRest } = props;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={baseClasses}
          {...linkRest}
        >
          {content}
        </Link>
      );
    }

    /* ── Render as <a> ────────────────────────────────────────────────────── */
    if (props.as === "anchor") {
      const { as: _as, href, external, variant: _v, size: _s, loading: _l, iconLeft: _il, iconRight: _ir, ...anchorRest } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    /* ── Default: render as <button> ──────────────────────────────────────── */
    const { as: _as, variant: _v, size: _s, loading: _l, iconLeft: _il, iconRight: _ir, ...btnRest } = props;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        disabled={loading || (btnRest as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
        aria-busy={loading || undefined}
        {...btnRest}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
