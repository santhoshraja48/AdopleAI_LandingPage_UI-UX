import Footer from "../components/Footer";
import tmobileLogo from '@assets/image (2)_1753100131100.png';
import storiboardLogo from '@assets/image (1)_1753100131102.png';
import syrahealthLogo from '@assets/image_1753100131103.png';
import logo1 from '@assets/logo1_1753100131108.avif';
import logo2 from '@assets/logo2_1753100131109.avif';
import logo3 from '@assets/logo3_1753100131110.avif';
import logo4 from '@assets/logo4_1753100131111.avif';
import logo5 from '@assets/logo5_1753100131112.avif';

const Customers = () => {

  const detailedCaseStudies = [
    {
      logo: logo1,
      title: "HealthTech Solutions",
      category: "Healthcare, Government",
      headline: "Fragmented healthcare data delays critical insights.",
      description: "Built a QA chatbot that fetches info from PDFs, websites, and databases using chunking, embeddings, and Pinecone for fast retrieval and accurate responses.",
      tags: ["Healthcare", "Government"]
    },
    {
      logo: logo2,
      title: "Green Analytics",
      category: "Finance, Environmental Risk Analytics",
      headline: "Evolving ESG rules challenge real-time portfolio decisions.",
      description: "Developed Element 6, a platform that uses deep learning to analyze news sentiment and topics, assigning environmental scores to help asset managers.",
      tags: ["Finance", "Environmental Risk Analytics"]
    },
    {
      logo: logo3,
      title: "TeleComm Pro",
      category: "Legal, Telecommunications",
      headline: "Manual contract processes create inefficiencies and compliance risks.",
      description: "Developed a GPT-3.5-powered contract management system that automates extraction of key data, identifies risks, and compares contracts.",
      tags: ["Legal", "Telecommunications"]
    },
    {
      logo: logo4,
      title: "HR Innovations",
      category: "Human Resources, Recruitment",
      headline: "Manual resume screening is slow, biased, and misses top talent matches.",
      description: "Built an AI-powered platform that automates resume and job description matching, extracting key features, skills, and using semantic analysis.",
      tags: ["Human Resources", "Recruitment"]
    },
    {
      logo: syrahealthLogo,
      title: "SyraHealth",
      category: "Healthcare, Digital Mental Health",
      headline: "Users need empathetic, data-backed mental health support.",
      description: "Developed a chat-based mental health assistant powered by GPT-3.5 and advanced NLU, integrated with healthcare databases for personalized care.",
      tags: ["Healthcare", "Digital Mental Health"]
    },
    {
      logo: logo5,
      title: "EduTech Media",
      category: "EdTech, Digital Publishing, Media",
      headline: "Automated video creation for digital learning content.",
      description: "Developed a Text2Video system that transforms educational text into narrated, comic-style videos by integrating OpenAI APIs and multimedia processing.",
      tags: ["EdTech", "Digital Publishing", "Media"]
    },
    {
      logo: storiboardLogo,
      title: "StoriBoard",
      category: "Media, Social Networking, Video Technology",
      headline: "AI tools for faster, smarter video production.",
      description: "Built an AI-powered video editor using Whisper and Movieify with auto transcription, translation, silence removal, and smart editing features.",
      tags: ["Media", "Social Networking", "Video Technology"]
    },
    {
      logo: tmobileLogo,
      title: "T-Mobile",
      category: "Telecommunications, Customer Support",
      headline: "Telecoms use AI for smarter customer engagement",
      description: "Designed a scalable Dutch-language chatbot system using LSTM/GRU models and Word2Vec to automate intent detection and service routing.",
      tags: ["Telecommunications", "Customer Support"]
    }
  ];

  const testimonials = [
    {
      company: "DataFlow Inc",
      rating: 5.0,
      content: "This solution has revolutionized our data management. We've seen a 30% increase in efficiency and much cleaner data insights. Highly recommended for any growing business.",
      author: "Mark Robinson",
      position: "VP of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      iconColor: "from-blue-500 to-blue-600"
    },
    {
      company: "InnovateTech",
      rating: 5.0,
      content: "The support team is exceptional, always quick to respond and incredibly helpful. The product itself is robust and continuously evolving to meet our needs. Fantastic partnership!",
      author: "David Lee",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      iconColor: "from-green-500 to-emerald-600"
    },
    {
      company: "Analytics Pro",
      rating: 5.0,
      content: "Implementing this platform was seamless. The user interface is incredibly intuitive, leading to rapid adoption across our entire team. A truly empowering solution.",
      author: "David Kim",
      position: "Lead Data Scientist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      iconColor: "from-purple-500 to-purple-600"
    },
    {
      company: "FinanceFirst",
      rating: 5.0,
      content: "Our investment in this product has paid dividends. The return on investment is clear, and it has become an indispensable part of our daily operations.",
      author: "Emily White",
      position: "Director of Finance",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      iconColor: "from-orange-500 to-orange-600"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-green-700 font-medium mb-4">
              <i className="fas fa-users mr-2"></i>
              Customer Success Stories
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover how leading companies across industries are transforming their operations with Adople
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.iconColor} rounded-xl flex items-center justify-center`}>
                    <i className="fas fa-building text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.company}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400"></i>
                      ))}
                      <span className="text-sm text-slate-500 ml-2">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-10 h-10 rounded-full object-cover" 
                  />
                  <div>
                    <p className="font-medium text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Explore How Teams Use Us Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium mb-6">
                <i className="fas fa-rocket mr-2"></i>
                Success Stories
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-4">
                Explore How Teams Use Us
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover real-world applications of our Enterprise AI Agent across industries and use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detailedCaseStudies.map((study, index) => (
                <div key={index} className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Logo */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="h-12 flex items-center">
                        <img 
                          src={study.logo} 
                          alt={`${study.title} Logo`} 
                          className="h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/120x60/6366F1/FFFFFF?text=${study.title}`;
                          }}
                        />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                        <i className="fas fa-arrow-right text-white text-sm"></i>
                      </div>
                    </div>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.category.split(', ').map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Headline */}
                    <h4 className="font-bold text-slate-900 mb-4 leading-tight text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {study.headline}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {study.description}
                    </p>

                    {/* See more link */}
                    <button className="flex items-center gap-2 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors duration-200 group/btn">
                      Learn more
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customers;
