import { motion } from 'framer-motion'
import { PROJECTS } from '../data/content'

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Selected Work</span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl text-text-primary md:text-5xl">
                Featured <em className="font-display italic">projects</em>
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted md:text-base">
                A selection of projects I&apos;ve worked on, from concept to launch.
              </p>
            </div>
            <a
              href="https://github.com/asotaku205"
              target="_blank"
              rel="noreferrer"
              className="group relative hidden rounded-full px-5 py-2.5 text-sm text-text-primary md:inline-flex"
            >
              <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative rounded-full bg-surface px-4 py-1.5">
                View all work <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {PROJECTS.map((project) => {
            const card = (
              <article
                className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${project.span}`}
              >
                <div
                  className="relative flex aspect-[4/3] items-center justify-center transition-transform duration-500 group-hover:scale-105 md:aspect-[16/10]"
                  style={{ background: project.gradient }}
                >
                  <span className="font-display text-6xl italic text-white/80 md:text-7xl">
                    {project.initials}
                  </span>
                  <span className="halftone pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply" />
                </div>
                <div className="flex items-start justify-between gap-4 p-5 md:p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{project.tag}</p>
                    <h3 className="mt-1 text-xl text-text-primary">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted">{project.description}</p>
                    <p className="mt-3 text-xs text-muted">{project.stack}</p>
                  </div>
                  <span className="accent-gradient hidden shrink-0 rounded-full px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 md:inline-block">
                    View
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-white px-5 py-2.5 text-sm text-black">
                    View &mdash; <em className="font-display italic">{project.title}</em>
                  </span>
                </div>
              </article>
            )
            return project.href ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={`contents ${project.span}`}
                aria-label={`Open ${project.title} on GitHub`}
              >
                {card}
              </a>
            ) : (
              <div key={project.title} className={`contents ${project.span}`}>
                {card}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
