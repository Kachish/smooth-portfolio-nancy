
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6 space-y-6">
            <h3 className="text-xl font-semibold">Contact Me</h3>
            <p className="text-foreground/70">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button type="submit" className="button-primary w-full">
                Send Message
              </button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Github className="w-5 h-5 mr-3" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Twitter className="w-5 h-5 mr-3" />
                  <span>Twitter</span>
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <span>Email</span>
                </a>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Current Status</h3>
              <p className="text-foreground/70">
                I'm currently available for freelance work and full-time
                opportunities. Let's create something amazing together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
