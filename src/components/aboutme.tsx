import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "PT Dunia Maya Comunica",
    role: "System Analyst",
    period: "December 2024 – Present",
    points: [
      "Conducted business requirement analysis and application design based on company needs.",
      "Designed business process flows and system diagrams (such as Use Case, Activity, Sequence Diagrams, ERD, DFD) to ensure alignment between business processes and technical implementation.",
      "Prepared documentation including PRD, FSD, Change Request (CR), and UAT scenarios.",
      "Supported User Acceptance Testing (UAT) with end users.",
      "Applied basic SQL knowledge to support system analysis.",
    ],
  },
  {
    title: "Complete Front-End Engineer Career With ReactJS",
    role: "Kampus Merdeka: Studi Independen with Alterra Academy  ",
    period: "2023",
    subDescription: "Completed the Front-End Engineer program with a structured curriculum and hands-on projects, and received a completion certificate.",
    points: [
      "React components, hooks, routing, and state management",
      "REST API and GraphQL integration",
      "Team-based end-to-end system development.",
      "Communication, teamwork, and career preparation.",
      "Individual product development project."
    ],
  },
  {
    title: "PT Trans Berjaya Khatulistiwa",
    role: "Internship Frontend Developer",
    period: "2023",
    points: [
      "Built UI components with React.js based on provided designs.",
      "Integrated front-end with existing APIs under supervision.",
      "Participated in code reviews and team discussions.",
      "Fixed minor UI bugs and styling issues.",
      "Implemented responsive layouts for desktop and mobile views.",
    ],
  },
  {
    title: "Graduated at Universitas Komputer Indonesia",
    role: "Sistem Informasi",
    period: "2024",
    points: [
      "GPA 3,75"
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
        py-24
    "
    >

    <div className="relative flex flex-wrap w-fit mx-auto gap-10 items-center">
        <div>
        <motion.img
            src="/exp.png"
            alt="Card"
            className="max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        />
        </div>

        <div className="space-y-4 md:w-[520px] mx-10 text-white">
        {experiences.map((item, index) => (
            <div key={index} className="border-b border-white/20 pb-4">
            <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
            >
                <div>
                <h3 className="text-xl text-[#df6592] font-semibold">
                    {item.title}
                </h3>
                <p className="text-sm text-black">
                    {item.role} | {item.period}
                </p>
                </div>

                <motion.span
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
                    {item.subDescription && (
                        <p className="mt-4 text-sm text-black/80 leading-relaxed text-justify">
                        {item.subDescription}
                        </p>
                    )}

                    {/* POINT LIST */}
                    <ul className="mt-3 space-y-2 list-disc pl-5 text-black text-justify">
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
