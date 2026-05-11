import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    id: 1,
    name: "Linen Summer Dress",
    price: "₹2,499",
    oldPrice: "₹3,299",
    image: "/images/pr1.avif",
    badge: "New",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: "₹3,799",
    oldPrice: "₹4,499",
    image: "/images/pr2.webp",
    badge: "Trending",
  },
  {
    id: 3,
    name: "Soft Cotton Top",
    price: "₹1,299",
    oldPrice: "₹1,899",
    image: "/images/pr3.webp",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Wide Leg Trousers",
    price: "₹2,199",
    oldPrice: "₹2,999",
    image: "/images/pr4.webp",
    badge: "New",
  },
];

export default function NewArrivals() {
  return (
    <section className="bg-[#f8f3ec] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">
              Fresh Styles
            </p>

            <h2 className="font-serif text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              New Arrivals
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base">
              Discover our latest fashion pieces designed for everyday elegance,
              comfort, and timeless style.
            </p>
          </div>

          <Link
            href="/products"
            className="w-fit border-b border-zinc-950 pb-1 text-xs font-bold uppercase tracking-[0.25em] text-zinc-950"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}