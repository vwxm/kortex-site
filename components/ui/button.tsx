import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "border-b border-stone/40 text-stone hover:border-stone",
  ghost: "border-b border-white/20 text-white/55 hover:border-white/70 hover:text-white",
  dark: "border-b border-ink/40 text-ink hover:border-ink"
};

export type ButtonVariant = keyof typeof variants;

const base =
  "focus-ring group inline-flex items-center justify-center gap-2 pb-2 text-xs font-semibold uppercase tracking-[0.28em] transition";

export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function ButtonArrow() {
  return (
    <ArrowRight
      size={15}
      className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
    />
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className,
  external = false
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const content = (
    <>
      {children}
      {withArrow ? <ButtonArrow /> : null}
    </>
  );
  if (external) {
    return (
      <a href={href} className={buttonClass(variant, className)}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {content}
    </Link>
  );
}
