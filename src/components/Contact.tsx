import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { EMAIL, HLS_STREAM_URL, SKILLS, SOCIALS } from '../data/content'
import HlsVideo from './HlsVideo'

const MARQUEE_TEXT = 'BUILDING WITH REACT / '

export default function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <footer id="resume" className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20">
      <div className="absolute inset-0">
        <HlsVideo src={HLS_STREAM_URL} flipped />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <div className="overflow-hidden whitespace-nowrap border-y border-stroke/50 py-4">
          <div ref={marqueeRef} className="inline-flex">
            {[0, 1].map((half) => (
              <span
                key={half}
                className="font-display text-4xl italic text-text-primary/80 md:text-6xl"
              >
                {MARQUEE_TEXT.repeat(10)}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 pt-16 md:px-10 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-4xl text-text-primary md:text-5xl">
                Let&apos;s build <em className="font-display italic">something</em>
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted md:text-base">
                I am a final-year Information Systems student at Phenikaa University
                (2023-2027), a member of the Applied AI Lab, and a frontend developer
                intern at GDT Tech in Hanoi since August 2026. I work at 15 USD per hour
                and look for entry-level and small freelance jobs in dashboards, admin
                panels and landing pages.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="group relative mt-8 inline-flex rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-transform hover:scale-105"
              >
                <span className="accent-gradient absolute -inset-[2px] -z-10 rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
                {EMAIL}
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-muted">Skills</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-stroke bg-surface/60 px-3 py-1.5 text-xs text-text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-xs uppercase tracking-[0.3em] text-muted">Elsewhere</h3>
              <ul className="mt-4 flex flex-wrap gap-4">
                {SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted underline-offset-4 hover:text-text-primary hover:underline"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-stroke/50 pt-6">
            <p className="text-xs text-muted">Anh Son - Portfolio &apos;26</p>
            <p className="flex items-center gap-2 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Available for projects
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
