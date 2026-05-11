"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log(res);

      if (res?.ok) {
        router.push("/");
        router.refresh();
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
  }

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="w-full space-y-8"
      >
        {/* Email */}
        <div className="space-y-2">
          <label className="px-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
            Email Address
          </label>

          <div className="auth-input-glow flex items-center border-b border-white/20 pb-2 transition-all duration-300">
            <Mail size={19} className="mr-3 text-white/45" />

            <input
              type="email"
              placeholder="name@izora.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-none bg-transparent text-sm font-light text-white outline-none placeholder:text-white/30 focus:ring-0"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400">
              {error}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="px-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
            Password
          </label>

          <div className="auth-input-glow flex items-center border-b border-white/20 pb-2 transition-all duration-300">
            <Lock size={19} className="mr-3 text-white/45" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-none bg-transparent text-sm font-light text-white outline-none placeholder:text-white/30 focus:ring-0"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="rounded-full p-1 text-white/45 transition hover:bg-white/10 hover:text-white"
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>
        </div>

        {/* Helpers */}
        <div className="flex items-center justify-between gap-4">
          <label className="group flex cursor-pointer items-center gap-2">
            <span className="relative flex h-4 w-4 items-center justify-center rounded-sm border border-white/30 bg-transparent">
              <input
                type="checkbox"
                className="peer absolute h-full w-full cursor-pointer opacity-0"
              />

              <Check
                size={12}
                className="scale-0 text-white transition peer-checked:scale-100"
              />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 transition group-hover:text-white">
              Remember me
            </span>
          </label>

          <Link
            href="/auth/forgot-password"
            className="border-b border-transparent pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 transition hover:border-white hover:text-white"
          >
            Forgot?
          </Link>
        </div>

        {/* Buttons */}
        <div className="space-y-4 pt-4">
          <button
            type="submit"
            className="w-full rounded-full bg-white py-5 text-[11px] font-bold uppercase tracking-[0.28em] text-black shadow-[0_0_25px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
          >
            Login
          </button>

          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>

            <span className="relative bg-transparent px-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
              Or
            </span>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 py-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-white/10"
          >
            <span className="text-base">G</span>
            Continue with Google
          </button>
        </div>
      </form>

      <footer className="mt-12 text-center">
        <p className="text-sm text-white/50">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold text-white underline underline-offset-4 transition hover:text-white/70"
          >
            Sign Up
          </Link>
        </p>
      </footer>
    </>
  );
}