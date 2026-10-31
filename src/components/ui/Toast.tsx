"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Check, Copy, AlertCircle, Info, X } from "lucide-react";

export type ToastVariant = "success" | "copied" | "error" | "info";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextType {
  toast: {
    show: (item: Omit<ToastItem, "id">) => void;
    success: (title: string, description?: string, duration?: number) => void;
    copied: (title: string, description?: string, duration?: number) => void;
    error: (title: string, description?: string, duration?: number) => void;
    info: (title: string, description?: string, duration?: number) => void;
  };
}

const ToastContext = React.createContext<ToastContextType | null>(null);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context.toast;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = React.useCallback(
    (item: Omit<ToastItem, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastItem = { ...item, id };
      setToasts((prev) => [...prev.slice(-3), newToast]); // Keep at most 4 toasts

      const timer = setTimeout(() => {
        removeToast(id);
      }, item.duration ?? 3400);

      return () => clearTimeout(timer);
    },
    [removeToast]
  );

  const toast = React.useMemo(
    () => ({
      show,
      success: (title: string, description?: string, duration?: number) =>
        show({ title, description, variant: "success", duration }),
      copied: (title: string, description?: string, duration?: number) =>
        show({ title, description, variant: "copied", duration }),
      error: (title: string, description?: string, duration?: number) =>
        show({ title, description, variant: "error", duration }),
      info: (title: string, description?: string, duration?: number) =>
        show({ title, description, variant: "info", duration }),
    }),
    [show]
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      {/* Floating Toast Viewport */}
      <div
        role="region"
        aria-label="Notifications"
        className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full"
      >
        <AnimatePresence mode="sync">
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout={!shouldReduceMotion}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 14, scale: 0.95 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, scale: 1 }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10, scale: 0.95 }
              }
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              role="status"
              aria-live="polite"
              className="pointer-events-auto flex items-start gap-3 rounded-2xl bg-stone-900/95 text-white p-3.5 sm:p-4 shadow-2xl backdrop-blur-md border border-stone-800"
            >
              {/* Icon */}
              <div className="shrink-0 mt-0.5">
                {t.variant === "copied" && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Copy className="h-3.5 w-3.5" />
                  </span>
                )}
                {t.variant === "success" && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                )}
                {t.variant === "error" && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    <AlertCircle className="h-3.5 w-3.5" />
                  </span>
                )}
                {t.variant === "info" && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#8c532b]/30 text-[#e6a877] border border-[#8c532b]/40">
                    <Info className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>

              {/* Text content */}
              <div className="min-w-0 flex-1 space-y-0.5">
                <p className="text-xs font-bold text-white leading-tight">
                  {t.title}
                </p>
                {t.description && (
                  <p className="text-[11px] font-mono text-stone-300 leading-normal break-all">
                    {t.description}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => removeToast(t.id)}
                aria-label="Dismiss notification"
                className="shrink-0 text-stone-400 hover:text-white p-1 rounded-md hover:bg-stone-800 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
