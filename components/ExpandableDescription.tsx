"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ExpandableDescription({
  text,
  collapsedChars = 260,
  className = "",
}: {
  text: string;
  collapsedChars?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const showToggle = text.length > collapsedChars;
  const visible = open ? text : showToggle ? text.slice(0, collapsedChars) + "…" : text;

  return (
    <div className={className}>
      <AnimatePresence initial={false} mode="wait">
        <motion.p
          key={open ? "open" : "closed"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.28 }}
          className="text-white/90 text-base md:text-lg leading-8 break-words whitespace-pre-line"
        >
          {visible}
        </motion.p>
      </AnimatePresence>

      {showToggle && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-3 text-[#FFD700] underline underline-offset-4 hover:text-[#f5e6a0] transition"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
