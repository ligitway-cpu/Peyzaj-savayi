import React, { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Check, Phone, Trees } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import BotanicalDivider from "../components/BotanicalDivider";
import SEO from "../components/SEO";
import Picture from "../components/Picture";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
}

// Reusable scroll-triggered fade-up component respecting prefers-reduced-motion
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

const SECTIONS_LIST = [
  { id: "peyzaj-tasarimi", label: "Peyzaj Tasarımı" },
  { id: "bahce-bakimi", label: "Bahçe Bakımı" },
  { id: "cim-uygulama", label: "Rulo Çim" },
  { id: "sus-bitkisi", label: "Süs Bitkisi" },
  { id: "sert-zemin", label: "Sert Zemin & Yapılar" }
];

const SERVICES_DATA = [
  {
    id: "peyzaj-tasarimi",
    tag: "MİMARİ TASARIM",
    title: "Peyzaj Tasarımı & Uygulama",
    p1: "Peyzaj tasarımını sadece bitkilerin serpiştirilmesi değil, rüzgar koridorlarından toprak katmanlarına kadar birçok parametreyi içeren bir mimarlık dalı olarak ele alıyoruz. Samsun'un doğal yapısına, topografyasına ve mülkünüzün karakterine özel 3D rüzgar, güneş ve gölge analizleri uyguluyoruz.",
    p2: "Hazırladığımız konsep projelerle bahçenizin yıllar içerisindeki büyüme formunu, mevsimlik renk değişimlerini ve çiçeklenme periyotlarını henüz ilk günden görebilirsiniz. Sanatsal bakış açısı ve ziraat mühendisliği disiplini ile mülkünüzün değerine değer katıyoruz.",
    features: [
      "3 Boyutlu Görselleştirme & Vaziyet Planları",
      "Güneş, Rüzgâr ve Mikroklima Analizi",
      "Sürdürülebilir Ekolojik Bitki Seçim Rehberi",
      "Yapısal Sert Zemin ve Aydınlatma Tasarımları",
      "Uygulama Sonrası Detaylı Mimari Kontrol"
    ],
    image: "/images/peyzaj_tasarimi.jpg"
  },
  {
    id: "bahce-bakimi",
    tag: "MÜHENDİSLİK & KORUMA",
    title: "Bahçe Bakım Hizmetleri",
    p1: "Zamanında ve bilimsel yöntemlerle yapılmayan bakımlar, en değerli süs bitkilerinizin dahi canlılığını kaybetmesine neden olur. Peyzaj Sarayı uzman ekibi, periyodik ziyaretlerle bahçenizin tüm biyolojik sağlığını ziraat mühendislerimizin kontrolü altında tutar.",
    p2: "Bahçenizdeki bitkilerin form ve gençleştirme budamalarından mevsimsel gübrelemelerine, organik hastalık tedavisinden zemin havalandırmaya kadar geniş bir yelpazede hizmet sunuyoruz. Yeşilin en canlı halini dört mevsim boyunca korumanız için çalışıyoruz.",
    features: [
      "Mevsimsel ve Form Koruyucu Budama Hizmeti",
      "Ziraat Mühendisi Onaylı Organik İlaçlama",
      "Yabancı Ot Temizliği ve Toprak Havalandırma",
      "Toprak pH Dengesi ve Gübreleme Yönetimi",
      "Periyodik Hidrolik ve Bitki Sağlığı Muayenesi"
    ],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cim-uygulama",
    tag: "ÜRETİM & UYGULAMA",
    title: "Rulo Çim Üretim ve Uygulaması",
    p1: "Düzgün, sık dokulu ve pürüzsüz bir çim alanı, bahçenizin estetik iskeletidir. Kendi ekim tarlalarımızda özenle yetiştirdiğimiz, Karadeniz iklimine tam dayanıklı, yabancı ot barındırmayan %100 doğal rulo çimlerimizle zeminlerinizi usta el işçiliğiyle kaplıyoruz.",
    p2: "Ekim öncesinde killi zeminleri özel kum kompozisyonlarıyla geçirgen hale getiriyor, lazer destekli tesviye cihazlarımız ile kusursuz bir eğim hazırlıyoruz. Böylece kökler toprağa en hızlı şekilde tutunurken, su birikmeleri ve çamurlaşma riskleri tamamen ortadan kalkar.",
    features: [
      "Yabancı Otsuz Sık Dokulu Doğal Hazır Çim",
      "Gölge Alanlara ve Basılmaya Yüksek Mukavemet",
      "Lazerli Hassas Zemin Tesviye ve Sıkıştırma",
      "Toprak Altı Kum Entegrasyonu ve Drenaj Kontrolü",
      "Akıllı Otomatik Rotorlu Sulama Entegrasyonu"
    ],
    image: "/images/rulo_cim.jpg"
  },
  {
    id: "sus-bitkisi",
    tag: "BOTANİK ALTI YAPISI",
    title: "Dış Mekan Süs Bitkisi Üretim ve Satışı",
    p1: "Fidanlıklarımızda ve seralarımızda, her bütçeye uygun binlerce ithal soliter ağaç ve yerli süs bitkisini sağlıklı kök yapılarıyla yetiştiriyoruz. Bölgenin iklim karakteristiklerine tam uyumlu bitki alternatiflerimiz ile doğrudan üretici fiyat ayrıcalıklarını sunuyoruz.",
    p2: "Bitkilerimizin tamamı formlu ve saksılı/torbalı olarak sevk edildiği için her mevsim dikime hazırdır. Peyzaj mimarlarımızın rehberliğinde, bahçenize en uygun yaprak ve gövde estetiğine sahip fidanları tek tek kritik ederek seçebilirsiniz.",
    features: [
      "Kendi Seralarımızdan Aracısız Doğrudan Tedarik",
      "Formlu Budanmış Çit Bitkileri ve Süs Çalıları",
      "Gövdesi Tek Tek İncelenmiş Soliter Boylu Ağaçlar",
      "Bölge İklimine ve Toprağına Uyumlu Sağlıklı Kökler",
      "Mevsimlik Rengarenk Çiçek Katmanları Sinerjisi"
    ],
    image: "/images/sus_bitkisi.jpg"
  },
  {
    id: "sert-zemin",
    tag: "MİMARİ YAPISAL",
    title: "Sert Zemin & Dış Mekan Yapıları",
    p1: "Yemyeşil bitki katmanlarını asil ve zamansız taş yolları, traverten basamaklar ve doğal taş duvarlar ile tamamlıyoruz. Bahçenizin sınırlarını ve sosyal alanlarını belirlerken doğallıktan ödün vermeyen, çevre dostu malzemeleri büyük bir ustalıkla işliyoruz.",
    p2: "Zemin kaplamalarında yağmur suyunun akış eğimlerini ve gizli drenaj hatlarını milimetrik hesaplıyoruz. Ateş çukurları, barbekü alanları ve dinlenme köşeleri kurgulayarak rüya bahçenizde yaşamı en konforlu ve şık hale getiriyoruz.",
    features: [
      "Doğal Traverten, Kayrak ve Andezit Yürüme Yolları",
      "Mevsim Isı Farklarına Dayanıklı Çevre Taş Duvarları",
      "Sosyal Oturma Grupları ve Modern Ateş Çukurları",
      "Su Göllenmesini Önleyen Gizli Altyapı Drenajı",
      "Kamelya, Pergola ve Gölgelik Zemin Mühendisliği"
    ],
    image: "/images/peyzaj_uygulamalari.jpg"
  }
];

export default function Services() {
  const [activeAnchor, setActiveAnchor] = useState("peyzaj-tasarimi");

  // Hook to trace current viewable and update sticky side anchor
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["peyzaj-tasarimi", "bahce-bakimi", "cim-uygulama", "sus-bitkisi", "sert-zemin"];
      let currentActive = sections[0];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            currentActive = sectionId;
          }
        }
      }
      setActiveAnchor(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      <SEO 
        title="Hizmetlerimiz"
        description="Peyzaj Sarayı uzmanlığıyla bahçe tasarımı, hazır rulo çim serimi, akıllı sulama sistemleri kurulumu, dikey bahçe tasarımları ve profesyonel mevsimlik bahçe bakımları."
        path="/hizmetler"
      />
      
      {/* Page Hero Header: 60vh layout with forest overlay */}
      <div className="relative h-[60vh] flex items-center text-white overflow-hidden select-none">
        <div className="absolute inset-0 z-0">
          <Picture
            src="https://images.unsplash.com/photo-1558904541-efa8c3a30fc9?q=80&w=2000"
            alt="Peyzaj Sarayı Hizmetlerimiz"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
          {/* Forest green overlay */}
          <div className="absolute inset-0 bg-forest/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left space-y-4">
            <span className="text-gold font-sans font-bold text-xs uppercase tracking-[0.25em]">BİZ NELER YAPIYORUZ?</span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-wide">Hizmetlerimiz</h1>
            <p className="font-sans text-cream/80 text-sm sm:text-lg max-w-xl font-light leading-relaxed">
              Peyzaj tasarımından bahçe bakımına, tüm dış mekan çözümleri
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:flex gap-12 items-start">
          
          {/* Desktop Left Sticky Sidebar (180px, DM Sans 14px anchor links) */}
          <aside className="hidden lg:block w-[180px] shrink-0 sticky top-28 self-start font-sans text-[14px] border-l border-light pl-4 py-2 space-y-5">
            <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-2">HIZLI GEÇİŞ</div>
            {SECTIONS_LIST.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`block transition-all duration-200 ${
                  activeAnchor === sec.id
                    ? "text-forest font-bold translate-x-1"
                    : "text-charcoal/60 hover:text-gold"
                }`}
              >
                {sec.label}
              </a>
            ))}
          </aside>

          {/* Main content on the right, stacks on mobile */}
          <div className="flex-1 space-y-16">
            {SERVICES_DATA.map((service, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={service.id}>
                  {/* Anchor target offset for navigation header protection */}
                  <div id={service.id} className="scroll-mt-24">
                    <FadeUp>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* Details Block (Left alternate) */}
                        <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                          
                          <div className="flex">
                            <SectionLabel>{service.tag}</SectionLabel>
                          </div>
                          
                          <h2 className="font-serif text-3xl sm:text-4xl text-forest font-bold tracking-tight">
                            {service.title}
                          </h2>

                          {/* 2 paragraphs of description */}
                          <div className="font-sans text-sm sm:text-base text-charcoal/80 font-light leading-relaxed space-y-4">
                            <p>{service.p1}</p>
                            <p>{service.p2}</p>
                          </div>

                          {/* Feature checklist (5-6 items, green checkmark icons) */}
                          <div className="pt-2">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              {service.features.map((item, featIdx) => (
                                <li key={featIdx} className="flex items-start gap-2.5 text-xs text-charcoal/90 leading-relaxed font-sans">
                                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                                    <Check className="w-3 h-3 stroke-[3]" />
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Teklif Al CTA → /iletisim */}
                          <div className="pt-4">
                            <Link
                              to="/iletisim"
                              className="inline-block bg-forest text-gold hover:bg-[#122e23] font-semibold uppercase tracking-widest text-xs px-8 py-4 rounded-sm transition-transform active:scale-95 shadow-md text-center"
                            >
                              Teklif Al
                            </Link>
                          </div>

                        </div>

                        {/* Image Block (Right alternate on alternating sections) */}
                        <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-1"}`}>
                          <div className="relative rounded-2xl overflow-hidden border border-light shadow-xl group select-none">
                            <Picture
                              src={service.image}
                              alt={service.title}
                              className="w-full h-[320px] sm:h-[420px] object-cover group-hover:scale-103 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-forest/10 transition-colors" />
                          </div>
                        </div>

                      </div>
                    </FadeUp>
                  </div>

                  {/* Botanical Divider between sections except the last item */}
                  {idx < SERVICES_DATA.length - 1 && (
                    <div className="my-16">
                      <BotanicalDivider variant="light" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Decorative Botanical Divider */}
      <BotanicalDivider variant="light" />

      {/* Bottom of page: full-width CTA banner in sage green */}
      <section className="bg-sage text-white py-20 min-w-full">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 select-none">
          
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gold mx-auto mb-2">
            <Trees className="w-6 h-6 text-white" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold leading-tight">
            Sıradışı Bahçeler Tasarlamak İçin Sabırsızlanıyoruz
          </h2>

          <p className="font-sans text-sm sm:text-base text-cream/90 max-w-xl mx-auto font-light leading-relaxed">
            Samsun genelinde gerçekleştireceğimiz ücretsiz keşif ve zemin analizimiz için formumuzu doldurabilir ya da bizi hemen arayarak randevunuzu oluşturabilirsiniz.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/iletisim"
              className="bg-forest text-gold hover:bg-[#122e23] font-semibold uppercase tracking-widest text-xs px-10 py-5 rounded-sm transition-transform duration-200 hover:scale-103 active:scale-95 shadow-md w-full sm:w-auto text-center"
            >
              Hemen Keşif Formu Doldur
            </Link>
            
            <a
              href="tel:+905421221355"
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold uppercase tracking-widest text-xs px-10 py-5 rounded-sm transition-all duration-200 inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <Phone className="w-4 h-4 text-white" />
              Bize Ulaşın: 0542 122 13 55
            </a>
          </div>

          <p className="text-[10px] text-cream/50 uppercase tracking-[0.2em] pt-4">
            PEYZAJ SARAYI • DOĞAL PEKİŞTİRMELİ MÜHENDİSLİK HİZMETLERİ
          </p>

        </div>
      </section>

    </div>
  );
}
