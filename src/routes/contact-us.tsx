import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { EmberButton } from "@/components/EmberButton";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/services-data";
import { pageTransition, staggerContainer } from "@/lib/motion";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Book a Consultation | CA Shyam Bhatia & Co." },
      {
        name: "description",
        content:
          "Book a consultation with CA Shyam Bhatia & Co. in Indore. We respond within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

const inputCls =
  "w-full border border-[#b9bbc6] rounded-[12px] px-4 py-3 text-[16px] bg-white placeholder:text-[#8b8d98] focus:outline-none focus:border-[#ff5900] transition-colors";
const labelCls =
  "block text-[12px] font-medium text-black uppercase tracking-wider mb-2";

const TESTIMONIALS = [
  {
    quote:
      "Very professional and detailed-oriented financial and tax consultancy firm. Always finds innovative solutions.",
    author: "Ashish Khandelwal",
    date: "10 months ago",
  },
  {
    quote:
      "We've worked with Shyam Bhatia & Co. for more than 30 years. Their expertise and dedication have been exceptional.",
    author: "Rita Nainani",
    date: "10 months ago",
  },
  {
    quote:
      "Quick in responding, extremely helpful, and highly professional. Truly reliable and trustworthy services!",
    author: "Vandana Nair",
    date: "10 months ago",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <motion.div {...pageTransition}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
        title={"Let's talk about your\nfinancial goals."}
        subtext="Book a consultation with our team. We respond within one business day."
      />

      <section className="bg-white py-20">
        <div className="container-page grid lg:grid-cols-[55%_45%] gap-10">
          <form
            className="bg-white border border-[#b9bbc6] rounded-[12px] p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="text-center py-16">
                <div className="text-[24px] font-semibold text-black">
                  Message received.
                </div>
                <p className="text-[#60646c] mt-3">
                  We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name</label>
                    <input required className={inputCls} placeholder="Your name" />
                  </div>
                  <div>
                    <label className={labelCls}>Email Address</label>
                    <input type="email" required className={inputCls} placeholder="you@example.com" />
                  </div>
                </div>
                <div className="mt-5">
                  <label className={labelCls}>Phone Number</label>
                  <input type="tel" className={inputCls} placeholder="+91" />
                </div>
                <div className="mt-5">
                  <label className={labelCls}>Service of Interest</label>
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className="mt-5">
                  <label className={labelCls}>Message</label>
                  <textarea rows={4} className={inputCls} placeholder="Tell us about your needs" />
                </div>
                <div className="mt-6">
                  <EmberButton type="submit" fullWidth>
                    Send message →
                  </EmberButton>
                </div>
                <p className="text-[12px] text-[#8b8d98] mt-3 text-center">
                  Your information is kept confidential and never shared.
                </p>
              </>
            )}
          </form>

          <div className="flex flex-col gap-8">
            <Block label="Our Office">
              <p className="text-[16px] text-black leading-relaxed">
                2nd Floor, 326 Prem Trade Centre, Maharani Road, Indore, Madhya
                Pradesh 452007
              </p>
            </Block>
            <Block label="Phone">
              <a href="tel:+919826082720" className="block text-[16px] text-black hover:text-[#ff5900]">
                +91 98260 82720
              </a>
              <a href="tel:+919826082725" className="block text-[16px] text-black hover:text-[#ff5900]">
                +91 98260 82725
              </a>
            </Block>
            <Block label="Email">
              <a href="mailto:shyambhatia@rediffmail.com" className="block text-[16px] text-black hover:text-[#ff5900]">
                shyambhatia@rediffmail.com
              </a>
              <a href="mailto:gst.bhatia2017@gmail.com" className="block text-[16px] text-black hover:text-[#ff5900]">
                gst.bhatia2017@gmail.com
              </a>
            </Block>
            <Block label="Hours">
              <p className="text-[16px] text-black">Mon–Sat: 10:00 AM – 10:00 PM</p>
            </Block>
            <div className="rounded-[12px] overflow-hidden border border-[#b9bbc6] h-[220px]">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Prem+Trade+Centre+Maharani+Road+Indore&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f7] py-16">
        <div className="container-page">
          <SectionHeading heading="15 clients trust us with 5.0 stars" center />
          <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-6 mt-10">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[12px] font-medium text-[#ff5900] uppercase tracking-wider">
        {label}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
