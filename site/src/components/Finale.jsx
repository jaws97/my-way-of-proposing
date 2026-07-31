import { motion } from 'framer-motion'
import { FINALE_LINES, CREDITS, US_FRAME } from '../data'
import { Reveal } from './Scene'

export default function Finale() {
  return (
    <section className="scene finale">
      <Reveal>
        <div className="scene__slate">Final scene</div>
      </Reveal>

      <div style={{ marginTop: 26 }}>
        {FINALE_LINES.map((line, i) => (
          <motion.p
            key={i}
            className={`finale__line ${i === 0 ? 'finale__line--first' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.figure
        className="lastframe"
        initial={{ opacity: 0, y: 50, rotate: -2, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ type: 'spring', stiffness: 130, damping: 19 }}
      >
        <div className="lastframe__num">THE LAST FRAME</div>
        <div className="lastframe__media">
          <img src={US_FRAME.src} alt={US_FRAME.caption} loading="lazy" decoding="async" />
        </div>
        <figcaption className="lastframe__caption">{US_FRAME.caption}</figcaption>
      </motion.figure>

      <div className="credits">
        {CREDITS.map(([role, name], i) => (
          <Reveal key={role} delay={i * 0.06}>
            <div className="credit">
              <div className="credit__role">{role}</div>
              <div className="credit__name">{name}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="end-card">
        <motion.div
          className="end-card__title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: 'spring', stiffness: 160, damping: 16 }}
        >
          The End
        </motion.div>
        <Reveal delay={0.25}>
          <p className="end-card__note">…of the website. Not of us.</p>
        </Reveal>
      </div>
    </section>
  )
}
