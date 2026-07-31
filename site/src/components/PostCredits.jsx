import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Scene'

const DODGE_LINES = [
  null,
  'The button saw that coming.',
  'It has excellent reflexes. Like you.',
  'Legal says “no” is not a valid input today.',
  'It’s trained in three languages. All of them say yes.',
  'The button is faster. Accept it.',
  'It’s not even trying hard yet.',
  'This is going in the bloopers.',
  'Okay, now it’s just showing off.',
]

export default function PostCredits() {
  const [dodges, setDodges] = useState(0)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [accepted, setAccepted] = useState(false)

  const gone = dodges >= 9

  const dodge = () => {
    if (accepted) return
    setDodges((d) => d + 1)
    setNoPos({
      x: (Math.random() - 0.5) * 190,
      y: (Math.random() - 0.5) * 130,
    })
    if (navigator.vibrate) { try { navigator.vibrate(16) } catch {} }
  }

  return (
    <section className="scene finale post-credits">
      <Reveal>
        <div className="scene__slate">Post-credits scene</div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="scene__title" style={{ color: 'var(--dusk-ink)' }}>
          Wait — one more thing
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="gfday">
          <AnimatePresence mode="wait">
            {!accepted ? (
              <motion.div
                key="ask"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              >
                <p className="gfday__eyebrow">Official notice · National Girlfriend Day</p>
                <p className="gfday__question">
                  The role of <strong>My Girlfriend</strong> is up for its annual renewal.
                  Do you accept another year?
                </p>

                <div className="gfday__buttons">
                  <motion.button
                    className="gfday__yes"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    onClick={() => setAccepted(true)}
                  >
                    Obviously, yes
                  </motion.button>

                  {!gone && (
                    <motion.button
                      className="gfday__no"
                      animate={{ x: noPos.x, y: noPos.y, scale: Math.max(0.55, 1 - dodges * 0.05) }}
                      transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                      onMouseEnter={dodge}
                      onPointerDown={(e) => { e.preventDefault(); dodge() }}
                    >
                      no
                    </motion.button>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {(dodges > 0 || gone) && (
                    <motion.p
                      key={gone ? 'gone' : dodges}
                      className="gfday__status"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {gone
                        ? 'The “no” button has resigned. Only one option remains.'
                        : DODGE_LINES[Math.min(dodges, DODGE_LINES.length - 1)]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="yay"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                className="gfday__accepted"
              >
                {['#FF6B4A', '#FFD166', '#2EC4B6', '#FF8FAB', '#6EC5E9'].map((c, i) => (
                  <motion.span
                    key={c}
                    className="gfday__heart"
                    style={{ background: c, left: `${14 + i * 17}%` }}
                    initial={{ y: 40, opacity: 0, scale: 0.4 }}
                    animate={{ y: -70 - i * 14, opacity: [0, 1, 0], scale: 1 }}
                    transition={{ duration: 1.8, delay: i * 0.12, repeat: Infinity, repeatDelay: 0.8 }}
                  />
                ))}
                <p className="gfday__eyebrow">Renewal confirmed</p>
                <p className="gfday__question">
                  Correct answer. Happy Girlfriend Day, Vasavi.
                  <br />
                  <strong>Contract term: forever. No exit clause.</strong>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  )
}
