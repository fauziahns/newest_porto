import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "PT Dunia Maya Comunica",
    role: "System Analyst",
    period: "Januari 2025 – Present",
    points: [
      "Melakukan requirement gathering dan analisis proses bisnis lintas departemen untuk merancang solusi sistem sesuai kebutuhan organisasi.",
      "Menyusun Software Requirement Specification (SRS), Functional Specification Document (FSD), business process flow, dan dokumentasi UML (Use Case, Activity, Sequence, Class, Database, Deployment Diagram) sebagai acuan bersama tim bisnis dan teknis",
      "Menjalankan sesi requirement gathering, sprint planning, System Integration Testing (SIT), dan User Acceptance Testing (UAT) agar hasil pengembangan tetap selaras dengan tujuan bisnis.",
      "Menulis user manual, laporan implementasi, dan dokumentasi rapat untuk menjaga kesinambungan pengetahuan proyek.",
      "Berkoordinasi dengan developer untuk memastikan implementasi sesuai dengan kebutuhan bisnis. ",
    ],
  },
  {
    title: "PT Trans Berjaya Khatulistiwa",
    role: "Internship Frontend Developer",
    period: "2023",
    points: [
      "Membangun komponen UI menggunakan React.js berdasarkan desain yang disediakan.",
      "Mengintegrasikan front-end dengan API yang sudah ada di bawah supervisi.",
      "Berpartisipasi dalam tinjauan kode (code review) dan diskusi tim.",
      "Memperbaiki bug UI minor dan masalah penataan tampilan (styling).",
      "Mengimplementasikan tata letak responsif untuk tampilan desktop dan mobile."
    ],
  },
  {
    title: "Graduated at Universitas Komputer Indonesia",
    role: "Sistem Informasi",
    period: "Desember 2024",
    points: [
      "GPA 3,75/4,00",
      "Menyelesaikan proyek akhir (skripsi) berupa sistem informasi berbasis web untuk Penyewaan Ruangan Creative Center Jawa Barat.",
    ],
  },
];


export default function AboutMe() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div
    className="
        relative
        bg-[url('/bgexp-mobile.png')]
        md:bg-[url('/bgexp.png')]
        bg-no-repeat
        bg-center
        bg-cover
        py-12
        md:py-24
    "
    >

    <div className="relative flex flex-wrap w-full md:w-fit mx-auto gap-6 md:gap-10 items-center justify-center px-4 md:px-0">
        <div>
        <motion.img
            src="/exp.png"
            alt="Card"
            className="max-w-[80vw] sm:max-w-md md:max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        />
        </div>

        <div className="space-y-4 w-full md:w-[520px] md:mx-10 text-white">
        {experiences.map((item, index) => (
            <div key={index} className="border-b border-white/20 pb-4">
            <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 text-left"
            >
                <div>
                <h3 className="text-lg sm:text-xl text-[#df6592] font-semibold">
                    {item.title}
                </h3>
                <p className="text-sm text-black">
                    {item.role} | {item.period}
                </p>
                </div>

                <motion.span
                className="shrink-0"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                >
                <ChevronDown className="text-emerald-400" />
                </motion.span>
            </button>

                <AnimatePresence initial={false}>
                {activeIndex === index && (
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                    >
                    {/* SUB DESCRIPTION (OPTIONAL) */}


                    {/* POINT LIST */}
                    <ul className="mt-3 space-y-2 list-disc pl-5 text-black text-left sm:text-justify">
                        {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                        ))}
                    </ul>
                    </motion.div>
                )}
                </AnimatePresence>

            </div>
        ))}
        </div>
    </div>
    </div>
  )
}