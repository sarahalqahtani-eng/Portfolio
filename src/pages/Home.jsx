import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'
import { profile, experience, leadership, education, skills } from '../data/site'

export default function Home() {
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  return (
    <>
      <Hero prefersReducedMotion={prefersReducedMotion} />

      <section id="projects" className="section-space">
        <div className="container-edit">
          <SectionHeading index="01" title="Selected Projects" />
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-space border-t border-line">
        <div className="container-edit">
          <SectionHeading index="02" title="About" />
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
            <Reveal>
              <div className="space-y-5 text-ink-soft leading-relaxed text-base sm:text-lg max-w-xl">
                {profile.aboutParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-line rounded-sm p-6 sm:p-8">
                <h3 className="text-xs tracking-widest text-ink-faint mb-4">EDUCATION</h3>
                <p className="text-ink font-display text-lg mb-1">{education.school}</p>
                <p className="text-ink-soft text-sm mb-1">{education.degree}</p>
                <p className="text-ink-faint text-sm">{education.period}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="experience" className="section-space border-t border-line">
        <div className="container-edit">
          <SectionHeading index="03" title="Experience" />

          <Reveal>
            <div className="mb-16">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                <h3 className="text-2xl font-display text-ink">{experience.title}</h3>
                <span className="text-sm text-ink-faint">{experience.period}</span>
              </div>
              <p className="text-ink-soft mb-5">{experience.company}</p>
              <ul className="space-y-3">
                {experience.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-ink-soft leading-relaxed">
                    <span className="text-accent mt-1" aria-hidden="true">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h4 className="text-xs tracking-widest text-ink-faint mb-5">LEADERSHIP</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {leadership.map((l) => (
                  <div key={l.org} className="border-t border-line pt-4">
                    <p className="text-ink">{l.title}</p>
                    <p className="text-ink-faint text-sm">{l.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section-space border-t border-line">
        <div className="container-edit">
          <SectionHeading index="04" title="Skills & Tools" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.05}>
                <h3 className="text-xs tracking-widest text-ink-faint mb-5">{group.group.toUpperCase()}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-space border-t border-line">
        <div className="container-edit">
          <SectionHeading index="05" title="Contact" />
          <Reveal>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-display text-ink leading-[1.1] mb-12 max-w-2xl">
              Let&rsquo;s build something
              <br />
              interesting.
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <a href={`mailto:${profile.email}`} className="group">
                <p className="text-xs tracking-widest text-ink-faint mb-2">EMAIL</p>
                <p className="text-lg text-ink link-underline">{profile.email}</p>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group">
                <p className="text-xs tracking-widest text-ink-faint mb-2">LINKEDIN</p>
                <p className="text-lg text-ink link-underline">sarahalqahtanieng</p>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="group">
                <p className="text-xs tracking-widest text-ink-faint mb-2">GITHUB</p>
                <p className="text-lg text-ink link-underline">sarahalqahtani-eng</p>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Hero({ prefersReducedMotion }) {
  const fadeUp = (delay) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="container-edit w-full">
        <motion.p {...fadeUp(0)} className="text-xs sm:text-sm tracking-[0.2em] text-ink-faint mb-8">
          {profile.eyebrow}
        </motion.p>

        <motion.h1 {...fadeUp(0.1)} className="font-display text-ink leading-[0.95] mb-10">
          <span className="block text-[15vw] sm:text-[9vw] lg:text-8xl">Sarah</span>
          <span className="block text-[15vw] sm:text-[9vw] lg:text-8xl">Alqahtani</span>
        </motion.h1>

        <motion.p {...fadeUp(0.25)} className="text-ink-soft text-lg sm:text-xl max-w-xl leading-relaxed mb-12">
          {profile.heroDescription}
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-ink link-underline"
          >
            View my work <span aria-hidden="true">↓</span>
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ink-soft link-underline"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ink-soft link-underline"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
