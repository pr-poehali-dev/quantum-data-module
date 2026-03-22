import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "./Navbar"
import { LogoCloud } from "./LogoCloud"
import { FeatureCardsSection } from "./FeatureCardsSection"
import { AISection } from "./AISection"
import { ProductDirectionSection } from "./ProductDirectionSection"
import { WorkflowsSection } from "./WorkflowsSection"
import { CTASection } from "./CTASection"
import { Footer } from "./Footer"

const NODE_COUNT = 28

function NetworkNode({ x, y, active, pulse }: { x: number; y: number; active?: boolean; pulse?: boolean }) {
  return (
    <g>
      {pulse && (
        <>
          <circle cx={x} cy={y} r="12" fill="none" stroke="rgba(108,99,255,0.15)" strokeWidth="1">
            <animate attributeName="r" from="6" to="20" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx={x} cy={y} r="8" fill="none" stroke="rgba(108,99,255,0.3)" strokeWidth="1">
            <animate attributeName="r" from="4" to="14" dur="2s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
        </>
      )}
      <circle
        cx={x} cy={y} r={active ? "4" : "2.5"}
        fill={active ? "#6c63ff" : "rgba(255,255,255,0.15)"}
        stroke={active ? "rgba(108,99,255,0.6)" : "rgba(255,255,255,0.08)"}
        strokeWidth="1"
      />
      {active && <circle cx={x} cy={y} r="2" fill="#8b7fff" />}
    </g>
  )
}

function WorldMapSVG() {
  const nodes = [
    { x: 140, y: 80, active: false },
    { x: 195, y: 95, active: true, pulse: true },
    { x: 250, y: 85, active: false },
    { x: 310, y: 90, active: true },
    { x: 360, y: 100, active: false },
    { x: 410, y: 95, active: true, pulse: true },
    { x: 460, y: 88, active: false },
    { x: 505, y: 95, active: true },
    { x: 548, y: 85, active: false },
    { x: 120, y: 140, active: false },
    { x: 170, y: 145, active: true },
    { x: 220, y: 135, active: false },
    { x: 270, y: 140, active: false },
    { x: 340, y: 130, active: true, pulse: true },
    { x: 395, y: 145, active: false },
    { x: 450, y: 135, active: true },
    { x: 510, y: 140, active: false },
    { x: 560, y: 135, active: true },
    { x: 150, y: 200, active: false },
    { x: 210, y: 195, active: true, pulse: true },
    { x: 280, y: 200, active: false },
    { x: 350, y: 195, active: true },
    { x: 420, y: 200, active: false },
    { x: 480, y: 195, active: true },
    { x: 190, y: 250, active: false },
    { x: 290, y: 245, active: true },
    { x: 390, y: 250, active: false },
    { x: 460, y: 245, active: false },
  ]

  const connections = [
    [1, 13], [1, 4], [4, 13], [13, 15], [4, 7], [7, 15], [7, 17],
    [11, 19], [11, 13], [19, 21], [21, 23], [15, 23], [17, 23],
    [19, 25], [21, 25], [21, 26], [23, 26],
  ]

  return (
    <svg viewBox="0 0 700 320" className="w-full h-full" style={{ overflow: "visible" }}>
      <defs>
        <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(108,99,255,0.08)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <ellipse cx="350" cy="160" rx="300" ry="140" fill="url(#mapGlow)" />

      {connections.map(([a, b], i) => {
        const na = nodes[a], nb = nodes[b]
        const isActive = na.active && nb.active
        return (
          <line
            key={i}
            x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
            stroke={isActive ? "rgba(108,99,255,0.4)" : "rgba(255,255,255,0.06)"}
            strokeWidth={isActive ? "1" : "0.5"}
          />
        )
      })}

      {connections.filter((_, i) => i % 3 === 0).map(([a, b], i) => {
        const na = nodes[a], nb = nodes[b]
        const len = Math.sqrt((nb.x - na.x) ** 2 + (nb.y - na.y) ** 2)
        return (
          <line
            key={`anim-${i}`}
            x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
            stroke="rgba(108,99,255,0.8)"
            strokeWidth="1"
            strokeDasharray={`${len} ${len}`}
            strokeDashoffset={len}
            filter="url(#glow)"
          >
            <animate
              attributeName="stroke-dashoffset"
              from={len} to="0"
              dur={`${2 + i * 0.7}s`}
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur={`${2 + i * 0.7}s`}
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            />
          </line>
        )
      })}

      {nodes.map((node, i) => (
        <NetworkNode key={i} {...node} />
      ))}
    </svg>
  )
}

function VpnAppMockup() {
  const [ping] = useState(12)

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #141426 100%)",
        border: "1px solid rgba(108,99,255,0.2)",
        boxShadow: "0 0 60px rgba(108,99,255,0.2), 0 40px 80px rgba(0,0,0,0.6)",
        width: "360px",
        minHeight: "480px",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--accent)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V7C13 10.3 10.3 13.3 7 14C3.7 13.3 1 10.3 1 7V4L7 1Z" fill="white" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>NightCore</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)", boxShadow: "0 0 6px var(--green)" }} />
            <span className="text-xs" style={{ color: "var(--green)" }}>Защищено</span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div
            className="relative w-28 h-28 rounded-full flex items-center justify-center cursor-pointer mb-4"
            style={{
              background: "radial-gradient(circle, rgba(108,99,255,0.25) 0%, rgba(108,99,255,0.05) 70%)",
              border: "1px solid rgba(108,99,255,0.4)",
              boxShadow: "0 0 40px rgba(108,99,255,0.3), inset 0 0 40px rgba(108,99,255,0.1)",
            }}
          >
            <div
              className="absolute inset-3 rounded-full"
              style={{
                border: "1px solid rgba(108,99,255,0.2)",
                animation: "orbit-spin 8s linear infinite",
              }}
            >
              <div
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ background: "var(--accent-bright)" }}
              />
            </div>
            <div
              className="absolute inset-6 rounded-full"
              style={{
                border: "1px solid rgba(0,212,255,0.15)",
                animation: "orbit-spin 5s linear infinite reverse",
              }}
            >
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--cyan)" }}
              />
            </div>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "var(--accent)", boxShadow: "0 0 20px rgba(108,99,255,0.6)" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L17 5V9C17 13.3 13.3 17.3 9 18C4.7 17.3 1 13.3 1 9V5L9 1Z" fill="white" />
              </svg>
            </div>
          </div>
          <p className="text-white font-medium text-sm mb-1">Подключено</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Ваш IP скрыт</p>
        </div>

        <div
          className="rounded-xl p-4 mb-4"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl">🇩🇪</div>
            <div className="flex-1">
              <div className="text-white text-sm font-medium">Германия — Франкфурт</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                WireGuard · AES-256
              </div>
            </div>
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16" style={{ color: "var(--text-muted)" }}>
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Пинг", value: `${ping}ms`, color: "var(--green)" },
            { label: "↓ Скорость", value: "450M", color: "var(--cyan)" },
            { label: "↑ Скорость", value: "210M", color: "var(--accent-bright)" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg p-3 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="text-base font-semibold" style={{ color: stat.color, fontFamily: "'JetBrains Mono', monospace" }}>
                {stat.value}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Hero3DStage() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <div ref={ref} style={{ background: "var(--bg)" }}>
        <Navbar />

        <section className="relative min-h-screen overflow-hidden flex flex-col">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(108,99,255,0.08) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 40% 40% at 30% 60%, rgba(0,212,255,0.04) 0%, transparent 60%)",
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
            }}
          />

          <motion.div
            style={{ y, opacity }}
            className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 px-6 flex-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{
                background: "rgba(108,99,255,0.1)",
                border: "1px solid rgba(108,99,255,0.25)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse-glow" style={{ background: "var(--green)" }} />
              <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                Новинка: NightCore 2.0 с поддержкой Electron
              </span>
              <span style={{ color: "var(--accent-bright)" }} className="text-xs">→</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              <span className="text-white">Интернет</span>
              {" "}
              <span className="text-gradient-accent">без границ</span>
              <br />
              <span className="text-gradient-white">и слежки</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-lg max-w-xl mb-10"
              style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
            >
              Военное шифрование AES-256, сеть из 50+ серверов в 30 странах
              и нулевое логирование. Один клик — полная защита.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-20"
            >
              <button
                className="px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)",
                  boxShadow: "0 0 30px rgba(108,99,255,0.4), 0 4px 20px rgba(108,99,255,0.3)",
                }}
              >
                Скачать бесплатно
              </button>
              <button
                className="px-7 py-3.5 rounded-xl font-medium transition-all duration-200 hover:border-white/20"
                style={{
                  color: "var(--text-secondary)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Смотреть демо →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-5xl"
            >
              <div className="relative flex items-center justify-center gap-8 flex-col lg:flex-row">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(108,99,255,0.06) 0%, transparent 70%)",
                  }}
                />

                <div className="relative flex-1 max-w-lg w-full">
                  <div
                    className="rounded-2xl overflow-hidden p-6"
                    style={{
                      background: "rgba(15,15,26,0.7)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                        Глобальная сеть серверов
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
                        <span className="text-xs" style={{ color: "var(--green)" }}>50+ онлайн</span>
                      </div>
                    </div>
                    <div style={{ height: "200px" }}>
                      <WorldMapSVG />
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--accent)" }} />
                        Активный сервер
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.15)" }} />
                        Доступный сервер
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative shrink-0 animate-float">
                  <VpnAppMockup />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }}
          />
        </section>

        <LogoCloud />
        <FeatureCardsSection />
        <AISection />
        <ProductDirectionSection />
        <WorkflowsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}
