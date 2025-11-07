import { motion } from 'framer-motion';
import { Github, Link as LinkIcon, Music, MapPin, Instagram, Twitter, Mail } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white/70 to-white dark:from-neutral-900 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2">
            <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-3xl overflow-hidden mx-auto shadow-2xl">
              <img src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop" alt="Iofi Girl Profile" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/30 via-rose-200/20 to-sky-200/30" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-50">About Me</h2>
            <p className="mt-4 text-neutral-700/80 dark:text-neutral-300/80 leading-relaxed">
              I’m a front-end developer and designer who loves calm interfaces, gentle motion, and pastel palettes. When I’m not coding, you’ll find me sketching cozy scenes, curating playlists, and brewing pour-over coffee.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Design', icon: '🎨' },
                { label: 'Frontend', icon: '💻' },
                { label: 'Music', icon: '🎧' },
                { label: 'Sketch', icon: '✍️' },
                { label: 'Coffee', icon: '☕️' },
                { label: 'Cats', icon: '🐾' },
              ].map((i) => (
                <div key={i.label} className="rounded-xl border border-pink-100/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-800/40 p-4 text-center">
                  <div className="text-2xl">{i.icon}</div>
                  <div className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">{i.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">Journey</h3>
              <ol className="mt-3 relative border-l-2 border-pink-200 dark:border-neutral-700 pl-4 space-y-4">
                {[
                  { year: '2019', text: 'Started tinkering with HTML/CSS and fell in love with web aesthetics.' },
                  { year: '2021', text: 'Built first freelance portfolio sites and boutique shop themes.' },
                  { year: '2023', text: 'Dove into motion design with Framer Motion and Three/Spline.' },
                ].map((e) => (
                  <li key={e.year} className="ml-2">
                    <div className="text-xs uppercase tracking-wide text-pink-400">{e.year}</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300">{e.text}</div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: 'Lofi Player',
      desc: 'Ambient music player with scene themes and rain mode.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop',
      link: 'https://github.com/',
    },
    {
      title: 'Pastel Portfolio',
      desc: 'Soft color portfolio template with cards and micro-interactions.',
      tech: ['Vite', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      link: 'https://github.com/',
    },
    {
      title: 'Cozy Blog',
      desc: 'Minimal blog with reading mode and typography presets.',
      tech: ['React', 'MDX'],
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop',
      link: 'https://github.com/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-pink-50/60 dark:from-neutral-900 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-50">Projects</h2>
        <p className="mt-2 text-neutral-700/80 dark:text-neutral-300/80">A few comfy builds I’ve been crafting lately.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              key={p.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-pink-100/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-800/60 shadow-sm"
            >
              <div className="relative h-40">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/20 via-rose-200/10 to-sky-200/20" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">{p.title}</h3>
                  <span className="text-xs text-pink-400">{p.tech[0]}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wide rounded-full bg-pink-100 text-pink-600 px-2 py-1 dark:bg-neutral-700 dark:text-neutral-200">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <Github className="h-4 w-4" /> <span>Code</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogSection() {
  const posts = [
    {
      title: 'Designing Calm Interfaces',
      date: 'Aug 10, 2025',
      excerpt: 'A few principles for creating soothing, human-friendly UI.',
      image: 'https://images.unsplash.com/photo-1705023812406-fc30260d82c3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ25pbmclMjBDYWxtJTIwSW50ZXJmYWNlc3xlbnwwfDB8fHwxNzYyNDc2NzQ0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Pastel Palettes That Sing',
      date: 'Jul 22, 2025',
      excerpt: 'Soft color combinations that feel like a rainy afternoon.',
      image: 'https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Gentle Motion with Framer',
      date: 'Jun 7, 2025',
      excerpt: 'How to add micro-interactions without overwhelming the senses.',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-pink-50/60 to-white dark:from-neutral-900 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-50">Blog</h2>
        <p className="mt-2 text-neutral-700/80 dark:text-neutral-300/80">Thoughts on design, code, and cozy living.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <motion.article key={p.title} whileHover={{ y: -6 }} className="overflow-hidden rounded-2xl border border-pink-100/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-800/60 shadow-sm">
              <div className="relative h-40">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/20 via-rose-200/10 to-sky-200/20" />
              </div>
              <div className="p-4">
                <div className="text-xs text-pink-500">{p.date}</div>
                <h3 className="mt-1 font-semibold text-neutral-800 dark:text-neutral-100">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.excerpt}</p>
                <button className="mt-3 text-sm text-pink-600 hover:text-pink-700">Read more →</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-pink-50/60 dark:from-neutral-900 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-50">Contact</h2>
        <p className="mt-2 text-neutral-700/80 dark:text-neutral-300/80">Say hello — let’s build something gentle and joyful.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-pink-100/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-800/60 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
                <input className="mt-1 w-full rounded-xl border border-pink-100/70 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 ring-pink-200" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
                <input className="mt-1 w-full rounded-xl border border-pink-100/70 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 ring-pink-200" placeholder="you@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-xl border border-pink-100/70 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 ring-pink-200" placeholder="Write something cozy..." />
            </div>
            <button className="mt-4 px-5 py-3 rounded-xl bg-pink-200/80 hover:bg-pink-200 text-neutral-800 shadow-sm transition-colors">Send Message</button>
          </form>

          <div className="rounded-2xl border border-pink-100/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-800/60 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
              <Music className="h-5 w-5 text-pink-500" />
              <p>Now Playing: Iofi Girl – Rainy Window Loop</p>
            </div>
            <audio controls className="mt-3 w-full">
              <source src="https://cdn.pixabay.com/audio/2021/08/04/audio_7f2ef2a9e7.mp3" type="audio/mpeg" />
            </audio>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <a href="#" className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-pink-600"><Instagram className="h-4 w-4" /> Instagram</a>
              <a href="#" className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-pink-600"><Twitter className="h-4 w-4" /> Twitter</a>
              <a href="#" className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-pink-600"><Github className="h-4 w-4" /> GitHub</a>
              <a href="#" className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-pink-600"><Mail className="h-4 w-4" /> Email</a>
              <div className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300 col-span-2">
                <MapPin className="h-4 w-4 mt-1" /> Somewhere cozy, with rain and tea.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
