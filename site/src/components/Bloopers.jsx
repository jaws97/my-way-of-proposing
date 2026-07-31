import { motion } from 'framer-motion'
import { BLOOPERS } from '../data'
import Scene from './Scene'

export default function Bloopers() {
  return (
    <Scene slate="Scene 05 — bonus features" title="Bloopers & deleted scenes">
      <div className="bloopers">
        {BLOOPERS.map((text, i) => (
          <motion.div
            key={i}
            className="blooper"
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22, delay: (i % 2) * 0.08 }}
            whileHover={{ rotate: i % 2 ? 1.2 : -1.2, scale: 1.02 }}
          >
            <span className="blooper__num">{String(i + 1).padStart(2, '0')}</span>
            <p className="blooper__text">{text}</p>
          </motion.div>
        ))}
      </div>
    </Scene>
  )
}
