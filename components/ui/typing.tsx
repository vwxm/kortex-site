"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function Typing({ phrases, className }: { phrases: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(phrases[0] ?? "");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const full = phrases[i % phrases.length];
    let delay = del ? 45 : 75;

    if (!del && text === full) {
      delay = 1500; // pausa no fim
      const t = setTimeout(() => setDel(true), delay);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((v) => (v + 1) % phrases.length);
      return;
    }

    const t = setTimeout(() => {
      setText(del ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, phrases, reduce]);

  return (
    <span className={className}>
      {reduce ? phrases[0] : text}
      {!reduce ? (
        <span className="ml-1 inline-block w-[0.6ch] animate-pulse text-neon" aria-hidden>
          |
        </span>
      ) : null}
    </span>
  );
}
