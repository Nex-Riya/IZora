import Link from "next/link";
import { Heart, Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  image: string;
  badge: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-[2rem] bg-zinc-200">
        <Link href={`/products/${product.id}`}>
          <div
            className="aspect-3/4 bg-cover bg-center transition duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${product.image})` }}
          />
        </Link>

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-950">
          {product.badge}
        </span>

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-950 shadow-md transition hover:scale-110">
          <Heart size={18} />
        </button>

        <button className="absolute bottom-4 left-4 right-4 translate-y-4 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Add to Cart
        </button>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={13} fill="currentColor" />
          ))}
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-950 transition hover:text-zinc-600">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-bold text-zinc-950">
            {product.price}
          </span>

          <span className="text-sm text-zinc-400 line-through">
            {product.oldPrice}
          </span>
        </div>
      </div>
    </article>
  );
}