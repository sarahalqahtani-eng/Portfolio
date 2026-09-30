import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import ProjectCover from './ProjectCover'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!project) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
        >
          <div className="absolute inset-0 bg-ink/40" onClick={onClose} aria-hidden="true" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-paper border border-line rounded-sm shadow-[0_4px_24px_rgba(43,39,35,0.12)]"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-ink-soft hover:text-ink transition-colors z-10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>

            <div className="aspect-[16/9] border-b border-line">
              <ProjectCover variant={project.cover} alt={`${project.title} — conceptual cover`} />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs tracking-widest text-ink-faint mb-3">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 id="project-modal-title" className="text-2xl font-display text-ink mb-3 pr-8">
                {project.title}
              </h3>
              <p className="text-ink-soft leading-relaxed mb-6">{project.shortDescription}</p>

              <div className="mb-6">
                <h4 className="text-xs tracking-widest text-ink-faint mb-3">TECHNOLOGY</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-xs border border-line rounded-full px-3 py-1.5 text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 border-t border-line">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-ink link-underline mt-4"
                  >
                    GitHub ↗
                  </a>
                )}
                <Link to={`/projects/${project.slug}`} onClick={onClose} className="inline-flex items-center gap-2 text-sm text-ink-soft link-underline mt-4">
                  Full case study →
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
