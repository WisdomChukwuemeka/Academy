import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      
      {/* ── LEFT PANEL — Branding ── */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-14 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-rose-500" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px),
                              radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Floating blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-black/20 blur-3xl" />

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex flex-col leading-tight">
            <span className="text-3xl font-black text-white tracking-tight">
              Scip<span className="text-red-200">pra</span>
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-red-200 font-semibold mt-0.5">
              learn • create • build
            </span>
          </Link>
        </div>

        {/* Center copy */}
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              10,000+ learners already enrolled
            </span>
          </div>
          <h2 className="text-5xl font-black text-white leading-[1.1]">
            Welcome<br />
            <span className="text-red-200">back.</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-sm">
            Pick up right where you left off. Your courses, progress, and community are waiting.
          </p>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6">
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            "Scippra transformed my career. I went from zero to landing a frontend role in 6 months."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-200 flex items-center justify-center text-red-700 font-bold text-sm">
              A
            </div>
            <div>
              <p className="text-white text-sm font-bold">Amara O.</p>
              <p className="text-white/60 text-xs">Frontend Developer, Lagos</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL — Clerk Sign In ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white">
        {/* Mobile logo */}
        <div className="lg:hidden mb-10 text-center">
          <Link href="/" className="inline-flex flex-col items-center leading-tight">
            <span className="text-3xl font-black text-red-600 tracking-tight">
              Scip<span className="text-indigo-950">pra</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-0.5">
              learn • create • build
            </span>
          </Link>
        </div>

        {/* Clerk component */}
        <SignIn
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          afterSignInUrl="/"
          appearance={{
            layout: {
              socialButtonsPlacement: "top",
              socialButtonsVariant: "iconButton",
            },
            variables: {
              colorPrimary: "#dc2626",
              colorText: "#0f172a",
              colorTextSecondary: "#64748b",
              colorBackground: "#ffffff",
              colorInputBackground: "#f8fafc",
              colorInputText: "#0f172a",
              borderRadius: "0.75rem",
              fontFamily: "inherit",
              fontSize: "15px",
            },
            elements: {
              card: "shadow-none p-0 w-full",
              headerTitle:
                "text-2xl font-black text-slate-900 tracking-tight",
              headerSubtitle: "text-slate-500 text-sm",
              socialButtonsBlockButton:
                "border border-slate-200 rounded-xl hover:bg-slate-50 transition-all",
              dividerLine: "bg-slate-200",
              dividerText: "text-slate-400 text-xs",
              formFieldInput:
                "rounded-xl border-slate-200 bg-slate-50 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all",
              formFieldLabel: "text-slate-700 text-sm font-semibold",
              formButtonPrimary:
                "bg-red-600 hover:bg-red-700 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/30",
              footerActionLink:
                "text-red-600 hover:text-red-700 font-semibold",
              identityPreviewText: "text-slate-700",
              identityPreviewEditButton: "text-red-600",
            },
          }}
        />
      </div>
    </div>
  );
}