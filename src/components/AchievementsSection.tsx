import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Code2, Rocket, X } from "lucide-react";
import throwballCert from "@/assets/throwball-certificate.jpg";

const certificates = [
  {
    category: "Sports",
    icon: Trophy,
    items: [
      { title: "Throw Ball Certificate", description: "Pratiyogita 2025-26 Inter College State Level Sports Meet — Throwball Runners at Sridevi Women's Engineering College (SWEC).", image: throwballCert },
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

const AchievementsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
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
                  <div
                    key={item.title}
                    className={`border-l-2 border-primary/30 pl-4 ${item.image ? "cursor-pointer hover:border-primary transition-colors" : ""}`}
                    onClick={() => item.image && setSelectedImage(item.image)}
                  >
                    <h4 className="text-sm font-medium text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    {item.image && (
                      <div className="mt-3 rounded-lg overflow-hidden border border-primary/20">
                        <img src={item.image} alt={item.title} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedImage(null)} className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10">
                <X size={16} />
              </button>
              <img src={selectedImage} alt="Certificate" className="w-full rounded-xl shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;
