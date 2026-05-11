import Link from "next/link";
import { Camera, MessageCircle, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-wide sm:text-3xl">
              IZORA
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Modern fashion designed for elegance, comfort, and timeless style.
            </p>

            <div className="mt-6 flex gap-3">
              {[Camera, MessageCircle, Globe].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 transition hover:bg-white hover:text-black"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em]">
              Shop
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li><Link className="transition hover:text-white" href="/products">New Arrivals</Link></li>
              <li><Link className="transition hover:text-white" href="/products">Best Sellers</Link></li>
              <li><Link className="transition hover:text-white" href="/products?category=women">Women</Link></li>
              <li><Link className="transition hover:text-white" href="/products?category=men">Men</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em]">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li><Link className="transition hover:text-white" href="/about">About Us</Link></li>
              <li><Link className="transition hover:text-white" href="/careers">Careers</Link></li>
              <li><Link className="transition hover:text-white" href="/contact">Contact</Link></li>
              <li><Link className="transition hover:text-white" href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em]">
              Stay Updated
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Subscribe to get special offers and updates.
            </p>

            <div className="mt-5 flex w-full max-w-md overflow-hidden rounded-full bg-zinc-800">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
              />

              <button className="flex shrink-0 items-center justify-center bg-white px-5 text-black transition hover:bg-zinc-200">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-500 sm:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} IZORA. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            <Link className="transition hover:text-white" href="/terms">Terms</Link>
            <Link className="transition hover:text-white" href="/privacy">Privacy</Link>
            <Link className="transition hover:text-white" href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}