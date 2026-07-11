import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { EmberButton } from "./EmberButton";
import { SERVICES } from "@/lib/services-data";
import { navDropdown } from "@/lib/motion";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services", dropdown: true },
  { label: "Insights", to: "/insights" },
];

export function Navbar() {
  const [openDrop, setOpenDrop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-[#b9bbc6]">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img
            src="https://cashyambhatia.com/images/logo.png"
            alt="CA Shyam Bhatia & Co."
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV.map((item) =>
            item.dropdown ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setOpenDrop(true)}
                onMouseLeave={() => setOpenDrop(false)}
              >
                <Link
                  to={item.to}
                  className="text-[14px] font-medium text-black hover:text-[#ff5900] transition-colors"
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {openDrop && (
                    <motion.div
                      {...navDropdown}
                      style={{ transformOrigin: "top center" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[280px]"
                    >
                      <div className="bg-white border border-[#b9bbc6] rounded-[12px] p-2">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="block px-3 py-2 rounded-[6px] text-[14px] text-black hover:bg-[#f3f3f7]"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-[14px] font-medium text-black hover:text-[#ff5900] transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <span className="text-[14px] font-medium text-[#8b8d98]">Sign in</span>
          <EmberButton to="/contact-us">Book a consultation</EmberButton>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-black"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-black"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-black"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-[#b9bbc6] overflow-hidden"
          >
            <div className="container-page py-4 flex flex-col gap-3">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] font-medium text-black py-1"
                >
                  {n.label}
                </Link>
              ))}
              <EmberButton to="/contact-us">Book a consultation →</EmberButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
