import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { motion } from 'motion/react';

export const CareersPage = () => {
  const jobs = [
    { title: 'Full Stack Engineer', type: 'Remoto', level: 'Sênior' },
    { title: 'Product Designer', type: 'Híbrido (SP)', level: 'Pleno' },
    { title: 'Customer Success Manager', type: 'Remoto', level: 'Pleno' },
    { title: 'Sales Executive (Indústria)', type: 'Remoto', level: 'Sênior' },
  ];

  return (
    <Layout>
      <PageHeader 
        badge="Carreiras"
        title="Construa o Futuro Conosco."
        subtitle="Estamos em busca de mentes brilhantes para revolucionar a indústria. Venha fazer parte da equipe Nodus."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">Por que a Nodus?</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Trabalhamos em problemas reais que impactam a economia global. Oferecemos autonomia, cultura de aprendizado e a chance de construir algo do zero.
            </p>
            <ul className="space-y-4">
              {['Trabalho Remoto First', 'Stock Options', 'Plano de Saúde Premium', 'Budget para Educação'].map(benefit => (
                <li key={benefit} className="flex items-center gap-3 text-slate-500 text-sm">
                  <div className="size-1.5 rounded-full bg-brand-cyan" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight mb-8">Vagas Abertas</h2>
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="flex flex-col md:flex-row justify-between items-center gap-6 hover:border-brand-cyan/30">
                  <div>
                    <h3 className="text-white font-display font-bold text-xl mb-1">{job.title}</h3>
                    <div className="flex gap-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.level}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full px-8">Candidatar-se</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
