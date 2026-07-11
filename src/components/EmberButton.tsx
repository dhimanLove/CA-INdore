import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

interface Props {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
}

export function EmberButton({
  to,
  href,
  children,
  className = "",
  type,
  onClick,
  fullWidth,
}: Props) {
  const base = `inline-flex items-center justify-center bg-[#ff5900] text-white rounded-[12px] px-4 py-2 text-[14px] font-semibold hover:bg-[#e64f00] transition-colors ${
    fullWidth ? "w-full py-3 text-[16px]" : ""
  } ${className}`;
  const motionProps = {
    whileHover: { scale: 1.025 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  };
  if (to) {
    return (
      <motion.span {...motionProps} className="inline-block">
        <Link to={to as ComponentProps<typeof Link>["to"]} className={base}>
          {children}
        </Link>
      </motion.span>
    );
  }
  if (href) {
    return (
      <motion.a href={href} className={base} {...motionProps}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type={type ?? "button"} onClick={onClick} className={base} {...motionProps}>
      {children}
    </motion.button>
  );
}
