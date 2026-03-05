import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';

export const CookiesPage = () => {
  return (
    <Layout>
      <PageHeader 
        badge="Legal"
        title="Política de Cookies."
        subtitle="Transparência sobre como utilizamos cookies para melhorar sua experiência."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-4xl mx-auto">
        <div className="prose prose-invert prose-slate max-w-none space-y-12">
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">O que são Cookies?</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Cookies são pequenos arquivos de texto armazenados no seu navegador para lembrar suas preferências e melhorar o desempenho da plataforma.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">Como usamos?</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Utilizamos cookies essenciais para autenticação e segurança, cookies de desempenho para entender como você usa o site e cookies de funcionalidade para lembrar suas configurações.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-white text-3xl font-display font-bold tracking-tight">Como gerenciar?</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade de certas partes da plataforma Nodus.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
