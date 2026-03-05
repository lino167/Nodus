import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';

export const PrivacyPage = () => {
  return (
    <Layout>
      <PageHeader 
        badge="Legal"
        title="Política de Privacidade."
        subtitle="Sua privacidade e a segurança dos seus dados industriais são nossa prioridade absoluta."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-4xl mx-auto">
        <div className="prose prose-invert prose-slate max-w-none space-y-12">
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">1. Coleta de Dados</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Coletamos apenas as informações necessárias para fornecer nossos serviços de CMMS, incluindo dados de ativos, registros de manutenção e informações de usuários autorizados.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">2. Uso das Informações</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Os dados coletados são utilizados exclusivamente para o funcionamento da plataforma Nodus, geração de relatórios analíticos para sua empresa e melhoria contínua dos nossos algoritmos de manutenção preditiva.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">3. Segurança dos Dados</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Utilizamos criptografia de ponta a ponta (AES-256) para todos os dados em repouso e protocolos TLS 1.3 para dados em trânsito. Seus dados nunca são compartilhados com terceiros sem consentimento explícito.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
