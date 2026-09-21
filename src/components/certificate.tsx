"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Complete Front-End Engineer Career with ReactJs",
    issuer: "Alterra Academy",
    year: "2023",
    image: "/altera1.jpg",
  },
  {
    title: "Score of : Complete Front-End Engineer Career with ReactJs",
    issuer: "Alterra Academy",
    year: "2023",
    image: "/altera2.jpg",
  },
  {
    title: "TOEFL ITP",
    issuer: "Universitas Komputer Indonesia",
    year: "2024",
    image: "/toefl.jpg",
  },
];

export function Certificates() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certificates"
      className="bg-[#fff6e1] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[#e94d8a] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Certificates
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#2b211c]">
              Sertifikasi & Pengembangan
            </h2>

            <p className="mt-4 text-[#756b64] max-w-2xl leading-relaxed">
              Beberapa sertifikasi dan program pengembangan kompetensi yang
              mendukung pengalaman saya di bidang teknologi dan analisis sistem.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="
                w-11 h-11
                rounded-full
                border border-[#ded5cc]
                bg-white
                flex items-center justify-center
                text-[#4b4039]
                hover:bg-[#e94d8a]
                hover:text-white
                hover:border-[#e94d8a]
                transition-all
              "
              aria-label="Sertifikat sebelumnya"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="
                w-11 h-11
                rounded-full
                border border-[#ded5cc]
                bg-white
                flex items-center justify-center
                text-[#4b4039]
                hover:bg-[#e94d8a]
                hover:text-white
                hover:border-[#e94d8a]
                transition-all
              "
              aria-label="Sertifikat berikutnya"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Certificate Slider */}
        <div
          ref={sliderRef}
          className="
            flex
            gap-6
            overflow-x-auto
            pb-6
            snap-x snap-mandatory
            cursor-grab
            active:cursor-grabbing
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title + index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
                group
                flex-shrink-0
                w-[300px]
                md:w-[380px]
                snap-start
              "
            >
              {/* Certificate */}
              <div
                className="
                  relative
                  w-full
                  aspect-[4/3]
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  border border-[#e5ddd5]
                  shadow-sm
                  group-hover:shadow-xl
                  transition-shadow duration-300
                "
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-contain
                    bg-white
                    p-3
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/20
                    transition-all duration-300
                    flex items-center justify-center
                  "
                >
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      opacity-0
                      group-hover:opacity-100
                      translate-y-2
                      group-hover:translate-y-0
                      transition-all duration-300
                      flex items-center gap-2
                      bg-white
                      text-[#2b211c]
                      px-4 py-2.5
                      rounded-full
                      text-sm font-medium
                      shadow-lg
                    "
                  >
                    <ExternalLink size={16} />
                    Lihat Sertifikat
                  </a>
                </div>
              </div>

              {/* Information */}
              <div className="mt-4 px-1">
                <h3 className="font-semibold text-[#2b211c]">
                  {certificate.title}
                </h3>

                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-[#82776e]">
                    {certificate.issuer}
                  </p>

                  <span className="text-xs text-[#e94d8a] font-medium">
                    {certificate.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hint */}
      </div>
    </section>
  );
}