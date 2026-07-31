import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { QUIZ } from '../data'
import Scene, { Reveal } from './Scene'

function Question({ item, index }) {
  const [picked, setPicked] = useState(null)

  return (
    <motion.div
      className="quiz__card"
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
    >
      <div className="quiz__num">Q{index + 1}</div>
      <p className="quiz__question">{item.q}</p>
      <div className="quiz__options">
        {item.options.map((opt, i) => (
          <motion.button
            key={i}
            className={`quiz__option ${picked === i ? 'quiz__option--picked' : ''}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 16 }}
            onClick={() => {
              setPicked(i)
              if (navigator.vibrate) { try { navigator.vibrate(12) } catch {} }
            }}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {picked !== null && (
          <motion.p
            key={picked}
            className="quiz__response"
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {item.options[picked].response}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Quiz() {
  return (
    <Scene slate="Scene 02 — a few questions" title="Some questions for you, Vasavi">
      <Reveal delay={0.12}>
        <p className="scene__body">Tap an answer. Every option gets you a reply from me — there are no wrong ones. (Well. Almost.)</p>
      </Reveal>
      <div className="quiz">
        {QUIZ.map((item, i) => (
          <Question key={i} item={item} index={i} />
        ))}
      </div>
    </Scene>
  )
}
