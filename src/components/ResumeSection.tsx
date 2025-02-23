
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="bg-secondary/50 section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">My Resume</h2>
        <p className="text-lg text-foreground/70 mb-8">
          Download my resume to learn more about my experience, skills, and
          qualifications.
        </p>
        <Card className="p-8 flex flex-col items-center">
          <p className="text-xl font-medium mb-6">
            Looking for a detailed overview of my professional journey?
          </p>
          <a
            href="/resume.pdf"
            download
            className="button-primary group"
          >
            <Download className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-[1px]" />
            Download CV
          </a>
        </Card>
      </div>
    </section>
  );
};

export default ResumeSection;
