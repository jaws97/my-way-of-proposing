import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValueEvent } from 'framer-motion'

function Cloud({ style, drift, scale = 1, opacity = 0.9 }) {
  return (
    <motion.svg
      className="sky__cloud"
      style={{ ...style, x: drift, scale, opacity }}
      width="220" height="80" viewBox="0 0 220 80" fill="none"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 7 + scale * 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        d="M30 62c-14 0-24-9-24-21 0-11 9-20 21-21C31 8 43 0 58 0c16 0 29 9 33 22 3-2 8-3 12-3 12 0 22 9 23 20 9 2 16 10 16 19 0 2 0 3-1 4H30z"
        fill="#FFFFFF"
      />
    </motion.svg>
  )
}

export default function Sky() {
  const { scrollYProgress } = useScroll()

  // morning → noon → golden hour → dusk
  const top = useTransform(scrollYProgress, [0, 0.35, 0.68, 1], ['#6EC5E9', '#7FCBE8', '#F9C784', '#3E3A6D'])
  const bottom = useTransform(scrollYProgress, [0, 0.35, 0.68, 1], ['#CDEFF7', '#FFE8C4', '#FF8A5C', '#C86B85'])
  const background = useMotionTemplate`linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`

  const sunTop = useTransform(scrollYProgress, [0, 1], ['14vh', '72vh'])

  // opacity fades written straight to the DOM — no re-renders, no stale bindings
  const sunRef = useRef(null)
  const starsRef = useRef(null)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (sunRef.current) {
      sunRef.current.style.opacity = v < 0.72 ? 1 : v > 0.92 ? 0 : 1 - (v - 0.72) / 0.2
    }
    if (starsRef.current) {
      starsRef.current.style.opacity = v < 0.74 ? 0 : v > 0.95 ? 1 : (v - 0.74) / 0.21
    }
  })

  const drift1 = useTransform(scrollYProgress, [0, 1], ['0vw', '-38vw'])
  const drift2 = useTransform(scrollYProgress, [0, 1], ['0vw', '-70vw'])
  const drift3 = useTransform(scrollYProgress, [0, 1], ['0vw', '-18vw'])

  const stars = useMemo(
    () =>
      Array.from({ length: 46 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 88}%`,
        delay: `${(i % 7) * 0.4}s`,
      })),
    []
  )

  return (
    <motion.div className="sky" style={{ background }} aria-hidden="true">
      <motion.div ref={sunRef} className="sky__sun" style={{ top: sunTop }} />
      <div ref={starsRef} style={{ opacity: 0, position: 'absolute', inset: 0 }}>
        {stars.map((s) => (
          <span key={s.id} className="sky__star" style={{ left: s.left, top: s.top, animationDelay: s.delay }} />
        ))}
      </div>
      <Cloud style={{ top: '10%', left: '58%' }} drift={drift2} scale={1.15} opacity={0.95} />
      <Cloud style={{ top: '26%', left: '6%' }} drift={drift1} scale={0.8} opacity={0.85} />
      <Cloud style={{ top: '48%', left: '70%' }} drift={drift3} scale={0.65} opacity={0.7} />
      <Cloud style={{ top: '66%', left: '20%' }} drift={drift2} scale={0.9} opacity={0.75} />
      <Cloud style={{ top: '84%', left: '55%' }} drift={drift1} scale={0.7} opacity={0.6} />
    </motion.div>
  )
}
