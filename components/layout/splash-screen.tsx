"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function SplashScreen() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem("kortex-splash")) return;
    if (reduce) {
      sessionStorage.setItem("kortex-splash", "1");
      return;
    }
    setShow(true);
    const t = window.setTimeout(() => {
      sessionStorage.setItem("kortex-splash", "1");
      setShow(false);
    }, 1900);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.34em" }}
            transition={{ duration: 1, ease: easeOut }}
            className="font-display text-2xl font-bold uppercase tracking-[0.34em] text-stone md:text-4xl"
          >
            Kortex
          </motion.span>
          <motion.div
            className="absolute bottom-16 h-px w-40 overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-stone"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
