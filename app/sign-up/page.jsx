import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* ── LEFT PANEL — Branding ── */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-14 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, #dc2626 1px, transparent 1px),
                              linear-gradient(-45deg, #dc2626 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-400 to-transparent" />
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl" />

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex flex-col leading-tight">
            <span className="text-3xl font-black text-white tracking-tight">
              Scip<span className="text-red-500">pra</span>
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold mt-0.5">
              learn • create • build
            </span>
          </Link>
        </div>

        {/* Center copy */}
        <div className="relative z-10 space-y-8">
          <h2 className="text-5xl font-black text-white leading-[1.1]">
            Start your<br />
            <span className="text-red-500">journey</span><br />
            today.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
            Join thousands of learners building in-demand tech skills with hands-on courses and expert mentors.
          </p>

          {/* Feature list */}
          <ul className="space-y-3">
            {[
              "Access 50+ expert-led courses",
              "Learn on-site or online, at your pace",
              "Get industry-recognized certificates",
              "Join a thriving tech community",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="w-5 h-5 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {[
            { value: "10k+", label: "Learners" },
            { value: "50+", label: "Courses" },
            { value: "95%", label: "Job-ready" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
            >
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="text-slate-400 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL — Clerk Sign Up ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white overflow-y-auto">
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
        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          afterSignUpUrl="/"
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
            },
          }}
        />
      </div>
    </div>
  );
}