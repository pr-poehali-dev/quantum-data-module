import { motion } from "framer-motion"
import { useState } from "react"

const servers = [
  { flag: "🇩🇪", country: "Германия", city: "Франкфурт", ping: 12, speed: 450, load: 34, active: true },
  { flag: "🇺🇸", country: "США", city: "Нью-Йорк", ping: 45, speed: 380, load: 58, active: false },
  { flag: "🇳🇱", country: "Нидерланды", city: "Амстердам", ping: 18, speed: 420, load: 41, active: false },
  { flag: "🇯🇵", country: "Япония", city: "Токио", ping: 89, speed: 290, load: 22, active: false },
  { flag: "🇸🇬", country: "Сингапур", city: "Сингапур", ping: 102, speed: 310, load: 45, active: false },
]

function PingBar({ value, max = 120 }: { value: number; max?: number }) {
  const pct = Math.min(value / max, 1)
  const color = value < 30 ? "var(--green)" : value < 70 ? "var(--cyan)" : "rgba(255,180,0,0.8)"
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div className="h-full rounded-full transition-all" style={{ width: `${(1 - pct) * 100}%`, background: color }} />
      </div>
      <span className="text-xs font-mono-code" style={{ color, minWidth: "32px" }}>{value}ms</span>
    </div>
  )
}

export function AISection() {
  const [selected, setSelected] = useState(0)

  return (
    <section className="relative py-32 px-6" style={{ background: "var(--bg)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 rounded-full" style={{ background: "var(--cyan)" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                Серверная сеть
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              50+ серверов.
              <br />
              <span className="text-gradient-accent">Один клик.</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Глобальная инфраструктура с автовыбором оптимального сервера. NightCore всегда найдёт самое быстрое и безопасное соединение.
            </p>

            <div className="space-y-2 mb-8">
              {[
                { icon: "⚡", text: "Автовыбор оптимального сервера" },
                { icon: "🔄", text: "Балансировка нагрузки в реальном времени" },
                { icon: "🛡️", text: "Мгновенное переключение при сбое" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <button
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)",
                boxShadow: "0 0 25px rgba(108,99,255,0.35)",
              }}
            >
              Выбрать сервер
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="text-sm font-medium text-white">Серверы</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
                  <span className="text-xs" style={{ color: "var(--green)" }}>Все онлайн</span>
                </div>
              </div>

              <div className="p-2">
                {servers.map((server, i) => (
                  <motion.button
                    key={server.country}
                    whileHover={{ x: 2 }}
                    onClick={() => setSelected(i)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-150"
                    style={{
                      background: selected === i ? "rgba(108,99,255,0.12)" : "transparent",
                      border: selected === i ? "1px solid rgba(108,99,255,0.2)" : "1px solid transparent",
                    }}
                  >
                    <span className="text-xl shrink-0">{server.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">{server.country}</span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>{server.city}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>↑ {server.speed}M</span>
                        <div className="h-3 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>Нагрузка {server.load}%</span>
                      </div>
                    </div>
                    <PingBar value={server.ping} />
                    {selected === i && (
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="px-5 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <button
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)" }}
                >
                  Подключиться к {servers[selected].city}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
