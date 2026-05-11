"use client";

import Link from "next/link";
import {
  Menu,
  Search,
  ShoppingBag,
  X,
  Sparkles,
  Heart,
  Package,
  Shirt,
  LogIn,
} from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import ProfileDropdown from "./profile/ProfileDropdown";

const navLinks = [
  { label: "New Arrivals", href: "/products?tag=new", icon: Sparkles },
  { label: "Women", href: "/products?sort=best" },
  { label: "Men", href: "/Men", icon: Shirt },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { data: session, status } = useSession();

  const userName = session?.user?.name || session?.user?.email || "User";

  // Future: replace this with backend cart count API
  const cartCount = 0;

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <nav className="border-b border-white/15 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-6">
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-wide text-white/90 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <Link
            href="/home"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-xl font-semibold uppercase tracking-[0.22em]"
          >
            IZORA
          </Link>

          <div className="flex items-center gap-4">
            {status !== "authenticated" && (
              <Link
                href="/auth/login"
                className="hidden text-[11px] font-bold uppercase tracking-wide lg:inline"
              >
                Login
              </Link>
            )}

            <button aria-label="Search">
              <Search size={18} />
            </button>

            <Link href="/cart" className="relative" aria-label="Cart">
              <ShoppingBag size={19} />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-black">
                {cartCount}
              </span>
            </Link>

            <ProfileDropdown
              isLoggedIn={status === "authenticated"}
              userName={userName}
            />
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md lg:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default"
            aria-label="Close menu"
          />

          <aside className="relative h-full w-[88%] max-w-md overflow-y-auto bg-[#f8f3ec] p-3 text-zinc-950 shadow-2xl">
            <div className="mb-6 rounded-3xl bg-zinc-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <Link
                  href="/home"
                  onClick={() => setOpen(false)}
                  className="font-serif text-2xl font-semibold uppercase tracking-[0.25em]"
                >
                  IZORA
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/60">
                {status === "authenticated"
                  ? `Welcome Back, ${userName}`
                  : "Luxury fashion store"}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  href="/wishlist"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wide"
                >
                  <Heart size={16} />
                  Wishlist
                </Link>

                <Link
                  href="/orders"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wide"
                >
                  <Package size={16} />
                  Orders
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              {navLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-2xl bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-800 group-hover:bg-zinc-950 group-hover:text-white">
                        {Icon ? <Icon size={18} /> : null}
                      </span>

                      <span className="text-sm font-bold uppercase tracking-wide">
                        {item.label}
                      </span>
                    </span>

                    <span className="text-lg text-zinc-400">→</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {status !== "authenticated" ? (
                <Link
                  href="/auth/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white"
                >
                  <LogIn size={16} />
                  Login
                </Link>
              ) : (
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white"
                >
                  Profile
                </Link>
              )}

              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wide"
              >
                <ShoppingBag size={16} />
                Cart {cartCount > 0 ? `(${cartCount})` : ""}
              </Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}