import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Shield, Lock, Eye, Server } from 'lucide-react';

export const SecurityPage = () => {
  return (
    <Layout>
      <PageHeader 
        badge="Segurança"
        title="Segurança de Nível Industrial."
        subtitle="Protegemos seus ativos digitais com o mesmo rigor que você protege seus ativos físicos."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            { icon: Shield, title: 'Criptografia de Ponta', desc: 'Dados protegidos com AES-256 e TLS 1.3 em todas as camadas.' },
            { icon: Lock, title: 'MFA Obrigatório', desc: 'Autenticação de dois fatores para todos os usuários administrativos.' },
            { icon: Eye, title: 'Auditoria Completa', desc: 'Logs detalhados de todas as ações realizadas no sistema.' },
            { icon: Server, title: 'Backups Redundantes', desc: 'Sincronização em tempo real em múltiplas regiões geográficas.' },
          ].map((item, i) => (
            <div key={i}>
              <Card className="flex gap-6 items-start h-full">
                <div className="size-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                  <item.icon className="size-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
