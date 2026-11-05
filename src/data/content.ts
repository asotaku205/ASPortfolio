// Real content for Anh Son only. No invented clients, years of experience,
// reviews or earnings anywhere in this file.

export const HLS_STREAM_URL =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

export const EMAIL = 'sonotaku555@gmail.com'

export const ROLES = ['Frontend', 'Fullstack', 'Developer', 'Student']

export type Project = {
  title: string
  tag: string
  description: string
  stack: string
  gradient: string
  initials: string
  span: string
  href?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'AniMan Admin Panel',
    tag: 'Admin dashboard',
    description:
      'Admin panel for a manga, novel and animation platform, with user and content management screens.',
    stack: 'Next.js 16, NestJS, TypeScript, PostgreSQL',
    gradient: 'linear-gradient(135deg, #89aacc 0%, #4e85bf 55%, #1b2a3a 100%)',
    initials: 'AA',
    span: 'md:col-span-7',
    href: 'https://github.com/asotaku205/AniMan',
  },
  {
    title: 'OrderTower Dashboard',
    tag: 'Operations dashboard',
    description:
      'Order operations dashboard for a small business, built from 28 Figma frames with approval queues and guardrails.',
    stack: 'React, Next.js, Figma to code',
    gradient: 'linear-gradient(135deg, #4e85bf 0%, #2b4a68 60%, #10161d 100%)',
    initials: 'OT',
    span: 'md:col-span-5',
  },
  {
    title: 'AniMan Manga Studio',
    tag: 'Creation studio',
    description:
      'Drawing and manga creation studio where AI only assists the artist, never generates a full image.',
    stack: 'Next.js, Canvas, TypeScript',
    gradient: 'linear-gradient(135deg, #89aacc 0%, #6b7f96 55%, #232b33 100%)',
    initials: 'MS',
    span: 'md:col-span-5',
    href: 'https://github.com/asotaku205/AniMan',
  },
  {
    title: 'Freelance Dashboard',
    tag: 'Personal tool',
    description:
      'Personal dashboard to track freelance jobs, proposals, income and profiles across platforms.',
    stack: 'React, TypeScript',
    gradient: 'linear-gradient(135deg, #3f6d8f 0%, #22384a 60%, #0d1117 100%)',
    initials: 'FD',
    span: 'md:col-span-7',
  },
]

export type JournalEntry = {
  title: string
  excerpt: string
  date: string
  readTime: string
  gradient: string
}

export const JOURNAL: JournalEntry[] = [
  {
    title: 'Building the AniMan admin panel',
    excerpt:
      'How the admin panel for a manga platform came together, from user management to work submissions.',
    date: 'Oct 2026',
    readTime: '4 min read',
    gradient: 'linear-gradient(135deg, #89aacc, #4e85bf)',
  },
  {
    title: 'Turning the OrderTower Figma board into code',
    excerpt:
      'Twenty-eight dashboard frames, one order flow, and the guardrails that keep every order reviewed.',
    date: 'Nov 2026',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #4e85bf, #2b4a68)',
  },
  {
    title: 'Learning frontend by rebuilding dashboards',
    excerpt:
      'Rebuilding real dashboard screens is how I practice layout, state and data tables.',
    date: 'Oct 2026',
    readTime: '3 min read',
    gradient: 'linear-gradient(135deg, #6b7f96, #232b33)',
  },
  {
    title: 'Starting freelance on Upwork and Freelancer.com',
    excerpt:
      'Setting up honest profiles, a clear rate, and small entry-level jobs first.',
    date: 'Nov 2026',
    readTime: '4 min read',
    gradient: 'linear-gradient(135deg, #3f6d8f, #0d1117)',
  },
]

export type Exploration = {
  title: string
  note: string
  gradient: string
  initials: string
}

export const EXPLORATIONS: Exploration[] = [
  { title: 'AniMan admin users', note: 'User management screen', gradient: 'linear-gradient(135deg, #89aacc, #4e85bf)', initials: 'AU' },
  { title: 'OrderTower overview', note: 'KPIs and approval queue', gradient: 'linear-gradient(135deg, #4e85bf, #2b4a68)', initials: 'OO' },
  { title: 'AniMan manga canvas', note: 'Drawing workspace', gradient: 'linear-gradient(135deg, #6b7f96, #232b33)', initials: 'MC' },
  { title: 'OrderTower orders', note: 'Order table and filters', gradient: 'linear-gradient(135deg, #3f6d8f, #0d1117)', initials: 'OR' },
  { title: 'Freelance job queue', note: 'Kanban of open jobs', gradient: 'linear-gradient(135deg, #89aacc, #22384a)', initials: 'FJ' },
  { title: 'Dashboard components', note: 'Shared cards and tables', gradient: 'linear-gradient(135deg, #4e85bf, #10161d)', initials: 'DC' },
]

export const STATS = [
  { value: '4+', label: 'Projects Built' },
  { value: '20', label: 'Skills' },
  { value: '2', label: 'Freelance Platforms' },
]

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/asotaku205' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01752de50bf058b1c0' },
  { label: 'Freelancer', href: 'https://www.vn.freelancer.com/u/asotaku205' },
]

export const SKILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Figma to code',
  'NestJS',
  'Express',
  'PostgreSQL',
  'Supabase',
  'REST API',
  'Gemini / LLM API',
  'Selenium',
]
