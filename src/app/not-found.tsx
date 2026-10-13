import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="workspace-card max-w-md rounded-2xl p-8 sm:p-10 shadow-sm space-y-5">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8c532b] dark:text-[#d9a36f]">
          404 Error
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          The requested route or case study doesn&apos;t exist yet or has been moved.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#a86e3b] dark:bg-[#c28b58] px-5 py-2.5 text-sm font-semibold text-white dark:text-[#110f0d] shadow-sm hover:bg-[#935d2d] dark:hover:bg-[#d49b6a] transition-colors"
          >
            <Home className="h-4 w-4" /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
