import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Buy Now Or Cry Later",
    desc: "These stocks won't last forever.",
    image: "/images/cry.jpg",
    href: "/products",
  },
  {
    id: 2,
    title: "Be Free. Be Beautiful.",
    desc: "Express your wild side with these shirts.",
    image: "/images/buynow.jpg",
    href: "/products",
  },
];

export default function PromoBanners() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {banners.map((banner) => (
          <Link
            key={banner.id}
            href={banner.href}
            className="group relative block h-105 overflow-hidden bg-zinc-200"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${banner.image})` }}
            />

            <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/30" />

            <div className="absolute bottom-10 left-8 z-10 text-white sm:left-12">
              <h3 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                {banner.title}
              </h3>

              <p className="mt-3 text-xs font-medium text-white/85">
                {banner.desc}
              </p>

              <span className="mt-7 inline-flex bg-white px-8 py-4 text-xs font-extrabold uppercase text-zinc-950 transition group-hover:bg-zinc-950 group-hover:text-white">
                Explore
              </span>
            </div>

            <div className="absolute -bottom-20 -right-8 hidden h-56 w-56 rounded-full bg-white/55 backdrop-blur-sm transition duration-500 group-hover:scale-110 md:block" />

            <ArrowUpRight
              size={82}
              strokeWidth={1.5}
              className="absolute bottom-5 right-12 hidden text-black transition duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 md:block"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}