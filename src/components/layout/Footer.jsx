import { profile } from '../../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-edit py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-ink-faint">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-6">
          <a href={`mailto:${profile.email}`} className="link-underline hover:text-ink-soft transition-colors">
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-ink-soft transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-ink-soft transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
