import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';

export const TermsPage = () => {
  return (
    <Layout>
      <PageHeader 
        badge="Legal"
        title="Termos de Uso."
        subtitle="As regras e diretrizes para o uso da plataforma Nodus CMMS."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-4xl mx-auto">
        <div className="prose prose-invert prose-slate max-w-none space-y-12">
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">1. Aceitação dos Termos</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Ao acessar ou usar o Nodus CMMS, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">2. Licença de Uso</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Concedemos uma licença limitada, não exclusiva e intransferível para acessar e usar a plataforma de acordo com o plano contratado.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">3. Responsabilidades do Usuário</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              O usuário é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
