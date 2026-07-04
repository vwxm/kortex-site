import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-hi",
  outline: "border border-white/15 text-stone hover:border-accent-hi hover:text-white",
  ghost: "text-steel hover:text-white"
};

export type ButtonVariant = keyof typeof variants;

const base =
  "focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition";

export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function ButtonArrow() {
  return (
    <ArrowRight
      size={16}
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
