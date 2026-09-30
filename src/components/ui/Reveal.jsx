import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 16, className = '', as = 'div' }) {
  const prefersReducedMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  if (prefersReducedMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
