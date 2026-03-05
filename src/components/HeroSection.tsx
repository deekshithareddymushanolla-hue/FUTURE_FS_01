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

  // Welcome voice greeting on first visit
  useEffect(() => {
    const hasGreeted = sessionStorage.getItem("voice-greeted");
    if (!hasGreeted) {
      const timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(
          "Welcome to my world. Hi, I'm Deekshitha Reddy."
        );
        utterance.rate = 0.9;
        utterance.pitch = 1.2;
        utterance.volume = 1;
        // Try to pick a female English voice
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(
          (v) =>
            v.lang.startsWith("en") &&
            (v.name.toLowerCase().includes("female") ||
              v.name.toLowerCase().includes("samantha") ||
              v.name.toLowerCase().includes("zira") ||
              v.name.toLowerCase().includes("google uk english female"))
        );
        if (femaleVoice) utterance.voice = femaleVoice;
        window.speechSynthesis.speak(utterance);
        sessionStorage.setItem("voice-greeted", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-colorful-bg"
    >
      {/* Colorful animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-transparent blur-3xl animate-float" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-cyan-400/25 via-blue-400/20 to-transparent blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-bl from-amber-300/20 via-rose-400/15 to-transparent blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[10%] left-[15%] w-[35%] h-[35%] rounded-full bg-gradient-to-tr from-emerald-400/20 via-teal-300/15 to-transparent blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text side */}
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

          {/* Photo side - large, half the page */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-3xl overflow-hidden gradient-border glow-purple shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="M. Deekshitha Reddy - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-xl -z-10" />
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
