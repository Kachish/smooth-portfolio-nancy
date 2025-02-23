
import { Card } from "@/components/ui/card";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "CSS/Tailwind", level: 95 },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/50 section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80">
              I'm a passionate software developer with a keen eye for design and a
              love for creating seamless user experiences. With years of experience
              in web development, I specialize in building modern, responsive
              applications.
            </p>
            <p className="text-lg text-foreground/80">
              My approach combines technical expertise with creative
              problem-solving, ensuring that every project I work on is both
              functional and aesthetically pleasing.
            </p>
          </div>

          <Card className="p-6 space-y-6">
            <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
