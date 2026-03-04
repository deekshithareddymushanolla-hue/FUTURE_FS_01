import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 85 },
      { name: "MySQL", level: 70 },
      { name: "React", level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="space-y-2"
  >
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-primary font-mono">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(var(--neon-blue)), hsl(var(--neon-purple)))`,
        }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
          What I work with
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-gradient">
          Skills & Tools
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 space-y-6"
          >
            <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
            {cat.skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
