import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { motion } from 'motion/react';
import { ScanQrCode, Send, Activity, Wrench, ClipboardList, BarChart3 } from 'lucide-react';

export const FeaturesPage = () => {
  const features = [
    { icon: ScanQrCode, title: 'QR Code de Ativos', desc: 'Identificação instantânea de máquinas e acesso ao histórico completo no campo.' },
    { icon: Send, title: 'Bot Telegram', desc: 'Abertura e encerramento de ordens de serviço diretamente pelo chat, sem apps pesados.' },
    { icon: Activity, title: 'Monitoramento OEE', desc: 'Cálculo automático de Eficiência Global de Equipamentos com dashboards em tempo real.' },
    { icon: Wrench, title: 'Planos de Preventiva', desc: 'Agendamento inteligente de manutenções baseado em tempo ou horímetro.' },
    { icon: ClipboardList, title: 'Checklists Digitais', desc: 'Inspeções padronizadas com evidências fotográficas e assinaturas digitais.' },
    { icon: BarChart3, title: 'Relatórios BI', desc: 'Análise profunda de custos, MTBF, MTTR e performance da equipe técnica.' },
  ];

  return (
    <Layout>
      <PageHeader 
        badge="Funcionalidades"
        title="Poder de Fogo para o Chão de Fábrica."
        subtitle="Ferramentas desenhadas para quem realmente faz a manutenção acontecer, do técnico ao diretor."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full hover:border-brand-cyan/40 transition-all">
                <div className="size-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6">
                  <f.icon className="size-6 text-brand-cyan" />
                </div>
                <h3 className="text-white font-display font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{f.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
