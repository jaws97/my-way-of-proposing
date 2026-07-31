import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { FRAMES } from '../data'
import { Reveal } from './Scene'

const COUNT_WORDS = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen',
  'Nineteen', 'Twenty',
]
const countWord = (n) => COUNT_WORDS[n] || String(n)

const CELL_W = 76
const CELL_GAP = 10

function Sprockets() {
  return (
    <span className="projreel__holes" aria-hidden="true">
      <i /><i /><i /><i />
    </span>
  )
}

export default function FilmStrip() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const n = FRAMES.length

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))))
  })

  const reelX = useTransform(scrollYProgress, [0, 1], [0, -(n - 1) * (CELL_W + CELL_GAP)])

  const frame = FRAMES[active]

  return (
    <section className="scene projection-scene">
      <div className="projection__head">
        <Reveal>
          <div className="scene__slate">Scene 03 — the footage</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="scene__title">{countWord(n)} frames the editor refused to cut</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="scene__body">Every single one survived the final edit. The editor (me) was not objective.</p>
        </Reveal>
      </div>

      <div className="projection__track" ref={trackRef} style={{ height: `${n * 30 + 100}vh` }}>
        <div className="projection__stage">
          <div className="cinema-screen">
            <div className="cinema-screen__top">
              <span className="cinema-screen__label">Now screening</span>
              <span className="cinema-screen__count">
                frame {String(active + 1).padStart(2, '0')} / {n}
              </span>
            </div>
            <div className="cinema-screen__media">
              <AnimatePresence initial={false}>
                <motion.img
                  key={frame.src}
                  src={frame.src}
                  alt={frame.caption}
                  initial={{ opacity: 0, filter: 'brightness(2.2)' }}
                  animate={{ opacity: 1, filter: 'brightness(1)' }}
                  exit={{ opacity: 0, filter: 'brightness(0.55)' }}
                  transition={{ duration: 0.22 }}
                  draggable={false}
                />
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={active}
                className="cinema-screen__subtitle"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                “{frame.caption}”
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="projection__beam" aria-hidden="true">
            <svg viewBox="0 0 200 104" width="100%">
              {/* light cone up to the screen */}
              <polygon points="8,0 192,0 108,54 92,54" fill="#ffd166" opacity="0.26" />
              {/* lens, aimed at the screen */}
              <rect x="91" y="48" width="18" height="12" rx="4" fill="#1e3d59" />
              <circle cx="100" cy="50" r="7" fill="#1e3d59" />
              <circle cx="100" cy="50" r="3.2" fill="#ffd166" />
              {/* twin film reels */}
              <circle cx="70" cy="66" r="17" fill="#1e3d59" />
              <circle cx="70" cy="66" r="4" fill="#ffd166" />
              <circle cx="70" cy="56.5" r="3" fill="#fff3e2" opacity="0.9" />
              <circle cx="61.5" cy="71" r="3" fill="#fff3e2" opacity="0.9" />
              <circle cx="78.5" cy="71" r="3" fill="#fff3e2" opacity="0.9" />
              <circle cx="130" cy="66" r="17" fill="#1e3d59" />
              <circle cx="130" cy="66" r="4" fill="#ffd166" />
              <circle cx="130" cy="56.5" r="3" fill="#fff3e2" opacity="0.9" />
              <circle cx="121.5" cy="71" r="3" fill="#fff3e2" opacity="0.9" />
              <circle cx="138.5" cy="71" r="3" fill="#fff3e2" opacity="0.9" />
              {/* projector body + feet */}
              <rect x="80" y="60" width="40" height="34" rx="8" fill="#1e3d59" />
              <rect x="84" y="94" width="10" height="7" rx="3" fill="#1e3d59" />
              <rect x="106" y="94" width="10" height="7" rx="3" fill="#1e3d59" />
            </svg>
          </div>

          <div className="projreel">
            <motion.div className="projreel__strip" style={{ x: reelX }}>
              {FRAMES.map((f, i) => (
                <div key={f.src} className="projreel__cell">
                  <Sprockets />
                  <div className={`projreel__thumb ${i === active ? 'projreel__thumb--on' : ''}`}>
                    <img src={f.src} alt="" loading="lazy" decoding="async" draggable={false} />
                  </div>
                  <Sprockets />
                </div>
              ))}
            </motion.div>
          </div>

          <p className="projection__hint">keep scrolling — the reel rolls</p>
        </div>
      </div>
    </section>
  )
}
