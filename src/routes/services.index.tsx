import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services-data";
import { pageTransition, staggerContainer } from "@/lib/motion";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Tax, Audit, GST & More | CA Shyam Bhatia & Co." },
      {
        name: "description",
        content:
          "Full-service Chartered Accountancy: GST, ITR, statutory audits, NRI taxation, UAE VAT & Corporate Tax, government subsidies, and outsourcing.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <motion.div {...pageTransition}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        title={"Services built for\nevery financial need."}
      />
      <section className="bg-white py-20">
        <div className="container-page">
          <motion.div
            {...staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
