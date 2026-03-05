import { motion } from "framer-motion";
import { Download, GraduationCap, Code2, Rocket, Award } from "lucide-react";

const resumeData = [
  {
    icon: GraduationCap,
    title: "Education",
    items: ["B.Tech in Computer Science", "Consistent academic excellence"],
  },
  {
    icon: Code2,
    title: "Skills",
    items: ["Java (Primary)", "HTML, CSS, JavaScript", "MySQL, Git, GitHub"],
  },
  {
    icon: Rocket,
    title: "Projects",
    items: ["Full-Stack Web Applications", "Java-based Solutions", "Student Management Systems"],
  },
  {
    icon: Award,
    title: "Certifications",
    items: ["Java Programming", "Web Development", "Hackathon Achievements"],
  },
];

const ResumeSection = () => (
  <section id="resume" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
          My Background
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-gradient">Resume</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {resumeData.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-6 hover:glow-blue transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <section.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-base font-semibold text-foreground">{section.title}</h3>
            </div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <a
          href="/resume.pdf"
          download="Deekshitha_Reddy_Resume.pdf"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:glow-blue transition-all duration-300"
        >
          <Download size={18} />
          Download Resume
        </a>
        <p className="text-xs text-muted-foreground mt-3">PDF format</p>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
