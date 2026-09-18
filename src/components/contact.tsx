"use client";

import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#df6592] flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative
          w-full
          max-w-5xl
          bg-[#f5e9d8]
          rounded-md
          px-8 py-12
          md:px-16 md:py-16
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Folded paper corner */}
        <div
          className="
            absolute
            top-0
            right-0
            w-0
            h-0
            border-t-[26px] border-t-[#211914]
            border-l-[26px] border-l-transparent
          "
        />

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p
            className="
              text-[#e94d8a]
              text-3xl md:text-4xl
              font-medium
              italic
              tracking-wide
            "
          >
            Mari berkolaborasi pada proyek berikutnya
          </p>

          <p className="mt-7 text-[#75665b] text-base md:text-lg leading-8">
            Terbuka untuk peluang profesional di bidang System Analyst,
            Technical Writer, serta kolaborasi dalam analisis dan dokumentasi
            sistem.
          </p>
        </div>

        {/* Contact */}
        <div
          className="
            mt-10
            flex flex-col md:flex-row
            justify-center
            items-stretch
            gap-4
          "
        >
          {/* Email */}
          <motion.a
            href="mailto:fauziahnfs@gmail.com"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="
              group
              flex items-center justify-center gap-3
              min-h-[60px]
              px-7
              rounded-xl
              bg-[#e94d8a]
              text-[#24151c]
              font-medium
              shadow-lg
              hover:shadow-xl
              transition-all duration-300
            "
          >
            <Mail size={19} />

            <span>fauziahnfs@gmail.com</span>

            <ArrowUpRight
              size={17}
              className="
                opacity-0
                -translate-y-1
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-300
              "
            />
          </motion.a>


          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/fauziah-nur-syifa-27552a216/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="
              group
              flex items-center justify-center gap-3
              min-h-[60px]
              px-7
              rounded-xl
              border-2
              border-dashed
              border-[#e94d8a]
              text-[#e94d8a]
              font-medium
              hover:bg-[#e94d8a]/5
              transition-all duration-300
            "
          >
            <Linkedin size={19} />

            <span>LinkedIn</span>

            <ArrowUpRight
              size={17}
              className="
                opacity-0
                -translate-y-1
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-300
              "
            />
          </motion.a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs md:text-sm text-[#9a897b]">
            Saya terbuka untuk berdiskusi mengenai peluang kerja dan
            kolaborasi profesional.
          </p>
        </div>
      </motion.div>
    </section>
  );
}