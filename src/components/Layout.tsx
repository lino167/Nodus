import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Factory, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from './Button';

const Navbar = () => (
  <motion.header 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="flex items-center justify-between border-b border-brand-border px-6 py-4 lg:px-10 bg-brand-dark/80 backdrop-blur-xl sticky top-0 z-50"
  >
    <Link to="/" className="flex items-center gap-3 text-white group cursor-pointer">
      <div className="size-9 rounded-xl bg-brand-cyan flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
        <Factory className="size-5 text-brand-dark" />
      </div>
      <h2 className="text-white text-xl font-display font-bold tracking-tight">Nodus CMMS</h2>
    </Link>
    <nav className="hidden md:flex items-center gap-10">
      <Link to="/product" className="text-slate-400 hover:text-brand-cyan transition-all text-xs font-mono uppercase tracking-widest">Produto</Link>
      <Link to="/features" className="text-slate-400 hover:text-brand-cyan transition-all text-xs font-mono uppercase tracking-widest">Funcionalidades</Link>
      <Link to="/modules" className="text-slate-400 hover:text-brand-cyan transition-all text-xs font-mono uppercase tracking-widest">Módulos</Link>
      <Link to="/pricing" className="text-slate-400 hover:text-brand-cyan transition-all text-xs font-mono uppercase tracking-widest">Preços</Link>
    </nav>
    <div className="flex items-center gap-4">
      <Link to="/login" className="hidden md:block">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer">Entrar</span>
      </Link>
      <Link to="/register">
        <Button size="sm" className="rounded-full px-6 glow-cyan">Começar agora</Button>
      </Link>
    </div>
  </motion.header>
);

const Footer = () => (
  <footer className="border-t border-white/5 bg-brand-dark px-6 py-24 lg:px-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
      <div className="lg:col-span-2 space-y-8">
        <div className="flex items-center gap-3 text-white">
          <div className="size-10 rounded-xl bg-brand-cyan flex items-center justify-center">
            <Factory className="size-6 text-brand-dark" />
          </div>
          <h2 className="text-white text-2xl font-display font-bold tracking-tight">Nodus CMMS</h2>
        </div>
        <p className="text-slate-500 max-w-sm font-light leading-relaxed">
          A plataforma definitiva para gestão de ativos industriais. 
          Potencializando a Indústria 4.0 com inteligência e simplicidade.
        </p>
        <div className="flex gap-4">
          {[Twitter, Linkedin, Github].map((Icon, i) => (
            <a key={i} href="#" className="size-10 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all">
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-xs">Produto</h4>
        <ul className="space-y-4 text-sm text-slate-500 font-light">
          <li><Link to="/features" className="hover:text-brand-cyan transition-colors">Funcionalidades</Link></li>
          <li><Link to="/modules" className="hover:text-brand-cyan transition-colors">Módulos</Link></li>
          <li><Link to="/pricing" className="hover:text-brand-cyan transition-colors">Preços</Link></li>
          <li><Link to="/roadmap" className="hover:text-brand-cyan transition-colors">Roadmap</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-xs">Empresa</h4>
        <ul className="space-y-4 text-sm text-slate-500 font-light">
          <li><Link to="/about" className="hover:text-brand-cyan transition-colors">Sobre Nós</Link></li>
          <li><Link to="/blog" className="hover:text-brand-cyan transition-colors">Blog</Link></li>
          <li><Link to="/careers" className="hover:text-brand-cyan transition-colors">Carreiras</Link></li>
          <li><Link to="/contact" className="hover:text-brand-cyan transition-colors">Contato</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
        <ul className="space-y-4 text-sm text-slate-500 font-light">
          <li><Link to="/privacy" className="hover:text-brand-cyan transition-colors">Privacidade</Link></li>
          <li><Link to="/terms" className="hover:text-brand-cyan transition-colors">Termos</Link></li>
          <li><Link to="/security" className="hover:text-brand-cyan transition-colors">Segurança</Link></li>
          <li><Link to="/cookies" className="hover:text-brand-cyan transition-colors">Cookies</Link></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">
        © 2026 NODUS INDUSTRIES. TODOS OS DIREITOS RESERVADOS.
      </p>
      <div className="flex items-center gap-2 text-slate-600 text-xs font-mono uppercase tracking-widest">
        <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
        SISTEMAS OPERACIONAIS
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-brand-dark text-slate-300 min-h-screen font-sans antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
