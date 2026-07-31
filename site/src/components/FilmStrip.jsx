import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FRAMES } from '../data'
import { Reveal } from './Scene'

export default function FilmStrip() {
  const viewportRef = useRef(null)
  const stripRef = useRef(null)
  const [dragLimit, setDragLimit] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !stripRef.current) return
      setDragLimit(Math.max(0, stripRef.current.scrollWidth - viewportRef.current.offsetWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section className="scene strip-scene">
      <div className="strip-scene__head">
        <Reveal>
          <div className="scene__slate">Scene 03 — the footage</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="scene__title">Eighteen frames the editor refused to cut</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="scene__body">Every single one survived the final edit. The editor (me) was not objective.</p>
        </Reveal>
      </div>

      <div className="strip-viewport" ref={viewportRef}>
        <motion.div
          className="strip"
          ref={stripRef}
          drag="x"
          dragConstraints={{ left: -dragLimit, right: 0 }}
          dragTransition={{ power: 0.4, timeConstant: 220 }}
          whileTap={{ cursor: 'grabbing' }}
          style={{ cursor: 'grab' }}
        >
          {FRAMES.map((frame, i) => (
            <motion.figure
              key={frame.src}
              className="frame"
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 2.4 : -2.4 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.2 : -1.2 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: 'spring', stiffness: 160, damping: 22 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
            >
              <div className="frame__media">
                <img src={frame.src} alt={frame.caption} loading="lazy" decoding="async" draggable={false} />
              </div>
              <div className="frame__num">FRAME {String(i + 1).padStart(2, '0')}</div>
              <figcaption className="frame__caption">{frame.caption}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <Reveal>
        <p className="strip-hint">drag to scrub through the footage →</p>
      </Reveal>
    </section>
  )
}
