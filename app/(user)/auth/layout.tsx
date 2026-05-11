import { ShoppingBag } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative overflow-hidden bg-black px-5 py-10 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/screen.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 auth-glow-overlay" />

      <section className="relative z-10 flex min-h-screen items-center justify-center py-6">
        <div className="auth-glass-panel relative w-full max-w-105 rounded-[2.5rem] px-6 py-6 sm:px-8 sm:py-7">
          

          {children}
        </div>
      </section>

      <div className="pointer-events-none fixed bottom-0 left-0 z-10 h-1/4 w-full bg-linear-to-t from-white/10 to-transparent" />
    </main>
  );
}