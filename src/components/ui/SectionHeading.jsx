import Reveal from './Reveal'

export default function SectionHeading({ index, title, id }) {
  return (
    <Reveal className="flex items-baseline gap-4 mb-12 sm:mb-16">
      <span className="font-sans text-sm text-ink-faint tracking-widest">{index}</span>
      <h2 id={id} className="text-3xl sm:text-4xl text-ink scroll-mt-28">
        {title}
      </h2>
      <span className="hidden sm:block h-px flex-1 bg-line" aria-hidden="true" />
    </Reveal>
  )
}
