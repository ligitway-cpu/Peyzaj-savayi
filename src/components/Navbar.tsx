import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, PhoneCall, Trees } from "lucide-react";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Projeler", path: "/projeler" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Blog", path: "/blog" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
          isScrolled
            ? "bg-forest/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg text-white"
            : "bg-transparent py-6 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Left */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Trees className="w-7 h-7 text-gold transition-transform duration-300 group-hover:rotate-6" />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-white leading-none">
                  PEYZAJ SARAYI
                </span>
                <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.3em] text-gold uppercase font-medium mt-1">
                  PREMIUM BOTANICAL DESIGN
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative font-sans text-xs tracking-widest font-semibold uppercase hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute left-0 right-0 -bottom-1.5 h-[2px] bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="hidden sm:flex bg-gold hover:bg-[#a3835a] text-charcoal font-semibold uppercase tracking-widest text-[11px] px-5 py-2.5 rounded-sm transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Teklif Al</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white hover:text-gold focus:outline-none p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Menüyü Aç/Kapat"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Forest-Green Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-forest flex flex-col justify-between p-8 pt-28 text-white text-center"
          >
            {/* Background design accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5">
              <Trees className="w-96 h-96 text-gold" />
            </div>

            {/* Links Block */}
            <nav className="flex flex-col gap-6 py-8">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-serif text-3xl tracking-wide block hover:text-gold transition-colors ${
                        isActive ? "text-gold italic font-semibold" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions of Mobile Drawer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col items-center gap-4 mt-auto border-t border-white/10 pt-6"
            >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full max-w-xs bg-gold hover:bg-[#a3835a] text-charcoal font-semibold uppercase tracking-widest text-xs py-3.5 rounded-sm transition-transform active:scale-95 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Teklif Al</span>
              </button>
              <span className="font-sans text-[10px] tracking-[0.2em] text-light uppercase opacity-60">
                Peyzaj Sarayı • İstanbul
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
