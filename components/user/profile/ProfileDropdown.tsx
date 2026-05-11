"use client";

import { useState } from "react";
import {
  User,
  Heart,
  ShoppingBag,
  LogIn,
  LogOut,
  ChevronDown,
} from "lucide-react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Profile Icon */}
      <button className="flex items-center gap-1 rounded-full p-2 text-blue-50 transition cursor-pointer">
        <User size={21} />

        <ChevronDown
          size={14}
          className={`transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full z-50 w-60 pt-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl ">
            
            {/* Top */}
            <div className="border-b border-zinc-100 px-5 py-4">
              <p className="text-sm font-semibold text-zinc-950">
                Welcome Back
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Manage your account
              </p>
            </div>

            {/* Menu */}
            <div className="p-2">
              <button className="cursor-pointer flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-black">
                <User size={17} />
                User Profile
              </button>

              <button className="cursor-pointer flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-black">
                <Heart size={17} />
                Wishlist
              </button>

              <button className="cursor-pointer flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-black">
                <ShoppingBag size={17} />
                Orders
              </button>
            </div>

            <div className="border-t border-zinc-100 p-2">
              <button className="cursor-pointer flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-black">
                <LogIn size={17} />
                Login
              </button>

              <button className="cursor-pointer flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-500 transition hover:bg-red-50">
                <LogOut size={17} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}