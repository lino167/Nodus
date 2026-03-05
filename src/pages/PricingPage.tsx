import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const PricingPage = () => {
  const plans = [
    { name: 'Starter', price: '499', features: ['Até 50 Ativos', 'Bot Telegram (3 técnicos)', 'Dashboards Básicos', 'Suporte Email'], popular: false },
    { name: 'Professional', price: '1.299', features: ['Até 250 Ativos', 'Bot Telegram (15 técnicos)', 'Analytics Completo', 'Gestão de Estoque', 'Suporte Prioritário'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Ativos Ilimitados', 'Bot Telegram Ilimitado', 'Integração ERP/SAP', 'SLA Garantido', 'Gerente de Conta'], popular: false },
  ];

  return (
    <Layout>
      <PageHeader 
        badge="Preços"
        title="Investimento com Retorno Garantido."
        subtitle="Planos flexíveis para indústrias de todos os tamanhos. Sem letras miúdas."
      />
      
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex"
            >
              <div className={cn(
                "w-full p-10 rounded-[2.5rem] border flex flex-col transition-all duration-500",
                plan.popular 
                  ? "bg-brand-cyan text-brand-dark border-brand-cyan shadow-[0_20px_50px_rgba(0,240,255,0.2)] scale-105 z-10" 
                  : "bg-brand-surface text-white border-white/5 hover:border-white/10"
              )}>
                <div className="mb-8">
                  <h3 className={cn("text-xl font-display font-bold mb-2 uppercase tracking-widest", plan.popular ? "text-brand-dark/60" : "text-slate-500")}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-mono opacity-60">R$</span>
                    <span className="text-5xl font-display font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-sm font-mono opacity-60">/mês</span>}
                  </div>
                </div>
                
                <ul className="space-y-5 mb-12 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm font-light">
                      <div className={cn("size-1.5 rounded-full", plan.popular ? "bg-brand-dark" : "bg-brand-cyan")} />
                      {f}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={cn(
                    "w-full h-14 rounded-2xl text-base font-bold transition-all",
                    plan.popular 
                      ? "bg-brand-dark text-white hover:bg-brand-dark/90" 
                      : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                  )}
                >
                  {plan.price === 'Custom' ? 'Falar com Vendas' : 'Começar Agora'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
