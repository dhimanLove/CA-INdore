import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services-data";
import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-gray-100 text-black pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Newsletter */}
          <div>
            <img
              src="https://cashyambhatia.com/images/logo.png"
              alt="CA Shyam Bhatia & Co."
              className="h-8 w-auto mb-6"
            />
            <p className="text-sm text-gray-600 mb-6 max-w-[250px]">
              Expert financial guidance and strategic tax solutions for your business.
            </p>
            <form className="relative max-w-[280px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <button type="submit" className="absolute right-0 top-2">
                <Send className="h-4 w-4 text-gray-400 hover:text-black" />
              </button>
            </form>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-black">Company</h3>
            <nav className="space-y-3 text-sm text-gray-600">
              <Link to="/" className="block hover:text-black transition-colors">Home</Link>
              <Link to="/about-us" className="block hover:text-black transition-colors">About Us</Link>
              <Link to="/insights" className="block hover:text-black transition-colors">Insights</Link>
              <Link to="/contact-us" className="block hover:text-black transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-black">Services</h3>
            <nav className="space-y-3 text-sm text-gray-600">
              {SERVICES.map((s) => (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="block hover:text-black transition-colors">
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-black">Contact</h3>
            <address className="space-y-3 text-sm text-gray-600 not-italic">
              <p>2nd Floor, 326 Prem Trade Centre,<br />Maharani Road, Indore, MP 452007</p>
              <a href="tel:+919826082720" className="block hover:text-black">+91 98260 82720</a>
              <a href="mailto:shyambhatia@rediffmail.com" className="block hover:text-black">shyambhatia@rediffmail.com</a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CA Shyam Bhatia & Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}