import { motion } from "framer-motion";
import { cardChild } from "@/lib/motion";

interface Props {
  quote: string;
  author: string;
  date: string;
}

export function TestimonialCard({ quote, author, date }: Props) {
  return (
    <motion.div
      {...cardChild}
      className="bg-white border border-[#b9bbc6] rounded-[12px] p-8"
    >
      <div className="text-[#ff5900] text-[14px] tracking-widest">★★★★★</div>
      <p className="text-[16px] text-[#60646c] italic mt-3 leading-relaxed">
        “{quote}”
      </p>
      <p className="text-[14px] font-semibold text-black mt-4">{author}</p>
      <p className="text-[12px] text-[#8b8d98] mt-1">{date}</p>
    </motion.div>
  );
}
