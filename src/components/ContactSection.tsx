import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle, Code } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Github, href: "https://github.com/deekshithareddymushanolla-hue", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/deekshitha-reddy-mushanolla-b5b0063a5/", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/u/Deekshitha_21062021/", label: "LeetCode" },
    { icon: Mail, href: "mailto:deekshithareddymushanolla@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-24 relative particle-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
            Let's connect
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">Get In Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-glass-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-glass-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-glass-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:glow-blue transition-all duration-300"
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} /> Sent Successfully!
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                M. Deekshitha Reddy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <Mail className="inline mr-2 text-primary" size={16} />
                <a href="mailto:deekshithareddymushanolla@gmail.com" className="hover:text-primary transition-colors">
                  deekshithareddymushanolla@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to
                say hello — I'd love to hear from you.
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-4">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
