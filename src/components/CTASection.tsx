import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: "var(--bg)" }}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(108,99,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: "var(--green)" }} />
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Начните сегодня — это бесплатно</span>
          </div>

          <h2
            className="text-5xl md:text-6xl font-semibold text-white mb-6"
            style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            Скройся от{" "}
            <span className="text-gradient-accent">слежки</span>.
            <br />
            Прямо сейчас.
          </h2>

          <p className="text-xl mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Присоединяйтесь к 3 миллионам пользователей, которые уже защитили свою приватность с NightCore.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-8 py-4 rounded-2xl font-semibold text-white text-base transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)",
                boxShadow: "0 0 40px rgba(108,99,255,0.4), 0 8px 30px rgba(108,99,255,0.3)",
              }}
            >
              Скачать NightCore бесплатно
            </button>
            <button
              className="px-8 py-4 rounded-2xl font-medium text-base transition-all duration-200"
              style={{
                color: "var(--text-secondary)",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              Связаться с нами
            </button>
          </div>

          <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
            Без кредитной карты · 30-дневная гарантия возврата · Отмена в любой момент
          </p>
        </motion.div>
      </div>
    </section>
  )
}
