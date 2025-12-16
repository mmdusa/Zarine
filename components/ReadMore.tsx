"use client";

import { useMemo, useState } from "react";

type Props = {
  text: string;
  maxChars?: number;
  className?: string;
  moreLabel?: string;
  lessLabel?: string;
};

export default function ReadMore({
  text,
  maxChars = 320,
  className = "",
  moreLabel = "Read more",
  lessLabel = "Read less",
}: Props) {
  const [open, setOpen] = useState(false);

  const [head, tail] = useMemo(() => {
    if (!text) return ["", ""];
    if (text.length <= maxChars) return [text, ""];
    const slice = text.slice(0, maxChars);
    const cut = slice.lastIndexOf(" ");
    const head = slice.slice(0, cut > 0 ? cut : maxChars);
    const tail = text.slice(head.length);
    return [head, tail];
  }, [text, maxChars]);

  const hasTail = tail.length > 0;

  return (
    <p className={className}>
      {head}
      {!open && hasTail ? "…" : ""}
      {open && hasTail ? <span>{tail}</span> : null}{" "}
      {hasTail && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline text-[#FFD700] hover:underline underline-offset-4"
        >
          {open ? lessLabel : moreLabel}
        </button>
      )}
    </p>
  );
}
