import { motion } from 'motion/react';
import { Shield, Brain, Zap, Cloud, CheckCircle, ChevronRight, Menu, X, Link, Files, FolderTree, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white border-b border-slate-200 shrink-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between h-14 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-sm">
                S
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">SecureShare AI</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">How it Works</a>
              <a href="#pricing" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">Pricing</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-1.5 transition-colors">
                Sign In
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded text-sm font-bold transition-colors shadow-sm">
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-6 pt-2 pb-4 space-y-1"
          >
            <a href="#features" className="block py-2 text-sm font-medium text-slate-700 hover:text-indigo-600">Features</a>
            <a href="#how-it-works" className="block py-2 text-sm font-medium text-slate-700 hover:text-indigo-600">How it Works</a>
            <a href="#pricing" className="block py-2 text-sm font-medium text-slate-700 hover:text-indigo-600">Pricing</a>
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button className="w-full text-center py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded">Sign In</button>
              <button className="w-full text-center py-2 text-sm font-bold text-white bg-indigo-600 rounded">Get Started</button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden flex-1 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6 relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              Introducing Smart AI Search
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
              Intelligent File Sharing for Modern Teams
            </h1>
            <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Store, organize, and share your files securely. Let our AI automatically tag, categorize, and make everything instantly searchable via natural language.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
                Start for free
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-2.5 rounded font-bold text-sm transition-colors shadow-sm">
                View demo
              </button>
            </div>
          </motion.div>

          {/* High Density UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 mx-auto max-w-5xl"
          >
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col md:flex-row h-[400px]">
              {/* Sidebar Mockup */}
              <div className="hidden md:flex w-48 bg-slate-900 text-slate-300 flex-col shrink-0">
                <div className="p-4 border-b border-slate-800 flex items-center gap-2">
                  <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center font-bold text-white text-xs">S</div>
                  <span className="font-bold text-white text-sm tracking-tight">SecureCloud</span>
                </div>
                <div className="flex-1 p-3 space-y-1">
                  <div className="px-2 py-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">My Drive</div>
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-slate-800 text-white rounded text-xs">
                    <Cloud className="w-3.5 h-3.5" /> All Files
                  </div>
                  <div className="pt-3 px-2 py-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Intelligence</div>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-indigo-400 rounded text-xs">
                    <Brain className="w-3.5 h-3.5" /> AI Insights
                  </div>
                </div>
              </div>
              
              {/* Main Content Mockup */}
              <div className="flex-1 flex flex-col bg-slate-50">
                <div className="h-12 bg-white border-b border-slate-200 flex items-center px-4 shrink-0">
                  <div className="relative w-full max-w-md">
                    <Brain className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <div className="w-full bg-slate-100 border-none rounded py-1.5 pl-8 pr-3 text-xs text-slate-500 italic">
                      Find invoices from last month...
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4 grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div className="w-8 h-8 bg-red-100 text-red-600 rounded flex items-center justify-center font-bold text-[10px] mb-2">PDF</div>
                    <div>
                      <div className="h-1.5 w-full bg-slate-200 rounded mb-1.5"></div>
                      <div className="h-1.5 w-2/3 bg-slate-200 rounded mb-3"></div>
                      <div className="flex gap-1">
                        <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[9px] font-semibold uppercase">Finance</span>
                        <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded text-[9px] font-semibold uppercase">+2</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-bold text-[10px] mb-2">IMG</div>
                    <div>
                      <div className="h-1.5 w-full bg-slate-200 rounded mb-1.5"></div>
                      <div className="h-1.5 w-1/2 bg-slate-200 rounded mb-3"></div>
                      <div className="flex gap-1">
                        <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[9px] font-semibold uppercase">Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 p-3 m-4 rounded-lg text-white shadow-sm">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">AI Optimizer</h4>
                  </div>
                  <p className="text-xs text-slate-300 mb-2">Found 14 duplicate files. Save 2.4 GB.</p>
                  <button className="w-full py-1.5 bg-indigo-500 text-white rounded text-[10px] font-bold">Optimize Now</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Enterprise Grade Features</h2>
            <p className="mt-2 text-sm text-slate-500">Military-grade encryption meets advanced AI.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Brain className="w-5 h-5 text-indigo-600" />}
              title="AI Auto-Tagging & OCR"
              description="Automatically generate tags, categorize content, and extract searchable text from images."
            />
            <FeatureCard 
              icon={<Shield className="w-5 h-5 text-emerald-600" />}
              title="Military-Grade Security"
              description="End-to-end encryption, automated scanning, and customizable access controls."
            />
            <FeatureCard 
              icon={<Zap className="w-5 h-5 text-amber-500" />}
              title="Natural Language Search"
              description="Find files instantly using conversational queries like 'show me the presentation'."
            />
            <FeatureCard 
              icon={<Link className="w-5 h-5 text-blue-500" />}
              title="Secure File Sharing"
              description="Create expiring links, set passwords, and manage permissions for shared files easily."
            />
            <FeatureCard 
              icon={<Files className="w-5 h-5 text-rose-500" />}
              title="Duplicate Detection"
              description="AI storage optimization automatically finds and suggests removing duplicate files."
            />
            <FeatureCard 
              icon={<FolderTree className="w-5 h-5 text-violet-500" />}
              title="Smart Categorization"
              description="Intelligently groups your documents, images, and videos into logical folders."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 shrink-0">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center font-bold text-white text-xs">S</div>
              <span className="font-bold text-sm text-white">SecureShare AI</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm mb-6 leading-relaxed">
              The intelligent, secure, and modern way to manage your files. Built with cutting-edge AI technology for modern teams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3 text-xs">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3 text-xs">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-[10px] text-slate-400 mb-3">Subscribe to our newsletter for the latest AI insights.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-slate-800 text-xs text-white border-none rounded-l px-3 py-2 w-full focus:ring-1 focus:ring-indigo-500 outline-none" />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-r flex items-center justify-center transition-colors">
                <ArrowRight className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-[10px] text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-wider">
          <p>© 2026 SecureShare AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-10 h-10 rounded border border-slate-200 bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
