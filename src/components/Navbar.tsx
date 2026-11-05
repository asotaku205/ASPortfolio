import { useEffect, useState } from 'react'
import { EMAIL } from '../data/content'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'resume', label: 'Resume' },
]

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100)
      const ids = ['home', 'work', 'resume']
      let current = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md ${
          scrolled ? 'shadow-md shadow-black/10' : ''
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('home')
          }}
          aria-label="Anh Son, back to top"
          className="group relative h-9 w-9 shrink-0"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-transform group-hover:scale-110" />
          <span className="absolute inset-[2px] flex items-center justify-center rounded-full bg-bg font-display text-[13px] italic text-text-primary">
            AS
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToId(link.id)
            }}
            className={`rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm ${
              active === link.id
                ? 'bg-stroke/50 text-text-primary'
                : 'text-muted hover:bg-stroke/50 hover:text-text-primary'
            }`}
          >
            {link.label}
          </a>
        ))}

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <a
          href={`mailto:${EMAIL}`}
          className="group relative rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="relative flex items-center gap-1 rounded-full bg-surface px-1 py-0.5 text-text-primary backdrop-blur-md">
            Say hi <span aria-hidden="true">&#8599;</span>
          </span>
        </a>
      </nav>
    </header>
  )
}
