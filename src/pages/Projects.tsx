import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trees, ArrowRight } from "lucide-react";
import { PROJECTS } from "../data";
import SectionLabel from "../components/SectionLabel";
import BotanicalDivider from "../components/BotanicalDivider";
import SEO from "../components/SEO";
import Picture from "../components/Picture";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("Tümü");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filterTabs = [
    "Tümü",
    "Konut",
    "Ticari",
    "Kamu Alanı",
    "Çim Uygulama"
  ];

  // Filter projects by exact category
  const filteredProjects = selectedFilter === "Tümü"
    ? PROJECTS
    : PROJECTS.filter(proj => proj.category === selectedFilter);

  return (
    <div id="projects-page-container" className="bg-cream pt-24 min-h-screen">
      <SEO 
        title="Projelerimiz"
        description="Peyzaj Sarayı referansları. Samsun, Tekkeköy, Atakum ve Karadeniz genelinde tamamladığımız lüks villa bahçesi düzenlemeleri, kamu rekreasyon alanları ve çim uygulamaları."
        path="/projeler"
      />
      
      {/* Page Header */}
      <div id="projects-hero-banner" className="bg-forest text-white py-24 relative overflow-hidden text-center select-none">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Trees className="w-96 h-96 mx-auto text-gold" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.25em]">Saray Albümü</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-wide">Prestijli Projelerimiz</h1>
          <p className="font-sans text-cream/70 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Hayallerin peyzaj mühendisliğiyle buluştuğu; lüks mülkler, kurumsal alanlar ve belediye rekreasyon sahaları için tasarladığımız yaşayan yeşil başyapıtlar.
          </p>
        </div>
      </div>

      {/* Main Gallery Section */}
      <section id="gallery-main-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-xl mx-auto space-y-4 mb-12 text-pretty">
          <div className="flex justify-center">
            <SectionLabel>Eşsiz İmzalarımız</SectionLabel>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-forest">
            Açık Alanlarda Sanatsal İzler
          </h2>
        </div>

        {/* Categories Tab Pill Bar */}
        <div id="filter-tabs-container" className="flex flex-wrap items-center justify-center gap-3 mb-16 font-sans select-none">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab;
            return (
              <button
                id={`filter-tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-6 py-2.5 rounded-sm text-[11px] font-bold tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-forest border-forest text-gold shadow-md"
                    : "bg-white border-light text-charcoal hover:bg-cream hover:border-gold/50"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 3-Column Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-light/50 rounded-2xl overflow-hidden aspect-[4/3] flex flex-col justify-end p-6 space-y-3 pb-8">
                <div className="h-3 bg-forest/10 rounded w-1/4" />
                <div className="h-6 bg-forest/10 rounded w-2/3" />
                <div className="h-3 bg-forest/10 rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div id="no-projects-view" className="text-center py-20 bg-white border border-light rounded-2xl max-w-md mx-auto space-y-4">
            <Trees className="w-12 h-12 text-gold mx-auto opacity-40 animate-pulse" />
            <h3 className="font-serif text-xl font-bold text-forest">Proje Bulunmuyor</h3>
            <p className="text-xs text-charcoal/60 leading-relaxed font-sans max-w-xs mx-auto">
              Seçtiğiniz kategoriye ait uygulama görsellerimiz şu anda güncellenmektedir. Lütfen diğer kategorileri inceleyin.
            </p>
          </div>
        ) : (
          <div id="projects-masonry-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => {
              return (
                <Link
                  id={`project-card-${proj.slug}`}
                  to={`/projeler/${proj.slug}`}
                  key={proj.slug}
                  className="group relative block overflow-hidden rounded-2xl bg-white shadow-md border border-light/50 transition-all duration-300 h-full hover:shadow-xl"
                >
                  {/* Image container: Aspect Ratio 4:3, Overflow Hidden */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <Picture 
                      src={proj.mainImage} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-110"
                    />
                    
                    {/* Dark gradient base on top of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
                    
                    {/* Standard title at the bottom (visible always when not hovered) */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                      <span className="bg-forest/80 backdrop-blur-xs text-gold text-[9px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm font-sans border border-gold/10 inline-block mb-1.5">
                        {proj.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white drop-shadow-md line-clamp-1">
                        {proj.title}
                      </h3>
                    </div>

                    {/* Forest Green Overlay on Hover */}
                    <div className="absolute inset-0 bg-forest/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-center items-center p-8 text-center select-none z-20">
                      <span className="text-gold font-sans text-xs uppercase tracking-widest font-semibold mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[450ms]">
                        {proj.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white mb-6 leading-tight max-w-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[550ms]">
                        {proj.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 bg-gold hover:bg-[#a3835a] text-charcoal font-bold uppercase tracking-widest text-[10px] px-5 py-2.5 rounded-sm transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[650ms]">
                        İncele 
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </section>

      {/* Botanical Divider */}
      <BotanicalDivider variant="light" />

      {/* Decorative Showcase Certification Banner */}
      <section id="quality-seal-banner" className="bg-forest py-20 text-white min-w-full font-sans select-none border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Trees className="w-12 h-12 text-gold mx-auto" />
          <h2 className="font-serif text-3.5xl font-semibold tracking-wide">
            Her Adımda Sürdürülebilir Doğa Mühendisliği
          </h2>
          <p className="text-cream/70 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Bizim için peyzaj geçici bir yeşillendirme değil, zamana meydan okuyan biyolojik bütünlüktür. Seralarımızda fidan seçerken yaprak formlarının estetik orantısı ve kök kalitesi tek tek mühendislerimizce kontrol edilir.
          </p>
          <div className="pt-2">
            <span className="px-5 py-2 rounded-sm border border-gold/20 text-[10px] uppercase tracking-widest text-gold font-bold">
              ESTETİK • SÜRDÜRÜLEBİLİRLİK • BİLİM
            </span>
          </div>
        </div>
      </section>

      <div className="py-12 bg-cream"></div>

    </div>
  );
}
