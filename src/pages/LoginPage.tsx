import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Factory, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { AuthRepository } from '../infrastructure/repositories';
import { LoginUseCase } from '../application/useCases';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const authRepo = new AuthRepository();
  const loginUseCase = new LoginUseCase(authRepo);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await loginUseCase.execute(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Erro ao entrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0B0F14] text-slate-100 min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #00F0FF 0%, transparent 40%)' }} />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-8 gap-2">
          <div className="w-16 h-16 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Factory className="text-[#00F0FF] size-8" />
          </div>
          <h1 className="text-white tracking-tight text-3xl font-display font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Nodus CMMS
          </h1>
          <p className="text-[#00F0FF] font-display font-medium tracking-widest text-sm uppercase">Portal de Acesso</p>
        </div>

        <div className="bg-[#111827] border border-[#243041] rounded-xl p-8 shadow-2xl backdrop-blur-sm relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00F0FF]/50 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00F0FF]/50 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00F0FF]/50 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00F0FF]/50 rounded-br-xl" />

          <div className="mb-6">
            <h2 className="text-white text-2xl font-display font-bold">Entrar</h2>
            <p className="text-slate-400 text-sm mt-1">Autentique-se para acessar o painel de controle.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input
              label="Email Corporativo"
              placeholder="operador@nodus.ind.br"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="size-5" />}
              required
            />

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-slate-400 text-xs font-mono uppercase tracking-wider">Senha de Acesso</label>
                <a href="#" className="text-[#00F0FF] hover:text-[#00F0FF]/80 text-xs font-medium transition-colors">Esqueci minha senha</a>
              </div>
              <div className="relative">
                <Input
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<Lock className="size-5" />}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <Button
              type="submit"
              size="lg"
              className="mt-4 w-full group"
              disabled={loading}
              icon={ArrowRight}
            >
              {loading ? 'Entrando...' : 'Iniciar Sessão'}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#243041] text-center">
            <p className="text-slate-400 text-sm">
              Não tem conta? <Link to="/register" className="text-[#00F0FF] hover:underline font-medium">Solicitar acesso</Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-[#111827] border border-[#243041] rounded-full px-4 py-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
            <span className="text-slate-400 text-xs font-mono uppercase tracking-wider font-medium">Status: Sistema Operacional</span>
          </div>
        </div>
      </div>
    </div>
  );
};
