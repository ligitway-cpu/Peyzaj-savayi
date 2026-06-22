import React, { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Picture from "../components/Picture";
import { StatsBar } from "../components/StatsBar";
import { 
  ArrowRight, 
  Compass, 
  Trees, 
  Grid, 
  Sprout, 
  Briefcase, 
  Droplets,
  ChevronLeft,
  ChevronRight,
  Instagram,
  PhoneCall,
  Phone
} from "lucide-react";
import { PROJECTS } from "../data";
import SectionLabel from "../components/SectionLabel";
import BotanicalDivider from "../components/BotanicalDivider";
import SEO from "../components/SEO";

const landscapingSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  "name": "Peyzaj Sarayı",
  "image": "https://peyzajsarayi.com/images/og-image.jpg",
  "telephone": "+905421221355",
  "url": "https://peyzajsarayi.com",
  "logo": "https://peyzajsarayi.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tekkeköy",
    "addressLocality": "Samsun",
    "addressRegion": "Samsun",
    "postalCode": "55300",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.222,
    "longitude": 36.452
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/peyzaj_sarayi"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Peyzaj Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Peyzaj Tasarımı",
          "description": "3D görselleştirme, konsept çizimi ve profesyonel peyzaj mimarlığı projeleri."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bahçe Bakımı",
          "description": "Ziraat mühendisi kontrolünde mevsimsel budama, ilaçlama ve gübreleme."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rulo Çim Uygulama",
          "description": "Sık dokulu premium hazır rulo çim serimi ve otomatik sulama hatları."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Süs Bitkisi Satışı",
          "description": "Fidanlığımızda üretilen ithal ve yerli nitelikli ağaç, çalı fidanı satışı."
        }
      }
    ]
  }
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Peyzaj Sarayı",
  "url": "https://peyzajsarayi.com",
  "logo": "https://peyzajsarayi.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+905421221355",
    "contactType": "customer service",
    "areaServed": "TR",
    "availableLanguage": "Turkish"
  }
};

interface HomeProps {
  onOpenQuote: () => void;
}

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  key?: any;
}

// Custom wrapper to apply scroll-triggered fade up respecting prefers-reduced-motion
function FadeUp({ children, delay = 0 }: FadeUpProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home({ onOpenQuote }: HomeProps) {
  // Testimonials Carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingInsta, setLoadingInsta] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingProjects(false);
    }, 1000); // 1.0s skeleton simulation
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingInsta(false);
    }, 1200); // 1.2s skeleton simulation
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      quote: "Peyzaj Sarayı ekibi Atakum'daki villamızın bahçesini kelimenin tam anlamıyla cennete çevirdi. 3D tasarım aşamasından rulo çim serimine kadar her an ziraat mühendislerinin gözetiminde mükemmel bir iş çıkardılar.",
      client: "Süleyman Bey",
      location: "Atakum, Samsun"
    },
    {
      quote: "Engiz'deki çiftliğimiz için rulo çim ve otomatik sulama sistemi yaptırdık. Su tasarrufu şimdiden faturamıza yansıdı. Titiz, disiplinli ve sözünün arkasında bir firma.",
      client: "Ayşe Hanım",
      location: "19 Mayıs (Engiz), Samsun"
    },
    {
      quote: "Mesire alanımızın yeşillendirilmesinde her ağacı tek tek incelediler. Ladik'in zorlu iklimine dayanıklı doğru botanik tercihler yaparak muhteşem bir miras bıraktılar.",
      client: "Ladik Belediyesi Proje Birimi",
      location: "Ladik, Samsun"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // 6 Services defined with local layout & sage icons
  const homeServices = [
    {
      title: "Peyzaj Tasarımı",
      desc: "Arazinizin yapısına özel 3D rüzgar ve güneş analizli estetik planlar üretiyoruz. Hayallerinizi mühendislik standartlarında çizime döküyoruz.",
      icon: Compass,
      image: "/images/peyzaj_tasarimi.jpg",
      alt: "Profesyonel peyzaj tasarımı örneği"
    },
    {
      title: "Bahçe Bakımı",
      desc: "Ziraat mühendisleri kontrolünde mevsimsel gübreleme ve profesyonel budama yapıyoruz. Bitkilerinizin zerafetini dört mevsim koruyoruz.",
      icon: Trees,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800",
      alt: "Bahçe bakımı ve çalı budama hizmeti"
    },
    {
      title: "Rulo Çim Uygulama",
      desc: "Yabancı ot barındırmayan hazır rulo çimlerimizle bahçenizi saatler içinde kapatıyoruz. Güçlü kök tutunumu ile kusursuz yeşillik sağlıyoruz.",
      icon: Grid,
      image: "/images/rulo_cim.jpg",
      alt: "Rulo çim uygulama ve serim işlemi"
    },
    {
      title: "Süs Bitkisi Satışı",
      desc: "Seralarımızda özenle yetiştirdiğimiz ithal ve yerli soliter ağaçları sunuyoruz. Her bütçeye uygun sağlıklı ve budanmış fidan tedarik ediyoruz.",
      icon: Sprout,
      image: "/images/sus_bitkisi.jpg",
      alt: "Tekkeköy'de süs bitkisi üretim tesisi"
    },
    {
      title: "Peyzaj Uygulamaları",
      desc: "Sert zemin, traverten yürüme yolları ve yapısal peyzaj duvarları inşa ediyoruz. Doğal taş kaplamalarıyla bahçenize asil bir iskelet kazandırıyoruz.",
      icon: Briefcase,
      image: "/images/peyzaj_uygulamalari.jpg",
      alt: "Doğal taş döşeme ve sert zemin peyzaj uygulaması"
    },
    {
      title: "Sulama Sistemleri",
      desc: "Otomatik yağmur sensörlü akıllı sulama hatları ile %50 su tasarrufu sağlıyoruz. Bitki gruplarına göre nokta atışı nemlendirme planlıyoruz.",
      icon: Droplets,
      image: "/images/sulama_sistemleri.jpg",
      alt: "Otomatik damla sulama sistemi kurulumu"
    }
  ];

  // Instagram feed image links
  const instagramFeed = [
    { id: 1, image: "/images/peyzaj_tasarimi.jpg" },
    { id: 2, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80" },
    { id: 3, image: "/images/peyzaj_uygulamalari.jpg" },
    { id: 4, image: "/images/rulo_cim.jpg" },
    { id: 5, image: "/images/sus_bitkisi.jpg" },
    { id: 6, image: "/images/sulama_sistemleri.jpg" }
  ];

  return (
    <div className="bg-cream min-h-screen">
      <SEO 
        title="Anasayfa" 
        description="Peyzaj Sarayı ile hayallerinizdeki bahçeye kavuşun. Samsun ve çevre illerde 3D peyzaj tasarımı, rulo çim serme, otomatik sulama sistemleri ve uzman bahçe bakımı sunuyoruz."
        path="/"
        schema={[landscapingSchema, orgSchema]}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden py-24 select-none">
        
        {/* Immersive background photo */}
        <div className="absolute inset-0 z-0">
          <Picture
            src="/images/hero_bg.jpg"
            alt="Samsun'da profesyonel peyzaj tasarımı ve bahçe düzenlemesi"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center scale-103 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          {/* Dark green overlay (linear-gradient right: 72% opacity left → 20% opacity right) */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(27,67,50,0.72) 40%, rgba(27,67,50,0.2) 100%)"
            }}
          />
        </div>

        {/* Hero content wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">
          <div className="max-w-[620px] text-left space-y-6">
            
            {/* Gold eyebrow label */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block text-gold font-sans font-bold text-xs uppercase tracking-[0.25em]"
            >
              Samsun · Türkiye Geneli
            </motion.span>

            {/* H1 Cormorant Garamond 64px */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.1] font-semibold tracking-tight"
            >
              Doğanın Estetiğini Bahçenize Taşıyoruz
            </motion.h1>

            {/* DM Sans 18px white 90% opacity */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-white/90 text-sm sm:text-lg font-light leading-relaxed max-w-[540px]"
            >
              Peyzaj Sarayı olarak Samsun'da kişiye özel bahçe tasarımı, kapsamlı bakım hizmetleri ve kaliteli süs bitkisi üretimi sunuyoruz.
            </motion.p>

            {/* Two Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <Link
                to="/iletisim"
                className="bg-forest text-white hover:bg-[#122e23] font-semibold uppercase tracking-widest text-xs px-8 py-4.5 rounded-sm text-center shadow-lg transition-all duration-200"
              >
                Ücretsiz Keşif İste
              </Link>
              
              <Link
                to="/projeler"
                className="border border-white hover:border-gold hover:bg-white/10 text-white font-semibold uppercase tracking-widest text-xs px-8 py-4.5 rounded-sm text-center transition-all duration-200"
              >
                Projelerimizi Gör
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <StatsBar />

      {/* 3. BOTANICAL DIVIDER */}
      <BotanicalDivider variant="light" />

      {/* 4. SERVICES SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
            <div className="flex justify-center">
              <SectionLabel>HİZMETLERİMİZ</SectionLabel>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-forest leading-tight">
              Her Dış Mekân İçin Uzman Çözümler
            </h2>
          </div>
        </FadeUp>

        {/* 3-column grid of 6 service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <FadeUp key={idx} delay={idx * 0.05}>
                <div className="bg-white border border-light rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Top Image Container */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden select-none bg-slate-50 border-b border-light/30">
                      <Picture
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104 shadow-[inset_0_0_0_1px_rgba(27,67,50,0.08)]"
                        loading="lazy"
                      />
                    </div>
                    {/* Content Pad */}
                    <div className="p-8 pb-0 space-y-4">
                      {/* Sage icon */}
                      <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center text-sage">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {/* H3 service title */}
                      <h3 className="font-serif text-2xl font-semibold text-forest">
                        {service.title}
                      </h3>
                      {/* 2-sentence description */}
                      <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans font-light">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  {/* Detaylar link */}
                  <div className="p-8 pt-0">
                    <div className="pt-6 mt-6 border-t border-light/40">
                      <Link
                        to="/hizmetler"
                        className="text-xs font-bold uppercase tracking-widest text-gold hover:text-forest transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Detaylar</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Below grid CTA */}
        <div className="text-center mt-12">
          <FadeUp>
            <Link
              to="/hizmetler"
              className="bg-forest text-gold hover:bg-[#122e23] font-semibold uppercase tracking-widest text-xs px-10 py-4.5 rounded-sm transition-shadow hover:shadow-lg inline-block"
            >
              Tüm Hizmetlerimiz
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SECTION */}
      <section className="py-20 bg-white min-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeUp>
            <div className="mb-12 text-center md:text-left">
              <SectionLabel>PROJELER</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-[45px] font-semibold text-forest leading-tight mt-3">
                Ellerimizden Geçen Bahçeler
              </h2>
            </div>
          </FadeUp>

          {/* Asymmetric 2-column layout: 1 large left, 2 stacked right */}
          {loadingProjects ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-pulse">
              {/* Left major skeleton */}
              <div className="lg:col-span-7 h-[550px] bg-light/70 rounded-xl flex flex-col justify-end p-8 space-y-4">
                <div className="h-4 bg-forest/10 rounded w-1/4" />
                <div className="h-8 bg-forest/10 rounded w-3/4" />
                <div className="h-4 bg-forest/10 rounded w-2/3" />
                <div className="h-4 bg-forest/10 rounded w-1/3" />
              </div>
              {/* Right column skeleton */}
              <div className="lg:col-span-5 flex flex-col gap-8 h-full justify-between">
                <div className="h-[261px] bg-light/70 rounded-xl p-6 flex flex-col justify-end space-y-3">
                  <div className="h-3 bg-forest/10 rounded w-1/4" />
                  <div className="h-6 bg-forest/10 rounded w-2/3" />
                  <div className="h-3 bg-forest/10 rounded w-1/2" />
                </div>
                <div className="h-[261px] bg-light/70 rounded-xl p-6 flex flex-col justify-end space-y-3">
                  <div className="h-3 bg-forest/10 rounded w-1/4" />
                  <div className="h-6 bg-forest/10 rounded w-2/3" />
                  <div className="h-3 bg-forest/10 rounded w-1/2" />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left large project card: Atakum Bahçe Temizliği */}
              <div className="lg:col-span-7 h-full">
                <FadeUp>
                  <Link 
                    to="/projeler/atakum-bahce-temizligi"
                    className="group relative block w-full h-[550px] rounded-xl overflow-hidden shadow-md border border-light"
                  >
                    <Picture
                      src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=1200&q=80"
                      alt="Atakum Bahçe Temizliği"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    {/* Hover visual filter: Forest-Green overlay on hover */}
                    <div className="absolute inset-0 bg-forest/20 opacity-100 group-hover:bg-forest/75 transition-all duration-300 flex flex-col justify-end p-8" />
                    
                    {/* Text card details, visible cleanly / sliding content on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10 space-y-3 text-white">
                      <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold block">Bahçe Bakımı & Temizlik</span>
                      <h3 className="font-serif text-3xl sm:text-4xl font-semibold">Atakum Bahçe Temizliği & Bakımı</h3>
                      <p className="font-sans text-xs sm:text-sm text-cream/80 font-light opacity-90 leading-relaxed max-w-lg transition-opacity duration-300">
                        Yabani ot temizliği, form budaması ve toprak vitamin takviyesi ile kurgulanan lüks çevre yenileme projemiz.
                      </p>
                      <div className="pt-2">
                        <span className="text-xs tracking-wider uppercase text-gold font-bold inline-flex items-center gap-1">
                          İncele <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              </div>

              {/* Right stacked projects column */}
              <div className="lg:col-span-5 flex flex-col gap-8 h-full justify-between">
                
                {/* Stack 1: Engiz Rulo Çim */}
                <FadeUp delay={0.1}>
                  <Link 
                    to="/projeler/engiz-rulo-cim"
                    className="group relative block w-full h-[261px] rounded-xl overflow-hidden shadow-md border border-light"
                  >
                    <Picture
                      src="https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=800&q=80"
                      alt="Engiz Rulo Çim"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-forest/20 opacity-100 group-hover:bg-forest/75 transition-all duration-300 flex flex-col justify-end p-6" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1.5 text-white">
                      <span className="text-[9px] text-gold uppercase tracking-[0.2em] font-bold block">Çim Serme & Peyzaj</span>
                      <h3 className="font-serif text-2xl font-semibold">Engiz Rulo Çim Uygulaması</h3>
                      <p className="text-[11px] text-cream/85 font-light leading-relaxed max-w-xs block sm:hidden md:block line-clamp-1">
                        Demircan Çiftliği'nde geçirgen zemin hazırlıklı premium çim serme.
                      </p>
                      <div className="pt-1.5">
                        <span className="text-[11px] tracking-wider uppercase text-gold font-bold inline-flex items-center gap-1">
                          İncele <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeUp>

                {/* Stack 2: Geyikosan Mesire Alanı */}
                <FadeUp delay={0.2}>
                  <Link 
                    to="/projeler/geyikosan-mesire-alani"
                    className="group relative block w-full h-[261px] rounded-xl overflow-hidden shadow-md border border-light"
                  >
                    <Picture
                      src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
                      alt="Geyikosan Mesire Alanı"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-forest/20 opacity-100 group-hover:bg-forest/75 transition-all duration-300 flex flex-col justify-end p-6" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1.5 text-white">
                      <span className="text-[9px] text-gold uppercase tracking-[0.2em] font-bold block">Kamuya Açık & Rekreasyon</span>
                      <h3 className="font-serif text-2xl font-semibold">Geyikosan Mesire Alanı Peyzajı</h3>
                      <p className="text-[11px] text-cream/85 font-light leading-relaxed max-w-xs block sm:hidden md:block line-clamp-1">
                        Doğal dokuya uyumlu meşe ve çam rekreasyon alanı rekreasyonu.
                      </p>
                      <div className="pt-1.5">
                        <span className="text-[11px] tracking-wider uppercase text-gold font-bold inline-flex items-center gap-1">
                          İncele <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeUp>

              </div>

            </div>
          )}

          {/* All projects link */}
          <div className="text-center mt-12 w-full">
            <FadeUp>
              <Link
                to="/projeler"
                className="border border-forest/30 hover:border-gold hover:bg-forest/5 text-forest font-semibold uppercase tracking-widest text-xs px-10 py-4.5 rounded-sm transition-all text-center inline-block"
              >
                Tüm Projeleri Gör
              </Link>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* 6. ABOUT PREVIEW SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Left */}
          <div className="lg:col-span-6">
            <FadeUp>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-light select-none">
                <Picture
                  src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1200&q=80"
                  alt="Peyzaj Sarayı profesyonel bahçe ekibi"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-forest/10" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4.5 rounded-lg border border-gold/20 shadow-lg text-center hidden sm:block">
                  <span className="font-serif text-3xl font-bold text-forest block">10+ Yıl</span>
                  <span className="text-[9px] font-sans text-charcoal/70 uppercase tracking-widest font-semibold block mt-1">Samsun Güvencesi</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 space-y-6">
            <FadeUp>
              <SectionLabel>HAKKIMIZDA</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-forest leading-tight mt-3">
                Samsun'un Doğal Güzelliğine Adanmış Bir Ekip
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.05}>
              <p className="text-sm sm:text-base text-charcoal/80 font-sans font-light leading-relaxed pr-2">
                Peyzaj Sarayı olarak, Samsun ve çevresinde doğanın benzersiz dokusunu estetik dokunuşlarla harmanlıyoruz. Her bir projeyi, toprağın kimyasından bitkinin gelişim eğrisine kadar ziraat mühendislerimiz ve uzman kadromuz eşliğinde titizlikle planlıyoruz.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-sm sm:text-base text-charcoal/80 font-sans font-light leading-relaxed pr-2">
                Sadece görsel bir zenginlik değil, aynı zamanda yaşayan, nefes alan ve yıllar geçtikçe değerlenen ekolojik yaşam alanları inşa ediyoruz. Tasarımdan periyodik bakıma kadar her aşamada en yüksek standartları hedefliyoruz.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="pt-4">
                <Link
                  to="/hakkimizda"
                  className="bg-forest text-gold hover:bg-[#122e23] font-semibold uppercase tracking-widest text-xs px-10 py-4.5 rounded-sm transition-shadow hover:shadow-lg inline-block"
                >
                  Bizi Tanıyın
                </Link>
              </div>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* 7. BOTANICAL DIVIDER */}
      <BotanicalDivider variant="light" />

      {/* 8. TESTIMONIALS SECTION */}
      <section className="relative py-20 bg-forest text-white overflow-hidden min-w-full">
        {/* Soft background texture image overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none select-none">
          <Picture
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
            alt="Müşteri görüşleri arka plan yaprak dokusu"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-12">
          
          <FadeUp>
            <div className="space-y-3">
              <span className="flex items-center justify-center gap-3 font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase select-none">
                <span className="w-4 h-[1px] bg-gold opacity-60"></span>
                <span>MÜŞTERI GÖRÜŞLERI</span>
                <span className="w-4 h-[1px] bg-gold opacity-60"></span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold leading-tight">
                Müşterilerimizin Yorumları
              </h2>
            </div>
          </FadeUp>

          {/* Carousel Slider */}
          <FadeUp delay={0.1}>
            <div className="relative min-h-[220px] flex flex-col justify-center items-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 max-w-2xl mx-auto"
                >
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-cream/90 leading-relaxed font-light px-4">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  <div className="space-y-1">
                    <span className="font-sans text-sm font-bold text-gold uppercase tracking-wider block">
                      {testimonials[activeTestimonial].client}
                    </span>
                    <span className="font-sans text-[11px] text-white/50 uppercase tracking-widest block">
                      {testimonials[activeTestimonial].location}
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Slider Left Arrow button */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 sm:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 hover:border-gold hover:bg-white/5 flex items-center justify-center text-white hover:text-gold transition-colors cursor-pointer"
                aria-label="Önceki Yorum"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Slider Right Arrow button */}
              <button
                onClick={nextTestimonial}
                className="absolute right-0 sm:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 hover:border-gold hover:bg-white/5 flex items-center justify-center text-white hover:text-gold transition-colors cursor-pointer"
                aria-label="Sonraki Yorum"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </div>

            {/* Pagination dots indicators */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveTestimonial(dotIdx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === dotIdx ? "bg-gold scale-125" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Yorum ${dotIdx + 1}`}
                />
              ))}
            </div>

          </FadeUp>

        </div>
      </section>

      {/* 9. INSTAGRAM FEED SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeUp>
          <div className="text-center space-y-4 mb-12">
            <div className="flex justify-center">
              <SectionLabel>INSTAGRAM</SectionLabel>
            </div>
            
            {/* Clickable Username */}
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              <a 
                href="https://instagram.com/peyzaj_sarayi" 
                target="_blank" 
                rel="noreferrer"
                className="text-forest hover:text-gold transition-colors inline-flex items-center gap-2"
              >
                <span>@peyzaj_sarayi</span>
                <Instagram className="w-7 h-7 shrink-0 text-gold-500" />
              </a>
            </h2>
          </div>
        </FadeUp>

        {/* 6-image grid with sage hover overlay */}
        {loadingInsta ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-light/70 rounded-lg flex items-center justify-center">
                <Instagram className="w-8 h-8 text-forest/10" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramFeed.map((item, idx) => (
              <FadeUp key={item.id} delay={idx * 0.04}>
                <div className="group relative aspect-square rounded-lg overflow-hidden border border-light shadow-xs select-none">
                  <Picture
                    src={item.image}
                    alt={`Peyzaj Sarayı Instagram ${item.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Sage hover overlay */}
                  <div className="absolute inset-0 bg-sage/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <div className="text-center p-3">
                      <Instagram className="w-6 h-6 mx-auto mb-1 opacity-90" />
                      <span className="text-[10px] tracking-widest font-sans uppercase font-bold text-white/95">GÖRÜNTÜLE</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        )}

      </section>

      {/* 10. CONTACT CTA BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center select-none">
        <FadeUp>
          <div className="bg-forest text-white rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-xl">
            
            {/* Subtle botanical lines/crest background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <Trees className="w-80 h-80 text-white" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              
              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
                Bahçeniz İçin Ücretsiz Keşif Talep Edin
              </h2>

              <p className="text-sm text-cream/80 max-w-xl mx-auto font-sans font-light leading-relaxed">
                Samsun genelinde ücretsiz ölçü alma, toprak analizi ve ön fizibilite hizmetimizden yararlanmak için hemen bizimle iletişime geçin. Uzman ekibimiz 24 saat içinde size özel teklif planı sunacaktır.
              </p>

              <div className="pt-4">
                <a
                  href="tel:+905421221355"
                  className="bg-gold hover:bg-[#a3835a] text-forest hover:text-[#0b1f17] font-semibold uppercase tracking-widest text-xs px-10 py-5 rounded-sm inline-flex items-center gap-2.5 transition-transform duration-200 active:scale-95 shadow-md"
                >
                  <Phone className="w-4 h-4 text-forest" />
                  Hemen Arayın: 0542 122 13 55
                </a>
              </div>

              <p className="text-[10px] text-cream/40 uppercase tracking-[0.2em] pt-2">
                PAZARTESİ - CUMARTESİ: 08:30 - 18:30
              </p>

            </div>

          </div>
        </FadeUp>
      </section>

    </div>
  );
}
