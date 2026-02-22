import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import PageTransition from "@/components/PageTransition";
import GlowCard from "@/components/GlowCard";
import { User, MapPin, GraduationCap, Heart, Zap, Code2, Globe, Database } from "lucide-react";

const AboutScene = lazy(() => import("@/components/AboutScene"));

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const interests = [
  { icon: Code2, label: "Java Development" },
  { icon: Globe, label: "Web Technologies" },
  { icon: Database, label: "MySQL" },
  { icon: Heart, label: "Problem Solving" },
];

const timeline = [
  {
    year: "2023 – Present",
    title: "B.Tech – CS & Business Systems",
    desc: "Studying at Panimalar Engineering College, Chennai. Expected graduation 2027. CGPA: 7.4",
  },
  {
    year: "2022",
    title: "Internship – CodeBind Technologies",
    desc: "Gained hands-on experience in HTML and web technologies. Built a library management system using HTML, CSS, JavaScript, PHP and MySQL.",
  },
  {
    year: "2022",
    title: "Class XII – State Board",
    desc: "Sri Vijay Vidyalaya Matric Higher Secondary School. Percentage: 75.6%",
  },
  {
    year: "2020",
    title: "Class X – State Board",
    desc: "Sri Vijay Vidyalaya Matric Higher Secondary School.",
  },
];

const AboutPage = () => (
  <PageTransition>
    <div className="relative min-h-screen px-4 pt-24 pb-16">
      <Suspense fallback={null}>
        <AboutScene />
      </Suspense>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-16">

          {/* Header */}
          <motion.div variants={fadeUp} className="text-center">
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Get to know me</p>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              <span className="text-gradient">About</span>{" "}
              <span className="text-foreground">Me</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm a pre-final year engineering student passionate about building responsive,
              user-friendly applications using Java and modern web technologies.
            </p>
          </motion.div>

          {/* Bio Card */}
          <motion.div variants={fadeUp}>
            <GlowCard className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center shrink-0 neon-border"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <User size={48} className="text-primary" />
                </motion.div>
                <div className="text-center md:text-left space-y-3">
                  <h2 className="text-2xl font-bold text-foreground">Vaishnavi M</h2>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin size={14} className="text-primary" /> Tirupattur, Tamil Nadu</span>
                    <span className="inline-flex items-center gap-1"><GraduationCap size={14} className="text-secondary" /> B.Tech – CS &amp; Business Systems</span>
                    <span className="inline-flex items-center gap-1"><Zap size={14} className="text-accent" /> Open to opportunities</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Pre-final year engineering student specializing in Computer Science and Business Systems
                    at Panimalar Engineering College, Chennai. Strong foundation in Java and web technologies,
                    with a drive for continuous learning and problem-solving in growth-oriented environments.
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              <span className="text-gradient">Journey</span>
            </h2>
            <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-secondary before:to-accent">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <GlowCard className="p-5">
                    <p className="text-xs font-mono text-primary mb-1">{item.year}</p>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={fadeUp} className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              <span className="text-gradient-accent">Interests</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {interests.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="glass neon-border rounded-xl px-5 py-3 flex items-center gap-2 cursor-default"
                >
                  <item.icon size={18} className="text-primary" />
                  <span className="text-sm text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default AboutPage;
