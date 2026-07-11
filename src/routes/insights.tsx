import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { pageTransition } from "@/lib/motion";

const CATEGORIES = ["All", "Tax", "GST", "Compliance", "UAE", "Business"];

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Updates | CA Shyam Bhatia & Co." },
      {
        name: "description",
        content:
          "Tax law changes, GST updates, compliance deadlines, and financial planning guides for Indian businesses and NRIs.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [active, setActive] = useState("All");
  return (
    <motion.div {...pageTransition}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Insights" }]}
        title={"Insights & Updates"}
      />
      <div className="sticky top-16 z-30 bg-white border-b border-[#b9bbc6]">
        <div className="container-page py-4 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-[12px] font-medium rounded-[6px] px-3 py-2 transition-colors ${
                active === c
                  ? "bg-[#ff5900] text-white"
                  : "bg-[#f3f3f7] text-black hover:bg-[#e8e8ee]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="border border-dashed border-[#b9bbc6] rounded-[12px] p-16 bg-white text-center text-[#60646c]">
            Insights coming soon. We're preparing articles on tax law changes,
            GST updates, and financial planning for Indian businesses and NRIs.
          </div>
        </div>
      </section>
    </motion.div>
  );
}
