import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { EMAIL, HLS_STREAM_URL, ROLES } from '../data/content'
import HlsVideo from './HlsVideo'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.name-reveal', { opacity: 0, y: 50, duration: 1.2, delay: 0.1 })
      tl.from(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20, duration: 1, stagger: 0.1, delay: 0.3 },
        0,
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HlsVideo src={HLS_STREAM_URL} position="50% 25%" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">
          Collection &apos;26
        </p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          Anh Son
        </h1>

        <p className="blur-in mb-6 text-base text-muted md:text-lg">
          A{' '}
          <span key={roleIndex} className="animate-role-fade-in inline-block font-display italic text-text-primary">
            {ROLES[roleIndex]}
          </span>{' '}
          lives in Haiphong, Vietnam.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">
          Building web applications with React, Next.js and TypeScript, turning Figma designs into
          responsive interfaces, and building backends with NestJS and Express.
        </p>

        <div className="blur-in inline-flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={scrollToWork}
            className="group relative rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-transform hover:scale-105"
          >
            <span className="accent-gradient absolute -inset-[2px] -z-10 rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            See Works
          </button>
          <a
            href={`mailto:${EMAIL}`}
            className="group relative rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-transform hover:scale-105 hover:border-transparent"
          >
            <span className="accent-gradient absolute -inset-[2px] -z-10 rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            Reach out...
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="animate-scroll-down absolute left-0 top-0 h-full w-px bg-text-primary" />
        </span>
      </div>
    </section>
  )
}
