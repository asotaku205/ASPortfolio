import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EXPLORATIONS, type Exploration } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const colARef = useRef<HTMLDivElement>(null)
  const colBRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<Exploration | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: contentRef.current,
          pinSpacing: false,
        })
      }
      if (colARef.current) {
        gsap.fromTo(
          colARef.current,
          { yPercent: 10 },
          {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      }
      if (colBRef.current) {
        gsap.fromTo(
          colBRef.current,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  const columns: Exploration[][] = [
    EXPLORATIONS.slice(0, 3),
    EXPLORATIONS.slice(3, 6),
  ]

  return (
    <section ref={sectionRef} id="explorations" className="relative min-h-[300vh] bg-bg">
      <div ref={contentRef} className="z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">Explorations</p>
        <h2 className="text-4xl text-text-primary md:text-6xl">
          Visual <em className="font-display italic">playground</em>
        </h2>
        <p className="mt-4 max-w-md text-sm text-muted md:text-base">
          Small visual studies from my real projects: admin screens, dashboard frames and
          interface components.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-start justify-center">
        <div className="grid w-full max-w-[1400px] grid-cols-2 gap-12 px-6 pt-[120vh] md:gap-40">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              ref={colIndex === 0 ? colARef : colBRef}
              className="pointer-events-auto flex flex-col gap-12 md:gap-24"
            >
              {column.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="group mx-auto w-full max-w-[320px] text-left"
                  aria-label={`Open ${item.title} preview`}
                >
                  <span
                    className="flex aspect-square items-center justify-center rounded-3xl border border-stroke transition-transform duration-300 group-hover:rotate-1 group-hover:scale-[1.02]"
                    style={{ background: item.gradient }}
                  >
                    <span className="font-display text-5xl italic text-white/85">{item.initials}</span>
                  </span>
                  <span className="mt-3 block text-sm text-text-primary">{item.title}</span>
                  <span className="mt-1 block text-xs text-muted">{item.note}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-3xl border border-stroke bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex aspect-video items-center justify-center"
              style={{ background: lightbox.gradient }}
            >
              <span className="font-display text-6xl italic text-white/85">{lightbox.initials}</span>
            </div>
            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <h3 className="text-lg text-text-primary">{lightbox.title}</h3>
                <p className="mt-1 text-sm text-muted">{lightbox.note}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="rounded-full border border-stroke px-3 py-1.5 text-sm text-text-primary hover:bg-stroke/50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
