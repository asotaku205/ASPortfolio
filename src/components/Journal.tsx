import { motion } from 'framer-motion'
import { JOURNAL } from '../data/content'

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
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
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Journal</span>
          </div>
          <h2 className="text-4xl text-text-primary md:text-5xl">
            Recent <em className="font-display italic">thoughts</em>
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted md:text-base">
            Short notes from the work I am doing right now.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {JOURNAL.map((entry, index) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-6 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors hover:bg-surface sm:rounded-full"
            >
              <span
                className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full font-display text-xl italic text-white sm:flex"
                style={{ background: entry.gradient }}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base text-text-primary md:text-lg">{entry.title}</h3>
                <p className="mt-1 line-clamp-1 text-sm text-muted">{entry.excerpt}</p>
              </div>
              <div className="hidden shrink-0 text-right text-xs text-muted md:block">
                <p>{entry.date}</p>
                <p className="mt-1">{entry.readTime}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
