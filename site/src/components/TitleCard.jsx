import { useEffect, useRef } from 'react'
import { motion, animate, useReducedMotion } from 'framer-motion'
import Balloons from './Balloons'

const spring = { type: 'spring', stiffness: 300, damping: 18 }

function Words({ text, delayBase = 0, ampRef }) {
  return text.split(' ').map((word, i) => (
    <motion.span
      key={i}
      className="title-card__word"
      initial={{ opacity: 0, y: 46, scale: 0.7, rotate: i % 2 ? 4 : -4 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ ...spring, delay: delayBase + i * 0.12 }}
    >
      {word === '&' ? <span className="amp" ref={ampRef}>&amp;</span> : word}
      {' '}
    </motion.span>
  ))
}

// Sample three parabolic hops into one keyframe path (squash on every landing)
function buildHops(startX, endX, baseY, hops = [64, 42, 26]) {
  const xs = [], ys = [], sy = [], sx = []
  const SAMPLES = 8
  const span = (endX - startX) / hops.length
  hops.forEach((h, i) => {
    const x0 = startX + span * i
    for (let s = i === 0 ? 0 : 1; s <= SAMPLES; s++) {
      const t = s / SAMPLES
      xs.push(x0 + span * t)
      ys.push(baseY - h * Math.sin(Math.PI * t))
      const landing = s === SAMPLES
      sy.push(landing ? 0.8 : t > 0.3 && t < 0.7 ? 1.08 : 1)
      sx.push(landing ? 1.18 : t > 0.3 && t < 0.7 ? 0.94 : 1)
    }
  })
  // recovery frame so the path ends unsquashed — no snap into the stomp
  xs.push(endX)
  ys.push(baseY)
  sy.push(1)
  sx.push(1)
  return { xs, ys, sy, sx }
}

export default function TitleCard() {
  const titleRef = useRef(null)
  const ampRef = useRef(null)
  const lampRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const timer = setTimeout(async () => {
      const h1 = titleRef.current
      const amp = ampRef.current
      const lamp = lampRef.current
      if (!h1 || !amp || !lamp) return

      // rect math: offsetLeft lies here because the transformed word-span
      // becomes the amp's offsetParent
      const h1Rect = h1.getBoundingClientRect()
      const aRect = amp.getBoundingClientRect()
      const ampX = aRect.left - h1Rect.left
      const ampY = aRect.top - h1Rect.top
      const ampW = aRect.width
      const ampH = aRect.height
      const lampH = ampH * 1.5
      const lampW = lampH * 0.86
      lamp.style.width = `${lampW}px`
      lamp.style.height = `${lampH}px`

      const endX = ampX + ampW / 2 - lampW / 2
      const baseY = ampY + ampH - lampH
      const startX = h1.offsetWidth + 80
      const { xs, ys, sy, sx } = buildHops(startX, endX, baseY)

      lamp.style.opacity = '1'
      // hop, hop, hop…
      await animate(lamp, { x: xs, y: ys, scaleY: sy, scaleX: sx }, { duration: 1.9, ease: 'linear' })
      // …STOMP. The ampersand did not survive — the lamp takes its place.
      animate(amp, { scaleY: [1, 0.1], scaleX: [1, 1.4], opacity: [1, 0] }, { duration: 0.18, ease: 'easeIn' })
      const sitY = baseY + ampH * 0.5
      await animate(
        lamp,
        { y: [baseY, sitY + 4, sitY], scaleY: [1, 0.78, 1], scaleX: [1, 1.2, 1] },
        { duration: 0.34, times: [0, 0.5, 1], ease: 'easeOut' }
      )
      // proud little idle bounce, forever
      animate(lamp, { y: [sitY, sitY - ampH * 0.08, sitY] }, { duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 })
    }, 2100)
    return () => clearTimeout(timer)
  }, [reduceMotion])

  return (
    <header className="title-card">
      <Balloons style={{ top: '1%', right: '4%', scale: 0.72 }} />

      <motion.p
        className="title-card__eyebrow"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        Jaws Studios presents
      </motion.p>

      <h1 className="title-card__title" ref={titleRef}>
        <Words text="Vasavi & Lijas" delayBase={0.35} ampRef={ampRef} />
        <div className="lamp" ref={lampRef} aria-hidden="true">
          <svg viewBox="0 0 60 70" width="100%" height="100%">
            <ellipse cx="14" cy="26" rx="13" ry="9" fill="#FFD166" opacity="0.35" />
            <path d="M28 14 L10 26 L26 34 Z" fill="#1E3D59" />
            <circle cx="17" cy="26" r="4.5" fill="#FFE9A3" />
            <path d="M27 22 L38 40" stroke="#1E3D59" strokeWidth="4" strokeLinecap="round" />
            <path d="M38 40 L32 56" stroke="#1E3D59" strokeWidth="4" strokeLinecap="round" />
            <circle cx="38" cy="40" r="3.4" fill="#1E3D59" />
            <ellipse cx="31" cy="62" rx="14" ry="6" fill="#1E3D59" />
          </svg>
        </div>
      </h1>

      <motion.p
        className="title-card__sub"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.7 }}
      >
        A short film about my favorite person. Runtime: forever.
      </motion.p>

      <motion.div
        className="title-card__chip"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 1.35 }}
      >
        ★★★★★ — her boyfriend, probably biased
      </motion.div>

      <motion.div
        className="title-card__cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.span
          style={{ display: 'inline-block' }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          scroll to begin ↓
        </motion.span>
      </motion.div>
    </header>
  )
}
