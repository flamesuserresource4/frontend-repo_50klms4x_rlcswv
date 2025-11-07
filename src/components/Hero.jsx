import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-sky-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/6MO5kqQ7U7S0o8ka/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70 dark:from-neutral-900/70 dark:via-neutral-900/20 dark:to-neutral-900/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-50"
        >
          Cozy Iofi Girl Vibes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-4 text-neutral-700/80 dark:text-neutral-200/80 max-w-2xl mx-auto"
        >
          Hi, I’m Lofi Iofi — a creative developer crafting quiet, delightful experiences on the web. Grab a tea, turn up the music, and get comfy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#projects" className="px-5 py-3 rounded-xl bg-pink-200/80 hover:bg-pink-200 text-neutral-800 shadow-sm transition-colors">View Projects</a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-white/70 hover:bg-white text-neutral-800 dark:bg-neutral-800/60 dark:hover:bg-neutral-800 dark:text-neutral-100 border border-white/60 dark:border-neutral-700 transition-colors">Contact</a>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-pink-300 animate-ping" />
        <span className="absolute left-[30%] top-[70%] h-2 w-2 rounded-full bg-purple-300 animate-ping" />
        <span className="absolute left-[80%] top-[35%] h-2 w-2 rounded-full bg-sky-300 animate-ping" />
      </div>
    </section>
  );
}
