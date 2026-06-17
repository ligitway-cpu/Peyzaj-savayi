import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  const { pathname } = useLocation();
  const whatsappUrl = "https://wa.me/905421221355?text=Merhaba,%20peyzaj%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  const [isHovered, setIsHovered] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    // Pulse animation triggers 2 times on first load and then removes the ping element
    const timer = setTimeout(() => {
      setPulseCount(2);
    }, 3000); // 3 seconds allows roughly 2 full pulse iterations

    return () => clearTimeout(timer);
  }, []);

  if (pathname === "/iletisim") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 h-14 bg-[#25D366] text-white rounded-full px-3.5 shadow-[0_4px_20px_rgba(37,211,102,0.4)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] cursor-pointer"
        style={{
          width: isHovered ? "170px" : "56px",
          justifyContent: isHovered ? "flex-start" : "center",
        }}
        aria-label="WhatsApp Canlı Destek"
      >
        {/* Breathing ring */}
        {pulseCount < 2 && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10"></span>
        )}
        
        {/* Svg chat icon */}
        <svg 
          className="w-7 h-7 fill-current shrink-0 text-white" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.019 14.108 1.02 11.488 1.02c-5.436 0-9.86 4.37-9.864 9.8 0 1.714.468 3.39 1.353 4.873L1.936 21l5.525-1.449c.002 0 .002.001.002.001zM17.47 14.39c-.32-.16-1.89-.93-2.18-1.04-.3-.11-.51-.16-.72.16-.21.32-.82 1.03-1 1.23-.18.2-.37.22-.69.06-.32-.16-1.36-.5-2.59-1.6-1-.89-1.67-2-1.87-2.34-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.18.22-.3.32-.51.1-.2.05-.38-.03-.54-.08-.16-.72-1.73-.99-2.38-.26-.63-.52-.54-.72-.55-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.28 3.26.16.21 2.22 3.39 5.39 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.48.27-.71.27-1.32.19-1.45-.07-.13-.26-.21-.58-.37z"/>
        </svg>

        <span
          className="font-sans text-xs font-semibold tracking-wider uppercase whitespace-nowrap overflow-hidden transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            width: isHovered ? "auto" : 0,
            marginLeft: isHovered ? "6px" : 0,
          }}
        >
          WhatsApp ile Yaz
        </span>
      </motion.a>
    </div>
  );
}

