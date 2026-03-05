import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Code } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Full-Stack Developer",
  "Java Enthusiast",
  "Creative Problem Solver",
  "Student & Learner",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const socials = [
    { icon: Github, href: "https://github.com/deekshithareddymushanolla-hue", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/deekshitha-reddy-mushanolla-b5b0063a5/", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/u/Deekshitha_21062021/", label: "LeetCode" },
    { icon: Mail, href: "mailto:deekshithareddymushanolla@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-primary text-sm font-mono mb-4 tracking-widest uppercase">
              Welcome to my world
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">M. Deekshitha Reddy</span>
            </h1>
            <div className="h-10 mb-8">
              <span className="text-xl md:text-2xl text-muted-foreground font-mono">
                {text}
                <span className="text-primary animate-glow-pulse">|</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                className="glass-card gradient-border px-6 py-3 text-sm font-medium text-foreground hover:glow-blue transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#resume"
                className="glass-card px-6 py-3 text-sm font-medium text-primary border-primary/30 hover:glow-purple transition-all duration-300"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="glass-card px-6 py-3 text-sm font-medium text-primary border-primary/30 hover:glow-purple transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 text-muted-foreground hover:text-primary hover:glow-blue transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border glow-purple">
                <img
                  src={profilePhoto}
                  alt="M. Deekshitha Reddy - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border border-neon-purple/20 animate-glow-pulse scale-110" />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
