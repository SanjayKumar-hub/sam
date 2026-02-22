import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Suspense, lazy } from "react";
import { ArrowRight, Code, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const achievements = [
  { icon: Code, label: "Projects", value: "2+" },
  { icon: BookOpen, label: "CGPA", value: "7.4" },
  { icon: Award, label: "Certs", value: "2" },
];

const Hero = () => (
  <PageTransition>
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-16">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-mono text-primary tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-gradient">Vaishnavi</span>
          <br />
          <span className="text-foreground">M</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Pre-final year CS &amp; Business Systems engineering student with a passion for
          Java, web technologies, and building user-friendly applications.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium neon-glow hover:brightness-110 transition-all"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-3 gap-6 max-w-md mx-auto"
        >
          {achievements.map((a) => (
            <div key={a.label} className="text-center">
              <a.icon size={20} className="mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-foreground">{a.value}</p>
              <p className="text-xs text-muted-foreground">{a.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </div>
  </PageTransition>
);

export default Hero;
