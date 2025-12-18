import CurvedLoop from "@/components/CurvedLoop";

export default function TextCurved() {
  return (
    <div>
        <CurvedLoop
        marqueeText="Fauziah ✦ Nur ✦ Syifa ✦ "
        className="text-[#ff6b00]"
        speed={1}
        curveAmount={0}
        interactive={false}
        />
    </div>
  )
}
