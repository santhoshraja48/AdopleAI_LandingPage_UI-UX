import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  CheckCircle,
  Bot,
  Workflow,
  HeadphonesIcon,
  BrainCircuit,
  MessageSquare,
  Sparkles,
  Zap,
  CircuitBoard,
  Brain,
  Diamond,
  Star
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Import client logos
import tmobileLogo from '@assets/image (2)_1753100131100.png';
import storiboardLogo from '@assets/image (1)_1753100131102.png';
import syrahealthLogo from '@assets/image_1753100131103.png';
import logo1 from '@assets/logo1_1753100131108.avif';
import logo2 from '@assets/logo2_1753100131109.avif';
import logo3 from '@assets/logo3_1753100131110.avif';
import logo4 from '@assets/logo4_1753100131111.avif';
import logo5 from '@assets/logo5_1753100131112.avif';
import logo6 from '@assets/logo6_1753100131113.avif';
import logo7 from '@assets/logo7_1753100131115.avif';
import logo8 from '@assets/logo8_1753100131116.avif';
import logo9 from '@assets/logo9_1753100131117.avif';
import logo10 from '@assets/logo10_1753100131118.avif';
import logo11 from '@assets/logo11_1753100131107.avif';
import logo12 from '@assets/logo12_1753100131106.avif';
import logo13 from '@assets/logo13_1753100131105.avif';
import logo14 from '@assets/logo14_1753100131104.avif';

const AIUseCases = () => {
  const useCases = [
    {
      id: 'work',
      title: 'AI for Work',
      description: 'Streamline daily operations and enhance team collaboration.',
      subtitle: 'Unified document management and knowledge sharing that integrates seamlessly into your workflow.',
      features: [
        'Unified document search across all platforms',
        'Instant access to company knowledge and best practices',
        'Team collaboration through Slack, Teams, and Gmail integration',
        'Self-service analytics dashboards for tracking performance'
      ],
      icon: <BrainCircuit className="w-12 h-12" />,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      darkBgGradient: 'dark:from-blue-950/20 dark:to-indigo-950/20'
    },
    {
      id: 'service',
      title: 'AI for Service',
      description: 'Transform customer support with AI-powered assistance.',
      subtitle: 'Real-time customer query resolution with multi-channel integration for superior service delivery.',
      features: [
        'AI-assisted customer support with instant query access',
        'Multi-channel integration with Zendesk, HubSpot, Salesforce',
        'Real-time service performance analytics and tracking',
        'Context-aware responses for improved customer satisfaction'
      ],
      icon: <HeadphonesIcon className="w-12 h-12" />,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      darkBgGradient: 'dark:from-green-950/20 dark:to-emerald-950/20'
    },
    {
      id: 'process',
      title: 'AI for Process',
      description: 'Automate and optimize business processes for enhanced efficiency.',
      subtitle: 'Intelligent process automation with compliance monitoring and semantic content discovery.',
      features: [
        'Automated ETL and data integration from internal systems',
        'Semantic indexing and tagging with NLP capabilities',
        'Role-based access control and compliance monitoring',
        'Project management insights from Jira, GitHub, and Asana'
      ],
      icon: <Workflow className="w-12 h-12" />,
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      darkBgGradient: 'dark:from-purple-950/20 dark:to-violet-950/20'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200/30 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Enterprise AI Agent Platform
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Connect AI assistants to your organizational documents, apps, and teams. Empower businesses with unified search, seamless integrations, and intelligent automation.
          </p>
        </motion.div>

        {/* Use Cases Sections */}
        <div className="space-y-24">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Content Side */}
                <div className="order-2 lg:order-1">
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-xl 
                    bg-gradient-to-br ${useCase.gradient} text-white mb-6
                    shadow-lg group-hover:shadow-xl transition-shadow duration-300
                  `}>
                    {useCase.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    {useCase.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xl text-slate-600 dark:text-slate-300 font-medium mb-4">
                    {useCase.description}
                  </p>
                  
                  {/* Subtitle */}
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                    {useCase.subtitle}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {useCase.features.map((feature, idx) => {
                      // Define fancy AI-themed bullet point icons
                      const bulletIcons = [
                        <Sparkles className={`w-5 h-5 text-transparent bg-gradient-to-br ${useCase.gradient} bg-clip-text`} />,
                        <Zap className={`w-5 h-5 text-transparent bg-gradient-to-br ${useCase.gradient} bg-clip-text`} />,
                        <CircuitBoard className={`w-5 h-5 text-transparent bg-gradient-to-br ${useCase.gradient} bg-clip-text`} />,
                        <Brain className={`w-5 h-5 text-transparent bg-gradient-to-br ${useCase.gradient} bg-clip-text`} />
                      ];
                      
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {bulletIcons[idx % bulletIcons.length]}
                          </div>
                          <span className="text-slate-600 dark:text-slate-300">
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>


                </div>

                {/* Image/Interface Side */}
                <div className="order-1 lg:order-2">
                  <div className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 border border-slate-200/50 dark:border-slate-600/50 shadow-xl">
                    {/* AI for Work Interface */}
                    {useCase.id === 'work' && (
                      <div className="space-y-4">
                        {/* Search Interface */}
                        <div className="bg-white dark:bg-slate-600 rounded-lg p-3 shadow-sm border border-slate-200 dark:border-slate-500">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <Bot className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Unified Document Search</span>
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                            "Find our company's employee onboarding process and training materials"
                          </div>
                          
                          {/* Search Results */}
                          <div className="space-y-2">
                            {[
                              { source: "Google Drive", title: "Employee Onboarding Checklist 2024", type: "PDF" },
                              { source: "Confluence", title: "New Employee Training Program", type: "Wiki" },
                              { source: "Slack", title: "HR Team - Onboarding Best Practices", type: "Thread" }
                            ].map((result, idx) => (
                              <div key={idx} className="bg-blue-50 dark:bg-blue-900/30 rounded-md p-2 border border-blue-200 dark:border-blue-800">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300">{result.title}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">{result.source} • {result.type}</div>
                                  </div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Integration Dashboard */}
                        <div className="bg-white dark:bg-slate-600 rounded-lg p-3 border border-slate-200 dark:border-slate-500">
                          <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-3">Connected Platforms</div>
                          <div className="grid grid-cols-3 gap-2">
                            {["Slack", "Teams", "Drive", "Gmail", "Jira", "GitHub"].map((platform, idx) => (
                              <div key={idx} className="bg-slate-100 dark:bg-slate-700 rounded-md px-2 py-1 text-center">
                                <div className="text-xs font-medium text-slate-700 dark:text-slate-300">{platform}</div>
                                <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-1"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* AI for Service Interface */}
                    {useCase.id === 'service' && (
                      <div className="space-y-4">
                        {/* Service Dashboard Header */}
                        <div className="bg-white dark:bg-slate-600 rounded-lg p-3 shadow-sm border border-slate-200 dark:border-slate-500">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <HeadphonesIcon className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Customer Support Dashboard</span>
                          </div>
                          
                          {/* Support Platforms Integration */}
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {[
                              { name: "Zendesk", status: "active", tickets: "23" },
                              { name: "HubSpot", status: "active", tickets: "15" },
                              { name: "Salesforce", status: "active", tickets: "31" },
                              { name: "Freshdesk", status: "active", tickets: "8" }
                            ].map((platform, idx) => (
                              <div key={idx} className="bg-green-50 dark:bg-green-900/30 rounded-md p-2 border border-green-200 dark:border-green-800">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300">{platform.name}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">{platform.tickets} tickets</div>
                                  </div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Real-time Customer Query */}
                        <div className="space-y-3">
                          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="w-3 h-3 text-white" />
                              </div>
                              <div className="text-xs text-slate-700 dark:text-slate-300">
                                <div className="font-medium mb-1">Customer Query #4521</div>
                                <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">"I can't access my account dashboard and need help resetting my password"</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3 border border-green-200 dark:border-green-800">
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Bot className="w-3 h-3 text-white" />
                              </div>
                              <div className="text-xs text-slate-700 dark:text-slate-300">
                                <div className="font-medium mb-2">AI-Assisted Response Generated</div>
                                <div className="space-y-1">
                                  <div className="text-xs text-green-700 dark:text-green-300">✓ Found: Account recovery knowledge base</div>
                                  <div className="text-xs text-green-700 dark:text-green-300">✓ Generated: Step-by-step password reset guide</div>
                                  <div className="text-xs text-green-700 dark:text-green-300">✓ Context: Customer tier & previous interactions</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Service Analytics */}
                          <div className="bg-white dark:bg-slate-600 rounded-lg p-3 border border-slate-200 dark:border-slate-500">
                            <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-2">Real-time Service Metrics</div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="text-center">
                                <div className="text-xs font-bold text-green-600 dark:text-green-400">2.3m</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Avg Response Time</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xs font-bold text-blue-600 dark:text-blue-400">97%</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Customer Satisfaction</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* AI for Process Interface */}
                    {useCase.id === 'process' && (
                      <div className="space-y-4">
                        {/* ETL Dashboard */}
                        <div className="bg-white dark:bg-slate-600 rounded-lg p-3 shadow-sm border border-slate-200 dark:border-slate-500">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                              <Workflow className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Automated Data Integration</span>
                          </div>
                          
                          {/* Data Sources */}
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            {[
                              { name: "LMS", status: "syncing", type: "Learning" },
                              { name: "Jira", status: "active", type: "Projects" },
                              { name: "GitHub", status: "active", type: "Code" },
                              { name: "Canvas", status: "syncing", type: "Education" },
                              { name: "Asana", status: "active", type: "Tasks" },
                              { name: "Mediasite", status: "processing", type: "Media" }
                            ].map((source, idx) => (
                              <div key={idx} className="bg-purple-50 dark:bg-purple-900/30 rounded-md p-2 border border-purple-200 dark:border-purple-800">
                                <div className="text-xs font-medium text-slate-700 dark:text-slate-300">{source.name}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">{source.type}</div>
                                <div className={`w-2 h-2 rounded-full mt-1 ${
                                  source.status === 'active' ? 'bg-green-500' :
                                  source.status === 'syncing' ? 'bg-blue-500 animate-pulse' :
                                  'bg-orange-500 animate-pulse'
                                }`}></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Semantic Processing */}
                        <div className="bg-white dark:bg-slate-600 rounded-lg p-3 border border-slate-200 dark:border-slate-500">
                          <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-3">Semantic Indexing & Tagging</div>
                          <div className="space-y-2">
                            {[
                              { content: "Project Documentation", tags: ["technical", "design", "requirements"], processed: true },
                              { content: "Video Transcripts", tags: ["training", "onboarding", "processes"], processed: true },
                              { content: "Meeting Notes", tags: ["strategy", "decisions", "action-items"], processed: false }
                            ].map((item, idx) => (
                              <div key={idx} className="bg-slate-50 dark:bg-slate-700 rounded-md p-2">
                                <div className="flex items-center justify-between mb-1">
                                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.content}</div>
                                  <div className={`w-2 h-2 rounded-full ${item.processed ? 'bg-green-500' : 'bg-orange-500 animate-pulse'}`}></div>
                                </div>
                                <div className="flex gap-1 flex-wrap">
                                  {item.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Compliance & Analytics */}
                        <div className="bg-white dark:bg-slate-600 rounded-lg p-3 border border-slate-200 dark:border-slate-500">
                          <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-2">Compliance & Performance</div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <div className="text-xs font-bold text-green-600 dark:text-green-400">SOC2</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">Compliant</div>
                            </div>
                            <div>
                              <div className="text-xs font-bold text-blue-600 dark:text-blue-400">99.2%</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">Process Efficiency</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Ready to transform your enterprise with AI?
          </p>
          <Link 
            href="/pricing" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Bot className="w-5 h-5" />
            Get Started Today
          </Link>
        </motion.div>
      </div>

        {/* Product Gallery Carousel */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our Valuable Clients
            </motion.h3>
            <motion.p 
              className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Trusted by leading enterprises across healthcare, telecommunications, pharmaceuticals, and technology sectors
            </motion.p>
          </div>
          
          {/* Gradient overlay for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 via-slate-50 to-transparent dark:from-slate-900 dark:via-slate-900 z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 via-slate-50 to-transparent dark:from-slate-900 dark:via-slate-900 z-10 pointer-events-none"></div>
          
          <div className="relative overflow-hidden py-8">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
              allowTouchMove={true}
              modules={[Autoplay]}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 25 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 5, spaceBetween: 35 },
                1280: { slidesPerView: 6, spaceBetween: 40 },
              }}
              className="w-full !overflow-visible"
            >
              {[
                { name: "T-Mobile", logo: "tmobile", src: tmobileLogo },
                { name: "StoriBoard", logo: "storiboard", src: storiboardLogo },
                { name: "SyraHealth", logo: "syrahealth", src: syrahealthLogo },
                { name: "Client 1", logo: "client1", src: logo1 },
                { name: "Client 2", logo: "client2", src: logo2 },
                { name: "Client 3", logo: "client3", src: logo3 },
                { name: "Client 4", logo: "client4", src: logo4 },
                { name: "Client 5", logo: "client5", src: logo5 },
                { name: "Client 6", logo: "client6", src: logo6 },
                { name: "Client 7", logo: "client7", src: logo7 },
                { name: "Client 8", logo: "client8", src: logo8 },
                { name: "Client 9", logo: "client9", src: logo9 },
                { name: "Client 10", logo: "client10", src: logo10 },
                { name: "Client 11", logo: "client11", src: logo11 },
                { name: "Client 12", logo: "client12", src: logo12 },
                { name: "Client 13", logo: "client13", src: logo13 },
                { name: "Client 14", logo: "client14", src: logo14 }
              ].map((client, i) => (
                <SwiperSlide key={client.name}>
                  <motion.div 
                    className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-[120px] flex items-center justify-center rounded-2xl border border-slate-200/50 dark:border-slate-600/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/95 dark:hover:bg-slate-700/95"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Logo container */}
                    <div className="relative z-10 p-6 flex items-center justify-center w-full h-full">
                      <img
                        src={client.src || `/images/logos/${client.logo}.png`}
                        alt={`${client.name} Logo`}
                        className="max-h-12 max-w-full object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 hover:scale-110"
                        onError={(e) => {
                          // Fallback to a styled text placeholder
                          e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="140" height="50" xmlns="http://www.w3.org/2000/svg">
                              <rect width="140" height="50" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="8"/>
                              <text x="70" y="30" text-anchor="middle" fill="#475569" font-family="Arial, sans-serif" font-size="12" font-weight="600">${client.name}</text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                    
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Bottom statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">17+</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Global</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">Fortune 500 Reach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Multi</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">Industry Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Enterprise</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">Grade Solutions</div>
            </div>
          </motion.div>
        </motion.div>
    </section>
  );
};

export default AIUseCases;