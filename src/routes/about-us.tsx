import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { RevealParagraph } from "@/components/RevealParagraph";
import { EmberButton } from "@/components/EmberButton";
import { StatCounter } from "@/components/StatCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import { pageTransition, staggerContainer } from "@/lib/motion";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About | 25+ Years of Financial Excellence | CA Shyam Bhatia & Co." },
      {
        name: "description",
        content:
          "Founded in 2000, CA Shyam Bhatia & Co. serves 1,500+ clients annually with tax, audit, GST, and financial advisory services from Indore.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  "Clarity in Law Interpretation",
  "Strict Compliance",
  "Genuine Care for Clients",
  "Accuracy in Every Detail",
  "Timely & Prompt Services",
  "Uncompromised Integrity",
];

const TEAM = [
  {
    photo: "https://cashyambhatia.com/images/abhishek.png",
    name: "CA Abhishek Jaisinghani",
    credentials: "FCA",
    role: "Consultant",
    bio: "10 years in taxation, GST, and financial planning. Known for strategic clarity on complex issues.",
  },
  {
    photo: "https://cashyambhatia.com/images/ankit.png",
    name: "CA Ankit Jain",
    credentials: "CA",
    role: "Consultant",
    bio: "A decade of experience in corporate finance and compliance, helping clients navigate regulatory frameworks.",
  },
  {
    photo: "https://cashyambhatia.com/images/aashish.png",
    name: "CA Asheesh Nasha",
    credentials: "CA",
    role: "Consultant",
    bio: "14 years in assurance, reporting, and advisory with a solution-oriented mindset.",
  },
  {
    photo: "https://cashyambhatia.com/images/mahesh.png",
    name: "Mr. Mahesh Choube",
    credentials: "MCom · LLB",
    role: "Senior Manager – Operations",
    bio: "30+ years of experience ensuring the operational backbone of the firm runs smoothly.",
  },
];

function AboutPage() {
  return (
    <motion.div {...pageTransition}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        title={"Trusted financial guidance\nsince 2000."}
      />

      <section className="bg-white py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[12px] font-medium text-[#ff5900] uppercase tracking-widest">
              Our Story
            </div>
            <RevealParagraph className="mt-4">
              Shyam Bhatia & Co., established in the year 2000, is a trusted
              name in tax and financial advisory services. With over two decades
              of dedicated service, we proudly assist more than 1,500 clients
              annually — ranging from individuals and professionals to small
              businesses and corporate entities.
            </RevealParagraph>
            <div className="mt-6 flex flex-wrap gap-2">
              {VALUES.map((v) => (
                <span
                  key={v}
                  className="border border-[#b9bbc6] rounded-[6px] px-3 py-2 text-[12px] font-medium text-black"
                >
                  {v}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <EmberButton to="/contact-us">Get in touch →</EmberButton>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://cashyambhatia.com/images/about-hero.png"
              alt="About CA Shyam Bhatia & Co."
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stats band Abyss */}
      <section className="bg-[#000710] py-16">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { n: 25, s: "+", l: "Years of Experience" },
            { n: 35000, s: "+", l: "Tax Filings" },
            { n: 25, s: "+", l: "Industries Served" },
            { n: 1500, s: "+", l: "Satisfied Clients" },
          ].map((x, i) => (
            <div key={i} className="px-6 text-center first:pl-0">
              <div
                className="text-[36px] md:text-[48px] font-semibold text-[#ff5900]"
                style={{ letterSpacing: "-0.025em" }}
              >
                <StatCounter target={x.n} suffix={x.s} />
              </div>
              <div className="text-[14px] font-medium text-[#b9bbc6] mt-2">
                {x.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white py-20">
        <div className="container-page grid lg:grid-cols-[40%_60%] gap-12 items-start">
          <div className="border border-[#b9bbc6] rounded-[12px] overflow-hidden">
            <img
              src="https://cashyambhatia.com/images/shyam-bhatia.png"
              alt="CA Shyam Bhatia"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <div className="text-[12px] font-medium text-[#ff5900] uppercase tracking-widest">
              Founder
            </div>
            <h2
              className="text-[36px] font-semibold text-black mt-3"
              style={{ letterSpacing: "-0.025em" }}
            >
              CA Shyam Bhatia
            </h2>
            <p className="text-[14px] font-medium text-[#8b8d98] mt-2">
              BCom · LLB · FCA · DISA (ICAI)
            </p>
            <div className="mt-6 space-y-4">
              <RevealParagraph>
                CA Shyam Bhatia is the driving force behind the firm's 25 years
                of success. With deep expertise in taxation, auditing, and
                financial advisory, he combines professional excellence with a
                genuine passion for helping clients navigate their financial
                journey confidently.
              </RevealParagraph>
              <RevealParagraph>
                His leadership extends beyond the firm — Shyam actively
                contributes to education and community development as a Director
                at Western State University, Florida, and serves on the
                Governing Board of Sri Sathya Sai Vidya Vihar School.
              </RevealParagraph>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Treasurer — Sri Sathya Sai Vidya Vihar, Indore",
                "Governing Board — SSSVV Indore, Ratlam, Guna",
                "CFO (Consulting) — Western State University, Florida",
              ].map((r) => (
                <span
                  key={r}
                  className="border border-[#b9bbc6] rounded-[6px] px-3 py-2 text-[12px] font-medium text-black"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f3f3f7] py-20">
        <div className="container-page">
          <SectionHeading heading="Meet our expert team" center />
          <motion.div
            {...staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {TEAM.map((t) => (
              <TeamCard key={t.name} {...t} />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
