import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import ProjectCover from '../components/ui/ProjectCover'
import { getProjectBySlug, projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    if (project) document.title = `${project.title} — Sarah Alqahtani`
    return () => {
      document.title = 'Sarah Alqahtani — Software & AI Engineer'
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <article className="pt-28 pb-24">
      <div className="container-edit">
        <Reveal>
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-ink-soft link-underline mb-10">
            <span aria-hidden="true">←</span> All projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex items-center justify-between text-xs tracking-widest text-ink-faint mb-5">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight max-w-3xl mb-6">
            {project.title}
          </h1>
          <p className="text-ink-soft text-lg max-w-2xl leading-relaxed mb-4">{project.shortDescription}</p>
          <p className="text-sm text-ink-faint">{project.role}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 mb-16">
          <div className="aspect-[16/9] border border-line rounded-sm overflow-hidden">
            <ProjectCover variant={project.cover} alt={`${project.title} — conceptual cover`} />
          </div>
        </Reveal>

        {project.metrics.length > 0 && (
          <Reveal delay={0.05}>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-8 sm:gap-16 mb-16 pb-16 border-b border-line">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-4xl sm:text-5xl text-ink mb-2">{m.value}</p>
                  <p className="text-sm text-ink-faint max-w-[16ch]">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <div className="grid lg:grid-cols-[1fr_260px] gap-16">
          <div className="space-y-14 max-w-2xl">
            {project.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="text-2xl font-display text-ink mb-4">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-ink-soft leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2.5 mt-2">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-ink-soft leading-relaxed">
                        <span className="text-accent mt-1" aria-hidden="true">
                          —
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {project.features.length > 0 && (
              <Reveal>
                <h2 className="text-2xl font-display text-ink mb-4">Key Features</h2>
                <ul className="space-y-2.5">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-ink-soft leading-relaxed">
                      <span className="text-accent mt-1" aria-hidden="true">
                        —
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1}>
            <aside className="lg:sticky lg:top-28 space-y-8">
              <div>
                <h3 className="text-xs tracking-widest text-ink-faint mb-4">TECHNOLOGY</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-xs border border-line rounded-full px-3 py-1.5 text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(project.githubUrl || project.liveUrl) && (
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-ink link-underline"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-ink link-underline"
                    >
                      Live demo ↗
                    </a>
                  )}
                </div>
              )}
            </aside>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24 pt-10 border-t border-line flex items-center justify-between">
            <span className="text-sm text-ink-faint">Next project</span>
            <Link to={`/projects/${next.slug}`} className="text-lg font-display text-ink link-underline">
              {next.title} →
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
