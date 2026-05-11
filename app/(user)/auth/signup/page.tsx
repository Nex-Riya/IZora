"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff, Check, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [emailError, setEmailError] = useState("");

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmailError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/");
      } else {
        if (data.error === "User already exists") {
          setEmailError("Email already exists");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="mt-3 text-3xl font-light uppercase tracking-[0.22em] text-white sm:text-5xl">
          Sign Up
        </h2>

        <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-white/50">
          Create your account.
        </p>
      </div>

      <form onSubmit={handleSignup} className="w-full space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <label className="px-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/55">
            Full Name
          </label>

          <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-[5px] transition-all duration-300 focus-within:border-white/35 focus-within:bg-white/[0.08]">
            <User size={18} className="mr-3 shrink-0 text-white/45" />

            <input
              type="text"
              placeholder="User Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="px-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/55">
            Email Address
          </label>

          <div className="flex items-center rounded-2xl border border-white/10 bg-white/4 px-4 py-3.5 backdrop-blur-[5px] transition-all duration-300 focus-within:border-white/35 focus-within:bg-white/[0.08]">
            <Mail size={18} className="mr-3 shrink-0 text-white/45" />

            <input
              type="email"
              placeholder="name@izora.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>
          {emailError &&(
            <p className="px-1 text-xs text-red-400">{emailError}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="px-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/55">
            Password
          </label>

          <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-[5px] transition-all duration-300 focus-within:border-white/35 focus-within:bg-white/[0.08]">
            <Lock size={18} className="mr-3 shrink-0 text-white/45" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 rounded-full p-1 text-white/45 transition hover:bg-white/10 hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <label className="group flex cursor-pointer items-start gap-3 pt-1 text-xs leading-5 text-white/50">
          <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-white/25 bg-white/5">
            <input
              type="checkbox"
              className="peer absolute inset-0 cursor-pointer opacity-0"
            />

            <Check
              size={12}
              className="scale-0 text-white transition peer-checked:scale-100"
            />
          </span>

          <span>
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-white underline underline-offset-4"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-white underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </span>
        </label>

        {/* Signup Button */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-black shadow-[0_20px_45px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
        >
          Create Account
          <ArrowRight
            size={17}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </form>

      <div className="my-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
          Or
        </span>

        <div className="h-px flex-1 bg-white/10" />
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-[5px] transition-all duration-300 hover:bg-white hover:text-black"
      >
        <span className="text-base font-black">G</span>
        Continue with Google
      </button>

      <p className="mt-5 text-center text-sm text-white/50">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-semibold text-white underline underline-offset-4 transition hover:text-white/70"
        >
          Login
        </Link>
      </p>
    </>
  );
}
