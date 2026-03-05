import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPage = () => {
  return (
    <Layout>
      <PageHeader 
        badge="Contato"
        title="Vamos Conversar."
        subtitle="Dúvidas, demonstrações ou parcerias? Nossa equipe está pronta para ajudar sua indústria a decolar."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-white text-3xl font-display font-bold tracking-tight">Canais de Atendimento</h2>
              <p className="text-slate-400 font-light leading-relaxed max-w-md">
                Escolha o canal mais conveniente para você. Respondemos em até 24 horas úteis.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'contato@nodus.industries' },
                { icon: Phone, label: 'Telefone', value: '+55 (11) 4004-0000' },
                { icon: MapPin, label: 'Escritório', value: 'Av. Paulista, 1000 - São Paulo, SP' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="size-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                    <item.icon className="size-6 text-brand-cyan" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-white font-display font-bold text-lg">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Nome</label>
                  <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-cyan outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Email</label>
                  <input type="email" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-cyan outline-none transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Assunto</label>
                <select className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-cyan outline-none transition-colors appearance-none">
                  <option>Demonstração do Produto</option>
                  <option>Suporte Técnico</option>
                  <option>Parcerias</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-500">Mensagem</label>
                <textarea rows={4} className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-cyan outline-none transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <Button className="w-full h-14 rounded-xl glow-cyan gap-3">
                Enviar Mensagem <Send className="size-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </Layout>
  );
};
