// app/[locale]/contact/page.tsx

export const metadata = {
  title: "Contact • ZARINÉ",
  description: "Get in touch with ZARINÉ — The Golden Pantry of Persia.",
};

export default function ContactPage() {
  return (
    <main className="text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_10%,#412018_0%,#140d0b_65%,#0b0807_100%)]" />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          aria-hidden
        >
          <div className="h-full w-full bg-[radial-gradient(50%_35%_at_50%_0%,rgba(212,175,55,.25),transparent)]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-[#D4AF37] drop-shadow-[0_6px_30px_rgba(212,175,55,.25)]">
            Let’s Stay Connected
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
            At <span className="font-semibold text-[#FFD700]">ZARINÉ</span>, we
            believe in the beauty of{" "}
            <em>real connections</em> — like the farmers who handpick our
            saffron at dawn, or the artisans who wrap each tin with care and
            pride.
          </p>
          <p className="mt-4 text-white/80 leading-relaxed">
            Our roots lie in the{" "}
            <span className="text-[#FFD700]">golden plains of Khorasan</span>,
            where Persian saffron has been treasured for centuries as a symbol
            of purity, patience, and light. Every thread, every petal, every
            drop of rosewater we share carries the essence of that heritage —
            connecting hearts across continents, from{" "}
            <span className="text-[#FFD700]">Persia to Italy</span> and beyond.
          </p>
          <p className="mt-4 text-white/80 leading-relaxed">
            Whether you’re a gourmet enthusiast, a boutique searching for
            something rare, or simply someone who appreciates authenticity — we’d
            love to hear from you. Tell us your story, your experience, or your
            idea. Let’s grow this golden journey together.
          </p>
        </div>
      </section>

      {/* ===== CONTACT CARDS ===== */}
      <section className="relative bg-gradient-to-b from-[#140d0b] to-[#0e0a08] border-t border-[#d4af37]/15">
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* --- Location --- */}
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#d4af37]/30 transition">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/15">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="text-[#D4AF37]"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-semibold">Our Home</h3>
            </div>
            <p className="mt-3 text-white/75">Torino, Italy</p>
            <p className="mt-1 text-sm text-white/60">
              Distribution across Europe. Persian products, Italian care.
            </p>
          </article>

          {/* --- Email --- */}
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#d4af37]/30 transition">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/15">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="text-[#D4AF37]"
                >
                  <path
                    fill="currentColor"
                    d="M20 8v8H4V8l8 5l8-5ZM4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="mt-3">
              <a
                href="mailto:info@zarine.com"
                className="text-[#FFD700] hover:underline"
              >
                info@zarine.com
              </a>
            </p>
            <p className="mt-1 text-sm text-white/60">
              Wholesale, gifting, collaborations, or special sourcing — write to
              us.
            </p>
          </article>

          {/* --- Phone / WhatsApp --- */}
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#d4af37]/30 transition">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/15">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="text-[#D4AF37]"
                >
                  <path
                    fill="currentColor"
                    d="M20 15.5c-1.2 0-2.4-.2-3.4-.7c-.3-.1-.7 0-.9.2l-1.9 1.9c-2.8-1.4-5.2-3.8-6.6-6.6l1.9-1.9c.2-.2.3-.6.2-.9c-.5-1-.7-2.2-.7-3.4c0-.5-.4-1-1-1H4c-.6 0-1 .5-1 1C3 13.4 10.6 21 20 21c.6 0 1-.4 1-1v-2.5c0-.6-.5-1-1-1"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-semibold">Phone / WhatsApp</h3>
            </div>
            <p className="mt-3">
              <a
                href="tel:+393342896512"
                className="text-[#FFD700] hover:underline"
              >
                +39 334 2896512
              </a>
            </p>
            <p className="mt-1 text-sm text-white/60">
              Quick questions? Message us and we’ll get back promptly.
            </p>
          </article>
        </div>
      </section>

      {/* ===== CLOSING NOTE ===== */}
      <section className="bg-[#0e0a08]">
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/5 p-6 md:p-8">
            <p className="text-white/85 leading-relaxed">
              <span className="font-semibold text-[#FFD700]">ZARINÉ</span> means{" "}
              “golden.” From hand-picked saffron threads to rosewater from
              Kashan and artisan tins, every piece we offer carries a little
              light — crafted in tradition, shared with love.
            </p>
            <p className="mt-4 text-sm text-white/60">
              ZARINÉ — The Golden Pantry of Persia.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
