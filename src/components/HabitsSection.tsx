import { motion } from "framer-motion";
import { Dumbbell, BookOpen, Moon, Users, Sparkles, Trophy } from "lucide-react";
import habitSports from "@/assets/habit-sports.jpeg";
import habitWorkout from "@/assets/habit-workout.jpeg";
import habitBooks from "@/assets/habit-books.jpeg";
import habitSleeping from "@/assets/habit-sleeping.jpeg";
import habitCommunicating from "@/assets/habit-communicating.jpeg";
import habitAnimations from "@/assets/habit-animations.gif";

const habits = [
  { icon: Trophy, label: "Sports", desc: "Staying active through competitive sports", image: habitSports },
  { icon: Dumbbell, label: "Working Out", desc: "Building strength and discipline", image: habitWorkout },
  { icon: BookOpen, label: "Story Books", desc: "Exploring worlds through reading", image: habitBooks },
  { icon: Moon, label: "Sleeping", desc: "Recharging for peak productivity", image: habitSleeping },
  { icon: Users, label: "Communicating", desc: "Connecting and learning from people", image: habitCommunicating },
  { icon: Sparkles, label: "Creating Animations", desc: "Bringing ideas to life with motion", image: habitAnimations },
];

const HabitsSection = () => (
  <section id="habits" className="py-24 relative particle-bg">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
          Beyond Code
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-gradient">
          My Habits
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {habits.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card overflow-hidden hover:glow-blue transition-all duration-300 group"
          >
            <div className="h-28 overflow-hidden">
              <img
                src={h.image}
                alt={h.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <h.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{h.label}</h3>
              <p className="text-xs text-muted-foreground">{h.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HabitsSection;
