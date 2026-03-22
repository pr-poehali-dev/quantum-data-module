const footerLinks = {
  "Продукт": ["Возможности", "Тарифы", "Скачать", "Changelog", "Документация", "Статус серверов"],
  "Защита": ["AES-256", "Kill Switch", "Split Tunneling", "No-logs политика", "DNS защита", "Аудит безопасности"],
  "Платформы": ["Windows", "macOS", "Linux", "iOS", "Android", "Electron App"],
  "Компания": ["О нас", "Блог", "Карьера", "Пресса", "Партнёрам", "Бренд"],
  "Поддержка": ["FAQ", "Контакты", "Telegram", "X (Twitter)", "Конфиденциальность", "Условия"],
}

export function Footer() {
  return (
    <footer className="relative px-6 pt-20 pb-10" style={{ background: "var(--bg)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4V7C13 10.3 10.3 13.3 7 14C3.7 13.3 1 10.3 1 7V4L7 1Z" fill="white" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">NightCore</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Интернет без границ и слежки. AES-256, No-logs, 50+ серверов.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-150"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2024 NightCore VPN. Все права защищены.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Все серверы работают нормально
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
