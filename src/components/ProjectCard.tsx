
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-foreground/70">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-secondary text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary !py-2"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary !py-2 !bg-secondary !text-foreground"
            >
              <Github className="w-4 h-4 mr-2" />
              Source
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
