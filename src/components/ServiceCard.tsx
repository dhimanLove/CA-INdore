import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { cardChild } from "@/lib/motion";
import type { Service } from "@/lib/services-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      {...cardChild}
      whileHover={{ y: -5, borderColor: "#ff5900" }}
      className="bg-white border border-[#b9bbc6] rounded-[12px] p-8 flex flex-col"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full aspect-video object-cover rounded-[8px]"
      />
      <h3 className="text-[20px] font-semibold text-black mt-4">
        {service.title}
      </h3>
      <p className="text-[14px] text-[#60646c] mt-2 flex-1">
        {service.descriptor}
      </p>
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="text-[14px] font-medium text-[#ff5900] mt-4"
      >
        Learn more →
      </Link>
    </motion.div>
  );
}
