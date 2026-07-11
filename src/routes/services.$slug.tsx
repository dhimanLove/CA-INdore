import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { EmberButton } from "@/components/EmberButton";
import { RevealParagraph } from "@/components/RevealParagraph";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES, getService } from "@/lib/services-data";
import { pageTransition } from "@/lib/motion";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} | CA Shyam Bhatia & Co.` },
            { name: "description", content: loaderData.summary },
            { property: "og:title", content: loaderData.title },
            { property: "og:description", content: loaderData.summary },
            { property: "og:image", content: loaderData.image },
          ],
        }
      : {},
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <p className="text-[#60646c]">Service not found.</p>
    </div>
  ),
});

function ServiceDetailPage() {
  const service = Route.useLoaderData();
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <motion.div {...pageTransition}>
      <PageHeader
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        subtext={service.summary}
      />

      <section className="bg-white py-20">
        <div className="container-page grid lg:grid-cols-[60%_40%] gap-12 items-start">
          <div>
            <div className="text-[12px] font-medium text-[#ff5900] uppercase tracking-widest">
              Scope of Work
            </div>
            <h2
              className="text-[28px] md:text-[36px] font-semibold text-black mt-3"
              style={{ letterSpacing: "-0.025em" }}
            >
              What we deliver
            </h2>
            <RevealParagraph className="mt-4">{service.summary}</RevealParagraph>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.scope.map((item: string) => (
                <span
                  key={item}
                  className="border border-[#b9bbc6] rounded-[6px] px-3 py-2 text-[14px] font-medium text-black"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <EmberButton to="/contact-us">Get expert advice →</EmberButton>
            </div>
          </div>
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full aspect-[4/3] object-cover rounded-[12px] border border-[#b9bbc6]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f7] py-20">
        <div className="container-page">
          <SectionHeading heading="Explore other services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="block bg-white border border-[#b9bbc6] rounded-[12px] p-8 hover:border-[#ff5900] transition-colors"
              >
                <div className="text-[12px] font-medium text-[#ff5900] uppercase tracking-widest">
                  Service
                </div>
                <h3 className="text-[20px] font-semibold text-black mt-2">
                  {r.title}
                </h3>
                <p className="text-[14px] text-[#60646c] mt-3">
                  {r.descriptor}
                </p>
                <div className="text-[14px] font-medium text-[#ff5900] mt-4">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
