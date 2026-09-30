import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import ProjectCover from './ProjectCover'
import Reveal from './Reveal'

export default function ProjectCard({ project, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Reveal delay={delay}>
      <Link
        to={`/projects/${project.slug}`}
        className="group block focus-visible:outline-none"
        aria-label={`View project: ${project.title}`}
      >
        <motion.div
          whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="border border-line rounded-sm overflow-hidden group-focus-visible:ring-2 group-focus-visible:ring-accent"
        >
          <div className="aspect-[4/3] overflow-hidden border-b border-line">
            <div className="w-full h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.03]">
              <ProjectCover variant={project.cover} alt={`${project.title} — conceptual cover`} />
            </div>
          </div>
          <div className="p-6 sm:p-7">
            <div className="flex items-center justify-between text-xs tracking-widest text-ink-faint mb-3">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h3 className="text-xl sm:text-2xl text-ink mb-2 font-display">{project.title}</h3>
            <p className="text-ink-soft text-sm leading-relaxed mb-4">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-faint mb-5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-ink">
              View Project
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </span>
          </div>
        </motion.div>
      </Link>
    </Reveal>
  )
}
