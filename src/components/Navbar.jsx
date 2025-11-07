import { useEffect, useState } from 'react';
import { Home, User, Briefcase, BookOpen, Mail } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/70 bg-white/40 dark:bg-neutral-900/40 border-b border-white/30 dark:border-neutral-800">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-pink-200 via-purple-200 to-sky-200 shadow-md" />
          <span className="font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">Iofi Girl</span>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden rounded-md px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-white/50 dark:hover:bg-neutral-800/50">
          ☰
        </button>
        <ul className={`md:flex md:items-center md:gap-2 ${open ? 'block' : 'hidden'} md:block mt-2 md:mt-0`}>
          {links.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm font-medium hover:bg-white/60 dark:hover:bg-neutral-800/60 ${
                  active === id ? 'bg-white/70 dark:bg-neutral-800/70' : ''
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
