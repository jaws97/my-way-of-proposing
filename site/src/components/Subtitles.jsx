import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SUBTITLES } from '../data'
import Scene, { Reveal } from './Scene'

export default function Subtitles() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SUBTITLES.length), 3800)
    return () => clearInterval(id)
  }, [])

  const current = SUBTITLES[index]

  return (
    <Scene slate="Scene 04 — original languages" title="Presented in Tamil and Telugu, with love in both">
      <Reveal delay={0.12}>
        <div className="cinema" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            >
              <div className="cinema__lang">{current.lang}</div>
              <div className="cinema__line">“{current.line}”</div>
              <div className="cinema__sub">{current.sub}</div>
            </motion.div>
          </AnimatePresence>
          <div className="cinema__dots">
            {SUBTITLES.map((s, i) => (
              <button
                key={i}
                className={`cinema__dot ${i === index ? 'cinema__dot--on' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Line ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Scene>
  )
}
