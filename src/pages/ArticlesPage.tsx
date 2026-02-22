import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlowCard from "@/components/GlowCard";
import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  { title: "Building Cinematic Web Experiences with Three.js", excerpt: "How to create immersive 3D scenes that captivate users from the first pixel.", date: "Feb 2026", readTime: "8 min" },
  { title: "Advanced Framer Motion Patterns", excerpt: "Deep dive into orchestrating complex animation sequences in React applications.", date: "Jan 2026", readTime: "6 min" },
  { title: "Performance Optimization in React Apps", excerpt: "Strategies for building blazing-fast web applications without sacrificing UX.", date: "Dec 2025", readTime: "10 min" },
  { title: "The Future of Web Animation", excerpt: "Exploring emerging standards and tools shaping the next era of web motion design.", date: "Nov 2025", readTime: "5 min" },
];

const stagger = { animate: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ArticlesPage = () => (
  <PageTransition>
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Articles</span>
          </h1>
          <p className="text-muted-foreground">Thoughts on code, design, and creativity</p>
        </motion.div>

        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-4">
          {articles.map((article, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlowCard className="group cursor-pointer hover:bg-muted/20 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default ArticlesPage;
