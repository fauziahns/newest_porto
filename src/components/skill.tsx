import { motion } from "framer-motion";
import SkillBadge from "./skillBadge";
import { Database, GitBranch } from "lucide-react";

export default function Skill() {
      const skills = [
    { label: "System Analysis" },
    { label: "Requirement Gathering" },
    { label: "BPMN & Flowchart", icon: GitBranch },
    { label: "ERD", icon: Database },
    { label: "React.js"},
    { label: "Figma", imageSrc: "/figma.png" },
    { label: "Typescript", imageSrc: "/ts.png" },
  ];

  return (
        <div
    className="
        relative
 
        bg-no-repeat
        bg-center
        bg-cover
        py-24
    "
    >
        <div className="flex flex-col flex-wrap w-fit mx-auto gap-10 items-center">
            <div className="">
                <motion.img
                    src="/skill.png"
                    alt="Card"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                />
            </div>
        <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
                <SkillBadge
                key={index}
                label={skill.label}
                icon={skill.icon}
                imageSrc={skill.imageSrc}
                />
            ))}
            </div>

        </div>
    </div>
  )
}
