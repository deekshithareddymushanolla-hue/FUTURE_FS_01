import { motion } from "framer-motion";
import { Code2, BookOpen, Rocket, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, label: "Java Developer", desc: "Passionate about building robust applications" },
    { icon: BookOpen, label: "Lifelong Learner", desc: "Always exploring new technologies" },
    { icon: Rocket, label: "Full-Stack", desc: "From frontend to backend and beyond" },
    { icon: Heart, label: "Problem Solver", desc: "Turning complex ideas into simple solutions" },
  ];

  return (
    <section id="about" className="py-24 relative particle-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              My journey into the world of development started with curiosity — a simple
              "How does this website work?" question that opened doors to an incredible
              universe of code. Since then, I've been hooked.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Java</span> became my first
              love in programming. Its structured approach, object-oriented nature, and the
              sheer power it offers in building scalable applications fascinated me. From
              writing my first "Hello World" to building full-stack applications, Java has
              been my constant companion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a student, I believe in the power of continuous learning. Every bug I fix,
              every project I complete, and every concept I grasp pushes me closer to my
              goal — becoming a well-rounded developer who creates impactful software
              solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My future? I envision myself contributing to innovative tech solutions,
              collaborating with brilliant minds, and never stopping the learning journey.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center hover:glow-blue transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
