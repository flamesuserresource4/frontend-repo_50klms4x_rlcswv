import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white/70 dark:bg-neutral-900/80 border-t border-pink-100/70 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
          <Sparkles className="h-4 w-4 text-pink-500" />
          <p>© {new Date().getFullYear()} Iofi Girl — Made with calm and tea.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="text-neutral-600 dark:text-neutral-300 hover:text-pink-600">About</a>
          <a href="#projects" className="text-neutral-600 dark:text-neutral-300 hover:text-pink-600">Projects</a>
          <a href="#blog" className="text-neutral-600 dark:text-neutral-300 hover:text-pink-600">Blog</a>
          <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-pink-600">Contact</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-pink-200 blur-3xl" />
        <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-sky-200 blur-3xl" />
      </div>
    </footer>
  );
}
