import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import AnimatedCounter from "@/components/AnimatedCounter";

const skills = [
  { name: "Java", level: 75, color: "primary" },
  { name: "HTML / CSS", level: 85, color: "primary" },
  { name: "JavaScript", level: 70, color: "secondary" },
  { name: "React.js", level: 65, color: "secondary" },
  { name: "MySQL", level: 70, color: "primary" },
  { name: "C", level: 70, color: "accent" },
  { name: "Python (Basics)", level: 50, color: "accent" },
  { name: "PHP", level: 55, color: "secondary" },
];

const tools = [
  "Git", "HackerRank", "MS Excel", "Firebase", "Windows", "Linux",
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const barColor = skill.color === "primary" ? "bg-primary" :
    skill.color === "secondary" ? "bg-secondary" : "bg-accent";
  const glowColor = skill.color === "primary" ? "shadow-[0_0_12px_hsl(var(--primary)/0.4)]" :
    skill.color === "secondary" ? "shadow-[0_0_12px_hsl(var(--neon-secondary)/0.4)]" :
      "shadow-[0_0_12px_hsl(var(--neon-accent)/0.4)]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground font-medium">{skill.name}</span>
        <AnimatedCounter target={skill.level} />
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${barColor} ${glowColor}`}
        />
      </div>
    </motion.div>
  );
};

const SkillsPage = () => (
  <PageTransition>
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-muted-foreground">Technologies &amp; tools I work with</p>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14"
        >
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
            <span className="text-gradient-accent">Tools &amp; Platforms</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 rounded-full glass neon-border text-sm font-mono text-foreground cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default SkillsPage;
