import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlowCard from "@/components/GlowCard";
import { Github, Linkedin, Code2, Trophy } from "lucide-react";

const profiles = [
  { name: "GitHub", icon: Github, username: "@developer", desc: "500+ contributions this year", color: "text-foreground", href: "https://github.com" },
  { name: "LeetCode", icon: Trophy, username: "coder123", desc: "300+ problems solved", color: "text-[hsl(40,90%,55%)]", href: "https://leetcode.com" },
  { name: "SkillRack", icon: Code2, username: "dev_master", desc: "Gold badge holder", color: "text-primary", href: "https://skillrack.com" },
  { name: "LinkedIn", icon: Linkedin, username: "in/developer", desc: "5K+ connections", color: "text-[hsl(210,80%,55%)]", href: "https://linkedin.com" },
];

const stagger = { animate: { transition: { staggerChildren: 0.1 } } };
const popIn = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 15 } },
};

const CodingProfilesPage = () => (
  <PageTransition>
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Coding Profiles</span>
          </h1>
          <p className="text-muted-foreground">Where I code and compete</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {profiles.map((profile) => (
            <motion.div key={profile.name} variants={popIn}>
              <a href={profile.href} target="_blank" rel="noopener noreferrer">
                <GlowCard className="group cursor-pointer hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${profile.color}`}>
                      <profile.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">{profile.username}</p>
                      <p className="text-xs text-muted-foreground mt-1">{profile.desc}</p>
                    </div>
                  </div>
                </GlowCard>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default CodingProfilesPage;
