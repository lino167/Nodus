import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { motion } from 'motion/react';

export const BlogPage = () => {
  const posts = [
    { title: 'O Futuro da Manutenção Preditiva com IA', date: 'Mar 01, 2026', category: 'Tecnologia', excerpt: 'Como algoritmos de machine learning estão revolucionando a forma como prevemos falhas mecânicas...' },
    { title: '5 Dicas para Reduzir o MTTR na sua Fábrica', date: 'Fev 24, 2026', category: 'Gestão', excerpt: 'Pequenas mudanças no fluxo de trabalho que podem gerar grandes economias de tempo e dinheiro...' },
    { title: 'A Importância da NR-12 na Gestão de Ativos', date: 'Fev 15, 2026', category: 'Compliance', excerpt: 'Entenda como o Nodus CMMS ajuda sua empresa a se manter em conformidade com as normas de segurança...' },
  ];

  return (
    <Layout>
      <PageHeader 
        badge="Nodus Blog"
        title="Insights para a Indústria 4.0."
        subtitle="Artigos técnicos, tendências de mercado e as melhores práticas de gestão de ativos."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col group cursor-pointer">
                <div className="aspect-video bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4 px-2 py-1 rounded bg-brand-dark/80 text-[10px] font-mono text-brand-cyan border border-brand-cyan/20 uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="text-slate-500 text-xs font-mono">{post.date}</div>
                  <h3 className="text-white font-display font-bold text-xl group-hover:text-brand-cyan transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest">
                  Ler Artigo <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
