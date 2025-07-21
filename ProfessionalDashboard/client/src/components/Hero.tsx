import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { useLocation } from "wouter";


const Hero = () => {
  const [, setLocation] = useLocation();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 pt-32 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-60 animate-bounce-gentle"></div>
      <div 
        className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-60 animate-bounce-gentle"
        style={{ animationDelay: "1s" }}
      ></div>
      <div 
        className="absolute bottom-80 left-20 w-12 h-12 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-60 animate-bounce-gentle"
        style={{ animationDelay: "2s" }}
      ></div>
      <div 
        className="absolute bottom-60 right-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-60 animate-bounce-gentle"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up">
            Enterprise AI Agent
            <span className="block text-gradient-primary">
              Connect AI to Your Documents, Apps, and Teams
            </span>
          </h1>

          {/* Hero Description */}
          <p 
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Empower your enterprise with unified search, seamless integrations, and intelligent automation. Our AI agent platform delivers context-rich answers through natural language conversations across all your workplace tools.
          </p>

          {/* CTA Button */}
          <motion.div 
            className="text-center mb-16 animate-scale-in"
            style={{ animationDelay: "0.4s" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center gap-3 transition-all duration-300 mx-auto group shadow-xl hover:shadow-2xl transform hover:scale-105"
              onClick={() => setLocation("/pricing")}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Buy Now
              </motion.span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.button>
          </motion.div>


          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-left border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                <span className="text-gradient-primary">60% Faster</span>
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Ticket resolution with AI automation
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/5 animate-pulse-color"></div>
              </div>
            </div>

            <div 
              className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up border border-white/50"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                <span className="text-gradient-secondary">Enterprise Ready</span>
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Built for scalability and security
              </p>
              <div className="flex items-center justify-center gap-1">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
            </div>

            <div 
              className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-right border border-white/50"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                <span className="text-gradient-accent">Global Scale</span>
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Multi-language support for worldwide teams
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium">EN</span>
                <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium">ES</span>
                <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium">FR</span>
                <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium">+20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
