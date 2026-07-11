import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const LOGOS = Array.from(
  { length: 12 },
  (_, i) => `https://cashyambhatia.com/images/clients/cl-${i + 1}.png`,
);

export function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    // Calculate distance based on half the set
    const distance = track.scrollWidth / 2;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(track, {
      x: -distance,
      duration: 40, // Slower is more premium
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full py-10 overflow-hidden bg-white [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div ref={trackRef} className="flex items-center gap-16 w-max px-8">
        {[...LOGOS, ...LOGOS].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Client Logo"
            className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </div>
  );
}
