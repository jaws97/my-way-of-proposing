import { motion } from 'framer-motion'
import Balloons from './Balloons'

const spring = { type: 'spring', stiffness: 300, damping: 18 }

function Words({ text, delayBase = 0 }) {
  return text.split(' ').map((word, i) => (
    <motion.span
      key={i}
      className="title-card__word"
      initial={{ opacity: 0, y: 46, scale: 0.7, rotate: i % 2 ? 4 : -4 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ ...spring, delay: delayBase + i * 0.12 }}
    >
      {word === '&' ? <span className="amp">&amp;</span> : word}
      {' '}
    </motion.span>
  ))
}

export default function TitleCard() {
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

      <h1 className="title-card__title">
        <Words text="Vasavi & Lijas" delayBase={0.35} />
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
