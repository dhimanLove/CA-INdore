import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Props {
  eyebrow?: string;
  heading: string;
  center?: boolean;
  subtext?: string;
}

export function SectionHeading({ eyebrow, heading, center, subtext }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    const children = Array.from(wrapRef.current.children);
    const ctx = gsap.context(() => {
      gsap.from(children, {
        opacity: 0,
        y: 28,
        stagger: 0.12,
        duration: 0.7,
        ease: "expo.out",
        scrollTrigger: {
          trigger: wrapRef.current!,
          start: "top 85%",
          once: true,
        },
      });
    });
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={wrapRef} className={center ? "text-center" : ""}>
      {eyebrow && (
        <div className="text-[12px] font-medium text-[#ff5900] uppercase tracking-widest">
          {eyebrow}
        </div>
      )}
      <h2
        className="text-[36px] md:text-[48px] font-semibold text-black leading-[1.2] mt-3"
        style={{ letterSpacing: "-0.025em" }}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`text-[16px] text-[#60646c] mt-4 max-w-[560px] ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
