/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Menu, 
  X, 
  Sparkles, 
  Target, 
  Zap, 
  Globe 
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-rare-cream/90 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-serif font-semibold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Diva Sanghvi
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-rare-gold transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button 
            className="rare-button text-sm py-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Let's Talk
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-rare-cream border-b border-rare-blush overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="rare-button w-full">Let's Talk</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-rare-pink/30">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-rare-blush rounded-full blur-3xl opacity-50"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-rare-pink rounded-full blur-3xl opacity-50"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-white/80 border border-rare-blush text-xs font-semibold tracking-widest uppercase mb-6">
            Digital Strategy Student
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1.1] mb-8">
            Crafting <span className="italic">Digital Narratives</span> that resonate.
          </h1>
          <p className="text-lg md:text-xl text-rare-ink/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            I'm Diva Sanghvi, a Digital Strategy student at Jai Hind College. 
            I blend creativity with data-driven insights to build brands that matter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rare-button group flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="rare-button-outline">
              About Me
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-rare-ink/20" />
        <span className="text-[10px] uppercase tracking-widest text-rare-ink/40">Scroll</span>
      </motion.div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      className="text-4xl md:text-5xl font-serif mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        className="text-rare-ink/60 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-rare-blush">
              <img 
                src="https://picsum.photos/seed/diva/800/1000" 
                alt="Diva Sanghvi" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-rare-cream rounded-full border border-rare-blush flex items-center justify-center p-8 text-center shadow-xl">
              <p className="text-xs font-serif italic leading-tight">
                "Strategy is the art of making the invisible, visible."
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-6">The Strategy Behind the Story</h3>
              <p className="text-rare-ink/70 leading-relaxed mb-6">
                Currently pursuing my Bachelors in Digital Strategy at Jai Hind College, 
                I've always been fascinated by how digital platforms can transform human connection. 
                My approach is rooted in the belief that every brand has a soul, and my job is to 
                find the most authentic way to express it.
              </p>
              <p className="text-rare-ink/70 leading-relaxed">
                I specialize in bridging the gap between creative vision and technical execution. 
                Whether it's social media architecture, content strategy, or brand positioning, 
                I aim for elegance and impact in every pixel.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Target className="w-5 h-5" />, label: "Strategy First" },
                { icon: <Sparkles className="w-5 h-5" />, label: "Creative Vision" },
                { icon: <Zap className="w-5 h-5" />, label: "Rapid Execution" },
                { icon: <Globe className="w-5 h-5" />, label: "Global Perspective" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-rare-cream/50 border border-rare-blush/30"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-rare-gold">{item.icon}</div>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const projects = [
    {
      title: "Social Media Architecture",
      category: "Strategy",
      image: "https://picsum.photos/seed/social/800/600",
      size: "large"
    },
    {
      title: "Brand Identity Design",
      category: "Creative",
      image: "https://picsum.photos/seed/brand/800/600",
      size: "small"
    },
    {
      title: "Digital Campaign Launch",
      category: "Marketing",
      image: "https://picsum.photos/seed/marketing/800/600",
      size: "small"
    },
    {
      title: "Content Ecosystems",
      category: "Strategy",
      image: "https://picsum.photos/seed/content/800/600",
      size: "large"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-rare-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Selected Work" 
          subtitle="A collection of projects where strategy meets aesthetic excellence." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`rare-card group cursor-pointer ${project.size === 'large' ? 'md:row-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative h-full min-h-[400px]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rare-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-rare-pink text-xs uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-white text-3xl font-serif mb-4">{project.title}</h3>
                  <button className="flex items-center gap-2 text-white text-sm font-medium">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Strategy",
      skills: ["Market Analysis", "Brand Positioning", "Digital Architecture", "Consumer Insights"]
    },
    {
      title: "Creative",
      skills: ["Content Creation", "Visual Storytelling", "Copywriting", "Art Direction"]
    },
    {
      title: "Technical",
      skills: ["Social Analytics", "SEO/SEM", "CMS Management", "Digital Tools"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Expertise" 
          subtitle="The tools and methodologies I use to bring digital visions to life." 
        />

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-serif border-b border-rare-blush pb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="px-5 py-2 rounded-full bg-rare-cream border border-rare-blush/50 text-sm font-light hover:bg-rare-pink transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-rare-pink/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rare-card p-12 md:p-20 text-center bg-white/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif mb-8">Let's create something <span className="italic">beautiful</span>.</h2>
            <p className="text-rare-ink/60 mb-12 max-w-lg mx-auto leading-relaxed">
              I'm always open to new collaborations and exciting digital strategy projects. 
              Reach out and let's start a conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <a href="mailto:hello@divasanghvi.com" className="flex items-center gap-3 text-lg font-medium hover:text-rare-gold transition-colors">
                <Mail className="w-5 h-5" /> diva@jaihind.edu
              </a>
              <div className="hidden sm:block w-px h-6 bg-rare-blush" />
              <div className="flex items-center gap-6">
                <a href="#" className="p-3 rounded-full bg-rare-cream hover:bg-rare-blush transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-rare-cream hover:bg-rare-blush transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <button className="rare-button px-12 py-4 text-lg">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-rare-blush/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif font-semibold mb-2">Diva Sanghvi</h3>
          <p className="text-xs text-rare-ink/40 uppercase tracking-widest">Digital Strategy & Creative Direction</p>
        </div>
        
        <div className="text-sm text-rare-ink/40">
          © {new Date().getFullYear()} — Designed with intention.
        </div>

        <div className="flex gap-8 text-xs uppercase tracking-widest font-semibold">
          <a href="#" className="hover:text-rare-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-rare-gold transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-rare-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
