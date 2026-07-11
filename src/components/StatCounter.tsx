import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
}

export function StatCounter({ target, suffix = "", prefix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate() {
          el.textContent =
            prefix +
            Math.round(obj.val).toLocaleString("en-IN") +
            suffix;
        },
      });
    });
    return () => ctx.revert();
  }, [target, suffix, prefix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
