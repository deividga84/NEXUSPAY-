import React, { useState } from 'react';
import { 
  CheckCircle, 
  TrendingUp, 
  CreditCard, 
  Zap, 
  BarChart3, 
  Smartphone, 
  PlayCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Check,
  Lock,
  Loader2,
  Shield
} from 'lucide-react';

// === COLOQUE SEU NÚMERO AQUI ===
// Exemplo: "5571991825348" (Apenas números, com DDD e 55 do Brasil na frente)
const whatsappNumber = "5571991825348"; 

// === COMPONENTES VISUAIS (LOGOTIPO) ===

const NexusPayLogo = ({ className = "h-8" }: { className?: string }) => (
  <svg viewBox="0 0 350 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="NexusPay Logo">
    <defs>
      <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <path d="M20 10 H 60 L 45 45 H 5 Z" fill="url(#mainGrad)" />
    <path d="M45 35 H 85 L 70 70 H 30 Z" fill="#1e40af" />
    <path d="M45 35 H 60 L 52 52 H 38 Z" fill="white" fillOpacity="0.1" />
    <g transform="translate(100, 52)">
        <text fontFamily="sans-serif" fontWeight="800" fontSize="48" fill="white" letterSpacing="-2">
            Nexus<tspan fill="#3b82f6">Pay</tspan>
        </text>
    </g>
  </svg>
);

// === APP PRINCIPAL ===

export default function App() {
  const [userType, setUserType] = useState<'producer' | 'affiliate'>('producer'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Estado do Modal de Cadastro (Lead Gen)
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simula envio e redireciona para o WhatsApp
    setTimeout(() => {
      setFormStatus('success');
      const message = `Olá! Quero criar minha conta na NexusPay.\n\nNome: ${formData.name}\nEmail: ${formData.email}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Abre o WhatsApp em nova aba
      window.open(url, '_blank');
    }, 1500);
  };

  const content = {
    producer: {
      heroTitle: "Crie, Hospede e Escale seu Império Digital",
      heroSubtitle: "A plataforma blindada para quem joga o jogo do milhão. Checkout de ultra-conversão, área de membros cinematográfica e infraestrutura de escala infinita.",
      cta: "Quero Vender Mais",
      features: [
        { title: "Checkout Transparente", desc: "Aumente seu ROI em até 30% com um checkout sem fricção e one-click buy.", icon: <CreditCard className="w-6 h-6 text-blue-400" /> },
        { title: "Área de Membros Cinema", desc: "Entrega de conteúdo estilo streaming premium. Seus alunos viciados no seu conteúdo.", icon: <PlayCircle className="w-6 h-6 text-cyan-400" /> },
        { title: "Recuperação Automática", desc: "Máquina de vendas invisível: e-mail e WhatsApp automáticos para carrinhos abandonados.", icon: <Zap className="w-6 h-6 text-yellow-400" /> },
        { title: "Proteção DRM Militar", desc: "Tecnologia anti-pirataria avançada. Seus vídeos e PDFs protegidos contra vazamentos.", icon: <Shield className="w-6 h-6 text-red-500" /> },
      ],
      benefitTitle: "O arsenal secreto dos top players",
      benefitList: [
        "Order Bump, Upsell e Downsell nativos",
        "Integração instantânea com e-notas",
        "Player de vídeo 4K proprietário (zero custo)",
        "Split de pagamento automático em tempo real"
      ]
    },
    affiliate: {
      heroTitle: "Afilie-se aos Produtos que Realmente Vendem",
      heroSubtitle: "O marketplace da elite. Comissões garantidas, funis validados e os produtos com maior LTV do mercado digital brasileiro.",
      cta: "Quero Lucrar Como Afiliado",
      features: [
        { title: "Comissões Instantâneas", desc: "Vendeu, o PIX caiu. Sistema exclusivo de antecipação inteligente de saque.", icon: <TrendingUp className="w-6 h-6 text-blue-400" /> },
        { title: "Rastreamento Global", desc: "Cookies eternos e atribuição multi-touch à prova de falhas.", icon: <BarChart3 className="w-6 h-6 text-cyan-400" /> },
        { title: "Kits de Venda Prontos", desc: "Acesso a criativos de alta conversão, copys validadas e VSLs que convertem.", icon: <CheckCircle className="w-6 h-6 text-yellow-400" /> },
        { title: "Notificações em Tempo Real", desc: "O som do 'plim' no seu bolso a cada venda realizada. App nativo completo.", icon: <Smartphone className="w-6 h-6 text-red-500" /> },
      ],
      benefitTitle: "Sua vantagem desleal como afiliado",
      benefitList: [
        "Vitrine com temperatura real de vendas",
        "Hotlinks dinâmicos com parâmetros UTM",
        "Pixel server-side (Facebook/Google/TikTok)",
        "Relatórios de comissão detalhados"
      ]
    }
  };

  const currentContent = userType === 'producer' ? content.producer : content.affiliate;
  
  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`;

  return (
    <div className="font-sans text-slate-300 bg-slate-950 min-h-screen flex flex-col selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer hover:opacity-90 transition-opacity" onClick={() => window.scrollTo(0,0)}>
               <NexusPayLogo className="h-9 w-auto" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-400 hover:text-white font-medium transition duration-200 text-sm tracking-wide">Recursos</a>
              <a href="#pricing" className="text-slate-400 hover:text-white font-medium transition duration-200 text-sm tracking-wide">Preços</a>
              <div className="h-6 w-px bg-white/10"></div>
              <button onClick={() => setShowSignup(true)} className="text-slate-300 font-semibold hover:text-white transition text-sm">Entrar</button>
              <button 
                onClick={() => setShowSignup(true)}
                className="bg-white text-slate-950 hover:bg-blue-50 px-6 py-2.5 rounded-full font-bold transition shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm"
              >
                Criar Conta Grátis
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 p-2 hover:bg-white/5 rounded-lg transition">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-white/5 p-4 shadow-2xl animate-fade-in absolute w-full z-40">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-300 font-medium p-2 hover:bg-white/5 rounded" onClick={() => setIsMenuOpen(false)}>Recursos</a>
              <a href="#pricing" className="text-slate-300 font-medium p-2 hover:bg-white/5 rounded" onClick={() => setIsMenuOpen(false)}>Preços</a>
              <button 
                onClick={() => { setShowSignup(true); setIsMenuOpen(false); }}
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-bold shadow-lg shadow-blue-900/20 active:scale-95 transition"
              >
                Criar Conta Grátis
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Modal de Cadastro (Lead Gen) */}
      {showSignup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden">
            <button onClick={() => setShowSignup(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition">
              <X size={24} />
            </button>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <NexusPayLogo className="h-8 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">Crie sua conta grátis</h3>
                <p className="text-slate-400 text-sm">Junte-se a 15.000+ empreendedores digitais.</p>
              </div>

              {formStatus === 'success' ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Redirecionando...</h4>
                  <p className="text-slate-400 mb-6">Estamos te levando para o atendimento no WhatsApp para finalizar seu acesso.</p>
                </div>
              ) : (
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">E-mail Profissional</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-2 mt-4"
                  >
                    {formStatus === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Acessar Plataforma <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Ao continuar, você concorda com nossos Termos de Uso.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-28 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] opacity-30"></div>
          
          <div className="absolute inset-0 opacity-10 mix-blend-soft-light" style={{ backgroundImage: noiseTexture }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex bg-slate-900/80 border border-white/10 p-1.5 rounded-full mb-12 backdrop-blur-sm shadow-xl">
            <button 
              onClick={() => setUserType('producer')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                userType === 'producer' 
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              Sou Produtor
            </button>
            <button 
              onClick={() => setUserType('affiliate')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                userType === 'affiliate' 
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              Sou Afiliado
            </button>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              {currentContent.heroTitle}
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed md:px-0">
            {currentContent.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
            <button 
              onClick={() => setShowSignup(true)}
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:-translate-y-1 group"
            >
              {currentContent.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-5 rounded-xl font-bold text-lg transition hover:-translate-y-1">
              Ver Demonstração
              <PlayCircle className="w-5 h-5" />
            </button>
          </div>

          {/* Dashboard Preview - Conversion Optimized */}
          <div className="relative max-w-5xl mx-auto perspective-1000">
            <div className="bg-slate-900 rounded-2xl shadow-2xl p-2 sm:p-4 border border-white/10 relative z-20 transform md:rotate-x-2 hover:rotate-x-0 transition-transform duration-700">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 -z-10"></div>
              
              <div className="flex items-center justify-between mb-4 px-4 py-2 border-b border-white/5 bg-slate-950/50 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-600 font-mono flex items-center gap-2">
                    <Lock size={10} /> dashboard.nexuspay.com.br
                </div>
              </div>
              
              <div className="bg-slate-950 rounded-lg p-4 md:p-8 overflow-hidden">
                 <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
                    <div>
                        <p className="text-slate-400 text-sm mb-1">Receita Total (Últimos 30 dias)</p>
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">R$ 142.850,00</h3>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-bold text-sm">+24.5% vs mês anterior</span>
                    </div>
                 </div>

                 {/* Simulated Graph */}
                 <div className="h-48 flex items-end justify-between gap-2 px-2 pb-4 border-b border-white/5 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent"></div>
                    {[35, 45, 30, 60, 55, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                        <div key={i} className="w-full bg-blue-600/80 rounded-t-sm hover:bg-blue-500 transition-colors relative group" style={{height: `${h}%`}}>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                                R$ {h}k
                            </div>
                        </div>
                    ))}
                 </div>
                 <div className="flex justify-between mt-4 text-xs text-slate-500 font-mono">
                    <span>01 DEZ</span>
                    <span>15 DEZ</span>
                    <span>30 DEZ</span>
                 </div>
              </div>
            </div>
            
            {/* Social Proof Floating Card */}
            <div className="absolute -right-6 top-10 bg-slate-900/95 backdrop-blur border border-blue-500/30 p-4 rounded-xl shadow-2xl hidden lg:block animate-bounce-slow max-w-[200px]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
                        RF
                    </div>
                    <div>
                        <div className="flex text-yellow-500 mb-0.5">
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
                            <Star size={10} fill="currentColor" />
        