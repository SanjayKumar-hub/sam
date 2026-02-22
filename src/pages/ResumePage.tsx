import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlowCard from "@/components/GlowCard";
import { Download, FileText, Award, Briefcase } from "lucide-react";

const resumeData = {
  internship: [
    {
      title: "Web Development Intern",
      company: "CodeBind Technologies",
      period: "2022 – 1 Week",
      desc: "Gained hands-on experience in HTML and web technologies. Developed a library management project using HTML, CSS, JavaScript, PHP, and MySQL.",
    },
  ],
  education: [
    {
      title: "B.Tech – Computer Science & Business Systems",
      institution: "Panimalar Engineering College, Chennai",
      period: "2023 – 2027",
      detail: "CGPA: 7.4",
    },
    {
      title: "Class XII – State Board",
      institution: "Sri Vijay Vidyalaya Matric Higher Secondary School",
      period: "2022",
      detail: "Percentage: 75.6%",
    },
    {
      title: "Class X – State Board",
      institution: "Sri Vijay Vidyalaya Matric Higher Secondary School",
      period: "2020",
      detail: "All Pass",
    },
  ],
  certifications: [
    { title: "Acquiring Data", issuer: "NASSCOM" },
    { title: "Generative AI", issuer: "Oracle" },
  ],
};

const stagger = { animate: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ResumePage = () => (
  <PageTransition>
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-muted-foreground mb-6">My academic &amp; professional journey</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium neon-glow hover:brightness-110 transition-all"
          >
            <Download size={16} />
            Download PDF
          </motion.button>
        </motion.div>

        <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-4">

          {/* Internship */}
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
            <Briefcase size={18} className="text-primary" /> Internship Experience
          </h2>
          {resumeData.internship.map((exp, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlowCard>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                </div>
                <p className="text-sm text-secondary font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.desc}</p>
              </GlowCard>
            </motion.div>
          ))}

          {/* Education */}
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-4 pt-6">
            <FileText size={18} className="text-secondary" /> Education
          </h2>
          {resumeData.education.map((edu, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlowCard>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-semibold text-foreground">{edu.title}</h3>
                  <span className="text-xs font-mono text-primary">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs font-mono text-secondary mt-1">{edu.detail}</p>
              </GlowCard>
            </motion.div>
          ))}

          {/* Certifications */}
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-4 pt-6">
            <Award size={18} className="text-accent" /> Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resumeData.certifications.map((cert, i) => (
              <motion.div key={i} variants={fadeUp}>
                <GlowCard>
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </PageTransition>
);

export default ResumePage;
