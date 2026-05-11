import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-155 overflow-hidden bg-zinc-950 text-white sm:min-h-170 lg:min-h-190"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat sm:bg-center lg:bg-position-[center_35%]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-black/55 via-black/25 to-black/60"
      />

      <div className="mx-auto flex min-h-155 max-w-7xl flex-col items-center justify-center px-5 pt-28 text-center sm:min-h-170 sm:px-8 sm:pt-32 lg:min-h-190 lg:px-12">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80 sm:mb-5 sm:text-[11px] sm:tracking-[0.5em]">
          Limited Sale
        </p>

        <h1
          id="hero-heading"
          className="max-w-[92vw] text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:max-w-5xl lg:text-8xl"
        >
          Spring / Summer 2026
        </h1>

        <p className="mt-5 max-w-sm text-sm leading-6 text-white/80 sm:max-w-xl sm:text-base sm:leading-7">
          Discover premium ready-to-wear fashion, curated styles, and seasonal
          essentials in one place.
        </p>

        <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="/products?category=tops"
            className="inline-flex h-12 items-center justify-center border border-white/70 px-8 text-xs font-bold uppercase tracking-wide text-white transition duration-300 hover:bg-white hover:text-zinc-950"
          >
            Shop Tops
          </Link>

          <Link
            href="/products?category=denim"
            className="inline-flex h-12 items-center justify-center bg-white px-8 text-xs font-bold uppercase tracking-wide text-zinc-950 transition duration-300 hover:bg-zinc-950 hover:text-white"
          >
            Shop Denim
          </Link>
        </div>
      </div>
    </section>
  );
}