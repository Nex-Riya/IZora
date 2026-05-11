"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Relaxed Cotton Shirt",
    price: "₹1,899",
    image: "/images/fc1.avif",
    discount: "90%",
  },
  {
    id: 2,
    name: "Classic Linen Fit",
    price: "₹2,499",
    image: "/images/fc2.avif", 
    discount: "45%",
  },
  {
    id: 3,
    name: "Premium White Shirt",
    price: "₹1,799",
    image: "/images/fc3.avif",
    discount: "50%",
  },
  {
    id: 4,
    name: "Summer Casual Wear",
    price: "₹20,00,199",
    image: "/images/fc4.webp",
    discount: "35%",
  },
  {
    id: 5,
    name: "Elegant Street Look",
    price: "₹2,999",
    image: "/images/fc5.jpg",
    discount: "30%",
  },
  {
    id: 6,
    name: "Elegant Street Look",
    price: "₹2,999",
    image: "/images/fc6.jpg",
    discount: "25%",
  },
  {
    id: 7,
    name: "Elegant Street Look",
    price: "₹2,999",
    image: "/images/fc7.jpg",
    discount: "40%",
  },
];

export default function FeaturedCollection() {
  const [active, setActive] = useState(2);

  const next = () => {
    setActive((prev) => (prev + 1) % collections.length);
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? collections.length - 1 : prev - 1
    );
  };

  const getStyle = (index: number) => {
    const diff = index - active;

    if (diff === 0)
      return "z-40 translate-x-0 scale-110 rotate-0 opacity-100";

    if (diff === -1 || diff === collections.length - 1)
      return "z-30 -translate-x-[140px] scale-95 rotate-[-2deg] opacity-80";

    if (diff === 1 || diff === -(collections.length - 1))
      return "z-30 translate-x-[140px] scale-95 rotate-[2deg] opacity-80";

    if (diff < 0)
      return "z-10 -translate-x-[260px] scale-90 rotate-[-4deg] opacity-60";

    return "z-10 translate-x-[260px] scale-90 rotate-[4deg] opacity-60";
  };

  return (
    <section className="w-full overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-350 px-5 sm:px-8 lg:px-12 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">
          Curated Picks
        </p>

        <h2 className="font-serif text-4xl font-semibold uppercase tracking-tight text-zinc-950 sm:text-5xl">
          Featured Collection
        </h2>

        {/* Cards */}
        <div className="relative mt-16 flex h-130 items-center justify-center">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              className={`absolute h-105 w-65 overflow-visible rounded-[2rem] bg-[#eef2f7] shadow-xl transition-all duration-500 ${getStyle(
                index
              )}`}
            >
              {/* Discount */}
              <div className="absolute left-5 top-5 z-10 rounded-full bg-white px-4 py-2 text-xs font-bold shadow">
                {item.discount}
              </div>

              {/* Image wrapper (important) */}
              <div className="h-full w-full overflow-hidden rounded-[2rem]">
                <div
                  className="h-full w-full bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Collection
                </p>

                <h3 className="mt-2 text-lg font-bold text-zinc-950">
                  {item.name}
                </h3>

                <p className="text-sm font-semibold text-zinc-700">
                  {item.price}
                </p>
              </div>

              {/* Center buttons */}
              {index === active && (
                <>
                  {/* LEFT BUTTON */}
                  <button
                    onClick={prev}
                    className="absolute -left-9 top-1/2 z-80 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-950 shadow-xl transition hover:scale-110 hover:bg-black hover:text-white"
                  >
                    <ChevronLeft size={28} />
                  </button>

                  <button
                    onClick={next}
                    className="absolute -right-9 top-1/2 z-80 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-950 shadow-xl transition hover:scale-110 hover:bg-black hover:text-white"
                  >
                    <ChevronRight size={28} />
                  </button>

                  <button className="absolute -bottom-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-black text-white shadow-xl hover:scale-110 transition">
                    <ShoppingBag size={20} />
                  </button>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}