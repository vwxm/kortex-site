import { cn } from "@/lib/utils";

/** Wordmark da Kortex — fino e espaçado, estilo editorial. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("font-display font-bold uppercase tracking-[0.34em] text-stone", className)}>
      Kortex
    </span>
  );
}
