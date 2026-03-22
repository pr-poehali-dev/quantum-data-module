import { motion } from "framer-motion"

const stats = [
  { value: "3M+", label: "Активных пользователей" },
  { value: "50+", label: "Серверов в 30 странах" },
  { value: "0", label: "Логов активности" },
  { value: "99.9%", label: "Uptime сервисов" },
]

const badges = [
  { text: "AES-256 шифрование", icon: "🔐" },
  { text: "No-logs политика", icon: "👁️‍🗨️" },
  { text: "Kill Switch", icon: "⚡" },
  { text: "WireGuard протокол", icon: "🛡️" },
  { text: "DNS leak защита", icon: "🔒" },
  { text: "Split Tunneling", icon: "🔀" },
]

export function LogoCloud() {
  return (
    <section className="relative py-24 px-6" style={{ background: "var(--bg)" }}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(108,99,255,0.3), transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20"
          style={{ background: "rgba(255,255,255,0.04)", borderRadius: "16px", overflow: "hidden" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-8 px-4"
              style={{ background: "var(--bg-card)" }}
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "var(--text-secondary)",
              }}
            >
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
