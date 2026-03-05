import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { motion } from 'motion/react';
import { Cpu, Zap, ShieldCheck, Globe } from 'lucide-react';

export const ProductPage = () => {
  return (
    <Layout>
      <PageHeader 
        badge="Plataforma Nodus"
        title="A Inteligência por trás da sua Manutenção."
        subtitle="O Nodus CMMS combina tecnologia de ponta com simplicidade operacional para transformar dados em decisões estratégicas."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card title="Arquitetura Cloud-Native" subtitle="INFRAESTRUTURA" badge="v3.0">
              <p className="text-slate-400 font-light leading-relaxed mb-6">
                Construído sobre uma infraestrutura escalável e segura, o Nodus garante 99.9% de disponibilidade para suas operações críticas.
              </p>
              <div className="flex items-center gap-4 text-brand-cyan">
                <Globe className="size-5" />
                <span className="text-xs font-mono uppercase tracking-widest">Acesso Global em Tempo Real</span>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card title="Motor de IA Preditiva" subtitle="INTELIGÊNCIA" badge="AI CORE">
              <p className="text-slate-400 font-light leading-relaxed mb-6">
                Nossos algoritmos analisam padrões históricos para prever falhas antes que elas ocorram, otimizando o ciclo de vida dos ativos.
              </p>
              <div className="flex items-center gap-4 text-brand-cyan">
                <Cpu className="size-5" />
                <span className="text-xs font-mono uppercase tracking-widest">Machine Learning Integrado</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
