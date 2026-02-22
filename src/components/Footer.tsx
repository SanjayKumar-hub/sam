import { motion } from "framer-motion";
import { Github, Linkedin, Code2 } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Code2, label: "HackerRank", href: "https://hackerrank.com" },
];

const Footer = () => (
  <footer className="relative border-t border-border/50 py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Portfolio. Crafted with passion.
      </p>
      <div className="flex items-center gap-4">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
          >
            <s.icon size={20} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
