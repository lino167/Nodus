import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Factory, TrendingDown, Shield, ClipboardList, Gavel, ScanQrCode, Send, Activity, Wrench, Database, Calendar, Package, Users, BarChart3, Bot, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { cn } from '../lib/utils';

import { Layout } from '../components/Layout';

const Marquee = () => (
  <div className="py-12 border-b border-white/5 overflow-hidden bg-brand-dark relative">
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />
    <motion.div 
      animate={{ x: [0, -1000] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex items-center gap-24 whitespace-nowrap px-12"
    >
      {[1,2,3,4,5,6,7,8].map(i => (
        <div key={i} className="flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
          <Factory className="size-8 text-white" />
          <span className="text-2xl font-display font-bold text-white tracking-tighter">INDUSTRY_CORP_{i}</span>
        </div>
      ))}
      {[1,2,3,4,5,6,7,8].map(i => (
        <div key={i + 8} className="flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
          <Factory className="size-8 text-white" />
          <span className="text-2xl font-display font-bold text-white tracking-tighter">INDUSTRY_CORP_{i}</span>
        </div>
      ))}
    </motion.div>
  </div>
);

export const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <Layout>
      <Marquee />
      
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center px-6 lg:px-10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-cyan/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#00F0FF]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-cyan uppercase">Nodus System v2.6.0</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-white text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight text-gradient">
              A Nova Era da <br />
              <span className="text-brand-cyan">Manutenção</span> <br />
              Industrial.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-light">
              Nodus CMMS é a plataforma definitiva para gestão de ativos. Integre chão de fábrica, técnicos e gestão em um ecossistema único de alta performance.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5 mt-4">
              <Link to="/register">
                <Button size="lg" className="px-10 h-16 text-lg rounded-full glow-cyan">Começar agora</Button>
              </Link>
              <Button size="lg" variant="outline" className="px-10 h-16 text-lg rounded-full border-white/10 hover:bg-white/5">Ver demonstração</Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-8 mt-8 pt-8 border-t border-white/5">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="size-10 rounded-full border-2 border-brand-dark bg-brand-surface overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-500 font-light">
                <span className="text-white font-medium">+500 indústrias</span> já confiam no Nodus
              </div>
            </motion.div>
          </motion.div>

          {/* Mock HUD - Technical Dashboard Recipe */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative perspective-1000"
          >
            <div className="absolute -inset-10 bg-brand-cyan/20 blur-[100px] rounded-full opacity-20 animate-pulse" />
            <div className="glass rounded-2xl overflow-hidden shadow-2xl border-white/10 relative">
              <div className="bg-white/5 border-b border-white/10 px-5 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-red-500/40" />
                  <div className="size-3 rounded-full bg-yellow-500/40" />
                  <div className="size-3 rounded-full bg-green-500/40" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">System Monitor // Active</div>
              </div>
              
              <div className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">OEE Global</span>
                    <div className="text-4xl font-display font-bold text-white">84.2<span className="text-lg text-brand-cyan ml-1">%</span></div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '84.2%' }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-brand-cyan" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">MTBF</span>
                    <div className="text-4xl font-display font-bold text-white">124<span className="text-lg text-slate-500 ml-1">h</span></div>
                    <div className="text-[10px] text-green-400 font-mono">↑ 12% vs last month</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Real-time Activity</span>
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-brand-cyan animate-ping" />
                      <span className="text-[10px] font-mono text-brand-cyan uppercase">Live</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { tag: 'OS', msg: 'Preventiva Concluída: Injetora 04', time: 'Now', color: 'text-green-400' },
                      { tag: 'ERR', msg: 'Vibração Crítica: Motor Principal', time: '2m', color: 'text-red-400' },
                      { tag: 'SYS', msg: 'Backup de Dados Realizado', time: '15m', color: 'text-blue-400' },
                    ].map((log, i) => (
                      <div key={i} className="flex items-center justify-between text-xs font-mono py-2 border-b border-white/5 last:border-0">
                        <div className="flex gap-4">
                          <span className={cn("w-10 opacity-70", log.color)}>{log.tag}</span>
                          <span className="text-slate-300 font-light">{log.msg}</span>
                        </div>
                        <span className="text-slate-600 text-[10px]">{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                        <Activity className="size-5 text-brand-cyan" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">Server Status</div>
                        <div className="text-xs text-white font-mono">Latency: 14ms</div>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      {[1,2,3,4,5,6].map(i => (
                        <motion.div 
                          key={i}
                          animate={{ height: [8, 16, 8] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1 bg-brand-cyan rounded-full" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - Bento Grid Style */}
      <section className="px-6 py-32 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 flex flex-col justify-center gap-6 p-12 rounded-[2rem] bg-brand-surface border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Bot className="size-64" />
            </div>
            <div className="text-brand-cyan bg-brand-cyan/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Bot className="size-7" />
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">
              Bot de Telegram <br />
              <span className="text-slate-500">Zero Atrito.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl font-light">
              Técnicos abrem e encerram ordens de serviço diretamente pelo Telegram. Sem papel, sem atrasos, com fotos e áudios anexados.
            </p>
            <div className="flex gap-4 mt-4">
              {['Abertura Instantânea', 'Checklists Dinâmicos', 'Notificações Push'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-slate-500">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 p-10 rounded-[2rem] bg-brand-surface border border-white/5 flex flex-col justify-between group"
          >
            <div className="text-brand-cyan bg-brand-cyan/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <ScanQrCode className="size-7" />
            </div>
            <div>
              <h3 className="text-white text-3xl font-display font-bold mb-4">QR Code Intelligence</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Identifique ativos instantaneamente. Escaneie o código na máquina para acessar histórico, manuais e abrir chamados.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 p-10 rounded-[2rem] bg-brand-surface border border-white/5 flex flex-col justify-between group"
          >
            <div className="text-brand-cyan bg-brand-cyan/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <BarChart3 className="size-7" />
            </div>
            <div>
              <h3 className="text-white text-3xl font-display font-bold mb-4">Analytics Preditivo</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Dashboards em tempo real com indicadores de classe mundial (OEE, MTTR, MTBF). Antecipe falhas antes que elas ocorram.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 p-12 rounded-[2rem] bg-gradient-to-br from-brand-cyan/20 to-brand-surface border border-brand-cyan/20 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            <h3 className="text-white text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 relative z-10">
              Pronto para o <br />
              <span className="text-brand-cyan">Próximo Nível?</span>
            </h3>
            <p className="text-slate-300 text-lg max-w-md font-light mb-8 relative z-10">
              Junte-se a centenas de indústrias que já reduziram seus custos operacionais com o Nodus CMMS.
            </p>
            <div className="relative z-10">
              <Link to="/register">
                <Button size="lg" className="px-10 h-14 rounded-full glow-cyan">Começar Agora</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section - Oversized Typographic Recipe */}
      <section className="py-32 bg-brand-dark relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {[
              { label: 'Redução de Custos', value: '40%', sub: 'No primeiro ano de implementação' },
              { label: 'Aumento de OEE', value: '25%', sub: 'Média global em nossos clientes' },
              { label: 'Disponibilidade', value: '99.9%', sub: 'SLA garantido em contrato' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-[120px] font-display font-bold text-white/5 absolute -top-16 -left-4 group-hover:text-brand-cyan/10 transition-colors leading-none select-none">
                  0{i + 1}
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-brand-cyan text-xs font-mono uppercase tracking-[0.3em] font-bold">{stat.label}</h4>
                    <p className="text-slate-500 text-sm font-light">{stat.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules - Clean Minimal Recipe */}
      <section className="py-32 bg-brand-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-white text-4xl md:text-6xl font-display font-bold tracking-tight">Módulos que <br /> <span className="text-brand-cyan">Transformam.</span></h2>
                <p className="text-slate-500 text-lg font-light max-w-md">Uma suíte completa de ferramentas projetadas para a excelência operacional.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'PCA', full: 'Plano de Controle de Ativos', icon: Database },
                  { title: 'Estoque', full: 'Gestão de Peças e Peças', icon: Package },
                  { title: 'PCM', full: 'Planejamento e Controle', icon: Calendar },
                  { title: 'Security', full: 'Segurança e Auditoria', icon: UserCheck },
                ].map((mod, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="size-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 group-hover:text-brand-cyan group-hover:border-brand-cyan/30 transition-all mb-4">
                      <mod.icon className="size-5" />
                    </div>
                    <h4 className="text-white font-display font-bold text-lg mb-1">{mod.title}</h4>
                    <p className="text-slate-500 text-xs font-light uppercase tracking-widest leading-relaxed">{mod.full}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-brand-cyan/10 to-transparent border border-white/5 p-12 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full">
                  {[1,2,3,4].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                      className="aspect-video bg-brand-dark/50 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-xl"
                    >
                      <div className="w-10 h-1.5 bg-brand-cyan/30 rounded-full" />
                      <div className="space-y-2">
                        <div className="w-full h-1.5 bg-white/5 rounded-full" />
                        <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-40 rounded-full bg-brand-cyan/5 border border-brand-cyan/20 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.1)]">
                    <Factory className="size-16 text-brand-cyan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Bold Background Recipe */}
      <section id="preços" className="px-6 py-32 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-white text-4xl md:text-6xl font-display font-bold tracking-tight">Planos que <span className="text-slate-500">Escalam.</span></h2>
          <p className="text-slate-500 text-lg font-light">Transparência total, sem taxas escondidas.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Starter', price: '499', features: ['Até 50 Ativos', 'Bot Telegram (3 técnicos)', 'Dashboards Básicos', 'Suporte Email'], popular: false },
            { name: 'Professional', price: '1.299', features: ['Até 250 Ativos', 'Bot Telegram (15 técnicos)', 'Analytics Completo', 'Gestão de Estoque', 'Suporte Prioritário'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['Ativos Ilimitados', 'Bot Telegram Ilimitado', 'Integração ERP/SAP', 'SLA Garantido', 'Gerente de Conta'], popular: false },
          ].map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex"
            >
              <div className={cn(
                "w-full p-10 rounded-[2.5rem] border flex flex-col transition-all duration-500",
                plan.popular 
                  ? "bg-brand-cyan text-brand-dark border-brand-cyan shadow-[0_20px_50px_rgba(0,240,255,0.2)] scale-105 z-10" 
                  : "bg-brand-surface text-white border-white/5 hover:border-white/10"
              )}>
                <div className="mb-8">
                  <h3 className={cn("text-xl font-display font-bold mb-2 uppercase tracking-widest", plan.popular ? "text-brand-dark/60" : "text-slate-500")}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-mono opacity-60">R$</span>
                    <span className="text-5xl font-display font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-sm font-mono opacity-60">/mês</span>}
                  </div>
                </div>
                
                <ul className="space-y-5 mb-12 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm font-light">
                      <div className={cn("size-1.5 rounded-full", plan.popular ? "bg-brand-dark" : "bg-brand-cyan")} />
                      {f}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={cn(
                    "w-full h-14 rounded-2xl text-base font-bold transition-all",
                    plan.popular 
                      ? "bg-brand-dark text-white hover:bg-brand-dark/90" 
                      : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                  )}
                >
                  {plan.price === 'Custom' ? 'Falar com Vendas' : 'Começar Agora'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-white text-4xl md:text-6xl font-display font-bold tracking-tight">O que dizem os <span className="text-brand-cyan">Líderes.</span></h2>
            <p className="text-slate-500 text-lg font-light">Resultados reais em indústrias de alta complexidade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ricardo Santos', role: 'Gerente de Manutenção', company: 'AutoParts Brasil', text: 'O Nodus CMMS reduziu nosso MTTR em 35% nos primeiros 6 meses. O bot do Telegram mudou a cultura do nosso time técnico.' },
              { name: 'Ana Oliveira', role: 'Diretora de Operações', company: 'FoodTech S.A.', text: 'A visibilidade em tempo real do OEE nos permitiu identificar gargalos que estavam ocultos há anos. Essencial para nossa expansão.' },
              { name: 'Marcos Lima', role: 'Engenheiro de Ativos', company: 'SteelCorp', text: 'Finalmente um software que entende o chão de fábrica. A integração com QR Code facilitou absurdamente o inventário de peças.' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between border-white/5 hover:border-brand-cyan/20">
                  <div className="space-y-6">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => <span key={star} className="text-brand-cyan text-xs">★</span>)}
                    </div>
                    <p className="text-slate-300 italic font-light leading-relaxed">"{t.text}"</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                    <div className="size-10 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan font-display font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-display font-bold text-sm">{t.name}</div>
                      <div className="text-slate-500 text-[10px] uppercase tracking-widest">{t.role} // {t.company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

