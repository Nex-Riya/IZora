"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MarqueeText() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.scrollWidth / 2;

    controls.current = animate(x, -width, {
      duration: 14,
      ease: "linear",
      repeat: Infinity,
    });

    return () => controls.current?.stop();
  }, []);

  const pause = () => {
    controls.current?.pause(); // ⏸️ pause on hover
  };

  const resume = () => {
    controls.current?.play(); // ▶️ resume on leave
  };

  return (
    <section
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="w-full overflow-hidden border-y border-zinc-200 bg-[#f8f3ec] py-7"
    >
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex w-max whitespace-nowrap text-5xl font-bold uppercase tracking-tight"
      >
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span>*</span>
            <span>Feel Authentic</span>
            <span>*</span>
            <span className="stroke-text">Feel Trendy</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}