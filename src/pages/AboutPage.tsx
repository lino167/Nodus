import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { motion } from 'motion/react';

export const AboutPage = () => {
  return (
    <Layout>
      <PageHeader 
        badge="Nodus Industries"
        title="Nascidos no Chão de Fábrica."
        subtitle="Somos engenheiros e desenvolvedores apaixonados por eficiência industrial. Nossa missão é simplificar a complexidade da manutenção."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-white text-4xl font-display font-bold tracking-tight">Nossa História</h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              A Nodus nasceu da frustração com softwares de manutenção complexos, lentos e que ninguém queria usar. 
              Decidimos criar algo diferente: uma ferramenta potente o suficiente para grandes indústrias, mas simples o suficiente para ser usada em um smartphone.
            </p>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Hoje, ajudamos centenas de empresas a reduzir paradas não planejadas e a prolongar a vida útil de seus ativos mais valiosos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="aspect-square flex flex-col items-center justify-center text-center p-8">
              <div className="text-4xl font-display font-bold text-brand-cyan mb-2">2018</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Fundação</div>
            </Card>
            <Card className="aspect-square flex flex-col items-center justify-center text-center p-8">
              <div className="text-4xl font-display font-bold text-brand-cyan mb-2">500+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Clientes</div>
            </Card>
            <Card className="aspect-square flex flex-col items-center justify-center text-center p-8">
              <div className="text-4xl font-display font-bold text-brand-cyan mb-2">15M</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">OS Geradas</div>
            </Card>
            <Card className="aspect-square flex flex-col items-center justify-center text-center p-8">
              <div className="text-4xl font-display font-bold text-brand-cyan mb-2">24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Suporte</div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};
