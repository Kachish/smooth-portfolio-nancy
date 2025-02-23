
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-lg text-foreground/60 mb-4">Hi, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Nancy — Software Developer & UI Designer
          </h1>
          <p className="text-xl text-foreground/80 mb-8 text-balance">
            I craft beautiful, responsive web experiences with modern technologies
            and a focus on user experience.
          </p>
          <a href="#projects" className="button-primary group">
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
