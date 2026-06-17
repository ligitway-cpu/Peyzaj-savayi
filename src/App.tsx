import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import QuoteModal from "./components/QuoteModal";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

// Scroll to top helper on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// Wrapper to manage layout with location hooks
function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-consent");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg z-50 bg-[#1A1A1A] border border-gold/30 p-4 rounded-xl shadow-2xl flex items-center justify-between gap-4 animate-on-scroll is-visible">
      <span className="font-sans text-xs sm:text-sm text-[#F7F3EE]">Bu web sitesi çerezler kullanır.</span>
      <button
        onClick={handleAccept}
        className="bg-gold hover:bg-gold/90 text-charcoal text-xs font-sans font-semibold tracking-wider px-5 py-2.5 rounded-lg transition-all duration-300 cursor-pointer min-h-[44px] min-w-[80px] flex items-center justify-center shadow-lg active:scale-95 whitespace-nowrap"
      >
        Tamam
      </button>
    </div>
  );
}

function LayoutContent() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll triggers IntersectionObserver setup
  useEffect(() => {
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.1,
      };

      let pendingEntries: HTMLElement[] = [];
      let staggerTimeout: NodeJS.Timeout | null = null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (!el.classList.contains("is-visible") && !pendingEntries.includes(el)) {
              pendingEntries.push(el);
            }
            observer.unobserve(el);
          }
        });

        if (pendingEntries.length > 0) {
          if (staggerTimeout) clearTimeout(staggerTimeout);
          
          const processQueue = () => {
            if (pendingEntries.length === 0) return;
            const next = pendingEntries.shift();
            if (next) {
              next.classList.add("is-visible");
            }
            if (pendingEntries.length > 0) {
              staggerTimeout = setTimeout(processQueue, 100); // 100ms stagger between sibling elements
            }
          };
          processQueue();
        }
      }, observerOptions);

      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
        if (staggerTimeout) clearTimeout(staggerTimeout);
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-cream selection:bg-forest selection:text-gold text-charcoal">
      {/* Scroll manager */}
      <ScrollToTop />

      {/* Styled Top Sticky Navbar */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Primary views router output */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/projeler/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sss" element={<FAQ />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Common layout footer */}
      <Footer />

      {/* Premium floating tools */}
      <FloatingWhatsApp />

      {/* Dynamic Lead Capture Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      {/* Cookie Notice Banner */}
      <CookieBanner />
    </div>
  );
}

// Root App Export wrapping inside BrowserRouter and HelmetProvider
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LayoutContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

