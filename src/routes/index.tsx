import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { motion } from "framer-motion";
import { HeroHeadline } from "@/components/HeroHeadline";
import { EmberButton } from "@/components/EmberButton";
import { GhostButton } from "@/components/GhostButton";
import { StatCounter } from "@/components/StatCounter";
import { LogoMarquee } from "@/components/LogoMarquee";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustPillar } from "@/components/TrustPillar";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SERVICES } from "@/lib/services-data";
import { pageTransition, staggerContainer } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Governed by Knowledge, Built on Trust | CA Shyam Bhatia & Co." },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    number: "01",
    title: "25+ Years of Experience",
    body: "Decades of industry insight helping individuals and businesses navigate complex financial challenges with confidence.",
  },
  {
    number: "02",
    title: "Personalised Attention",
    body: "Every client receives advice tailored to their unique financial goals — not a one-size-fits-all template.",
  },
  {
    number: "03",
    title: "Transparent & Reliable",
    body: "Honest communication at every step. You are never left wondering about the status of your financial matters.",
  },
  {
    number: "04",
    title: "End-to-End Financial Services",
    body: "From audits to compliance, tax planning to business consulting — all your needs under one roof.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Very professional and detailed-oriented financial and tax consultancy firm. Have been working with Shyam since 20 years now and it has been a great experience. Always abreast with latest developments and always finds innovative solutions.",
    author: "Ashish Khandelwal",
    date: "10 months ago",
  },
  {
    quote:
      "We've had the privilege of working with Shyam Bhatia and Company for more than 30 years, and their expertise and dedication have been nothing short of exceptional. Anusha is extremely respectful and cooperative.",
    author: "Rita Nainani",
    date: "10 months ago",
  },
  {
    quote:
      "The team is very quick in responding, extremely helpful, and highly professional in their approach. They made everything simple and efficient. Truly reliable and trustworthy services!",
    author: "Vandana Nair",
    date: "10 months ago",
  },
];
function TaxSlider() {
  const [income, setIncome] = useState(1500000);
  const [incomeType, setIncomeType] = useState("salary");
  const [age, setAge] = useState("under60");
  
  const MIN_INCOME = 30000;
  const MAX_INCOME = 10000000; 

  // ... (calculateTax and formatINR functions remain the same)

  const sliderPercent = ((income - MIN_INCOME) / (MAX_INCOME - MIN_INCOME)) * 100;

  return (
    <div className="w-full max-w-[400px] mx-auto bg-white border-2 border-black rounded-2xl p-8 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest">Tax Estimate</h2>
        <span className="text-[10px] font-bold bg-black text-white px-3 py-1 rounded-full">FY 25-26</span>
      </div>

      {/* Toggles */}
      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-2 bg-gray-100 p-1 rounded-lg">
          {['salary', 'business'].map((type) => (
            <button
              key={type}
              onClick={() => setIncomeType(type)}
              className={`text-xs py-2.5 rounded-md font-bold transition-all ${
                incomeType === type ? 'bg-black text-white' : 'text-gray-400 hover:text-black'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'under60', label: '< 60' },
            { id: 'senior', label: '60-80' },
            { id: 'super', label: '> 80' }
          ].map((a) => (
            <button
              key={a.id}
              onClick={() => setAge(a.id)}
              className={`text-[11px] py-2.5 rounded-md font-bold transition-all ${
                age === a.id ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-black'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-4xl font-extrabold tracking-tighter">₹{income.toLocaleString('en-IN')}</p>
      </div>

      {/* Elastic Slider */}
      <div className="mb-10 relative h-6 flex items-center">
        <input
          type="range"
          min={MIN_INCOME}
          max={MAX_INCOME}
          step="10000"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="absolute w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer z-20 opacity-0"
        />
        <div className="w-full h-1.5 bg-gray-200 rounded-lg overflow-hidden">
          <div className="h-full bg-black" style={{ width: `${sliderPercent}%` }} />
        </div>
        <motion.div 
          className="absolute w-5 h-5 bg-black rounded-full border-2 border-white shadow-lg z-10 pointer-events-none"
          style={{ left: `${sliderPercent}%` }}
          animate={{ x: "-50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        />
      </div>

      <button 
        onClick={() => (window.location.href = "http://localhost:8080/contact-us")}
        className="w-full py-5 bg-black text-white text-sm font-black rounded-xl hover:bg-orange-600 transition-all active:scale-[0.98] shadow-xl shadow-gray-200 uppercase tracking-widest"
      >
        Book Consultation Now
      </button>
    </div>
  );
}
function Index() {
  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="container-page grid lg:grid-cols-[55%_45%] gap-12 items-center">
          <div>
            <span className="inline-block text-[12px] font-medium text-[#8b8d98] bg-[#f3f3f7] rounded-[6px] px-3 py-1">
              Chartered Accountants · Indore
            </span>
            <div className="mt-6">
              <HeroHeadline />
            </div>
            <p className="text-[18px] md:text-[20px] text-[#60646c] mt-6 max-w-[520px] leading-relaxed">
              For over 25 years, we've been trusted partners to more than 1,500
              clients across India and the UAE — delivering financial clarity,
              compliance, and confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <EmberButton to="/contact-us">Book a consultation →</EmberButton>
              <GhostButton to="/services">Explore our services</GhostButton>
            </div>
            <div className="mt-12 border-t border-[#b9bbc6] pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { n: 25, s: "+", l: "Years of Experience" },
                { n: 1500, s: "+", l: "Clients Annually" },
                { n: 35000, s: "+", l: "Tax Filings" },
                { n: 25, s: "+", l: "Industries Served" },
              ].map((x, i) => (
                <div key={i}>
                  <div className="text-[32px] font-semibold text-black" style={{ letterSpacing: "-0.02em" }}>
                    <StatCounter target={x.n} suffix={x.s} />
                  </div>
                  <div className="text-[12px] font-medium text-[#8b8d98] mt-1 uppercase tracking-wider">
                    {x.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tax Slider — hidden on mobile */}
          <div className="relative hidden lg:flex justify-end items-center">
            <TaxSlider />
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-[#f3f3f7] py-16">
        <div className="container-page">
          <h2
            className="text-[28px] md:text-[36px] font-semibold text-black text-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Trusted by leading businesses across India
          </h2>
          <div className="mt-10">
            <LogoMarquee />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            heading={"Expert financial services,\ntailored to your goals"}
            subtext="From tax planning and GST compliance to UAE corporate tax advisory — every service delivered with precision and care."
            center
          />
          <motion.div
            {...staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#f3f3f7] py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Us"
            heading="What sets 25 years of trust apart"
            center
          />
          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {PILLARS.map((p) => (
              <TrustPillar key={p.number} {...p} />
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <EmberButton to="/contact-us">Schedule a consultation →</EmberButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Client Reviews"
            heading="5.0 · 15 reviews on Google"
            center
          />
          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="bg-[#f3f3f7] py-20">
        <div className="container-page text-center">
          <h2
            className="text-[36px] font-semibold text-black"
            style={{ letterSpacing: "-0.02em" }}
          >
            Insights & Updates
          </h2>
          <p className="text-[16px] text-[#60646c] mt-4 max-w-[560px] mx-auto">
            Tax law changes, compliance deadlines, and financial planning guides — straight from our desk.
          </p>
          <div className="mt-8 border border-dashed border-[#b9bbc6] rounded-[12px] p-16 bg-white text-[#60646c]">
            Articles coming soon. Check back for tax guides and compliance updates.
          </div>
          <div className="mt-8">
            <GhostButton to="/insights">View all insights</GhostButton>
          </div>
        </div>
      </section>
    </motion.div>
  );
}