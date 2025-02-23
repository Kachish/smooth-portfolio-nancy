
import { ArrowRight, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const whatsappNumber = "+1234567890"; // Replace with your WhatsApp number
  const whatsappMessage = "Hi Nancy! I'd like to discuss a project with you.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/60 mb-4">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Nancy — Software Developer & UI Designer
            </h1>
            <p className="text-xl text-foreground/80 mb-8 text-balance">
              I craft beautiful, responsive web experiences with modern technologies
              and a focus on user experience.
            </p>
            <a href="#projects" className="button-primary group bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative">
            {/* Profile Image */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                src="/placeholder.svg" // Replace with your image path
                alt="Nancy - Software Developer"
                className="relative z-10 rounded-full w-full h-full object-cover border-4 border-white shadow-xl"
              />
            </div>

            {/* WhatsApp Chat Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 rounded-full 
                       bg-gradient-to-r from-emerald-400 to-teal-400 text-white shadow-lg 
                       hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-bounce"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Let's Chat!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
