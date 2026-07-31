import { motion } from 'framer-motion'
import { REELS } from '../data'
import Scene, { Reveal } from './Scene'

export default function NowShowing() {
  return (
    <Scene slate="Intermission" title="Live footage, no retakes">
      <Reveal delay={0.1}>
        <p className="scene__body">Straight from the cutting-room floor. Sound off, volume of feelings up.</p>
      </Reveal>
      <div className="reels">
        {REELS.map((reel, i) => (
          <motion.div
            key={reel.src}
            className="reel"
            initial={{ opacity: 0, y: 40, rotate: i ? 1.5 : -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20, delay: i * 0.1 }}
          >
            <video src={reel.src} muted loop playsInline autoPlay preload="metadata" />
            <div className="reel__label">{reel.label}</div>
          </motion.div>
        ))}
      </div>
    </Scene>
  )
}
