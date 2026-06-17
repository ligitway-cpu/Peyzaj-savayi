import { Link } from "react-router-dom";
import { Trees, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="bg-forest min-h-screen flex items-center justify-center relative overflow-hidden px-4 select-none">
      <SEO 
        title="Sayfa Bulunamadı"
        description="Peyzaj Sarayı web sitesinde aradığınız yeşil patika veya asil bahçe sayfasına şu anda ulaşılamıyor. Lütfen anasayfaya geri dönün."
        path="/404"
      />
      
      {/* Editorial botanical background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Trees className="w-[30rem] h-[30rem] text-gold" />
      </div>

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        <h1 className="font-serif text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold text-gold leading-none tracking-tighter drop-shadow-lg">
          404
        </h1>
        
        <div className="space-y-3">
          <p className="font-serif text-3xl md:text-4xl text-cream italic tracking-wide">
            Sayfa bulunamadı
          </p>
          <p className="font-sans text-sm text-[#F7F3EE]/70 max-w-sm mx-auto leading-relaxed">
            Aradığınız yeşil patika veya asil bahçe sayfasına şu anda ulaşılamıyor. Başka bir rotaya yönlenmek için aşağıdaki butonu kullanabilirsiniz.
          </p>
        </div>

        <div className="pt-4 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gold hover:bg-[#a3835a] text-charcoal font-sans font-semibold uppercase tracking-widest text-xs px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            Ana Sayfaya Dön
          </Link>
        </div>

        <p className="text-[10px] text-light/35 uppercase tracking-[0.2em] font-sans">
          Peyzaj Sarayı
        </p>
      </div>
    </div>
  );
}
