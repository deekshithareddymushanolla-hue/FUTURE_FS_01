import { motion } from "framer-motion";
import { Trophy, Award, Code2, Rocket } from "lucide-react";

const certificates = [
  {
    category: "Sports",
    icon: Trophy,
    items: [
      { title: "Throw Ball Certificate", description: "Recognized for outstanding performance in Throw Ball competitions." },
      { title: "Kho-Kho Certificate", description: "Certified achievement in Kho-Kho sports events and tournaments." },
    ],
  },
  {
    category: "Technical",
    icon: Code2,
    items: [
      { title: "Java Programming Certification", description: "Advanced certification covering OOP, data structures, and design patterns." },
      { title: "Web Development Certificate", description: "Completed certification in modern web development technologies." },
    ],
  },
  {
    category: "Projects",
    icon: Rocket,
    items: [
      { title: "Project Excellence Award", description: "Recognized for delivering high-quality full-stack project implementations." },
    ],
  },
  {
    category: "Hackathons",
    icon: Award,
    items: [
      { title: "Hackathon Participation Certificate", description: "Top finish in college-level hackathon, building innovative solutions." },
    ],
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
          Milestones
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-gradient">
          Certificates
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certificates.map((cat, ci) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="glass-card p-6 hover:glow-purple transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <cat.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{cat.category} Certificates</h3>
            </div>
            <div className="space-y-4">
              {cat.items.map((item) => (
                <div key={item.title} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="text-sm font-medium text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
