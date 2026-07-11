import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function HeroHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll("[data-word]");
    const ctx = gsap.context(() => {
      gsap.from(words, {
        opacity: 0,
        y: 40,
        rotateX: -30,
        stagger: 0.08,
        duration: 0.7,
        ease: "expo.out",
        delay: 0.15,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const Word = ({ children }: { children: React.ReactNode }) => (
    <span data-word className="inline-block will-change-transform">
      {children}
    </span>
  );

  return (
    <h1
      ref={ref}
      className="text-[44px] sm:text-[56px] lg:text-[72px] font-semibold text-black leading-[1.02]"
      style={{ letterSpacing: "-0.03em" }}
    >
      <Word>Governed</Word> <Word>by</Word>
      <br />
      <Word>Knowledge.</Word>
      <br />
      <Word>Built</Word> <Word>on</Word>{" "}
      <Word>
        Trust<span className="text-[#ff5900]">.</span>
      </Word>
    </h1>
  );
}
