/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ChevronRight, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Crown, 
  MessageSquare, 
  CheckCircle2, 
  Info,
  Menu,
  X,
  Smartphone,
  Trophy,
  Dices,
  Plane,
  Coins,
  Cpu,
  RefreshCw,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer";
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm",
    outline: "border-2 border-white/20 hover:border-white/40 text-white",
    gold: "bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black shadow-[0_0_20px_rgba(251,191,36,0.4)]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 backdrop-blur-sm ${className}`}
  >
    {children}
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadLink = "#"; // Replace with "Lien de téléchargement APK ici"

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-amber-500/30">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/icon.png" alt="BetPredictor" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-black text-white tracking-tighter">BET<span className="text-amber-500">PREDICTOR</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-amber-500 transition-colors font-medium">Fonctionnalités</a>
            <a href="#casino" className="hover:text-amber-500 transition-colors font-medium">Casino</a>
            <a href="#premium" className="hover:text-amber-500 transition-colors font-medium">Premium</a>
            <Button variant="gold" className="py-2 px-5 text-sm" onClick={() => window.location.href = downloadLink}>
              <Download className="w-4 h-4" /> Télécharger
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-6 flex flex-col gap-4 overflow-hidden"
            >
              <a href="#features" onClick={() => setIsMenuOpen(false)}>Fonctionnalités</a>
              <a href="#casino" onClick={() => setIsMenuOpen(false)}>Casino</a>
              <a href="#premium" onClick={() => setIsMenuOpen(false)}>Premium</a>
              <Button variant="gold" onClick={() => window.location.href = downloadLink}>
                <Download className="w-4 h-4" /> Télécharger l'application
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full" />
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-amber-500 text-sm font-bold mb-6">
                <Trophy className="w-4 h-4" /> L'app #1 de pronostics intelligents
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                BetPredictor — Pronostics, matchs et stratégies <span className="text-amber-500">casino</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
                Analyse les matchs réels, explore les matchs virtuels, découvre les jeux casino et accède à des outils conçus pour t'aider à prendre de meilleures décisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" className="text-lg py-4 px-8" onClick={() => window.location.href = downloadLink}>
                  <Download className="w-6 h-6" /> Télécharger l'application
                </Button>
                <Button variant="secondary" className="text-lg py-4 px-8" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                  Voir les fonctionnalités
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative perspective-1000 hidden lg:block"
            >
              {/* Fake App Mockup */}
              <div className="relative w-72 h-[580px] mx-auto bg-[#0A0A0A] border-[8px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-xl mx-16 flex items-center justify-center">
                  <div className="w-12 h-1 bg-black rounded-full" />
                </div>
                
                <div className="p-6 pt-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">BetPredictor</span>
                    <div className="w-8 h-8 bg-amber-500/20 rounded-full" />
                  </div>
                  
                  {/* Mock Cards */}
                  <div className="bg-zinc-900 border border-white/5 rounded-2xl p-4 h-32 flex flex-col justify-end">
                    <div className="text-[10px] text-zinc-500 uppercase font-black">Matchs du jour</div>
                    <div className="text-sm font-bold text-white">Real Madrid vs Barça</div>
                    <div className="mt-2 flex gap-2">
                      <div className="h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                        <div className="h-full w-[70%] bg-emerald-500" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/10 rounded-2xl p-4 h-32 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Plane className="w-5 h-5 text-amber-500" />
                      <span className="text-[10px] bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold">PRO</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Aviator Predictor</div>
                      <div className="text-[10px] text-zinc-400">Analyse de seed en cours...</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-zinc-900 border border-white/5 rounded-xl p-3 text-center">
                      <Dices className="mx-auto text-amber-500 w-4 h-4 mb-1" />
                      <div className="text-[10px] font-bold">Casino</div>
                    </div>
                    <div className="bg-zinc-900 border border-white/5 rounded-xl p-3 text-center">
                      <Zap className="mx-auto text-emerald-500 w-4 h-4 mb-1" />
                      <div className="text-[10px] font-bold">Signaux</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute top-1/4 -right-10 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                <div>
                  <div className="text-xs font-bold text-white">Signal Validé</div>
                  <div className="text-[10px] text-zinc-500">Cote 1.85 repérée</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Pourquoi télécharger ? */}
        <section id="features" className="py-20 px-6 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Pourquoi choisir BetPredictor ?" 
              subtitle="Une suite d'outils complets pour ne plus jamais parier à l'aveugle."
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <Target className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Pronostics Réels</h3>
                <p className="text-zinc-400 text-sm">Analyses approfondies pour les matchs du jour avec codes et opportunités de value-bets.</p>
              </Card>
              <Card>
                <Cpu className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Matchs Virtuels</h3>
                <p className="text-zinc-400 text-sm">Outils et stratégies dédiés aux compétitions virtuelles pour dominer l'algorithme.</p>
              </Card>
              <Card>
                <Dices className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Casino Stratégies</h3>
                <p className="text-zinc-400 text-sm">Modules d'analyse pour les jeux casino les plus populaires du moment.</p>
              </Card>
              <Card>
                <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Accès Gratuit</h3>
                <p className="text-zinc-400 text-sm">Crée ton compte et explore les fonctionnalités de base gratuitement pour découvrir l'app.</p>
              </Card>
              <Card>
                <Crown className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Premium Exclusif</h3>
                <p className="text-zinc-400 text-sm">Débloque les modules Pro, les signaux avancés et les stratégies VIP.</p>
              </Card>
              <Card>
                <RefreshCw className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Amélioration Continue</h3>
                <p className="text-zinc-400 text-sm">Nous mettons l'application à jour régulièrement selon les retours de nos utilisateurs.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* 3. Transition: Du Réel au Virtuel */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Du match réel au match virtuel</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
              BetPredictor ne se limite pas aux matchs classiques. L'application accompagne l'utilisateur depuis les matchs réels jusqu'aux matchs virtuels, avec une section casino pensée pour explorer plusieurs types de jeux.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center">
                  <Trophy className="text-white shrink-0" />
                </div>
                <div className="font-bold">Matchs Réels</div>
              </div>
              <ChevronRight className="hidden sm:block text-zinc-700 w-8 h-8" />
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center">
                  <Cpu className="text-amber-500 shrink-0" />
                </div>
                <div className="font-bold">Virtuel & Algorithmie</div>
              </div>
              <ChevronRight className="hidden sm:block text-zinc-700 w-8 h-8" />
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center">
                  <Dices className="text-purple-500 shrink-0" />
                </div>
                <div className="font-bold">Casino Modules</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Jeux Casino Disponibles */}
        <section id="casino" className="py-20 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Jeux Casino Disponibles" 
              subtitle="Des modules d'aide et des outils pour chaque univers casino."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Aviator", desc: "Teste la version gratuite, puis passe à la version Pro pour accéder à des modules plus avancés.", icon: <Plane className="text-red-500" />, color: "border-red-500/20" },
                { title: "JetX", desc: "Des stratégies dédiées pour mieux comprendre les moments d'entrée et de retrait.", icon: <Zap className="text-yellow-500" />, color: "border-yellow-500/20" },
                { title: "CosmoX", desc: "Un univers casino dynamique avec des stratégies en préparation constante.", icon: <RefreshCw className="text-blue-500" />, color: "border-blue-500/20" },
                { title: "Virtuel", desc: "Des outils pensés pour accompagner les matchs virtuels et booster tes analyses.", icon: <Cpu className="text-emerald-500" />, color: "border-emerald-500/20" },
                { title: "Mine", desc: "Un jeu à logique de risque où l'analyse et la prudence sont essentielles.", icon: <Coins className="text-amber-500" />, color: "border-amber-500/20" },
                { title: "Ludo", desc: "Un jeu populaire intégré à l'écosystème complet de BetPredictor.", icon: <Dices className="text-purple-500" />, color: "border-purple-500/20" }
              ].map((game, i) => (
                <motion.div 
                  key={game.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-zinc-900 border ${game.color} rounded-3xl p-8 hover:bg-zinc-800/80 transition-all`}
                >
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                    {game.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{game.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{game.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="inline-flex items-center gap-2 text-zinc-500 bg-white/5 px-6 py-3 rounded-full text-sm">
                <Info className="w-4 h-4" /> D'autres jeux peuvent encore arriver. BetPredictor évolue régulièrement.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Aviator Predictor Special */}
        <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-500 font-bold text-xs mb-6 uppercase tracking-widest">Fonctionnalité Phare</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Aviator Predictor</h2>
              <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                Permet de tester des analyses, d'identifier des fenêtres d'intervention et de consulter des probabilités selon différents modes. La version gratuite permet de découvrir l'outil, tandis que la version Pro donne accès à des modules plus poussés.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Analyse avec seed serveur",
                  "Fenêtres d'intervention optimisées",
                  "Probabilités par zones de multiplicateurs",
                  "Modules ChronoSync et SequenceX",
                  "Résultats clairs et lisibles"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-zinc-950 border border-white/5 rounded-2xl flex items-start gap-4 mb-8">
                <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <p className="text-sm text-zinc-500 italic leading-relaxed">
                  "BetPredictor aide l’utilisateur à mieux analyser les opportunités, à jouer avec plus de stratégie et à améliorer ses chances de résultat, tout en rappelant qu’aucun gain n'est garanti à 100%"
                </p>
              </div>

              <Button variant="gold" onClick={() => window.location.href = downloadLink}>
                Débloquer Aviator Predictor
              </Button>
            </div>

            <div className="flex-1 order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-10 bg-red-500/20 blur-[80px] rounded-full animate-pulse" />
                <div className="bg-zinc-900 border-[8px] border-zinc-800 rounded-[3rem] p-4 w-72 h-[580px] relative z-10 shadow-2xl">
                  {/* Internal Mockup Content */}
                  <div className="h-full rounded-[2.5rem] bg-black overflow-hidden flex flex-col">
                    <div className="p-6 pt-10 text-center">
                      <Plane className="w-12 h-12 text-red-500 mx-auto mb-4" />
                      <div className="text-xl font-black text-white">AVIATOR PRO</div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Analyseur de Vol</div>
                    </div>
                    
                    <div className="flex-1 p-4 flex flex-col gap-3">
                      <div className="bg-zinc-900 rounded-xl p-3 border border-white/5">
                        <div className="text-[10px] text-zinc-500 mb-1">PROBABILITÉ X2+</div>
                        <div className="text-2xl font-black text-emerald-500">87.5%</div>
                      </div>
                      <div className="bg-zinc-900 rounded-xl p-3 border border-white/5">
                        <div className="text-[10px] text-zinc-500 mb-1">PROCHAINE FENÊTRE</div>
                        <div className="text-sm font-bold text-white">14:23:15 — 14:23:45</div>
                      </div>
                      <div className="bg-zinc-900 rounded-xl p-3 border border-white/5 flex-1 flex flex-col justify-between">
                        <div className="text-[10px] text-zinc-500">HISTORIQUE ANALYSÉ</div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {[1.8, 11.2, 4.5, 1.2, 8.9].map((n, i) => (
                            <span key={i} className={`text-[8px] px-1.5 py-0.5 rounded font-bold ${n > 2 ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-400'}`}>
                              {n.toFixed(1)}x
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="w-full h-10 bg-red-600 rounded-xl flex items-center justify-center font-bold text-sm">
                        LANCER L'ANALYSE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Une Expérience Complète */}
        <section id="premium" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Tout ce dont tu as besoin pour l'analyse" 
              subtitle="Une application unique pour explorer le plein potentiel des matchs et du casino."
            />
            
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black border border-white/5 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full" />
              
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h3 className="text-3xl font-black text-white mb-6">Prêt en quelques secondes</h3>
                  <div className="space-y-6">
                    {[
                      { title: "Téléchargement immédiat", desc: "Installe l'APK et accède à l'interface sombre et intuitive." },
                      { title: "Création de compte simple", desc: "Un pseudo suffit pour commencer ton exploration." },
                      { title: "Décoouverte d'Aviator", desc: "Teste les premiers modules gratuitement dès ton arrivée." },
                      { title: "Pronostics de base", desc: "Consulte les premières opportunités sans attendre." }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                        <div>
                          <div className="text-white font-bold text-sm tracking-wide">{step.title}</div>
                          <div className="text-zinc-500 text-xs mt-1">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-800/50 border border-white/5 rounded-3xl p-8">
                  <div className="flex items-center gap-2 text-amber-500 mb-6">
                    <Crown className="w-6 h-6" />
                    <span className="font-black uppercase tracking-widest text-sm">Accès Complet</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Pronostics Gratuit et Premium exclusifs",
                      "Tous les jeux casino débloqués",
                      "Version PRO d'Aviator (Complet)",
                      "Stratégies avancées par jeu",
                      "Contenus exclusifs & signaux",
                      "Accès via code d'activation"
                    ].map(f => (
                      <li key={f} className="flex items-center gap-3 text-zinc-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="gold" className="w-full py-4 text-lg" onClick={() => window.location.href = downloadLink}>
                    <Download className="w-6 h-6" /> Télécharger l'application
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Évolution continue */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center border-t border-white/5 pt-20">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Une application qui s'améliore avec ses utilisateurs</h2>
            <p className="text-lg text-zinc-400 mb-12 italic">
              "BetPredictor est une application évolutive. Plus les utilisateurs l'utilisent, plus l'expérience peut être améliorée : nouvelles idées, ajustements, corrections, optimisation des outils et ajout progressif de nouvelles fonctionnalités."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Mises à jour", desc: "Régulières", icon: <RefreshCw className="w-5 h-5 text-amber-500" /> },
                { label: "Nouveaux Jeux", desc: "Arrivée prévue", icon: <Dices className="w-5 h-5 text-amber-500" /> },
                { label: "Optimisation", desc: "Continue", icon: <Target className="w-5 h-5 text-amber-500" /> },
                { label: "Utilisateurs", desc: "À l'écoute", icon: <Users className="w-5 h-5 text-amber-500" /> }
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  {item.icon}
                  <div className="text-sm font-bold text-white">{item.label}</div>
                  <div className="text-xs text-zinc-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8/9. Confiance & Support */}
        <section className="py-24 px-6 bg-[#050505]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900/50 p-10 rounded-[40px] border border-white/5">
              <ShieldCheck className="w-12 h-12 text-emerald-500 mb-6" />
              <h2 className="text-3xl font-black text-white mb-6">Confiance et sécurité</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                BetPredictor privilégie une expérience simple : un compte, un accès clair aux fonctionnalités, un support disponible et une utilisation des données limitée au nécessaire.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-bold">Compte avec pseudo</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-bold">Accès protége</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-bold">Support 24/7</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-10 rounded-[40px] border border-white/5 flex flex-col justify-center items-center text-center">
              <MessageSquare className="w-12 h-12 text-amber-500 mb-6" />
              <h2 className="text-3xl font-black text-white mb-4">Besoin d'aide ?</h2>
              <p className="text-zinc-400 mb-8 max-w-sm">
                Un support est disponible pour les questions, l'activation premium ou les problèmes d'accès.
              </p>
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <Button variant="secondary" className="px-10" onClick={() => window.open('https://www.facebook.com/betpredictor', '_blank')}>
                  Nous contacter sur Facebook
                </Button>
                <Button variant="outline" className="px-10" onClick={() => window.location.href = 'mailto:betxpredictor@gmail.com'}>
                  Envoyer un e-mail
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-amber-500/10 blur-[150px] rounded-full translate-y-1/2" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Prêt à découvrir BetPredictor ?</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Télécharge l'application, explore les matchs réels, les matchs virtuels et les jeux casino, puis choisis le mode qui correspond à ton niveau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" className="text-xl py-5 px-10" onClick={() => window.location.href = downloadLink}>
                <Download className="w-7 h-7" /> Télécharger l'application
              </Button>
              <Button variant="outline" className="text-xl py-5 px-10" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                Découvrir les fonctionnalités
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="bg-black pt-20 pb-10 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6 text-white text-xl font-black italic">
                <img src="/icon.png" alt="BetPredictor" className="w-8 h-8 rounded-lg" /> <span className="not-italic">BETPREDICTOR</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Leader de l'analyse intelligente pour pronostics sportifs et stratégies casino.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Application</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#features" className="hover:text-amber-500">Pronostics Réels</a></li>
                <li><a href="#casino" className="hover:text-amber-500">Matchs Virtuels</a></li>
                <li><a href="#casino" className="hover:text-amber-500">Jeux Casino</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="https://www.facebook.com/betpredictor" target="_blank" className="hover:text-amber-500">Aide & Contact (Facebook)</a></li>
                <li><a href="mailto:betxpredictor@gmail.com" className="hover:text-amber-500">betxpredictor@gmail.com</a></li>
                <li><a href="#" className="hover:text-amber-500">Confidentialité</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Légal</h4>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Les pronostics et stratégies ne garantissent pas les gains. Les jeux d’argent comportent des risques. Jouez avec responsabilité.
              </p>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-600 text-xs">© 2026 BetPredictor. Tous droits réservés.</div>
            <div className="flex gap-6">
              <div className="text-[10px] text-zinc-700 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded uppercase tracking-[0.2em] font-black">Interdit aux -18 ans</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Mobile CTA (Always visible on scroll) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="md:hidden fixed bottom-6 inset-x-6 z-[60]"
          >
            <Button variant="gold" className="w-full shadow-2xl py-4" onClick={() => window.location.href = downloadLink}>
              <Download className="w-5 h-5" /> Télécharger l'App (APK)
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
