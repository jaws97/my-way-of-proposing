import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// The photo the little guy is carrying.
const KISS_PHOTO = '/pics/PXL_20241231_071902529.PORTRAIT_Original.jpg'

const HEART_EMOJI = ['❤️', '🧡', '💛', '💗', '❤️']

function ChibiGuy() {
  return (
    <svg viewBox="0 0 300 330" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="150" cy="316" rx="92" ry="12" fill="rgba(30,61,89,.14)" />
      {/* body */}
      <path d="M96 200 Q96 178 150 178 Q204 178 204 200 L208 282 Q209 300 188 300 L112 300 Q91 300 92 282 Z" fill="#ff6b4a" />
      <path d="M96 200 Q96 178 150 178 Q204 178 204 200 L205 226 Q150 240 95 226 Z" fill="#ff8266" />
      {/* arm reaching toward the photo */}
      <path d="M104 210 Q60 208 40 188" stroke="#ff6b4a" strokeWidth="26" strokeLinecap="round" fill="none" />
      <circle cx="38" cy="186" r="15" fill="#ffd9b3" />
      {/* resting arm */}
      <path d="M198 214 Q226 226 228 252" stroke="#ff6b4a" strokeWidth="26" strokeLinecap="round" fill="none" />
      <circle cx="229" cy="254" r="14" fill="#ffd9b3" />
      {/* legs */}
      <rect x="112" y="292" width="30" height="26" rx="12" fill="#e0522f" />
      <rect x="158" y="292" width="30" height="26" rx="12" fill="#e0522f" />
      <circle cx="150" cy="252" r="9" fill="#ffd166" />
      {/* head */}
      <circle cx="152" cy="112" r="82" fill="#ffd9b3" />
      {/* beanie: solid dome over the top of the head + folded brim */}
      <path d="M70 104 A 84 84 0 0 1 234 104 Q152 86 70 104 Z" fill="#26a396" />
      <path d="M68 104 Q152 84 236 104 L236 120 Q152 102 68 120 Z" fill="#2ec4b6" />
      <circle cx="152" cy="28" r="12" fill="#ffd166" />
      {/* happy closed eyes */}
      <path d="M104 130 Q112 120 122 130" stroke="#1e3d59" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M156 130 Q164 120 174 130" stroke="#1e3d59" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* blush */}
      <ellipse cx="102" cy="150" rx="12" ry="7" fill="#ff8fab" opacity=".85" />
      <ellipse cx="180" cy="150" rx="12" ry="7" fill="#ff8fab" opacity=".85" />
      {/* kissy lips */}
      <path d="M96 166 q8 -8 14 0 q-6 8 -14 0 Z" fill="#e2557b" />
      <path d="M110 164 q6 3 0 7" stroke="#e2557b" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function IntroCloud({ style, scale = 1, opacity = 0.9, delay = 0 }) {
  return (
    <svg
      className="intro__cloud"
      style={{ ...style, opacity, animationDelay: `${delay}s` }}
      width={220 * scale} height={80 * scale} viewBox="0 0 220 80" fill="none"
    >
      <path
        d="M30 62c-14 0-24-9-24-21 0-11 9-20 21-21C31 8 43 0 58 0c16 0 29 9 33 22 3-2 8-3 12-3 12 0 22 9 23 20 9 2 16 10 16 19 0 2 0 3-1 4H30z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export default function Intro({ onDone }) {
  const [show, setShow] = useState(true)
  const [phase, setPhase] = useState('walk') // walk -> kiss

  const dismiss = () => {
    setShow(false)
    if (onDone) onDone()
  }

  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'
    const done = setTimeout(dismiss, 8600)
    return () => {
      clearTimeout(done)
      document.body.style.overflow = ''
    }
  }, [show])

  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: 3 + Math.random() * 92,
        delay: Math.random() * 2.2,
        duration: 3.6 + Math.random() * 2.6,
        size: 16 + Math.random() * 24,
        drift: Math.round(Math.random() * 60 - 30),
        emoji: HEART_EMOJI[i % HEART_EMOJI.length],
      })),
    []
  )

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          onClick={dismiss}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, delay: 0.3 } }}
        >
          <div className="intro__sun" />
          <IntroCloud style={{ top: '9%', left: '60%' }} scale={1.1} opacity={0.95} />
          <IntroCloud style={{ top: '24%', left: '5%' }} scale={0.75} opacity={0.85} delay={1.4} />
          <IntroCloud style={{ top: '14%', left: '32%' }} scale={0.55} opacity={0.7} delay={2.6} />

          {/* he carries her picture from far away, all the way up to the camera */}
          <motion.div
            className="intro__couple"
            initial={{ scale: 0.045, y: '-38vh', opacity: 0 }}
            animate={{
              scale: 1,
              y: '0vh',
              opacity: 1,
              transition: {
                scale: { duration: 3.4, ease: [0.45, 0.05, 0.55, 1] },
                y: { duration: 3.4, ease: [0.45, 0.05, 0.55, 1] },
                opacity: { duration: 0.5 },
              },
            }}
            exit={{
              scale: 3.4,
              y: '16vh',
              opacity: 0,
              transition: { duration: 0.7, ease: [0.55, 0, 1, 0.45] },
            }}
            onAnimationComplete={() => setPhase('kiss')}
          >
            <div className={`intro__walker ${phase === 'walk' ? 'intro__walker--walking' : ''}`}>
              <div className={`intro__polaroid ${phase === 'kiss' ? 'intro__polaroid--kissed' : ''}`}>
                <img src={KISS_PHOTO} alt="her" />
              </div>

              {phase === 'kiss' && <div className="intro__mwah">💋</div>}

              <div className={`intro__char ${phase === 'kiss' ? 'intro__char--kissing' : ''}`}>
                <ChibiGuy />
              </div>
            </div>
          </motion.div>

          {phase === 'kiss' &&
            hearts.map((h) => (
              <span
                key={h.id}
                className="intro__heart"
                style={{
                  left: `${h.left}%`,
                  fontSize: `${h.size}px`,
                  animationDelay: `${h.delay}s`,
                  animationDuration: `${h.duration}s`,
                  '--drift': `${h.drift}px`,
                }}
              >
                {h.emoji}
              </span>
            ))}

          <div className="intro__skip">tap anywhere to skip ✨</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
