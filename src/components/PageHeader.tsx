import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  crumbs: Crumb[];
  title: string;
  subtext?: string;
}

export function PageHeader({ crumbs, title, subtext }: Props) {
  return (
    <section className="bg-[#f3f3f7] py-16">
      <div className="container-page">
        <div className="text-[12px] text-[#8b8d98]">
          {crumbs.map((c, i) => (
            <span key={i}>
              {c.to ? (
                <Link to={c.to as ComponentProps<typeof Link>["to"]} className="hover:text-black">
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
              {i < crumbs.length - 1 && " / "}
            </span>
          ))}
        </div>
        <h1
          className="text-[36px] md:text-[48px] font-semibold text-black leading-[1.15] mt-4 whitespace-pre-line"
          style={{ letterSpacing: "-0.025em" }}
        >
          {title}
        </h1>
        {subtext && (
          <p className="text-[16px] text-[#60646c] mt-4 max-w-[560px]">
            {subtext}
          </p>
        )}
      </div>
    </section>
  );
}
