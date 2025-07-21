import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, Bot, Zap, Building, CheckCircle } from "lucide-react";
import logoImage from "@assets/image_1753097228105.png";

const Dropdown = ({
  title,
  children,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (!(event.target as Element).closest("[data-dropdown-trigger]")) {
          onToggle();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div
      className="relative flex flex-col items-center"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        data-dropdown-trigger
        onClick={onToggle}
        className="flex items-center gap-1 px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180": ""
          }`}
        />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
      </button>

      {isOpen && (
      <div className="fixed top-full mt-1 left-20 w-screen max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 z-50 animate-fade-in-up ml-5">
          <div className="p-8">{children}</div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [location] = useLocation();

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleMouseEnter = (dropdownName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  const isActivePath = (path: string) => {
    return location === path || (path !== "/" && location.startsWith(path));
  };

  const platformContent = (
    <div className="flex justify-start w-full pl-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl p-6">
        {/* Overview */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <img 
                src={logoImage} 
                alt="Adople AI Logo" 
                className="w-6 h-6 object-contain"
              />
            </div>
            Overview
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Adople is a cutting-edge AI-powered assistant that transforms
            enterprise productivity. From automating support tickets to
            simplifying knowledge discovery, our unified platform empowers teams
            to get work done faster using natural language.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              AI-driven automation for workflows, answers, and insights
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              24/7 support with contextual understanding
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Built for scalability and secure enterprise environments
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            Features
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-slate-900 text-sm">
                Conversational AI Interface
              </h4>
              <p className="text-xs text-slate-600">
                Interact with enterprise systems in plain language
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 text-sm">
                Unified Knowledge Access
              </h4>
              <p className="text-xs text-slate-600">
                Instantly search across documents, tickets, SOPs, and more
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 text-sm">
                Auto Ticket Resolution
              </h4>
              <p className="text-xs text-slate-600">
                Reduce response time with autonomous support
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 text-sm">
                Multi-language Support
              </h4>
              <p className="text-xs text-slate-600">
                Serve global teams with seamless multilingual AI
              </p>
            </div>
          </div>
        </div>

        {/* By Department */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Building className="w-4 h-4 text-white" />
            </div>
            By Department
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-slate-900 text-sm">IT</h4>
              <p className="text-xs text-slate-600">
                Automate troubleshooting, access SOPs, triage issues
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 text-sm">HR</h4>
              <p className="text-xs text-slate-600">
                Answer policy questions, onboard employees, schedule tasks
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 text-sm">Sales</h4>
              <p className="text-xs text-slate-600">
                Retrieve lead data, update CRM, prep for meetings
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 text-sm">Support</h4>
              <p className="text-xs text-slate-600">
                Auto-resolve tickets, deflect FAQs, assist agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gradient-to-r from-blue-200 to-purple-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_0_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_2px_rgba(0,0,0,0.2)]">
                  <img 
                    src={logoImage} 
                    alt="Adople AI Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-gradient-primary">Adople AI</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <Link
                to="/"
                className={`px-4 py-2 transition-colors duration-200 font-medium relative group ${
                  isActivePath("/") ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                  isActivePath("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
              
              <Dropdown
                title="Platform"
                isOpen={openDropdown === "platform"}
                onToggle={() => handleDropdownToggle("platform")}
                onMouseEnter={() => handleMouseEnter("platform")}
                onMouseLeave={handleMouseLeave}
              >
                {platformContent}
              </Dropdown>

              <Link
                to="/customers"
                className={`px-4 py-2 transition-colors duration-200 font-medium relative group ${
                  isActivePath("/customers") ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                Customers
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                  isActivePath("/customers") ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
              
              <Link
                to="/pricing"
                className={`px-4 py-2 transition-colors duration-200 font-medium relative group ${
                  isActivePath("/pricing") ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                Pricing
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                  isActivePath("/pricing") ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md border-t border-gray-200 rounded-b-lg">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-2 text-base font-medium text-slate-700">
                Platform
              </div>
              <Link
                to="/customers"
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Customers
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
