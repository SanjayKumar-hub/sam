import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlowCard from "@/components/GlowCard";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Medical Device App",
    desc: "A responsive application to identify health conditions and provide proper medical advice with appropriate medications. Features secure user authentication using Firebase with reusable React components.",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Firebase"],
    color: "primary",
    github: "https://github.com/vaishuvasagan",
    live: "#",
  },
  {
    title: "Library Management System",
    desc: "A full-featured library management system built during the CodeBind Technologies internship. Supports book cataloguing, user management, and borrowing records.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "secondary",
    github: "https://github.com/vaishuvasagan",
    live: "#",
  },
];

const stagger = { animate: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const ProjectsPage = () => (
  <PageTransition>
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">A showcase of my hands-on development work</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlowCard className="h-full flex flex-col">
                <div className={`w-full h-40 rounded-lg mb-4 bg-gradient-to-br ${project.color === "primary" ? "from-primary/20 to-primary/5" :
                    "from-secondary/20 to-secondary/5"
                  } flex items-center justify-center`}>
                  <span className="text-4xl font-bold text-foreground/10">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.live} className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                    <ExternalLink size={14} /> Live
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                    <Github size={14} /> Code
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default ProjectsPage;
