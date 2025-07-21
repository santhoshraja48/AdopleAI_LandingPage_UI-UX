import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import logoImage from "@assets/image_1753097228105.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="Adople AI Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold">Adople</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Enterprise AI Agent that connects your AI assistants to organizational 
              documents, apps, and teams. Featuring AI for Work, Service, and Process 
              automation with unified search capabilities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <i className="fab fa-twitter text-slate-300 group-hover:text-white"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <i className="fab fa-linkedin-in text-slate-300 group-hover:text-white"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <i className="fab fa-github text-slate-300 group-hover:text-white"></i>
              </a>
            </div>
          </div>

          {/* AI Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">AI Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <i className="fas fa-briefcase text-xs group-hover:text-blue-400"></i>
                  AI for Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <i className="fas fa-headset text-xs group-hover:text-blue-400"></i>
                  AI for Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <i className="fas fa-cogs text-xs group-hover:text-blue-400"></i>
                  AI for Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <i className="fas fa-search text-xs group-hover:text-blue-400"></i>
                  Unified Search
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <i className="fas fa-home text-xs group-hover:text-blue-400"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <i className="fas fa-users text-xs group-hover:text-blue-400"></i>
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <i className="fas fa-credit-card text-xs group-hover:text-blue-400"></i>
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <i className="fas fa-shield-alt text-xs group-hover:text-blue-400"></i>
                  Enterprise Security
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-slate-300" />
                </div>
                <span className="text-slate-300">enterprise@adople.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-slate-300" />
                </div>
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-slate-300" />
                </div>
                <span className="text-slate-300">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-center md:text-left">
              &copy; 2025 Adople AI. Trusted by 28+ enterprise clients worldwide. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
