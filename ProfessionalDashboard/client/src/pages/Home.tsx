import Hero from "../components/Hero";
import Features from "../components/Features";
import AIUseCases from "../components/AIUseCases";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Hero />
      <Features />
      <AIUseCases />
      
      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group">
          <i className="fas fa-comments text-xl group-hover:animate-pulse"></i>
        </button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
