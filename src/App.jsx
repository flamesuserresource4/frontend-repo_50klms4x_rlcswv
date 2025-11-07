import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutSection, ProjectsSection, BlogSection, ContactSection } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
