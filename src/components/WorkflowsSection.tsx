import { motion } from "framer-motion"

const useCases = [
  {
    icon: "🎬",
    title: "Стриминг без границ",
    description: "Netflix, Hulu, BBC iPlayer — смотрите любой контент из любой точки мира.",
    tag: "Развлечения",
    accentColor: "var(--accent)",
  },
  {
    icon: "💼",
    title: "Безопасный удалённый доступ",
    description: "Подключайтесь к корпоративным сетям из любого места с шифрованием корпоративного уровня.",
    tag: "Бизнес",
    accentColor: "var(--cyan)",
  },
  {
    icon: "☕",
    title: "Публичный Wi-Fi",
    description: "Кафе, аэропорты, отели — защита от перехвата данных в открытых сетях.",
    tag: "В дороге",
    accentColor: "var(--green)",
  },
  {
    icon: "🎮",
    title: "Геймерский VPN",
    description: "Сниженный пинг, защита от DDoS-атак, доступ к ранним релизам из других регионов.",
    tag: "Игры",
    accentColor: "var(--accent-bright)",
  },
  {
    icon: "📰",
    title: "Обход цензуры",
    description: "Свободный доступ к информации в любой стране без ограничений и блокировок.",
    tag: "Свобода",
    accentColor: "var(--cyan)",
  },
  {
    icon: "👨‍💻",
    title: "Для разработчиков",
    description: "API, кастомные конфигурации WireGuard, выделенные IP для DevOps-задач.",
    tag: "DevOps",
    accentColor: "var(--green)",
  },
]

export function WorkflowsSection() {
  return (
    <section className="relative py-32 px-6" style={{ background: "var(--bg)" }}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 40% at 20% 60%, rgba(0,212,255,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 rounded-full" style={{ background: "var(--cyan)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              Сценарии использования
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-semibold text-white"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Защита везде,{" "}
            <span className="text-gradient-accent">всегда</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group rounded-2xl p-6 transition-all duration-300 cursor-pointer"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.accentColor}30`
                e.currentTarget.style.background = "var(--bg-elevated)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"
                e.currentTarget.style.background = "var(--bg-card)"
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: `${item.accentColor}12`,
                    color: item.accentColor,
                    border: `1px solid ${item.accentColor}25`,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs transition-all duration-200 opacity-0 group-hover:opacity-100" style={{ color: item.accentColor }}>
                <span>Подробнее</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
