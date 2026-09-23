import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { Check } from "../icons/Icons";
import { cn } from "../../utils/cn";

type Toast = { id: number; message: string };

const ToastContext = createContext<(message: string) => void>(() => {});

export function useToast() {
  return useContext(ToastContext);
}

/** Provider notifikasi toast kecil (dipakai untuk copy contact, dsb). */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const show = useCallback((message: string) => {
    const id = ++idRef.current;
    setToasts((prev) => [...prev.slice(-2), { id, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2400);
  }, []);

  const value = useMemo(() => show, [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed inset-x-0 bottom-5 z-[80] flex flex-col items-center gap-2 px-4 sm:bottom-8"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "glass flex items-center gap-2.5 rounded-full px-4 py-2.5 text-[0.8rem] font-medium text-zinc-100 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.9)]",
              "animate-[rise_0.4s_cubic-bezier(0.22,1,0.36,1)_both]",
            )}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-400/15 text-accent-300">
              <Check className="h-3.5 w-3.5" />
            </span>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
