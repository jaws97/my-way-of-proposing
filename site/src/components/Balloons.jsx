import { motion } from 'framer-motion'

const BALLOONS = [
  { cx: 40, cy: 46, r: 26, fill: '#FF6B4A' },
  { cx: 86, cy: 30, r: 30, fill: '#FFD166' },
  { cx: 132, cy: 50, r: 24, fill: '#2EC4B6' },
  { cx: 66, cy: 84, r: 22, fill: '#FF8FAB' },
  { cx: 112, cy: 90, r: 20, fill: '#6EC5E9' },
]

/**
 * A draggable cluster of balloons (yes, that's an Up reference).
 * Drag it, let go, it springs home — squash-and-stretch included.
 * Optionally carries the thing that matters most: a photo of us.
 */
export default function Balloons({ style, photo, photoAlt }) {
  return (
    // outer: slow lift-off from below the screen
    <motion.div
      className="balloons"
      style={style}
      initial={{ y: '105vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
    >
    <motion.div
      className="balloons--interactive"
      drag
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 260, bounceDamping: 14 }}
      whileDrag={{ scale: 1.08, rotate: 3 }}
      whileTap={{ scale: 0.96 }}
      animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 5.4 }}
    >
      <svg width="172" height="210" viewBox="0 0 172 210" fill="none">
        {/* strings */}
        {BALLOONS.map((b, i) => (
          <path
            key={`s${i}`}
            d={`M${b.cx} ${b.cy + b.r - 4} Q ${b.cx + (86 - b.cx) * 0.4} ${b.cy + b.r + 40}, 86 178`}
            stroke="rgba(30,61,89,.4)"
            strokeWidth="1.4"
            fill="none"
          />
        ))}
        {/* balloons */}
        {BALLOONS.map((b, i) => (
          <g key={i}>
            <ellipse cx={b.cx} cy={b.cy} rx={b.r} ry={b.r * 1.14} fill={b.fill} />
            <ellipse cx={b.cx - b.r * 0.34} cy={b.cy - b.r * 0.4} rx={b.r * 0.28} ry={b.r * 0.4} fill="rgba(255,255,255,.35)" />
            <path d={`M${b.cx - 4} ${b.cy + b.r * 1.1} l4 8 l4 -8 z`} fill={b.fill} />
          </g>
        ))}
        {/* the tied knot */}
        <circle cx="86" cy="180" r="5" fill="#1E3D59" />
      </svg>
      {photo && (
        <motion.div
          className="balloons__photo"
          animate={{ rotate: [-2.5, 2.5, -2.5] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src={photo} alt={photoAlt || 'us'} draggable={false} />
        </motion.div>
      )}
    </motion.div>
    </motion.div>
  )
}
