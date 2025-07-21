import { MessageCircle, Search, Bot, Globe, Shield, BarChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Conversational AI Interface",
      description: "Interact with enterprise systems using natural language. No complex commands or training required.",
      color: "blue",
      bgColor: "from-blue-500 to-blue-600",
      borderColor: "hover:border-blue-200",
      textColor: "text-blue-600",
      gradientBg: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: Search,
      title: "Unified Knowledge Access",
      description: "Instantly search across documents, tickets, SOPs, and databases from a single interface.",
      color: "green",
      bgColor: "from-green-500 to-emerald-600",
      borderColor: "hover:border-green-200",
      textColor: "text-green-600",
      gradientBg: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Bot,
      title: "Auto Ticket Resolution",
      description: "Reduce response time with autonomous support that resolves common issues automatically.",
      color: "purple",
      bgColor: "from-purple-500 to-purple-600",
      borderColor: "hover:border-purple-200",
      textColor: "text-purple-600",
      gradientBg: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Serve global teams with seamless multilingual AI that understands context in any language.",
      color: "orange",
      bgColor: "from-orange-500 to-orange-600",
      borderColor: "hover:border-orange-200",
      textColor: "text-orange-600",
      gradientBg: "from-orange-500/10 to-yellow-500/10"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Enterprise-grade encryption and access controls keep your data safe and compliant.",
      color: "red",
      bgColor: "from-red-500 to-red-600",
      borderColor: "hover:border-red-200",
      textColor: "text-red-600",
      gradientBg: "from-red-500/10 to-pink-500/10"
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Track performance, identify trends, and optimize workflows with detailed analytics.",
      color: "indigo",
      bgColor: "from-indigo-500 to-indigo-600",
      borderColor: "hover:border-indigo-200",
      textColor: "text-indigo-600",
      gradientBg: "from-indigo-500/10 to-blue-500/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium mb-4">
            <i className="fas fa-magic mr-2"></i>
            Enterprise AI Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for
            <span className="block text-gradient-primary">Enterprise AI</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful features that integrate seamlessly with your existing tools and workflows
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${feature.borderColor} overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradientBg} rounded-bl-3xl`}></div>
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>
                <div className={`flex items-center ${feature.textColor} font-medium group-hover:gap-2 transition-all duration-300`}>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
