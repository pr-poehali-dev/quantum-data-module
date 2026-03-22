import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4"
    >
      <div
        className="w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,8,15,0.85)" : "rgba(8,8,15,0.4)",
          backdropFilter: "blur(20px)",
          border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V7C13 10.3 10.3 13.3 7 14C3.7 13.3 1 10.3 1 7V4L7 1Z" fill="white" />
            </svg>
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">NightCore</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {["Возможности", "Тарифы", "Скачать", "Поддержка"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 rounded-xl text-sm transition-colors duration-150"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm transition-colors" style={{ color: "var(--text-secondary)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Войти
          </a>
          <button
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)",
              boxShadow: "0 0 20px rgba(108,99,255,0.35)",
            }}
          >
            Попробовать бесплатно
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--text-secondary)", border: "1px solid rgba(255,255,255,0.06)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            {mobileOpen
              ? <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              : <><rect y="2" width="16" height="1.5" rx="1" /><rect y="7" width="16" height="1.5" rx="1" /><rect y="12" width="16" height="1.5" rx="1" /></>
            }
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-6 right-6 rounded-2xl p-4"
            style={{
              background: "rgba(12,12,20,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {["Возможности", "Тарифы", "Скачать", "Поддержка", "Войти"].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center px-4 py-3 rounded-xl text-sm transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {item}
              </a>
            ))}
            <button
              className="w-full mt-2 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)" }}
            >
              Попробовать бесплатно
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
