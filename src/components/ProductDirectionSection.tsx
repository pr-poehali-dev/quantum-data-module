import { motion } from "framer-motion"
import { useState } from "react"

const plans = [
  {
    name: "Free",
    price: "0",
    period: "навсегда",
    description: "Для знакомства с NightCore",
    features: ["3 страны", "10 ГБ трафика", "1 устройство", "Базовая поддержка"],
    missing: ["Kill Switch", "Split Tunneling", "50+ серверов"],
    accent: "var(--text-muted)",
    popular: false,
  },
  {
    name: "Pro",
    price: "299",
    period: "₽ / месяц",
    description: "Полная защита для вас",
    features: ["50+ серверов", "Безлимит трафика", "5 устройств", "Kill Switch", "Split Tunneling", "24/7 поддержка"],
    missing: [],
    accent: "var(--accent)",
    popular: true,
  },
  {
    name: "Business",
    price: "999",
    period: "₽ / месяц",
    description: "Для команд и компаний",
    features: ["50+ серверов", "Безлимит", "20 устройств", "Все функции Pro", "Выделенный IP", "SLA 99.9%"],
    missing: [],
    accent: "var(--cyan)",
    popular: false,
  },
]

export function ProductDirectionSection() {
  const [hovered, setHovered] = useState<number | null>(1)

  return (
    <section className="relative py-32 px-6" style={{ background: "var(--bg)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(108,99,255,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-1 h-4 rounded-full" style={{ background: "var(--green)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              Тарифы
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-semibold text-white mb-4"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Прозрачные цены.
            <br />
            <span className="text-gradient-accent">Без скрытых условий.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Начните бесплатно — никакой кредитной карты. Перейдите на Pro когда будете готовы.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-2xl p-6 flex flex-col cursor-pointer transition-all duration-300"
              style={{
                background: plan.popular ? "rgba(108,99,255,0.08)" : "var(--bg-card)",
                border: plan.popular
                  ? "1px solid rgba(108,99,255,0.35)"
                  : hovered === i
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(255,255,255,0.05)",
                boxShadow: plan.popular ? "0 0 40px rgba(108,99,255,0.15), 0 20px 40px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.2)",
                transform: plan.popular ? "scale(1.02)" : "scale(1)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)" }}
                >
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-semibold text-lg mb-1">{plan.name}</h3>
                <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: plan.popular ? "white" : "var(--text-secondary)", letterSpacing: "-0.04em" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: `${plan.accent}20`, border: `1px solid ${plan.accent}40` }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke={plan.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ color: "var(--text-secondary)" }}>{f}</span>
                  </div>
                ))}
                {plan.missing.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm opacity-30">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <path d="M1 1l4 4M5 1L1 5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span style={{ color: "var(--text-muted)" }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={
                  plan.popular
                    ? {
                        background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)",
                        color: "white",
                        boxShadow: "0 0 25px rgba(108,99,255,0.4)",
                      }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        color: "var(--text-secondary)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {plan.name === "Free" ? "Начать бесплатно" : `Выбрать ${plan.name}`}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          30-дневная гарантия возврата денег · Отмена в любой момент · Без привязки карты для Free
        </motion.p>
      </div>
    </section>
  )
}
