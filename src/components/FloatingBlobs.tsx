import { motion } from "framer-motion";

const FloatingBlobs = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
    />
    <motion.div
      animate={{ x: [0, -80, 60, 0], y: [0, 100, -50, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px]"
    />
    <motion.div
      animate={{ x: [0, 50, -100, 0], y: [0, -60, 80, 0] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]"
    />
  </div>
);

export default FloatingBlobs;
