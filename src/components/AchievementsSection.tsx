import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy, Wrench } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Java Programming Certification",
    description: "Completed advanced Java certification covering OOP, data structures, and design patterns.",
    date: "2025",
    color: "neon-blue",
  },
  {
    icon: Trophy,
    title: "Hackathon Finalist",
    description: "Top 10 finish in college-level hackathon, building an innovative student management solution.",
    date: "2024",
    color: "neon-purple",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Consistently maintained top academic performance in Computer Science coursework.",
    date: "2023 - Present",
    color: "neon-cyan",
  },
  {
    icon: Wrench,
    title: "Web Development Workshop",
    description: "Led and participated in workshops on modern web development practices and tools.",
    date: "2024",
    color: "neon-blue",
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
          Achievements
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan opacity-30" />

        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-start gap-6 mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-6 glow-blue z-10" />

            <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className="glass-card p-6 hover:glow-purple transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
