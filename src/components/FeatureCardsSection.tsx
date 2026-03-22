import { motion } from "framer-motion"

const features = [
  {
    icon: "⚡",
    title: "Молниеносная скорость",
    description: "WireGuard протокол нового поколения. Пинг от 5ms, скорость до 1 Гбит/с без ограничений трафика.",
    accent: "var(--cyan)",
    accentDim: "rgba(0,212,255,0.08)",
    tag: "WireGuard",
    visual: (
      <div className="flex items-end gap-1.5 h-12">
        {[40, 65, 45, 80, 55, 90, 70, 100, 85, 95].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className="flex-1 rounded-sm"
            style={{
              background: i >= 7 ? "var(--cyan)" : "rgba(0,212,255,0.25)",
              boxShadow: i >= 7 ? "0 0 8px rgba(0,212,255,0.6)" : "none",
            }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: "🔐",
    title: "Военное шифрование",
    description: "AES-256-GCM шифрование, используемое правительствами и армиями. Ваши данные невозможно взломать.",
    accent: "var(--accent)",
    accentDim: "rgba(108,99,255,0.08)",
    tag: "AES-256",
    visual: (
      <div className="font-mono-code text-xs leading-relaxed" style={{ color: "var(--accent-bright)" }}>
        <div style={{ color: "var(--text-muted)" }}>// Encrypt packet</div>
        <div>
          <span style={{ color: "var(--accent)" }}>cipher</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>.</span>
          <span style={{ color: "var(--cyan)" }}>aes256gcm</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>(</span>
        </div>
        <div className="pl-4">
          <span style={{ color: "var(--green)" }}>key:</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}> [256bit]</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)" }}>)</div>
      </div>
    ),
  },
  {
    icon: "👁️",
    title: "Нулевое логирование",
    description: "Мы не храним никаких записей о вашей активности. Полная приватность подтверждена независимым аудитом.",
    accent: "var(--green)",
    accentDim: "rgba(0,255,136,0.06)",
    tag: "No-logs",
    visual: (
      <div className="space-y-2">
        {["IP адрес", "История сайтов", "Время сессии", "DNS запросы"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-xs">
            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(0,255,136,0.15)", border: "1px solid rgba(0,255,136,0.3)" }}>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                <path d="M1 3.5L2.8 5.5L6 1.5" stroke="var(--green)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ color: "var(--text-muted)" }}>Не хранится</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <span style={{ color: "var(--text-muted)", opacity: 0.6 }}>{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "🌍",
    title: "50+ серверов",
    description: "Серверы в 30 странах с автовыбором оптимальной точки. Обходите блокировки и получайте доступ к любому контенту.",
    accent: "var(--accent-bright)",
    accentDim: "rgba(139,127,255,0.08)",
    tag: "30 стран",
    visual: (
      <div className="flex flex-wrap gap-1.5">
        {["🇩🇪", "🇺🇸", "🇬🇧", "🇯🇵", "🇸🇬", "🇳🇱", "🇫🇷", "🇨🇭"].map((flag) => (
          <div
            key={flag}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {flag}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "⚙️",
    title: "Kill Switch",
    description: "Автоматически блокирует весь трафик при обрыве VPN-соединения. Ваш реальный IP никогда не будет раскрыт.",
    accent: "var(--cyan)",
    accentDim: "rgba(0,212,255,0.06)",
    tag: "Авто-защита",
    visual: (
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-6 rounded-full flex items-center px-1 transition-all" style={{ background: "var(--accent)", boxShadow: "0 0 15px rgba(108,99,255,0.5)" }}>
            <div className="w-4 h-4 rounded-full bg-white ml-auto" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.3)" }} />
          </div>
        </div>
        <div className="text-xs">
          <div style={{ color: "var(--text-primary)" }}>Kill Switch</div>
          <div style={{ color: "var(--green)" }}>Активен</div>
        </div>
      </div>
    ),
  },
  {
    icon: "🖥️",
    title: "Electron App",
    description: "Нативное приложение для Windows, macOS и Linux. Плюс iOS и Android — один аккаунт для всех устройств.",
    accent: "var(--green)",
    accentDim: "rgba(0,255,136,0.06)",
    tag: "Все платформы",
    visual: (
      <div className="flex items-center gap-2">
        {[
          { icon: "🪟", label: "Windows" },
          { icon: "🍎", label: "macOS" },
          { icon: "🐧", label: "Linux" },
          { icon: "📱", label: "Mobile" },
        ].map((p) => (
          <div key={p.label} className="flex flex-col items-center gap-1 flex-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {p.icon}
            </div>
            <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{p.label}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export function FeatureCardsSection() {
  return (
    <section className="relative py-32 px-6" style={{ background: "var(--bg)" }}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 rounded-full" style={{ background: "var(--accent)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              Возможности
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-semibold text-white max-w-lg"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Всё для вашей{" "}
            <span className="text-gradient-accent">приватности</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300"
              style={{
                background: feature.accentDim,
                border: `1px solid rgba(255,255,255,0.05)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${feature.accent}30`
                e.currentTarget.style.boxShadow = `0 0 30px ${feature.accentDim}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {feature.icon}
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: `${feature.accent}18`,
                    color: feature.accent,
                    border: `1px solid ${feature.accent}30`,
                  }}
                >
                  {feature.tag}
                </span>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {feature.description}
                </p>
              </div>

              <div className="mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                {feature.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
