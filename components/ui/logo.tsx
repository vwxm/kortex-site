import { cn } from "@/lib/utils";

/** Wordmark placeholder da Kortex (trocável por logo real depois). */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-display font-semibold tracking-[0.16em] text-stone", className)}>
      <span
        aria-hidden
        className="inline-block h-2.5 w-2.5 rotate-45 rounded-[2px] bg-accent shadow-glow"
      />
      <span className="uppercase">
        Kortex<span className="text-accent-hi">.</span>
      </span>
    </span>
  );
}
