import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Building2, Eye, EyeOff, Factory, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#0B0F14] text-slate-100 min-h-screen flex flex-col antialiased">
      <header className="flex items-center justify-between border-b border-[#243041] bg-[#0B0F14]/80 backdrop-blur-sm px-10 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-4 text-white">
          <Factory className="size-6 text-[#00F0FF]" />
          <h2 className="text-white text-xl font-bold tracking-tight">Nodus CMMS</h2>
        </div>
        <Link to="/login" className="text-slate-400 hover:text-[#00F0FF] transition-colors text-sm font-medium flex items-center gap-2">
          Já tenho conta — Entrar
          <ArrowRight className="size-4" />
        </Link>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="hidden lg:flex w-full lg:w-5/12 bg-[#131A22] border-r border-[#243041] flex-col justify-between p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #283639 1px, transparent 1px), linear-gradient(to bottom, #283639 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-[#00F0FF]/10 rounded-xl mb-8 border border-[#00F0FF]/20">
              <Factory className="text-[#00F0FF] size-10" />
            </div>
            <h1 className="text-white text-5xl font-black leading-tight tracking-tight mb-6">Criar conta</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Comece a organizar a manutenção da sua planta em minutos. A plataforma definitiva para gestão industrial.
            </p>
          </div>

          <div className="relative z-10 mt-12 bg-[#0B0F14]/50 p-6 rounded-xl border border-[#243041] backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#00F0FF] font-mono text-sm uppercase tracking-wider">System Status: Online</span>
            </div>
            <div className="w-full bg-[#243041] h-1 rounded-full overflow-hidden">
              <div className="bg-[#00F0FF] w-full h-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center p-6 lg:p-12">
          <div className="w-full max-w-[540px] flex flex-col gap-6">
            <form className="flex flex-col gap-5">
              <Input label="Nome completo" placeholder="Digite seu nome completo" icon={<User className="size-5" />} />
              <Input label="Email corporativo" placeholder="email@suaempresa.com" type="email" icon={<Mail className="size-5" />} />
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Input label="Empresa" placeholder="Nome da empresa" className="flex-1" icon={<Building2 className="size-5" />} />
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-slate-100 font-mono text-xs uppercase tracking-wider">Segmento</label>
                  <select className="w-full bg-[#0B0F14] border border-[#243041] rounded text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] h-12 px-4 appearance-none">
                    <option value="">Selecione</option>
                    <option value="textil">Têxtil</option>
                    <option value="metalurgica">Metalúrgica</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="relative flex-1">
                  <Input label="Senha" placeholder="Crie uma senha forte" type={showPassword ? 'text' : 'password'} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[38px] text-slate-500">
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
                <Input label="Confirmar Senha" placeholder="Repita a senha" type="password" className="flex-1" />
              </div>

              <div className="flex items-start gap-3 mt-2">
                <input type="checkbox" className="mt-1 rounded border-[#243041] bg-[#0B0F14] text-[#00F0FF]" />
                <label className="text-sm text-slate-400">
                  Li e aceito os <a href="#" className="text-[#00F0FF] hover:underline">Termos e Condições</a> e a <a href="#" className="text-[#00F0FF] hover:underline">Política de Privacidade</a>.
                </label>
              </div>

              <Button size="lg" className="w-full uppercase tracking-wide" icon={ArrowRight}>
                Criar conta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
