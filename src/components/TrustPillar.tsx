import { motion } from "framer-motion";
import { cardChild } from "@/lib/motion";

interface Props {
  number: string;
  title: string;
  body: string;
}

export function TrustPillar({ number, title, body }: Props) {
  return (
    <motion.div
      {...cardChild}
      className="bg-white border border-[#b9bbc6] rounded-[12px] p-8"
    >
      <div
        className="text-[72px] font-semibold text-[#ff5900] leading-none"
        style={{ letterSpacing: "-0.03em" }}
      >
        {number}
      </div>
      <h3 className="text-[20px] font-semibold text-black mt-4">{title}</h3>
      <p className="text-[16px] text-[#60646c] mt-3 leading-relaxed">{body}</p>
    </motion.div>
  );
}
