import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, y = 34, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default function Scene({ slate, title, children, className = '' }) {
  return (
    <section className={`scene ${className}`}>
      {slate && (
        <Reveal>
          <div className="scene__slate">{slate}</div>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.08}>
          <h2 className="scene__title">{title}</h2>
        </Reveal>
      )}
      {children}
    </section>
  )
}
