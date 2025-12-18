import { motion } from "framer-motion";

export default function FloatingCV() {
  return (
    <motion.a
      href="/cv.pdf"
      download
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-35
        h-35
        cursor-pointer
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.6 },
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="/cv.png"
        alt="Download CV"
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </motion.a>
  );
}
