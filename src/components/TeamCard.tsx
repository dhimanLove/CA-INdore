import { motion } from "framer-motion";
import { cardChild } from "@/lib/motion";

interface Props {
  photo: string;
  name: string;
  credentials: string;
  role: string;
  bio: string;
}

export function TeamCard({ photo, name, credentials, role, bio }: Props) {
  return (
    <motion.div
      {...cardChild}
      whileHover={{ y: -3 }}
      className="bg-white border border-[#b9bbc6] rounded-[12px] p-8"
    >
      <img
        src={photo}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border border-[#b9bbc6]"
      />
      <h3 className="text-[20px] font-semibold text-black mt-4">{name}</h3>
      <p className="text-[12px] font-medium text-[#8b8d98] mt-1">
        {credentials}
      </p>
      <div className="inline-block border border-[#b9bbc6] rounded-[6px] px-3 py-1 text-[12px] font-medium text-[#60646c] mt-3">
        {role}
      </div>
      <p className="text-[14px] text-[#60646c] mt-3 leading-relaxed">{bio}</p>
    </motion.div>
  );
}
