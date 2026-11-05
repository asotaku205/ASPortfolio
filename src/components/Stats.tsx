import { motion } from 'framer-motion'
import { STATS } from '../data/content'

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 text-center sm:grid-cols-3 md:px-10 lg:px-16">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <p className="font-display text-5xl italic text-text-primary md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
