import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { motion } from 'motion/react';

export const RoadmapPage = () => {
  const roadmap = [
    { quarter: 'Q1 2026', title: 'Integração SAP/ERP', status: 'Concluído', items: ['API REST v2', 'Sincronização de Materiais', 'Exportação de Custos'] },
    { quarter: 'Q2 2026', title: 'Nodus AI Vision', status: 'Em Desenvolvimento', items: ['Reconhecimento de Peças por Foto', 'Leitura de Painéis Analógicos', 'Alertas de Segurança'] },
    { quarter: 'Q3 2026', title: 'Módulo de Energia', status: 'Planejado', items: ['Monitoramento de Consumo', 'Integração com Medidores IoT', 'Relatórios de Sustentabilidade'] },
    { quarter: 'Q4 2026', title: 'Nodus Mobile Native', status: 'Planejado', items: ['App iOS/Android Nativo', 'Modo Offline Avançado', 'Geofencing de Ativos'] },
  ];

  return (
    <Layout>
      <PageHeader 
        badge="Roadmap"
        title="O Futuro da Manutenção."
        subtitle="Nossa visão para os próximos meses. Inovação contínua para manter sua indústria sempre à frente."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="space-y-12">
          {roadmap.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-32 shrink-0 pt-2">
                <span className="text-brand-cyan font-mono font-bold text-xl">{step.quarter}</span>
              </div>
              <Card className="flex-1 border-white/5 hover:border-brand-cyan/20">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white font-display font-bold text-2xl">{step.title}</h3>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-white/5 text-slate-400 border border-white/10 uppercase tracking-widest">
                    {step.status}
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-500 font-light">
                      <div className="size-1 rounded-full bg-brand-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
