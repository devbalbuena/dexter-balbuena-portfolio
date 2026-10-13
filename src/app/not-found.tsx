import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="workspace-card max-w-md rounded-2xl p-8 sm:p-10 shadow-sm space-y-5 bg-white border border-[#e8ded3]">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8c532b]">
          404 Error
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">
          Page Not Found
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          The requested route or case study doesn&apos;t exist yet or has been moved.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#8c532b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#734320] transition-colors"
          >
            <Home className="h-4 w-4" /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
