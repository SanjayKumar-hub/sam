import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const HirePage = () => (
  <PageTransition>
    <div className="flex flex-col items-center justify-center min-h-screen px-4 relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="mx-auto mb-6 text-secondary" size={40} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-6xl font-bold mb-6"
        >
          Let's Build
          <br />
          <span className="text-gradient-accent">Something Amazing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-muted-foreground mb-12 max-w-md mx-auto"
        >
          I'm available for freelance work and full-time positions.
          Let's create something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg animate-pulse-glow hover:brightness-110 transition-all"
            >
              Hire Me
            </motion.button>
          </Link>

          <a
            href="mailto:hello@example.com"
            className="px-8 py-4 rounded-xl border border-border text-foreground hover:border-secondary/50 hover:text-secondary transition-colors font-medium"
          >
            Send Email
          </a>
        </motion.div>
      </motion.div>
    </div>
  </PageTransition>
);

export default HirePage;
