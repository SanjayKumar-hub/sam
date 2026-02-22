import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { Send, CheckCircle2, Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "vaishnavivasagan2207@gmail.com", href: "mailto:vaishnavivasagan2207@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8870150649", href: "tel:+918870150649" },
  { icon: MapPin, label: "Location", value: "Tirupattur, Tamil Nadu", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "vaishnavi-vasaganb5834629b", href: "https://www.linkedin.com/in/vaishnavi-vasaganb5834629b/" },
  { icon: Github, label: "GitHub", value: "vaishuvasagan", href: "https://github.com/vaishuvasagan" },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageTransition>
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-center"
          >
            <CheckCircle2 size={64} className="mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-2">Message Sent!</h2>
            <p className="text-muted-foreground">I'll get back to you soon.</p>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Contact</span>
            </h1>
            <p className="text-muted-foreground">Let's connect and build something great</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h2>
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass neon-border hover:border-primary/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground font-medium truncate max-w-[200px]">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {(["name", "email", "message"] as const).map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2 capitalize">{field}</label>
                  {field === "message" ? (
                    <textarea
                      rows={5}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all resize-none"
                      placeholder={`Your ${field}...`}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all"
                      placeholder={`Your ${field}...`}
                    />
                  )}
                  {errors[field] && (
                    <p className="text-xs text-destructive mt-1">{errors[field]}</p>
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium inline-flex items-center justify-center gap-2 neon-glow hover:brightness-110 transition-all"
              >
                <Send size={16} /> Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
