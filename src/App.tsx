import { motion } from "framer-motion";
import TextCurved from "./components/ui/used/textCurved";
import AboutMe from "./components/aboutme";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import FloatingCV from "./components/floatingCV";
import Skill from "./components/skill";
import { Portofolio } from "./components/portofolio";
import { Contact } from "./components/contact";

function App() {

  return (
    <div className="">
      {/* <SmoothCursor /> */}
        <section className="relative w-full min-h-[300px] md:min-h-screen overflow-hidden">
              
              <motion.img
                src="/1.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
        
              <motion.img
                src="/2.png"
                alt="Card"
                className="
                  absolute 
                "
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              />
        
              <motion.img
                src="/3.png"
                alt="Eyes"
                className="absolute"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  rotate: [0, -3, 3, 0],
                }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.5 },
                  rotate: {
                    delay: 1.2,
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />


              <motion.img
                src="/4.png"
                alt="Profile"
                className="
                  absolute 
                "
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />

            <motion.img
              src="/5.png"
              alt="Background"
              className="
                absolute inset-0 w-full h-full object-cover z-0
                hidden md:block
              "
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.4 }}
            />


            <motion.img
              src="/6.png"
              alt="Card"
              className="absolute"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            />
        </section>
        <div className="about bg-[#fff6e1]">
          <TextCurved/>
          <AboutMe/>
          <div className="py-20">
            <Portofolio/>
          </div>
          {/* <Skill/> */}
          <Contact/>
        </div>
        <FloatingCV/>
    </div>

  )
}

export default App
