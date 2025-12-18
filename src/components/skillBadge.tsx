import type { LucideIcon } from "lucide-react";


type SkillBadgeProps = {
  label: string;
  icon?: LucideIcon;      // untuk lucide-react
  imageSrc?: string;      // untuk image icon
};

export default function SkillBadge({
  label,
  icon: Icon,
  imageSrc,
}: SkillBadgeProps) {
  return (
    <div
      className="
        flex items-center gap-2
        border border-[#327b47]
        border-3
        px-4 py-2
        rounded-full
        text-md
        w-fit
        transition
        hover:bg-[#df6592]
        hover:text-white
        hover:border-[#df6592]
      "
    >
      {/* ICON IMAGE */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={label}
          className="w-4 h-4 object-contain"
        />
      )}

      {/* ICON LUCIDE */}
      {Icon && !imageSrc && (
        <Icon size={16} />
      )}

      <span>{label}</span>
    </div>
  );
}
