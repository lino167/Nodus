import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { motion } from 'motion/react';
import { Package, Users, Database, Gavel } from 'lucide-react';

export const ModulesPage = () => {
  const modules = [
    { icon: Database, title: 'Gestão de Ativos', desc: 'Hierarquia completa de ativos, localização e árvore de falhas.' },
    { icon: Package, title: 'Almoxarifado', desc: 'Controle de estoque de peças, compras automáticas e reserva de materiais.' },
    { icon: Users, title: 'Recursos Humanos', desc: 'Gestão de competências, escalas de trabalho e produtividade técnica.' },
    { icon: Gavel, title: 'Compliance & NR', desc: 'Garantia de conformidade com normas regulamentadoras e auditorias.' },
  ];

  return (
    <Layout>
      <PageHeader 
        badge="Módulos"
        title="Escalabilidade Modular."
        subtitle="Escolha os módulos que sua indústria precisa hoje e expanda conforme sua operação cresce."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex gap-8 items-start p-10">
                <div className="size-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                  <m.icon className="size-8 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-2xl mb-4">{m.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed text-lg">{m.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
