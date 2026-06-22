import { Trees, ShieldCheck, Leaf, Eye, Heart, Users, CheckCircle, HelpCircle } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import BotanicalDivider from "../components/BotanicalDivider";
import SEO from "../components/SEO";
import Picture from "../components/Picture";

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: "Sürdürülebilirlik",
      desc: "Su kaynaklarının verimli kullanımı, kurakçıl bitki yerleşimleri (xeriscaping) ve tamamen doğal gübre/enzim takviyeleri ile çevreye saygılı ekosistemler inşa ediyoruz."
    },
    {
      icon: ShieldCheck,
      title: "Güven",
      desc: "Ziraat mühendislerimizin denetiminde hazırlanan zemin etütleri, drenaj altyapısı ve sertifikalı fidan teminiyle tüm projelerimizi kalıcı kalite güvencesiyle sunuyoruz."
    },
    {
      icon: Eye,
      title: "Estetik",
      desc: "Doğanın ham güzelliğini modern ve asil tasarım çizgileriyle harmanlayarak, mülkünüze kimlik kazandıran saray estetiğinde görsel kompozisyonlar üretiyoruz."
    }
  ];

  const team = [
    {
      name: "Selim Saraylı",
      title: "Kurucu & Baş Peyzaj Mimarı",
      desc: "Samsun ve çevresinde lüks villa peyzajlarının konsept tasarımlarını ve estetik koordinasyonunu yönetiyor."
    },
    {
      name: "Elif Demir",
      title: "Kıdemli Ziraat Mühendisi",
      desc: "Tekkeköy fidanlık depomuzdaki üretim kalitesini, toprak zenginleştirmeyi ve bitki bitki sağlığını denetler."
    },
    {
      name: "Kemal Öztürk",
      title: "Saha Uygulama Şefi",
      desc: "Alan tesviye işlemlerinden, otomatik akıllı sulama montajı ve rulo çim serim işlemlerinden sorumlu şef."
    }
  ];

  const whyUsList = [
    {
      title: "Tekkeköy Merkezli Botanik Güç",
      desc: "Bitkilerimizi dışarıdan hazır almak yerine, kendi Tekkeköy üretim tesisimizde Samsun iklimine tam uyumlu ve dayanıklı olarak yetiştiriyoruz."
    },
    {
      title: "Bilimsel Altyapı & Mühendislik",
      desc: "Sadece görsel yeşillendirme yapmıyor, toprak pH seviyesinden drenaj eğimine kadar tam kapsanalı mühendislik hesapları ile çalışıyoruz."
    },
    {
      title: "3 Ay Ücretsiz Sağlık Takibi",
      desc: "Anahtar teslim bitkilendirme ve rulo çim uygulamalarımız sonrasında ilk 3 ay boyunca gelişim süreçlerini periyodik kontrollerle garanti altına alıyoruz."
    },
    {
      title: "Zamana Meydan Okuyan Kalite",
      desc: "Kullandığımız sert zemin malzemeleri, ithal çalı formları ve dayanıklı rulo çimlerimiz ile yıllar geçtikçe değerlenen yaşayan sanat bahçeleri üretiyoruz."
    }
  ];

  return (
    <div id="about-page" className="bg-cream pt-20 min-h-screen">
      <SEO 
        title="Hakkımızda"
        description="Peyzaj Sarayı Samsun ve çevre illerde 10 yılı aşkın tecrübesiyle, ziraat mühendisleri denetiminde profesyonel peyzaj mimarlığı, fidan yetiştiriciliği ve rulo çim uygulamaları sunmaktadır."
        path="/hakkimizda"
      />
      
      {/* 1. Page Hero (60vh) */}
      <section 
        id="about-hero" 
        className="relative h-[60vh] min-h-[480px] flex items-center justify-center text-white overflow-hidden text-center select-none"
      >
        <div className="absolute inset-0 z-0">
          <Picture
            src="https://images.unsplash.com/photo-1530731141654-59610f3c229e?auto=format&fit=crop&w=1600&q=80"
            alt="Peyzaj Sarayı bitki üretim tesisi"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center brightness-[0.4]"
          />
          {/* Subtle forest overlay shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-forest/20 to-black/45"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.25em] bg-forest/45 backdrop-blur-xs px-3.5 py-1.5 rounded-sm border border-gold/15 inline-block">
            Peyzajın Asil Mimarları
          </span>
          <h1 id="about-main-title" className="font-serif text-4xl sm:text-6xl font-extrabold tracking-wide drop-shadow-md text-white">
            Yeşile Olan Tutkumuz
          </h1>
          <p className="font-sans text-cream/85 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
            Tekkeköy'den tüm Karadeniz bölgesine yayılan, lüks và bilimsel peyzaj zanaatının yaşayan hikayesi.
          </p>
        </div>
      </section>

      {/* 2. 2-column Company Story Section */}
      <section id="company-story-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Left */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-light shadow-xl max-w-md mx-auto lg:max-w-none animate-on-scroll">
              <Picture
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80"
                alt="Peyzaj Sarayı Tekkeköy Üretim Seraları"
                className="w-full h-[450px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-forest/95 backdrop-blur-xs text-gold text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-sm border border-gold/20">
                Samsun Tekkeköy Üretim Tesisimiz
              </div>
            </div>
          </div>

          {/* Company Story Text Right */}
          <div className="lg:col-span-6 space-y-6 text-pretty animate-on-scroll">
            <SectionLabel>Tarihçemiz & Misyonumuz</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest leading-tight">
              Sarayların Görkemini <br />
              <span className="italic font-normal text-gold">Bahçenize Taşıyoruz</span>
            </h2>
            
            <p className="text-charcoal/80 text-sm leading-relaxed font-light">
              Peyzaj Sarayı, Samsun'un Tekkeköy ilçesinde kurulan geniş fidanlık ve üretim tesisiyle peyzaj sektöründe asil bir standart belirleme vizyonuyla yola çıkmıştır. Seralarımızda fidan seçiminden toprak havalandırmasına, otomatik sulama sistemleri planlamasından hazır rulo çim serimine kadar her aşamada ziraat mühendisleri ve deneyimli ustalarımız koordinasyonunda hizmet veriyoruz. Öncelikli misyonumuz, estetik formları kusursuz altyapı mühendisliğiyle birleştirmektir.
            </p>
            
            <p className="text-charcoal/80 text-sm leading-relaxed font-light">
              Atakum konut bahçelerinden Engiz'deki çiftlik alanlarına, Alaçam Geyikosan mesire düzenlemelerinden ticari fidanlıklara kadar uzanan geniş bölgesel referans ağımızla tüm Karadeniz bölgesine premium dış mekan çözümleri sunuyoruz. Her yeşil alanın kendine has bir ruh taşıdığına inanıyor ve mülkünüzün mimari değerini artıran prestijli konsept tasarımlarla toprağınızı yaşayan birer başyapıta dönüştürüyoruz.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Corporate Values (Sürdürülebilirlik, Güven, Estetik) */}
      <section id="values-section" className="py-20 bg-white min-w-full border-y border-light/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left aligned image panel */}
            <div className="lg:col-span-5 animate-on-scroll">
              <div className="relative rounded-2xl overflow-hidden border border-light shadow-xl select-none">
                <Picture
                  src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1200&q=80"
                  alt="Uzman ekibimiz tarafından özenle yapılan bahçe dikimi"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/5 hover:bg-forest/5 transition-colors duration-300" />
              </div>
            </div>

            {/* Right values content list/cards */}
            <div className="lg:col-span-7 space-y-8 animate-on-scroll">
              <div className="space-y-4 text-left">
                <SectionLabel>Temel Değerlerimiz</SectionLabel>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest leading-tight">
                  Köklü Değerlerimizle Geleceği Yeşillendiriyoruz
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {values.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div 
                      id={`value-card-${idx}`}
                      key={idx}
                      className="bg-cream/40 border border-light/80 p-6 rounded-2xl text-center space-y-3.5 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-forest text-gold flex items-center justify-center mx-auto shadow-xs group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-forest leading-tight">{val.title}</h3>
                      <p className="text-xs text-charcoal/70 leading-relaxed font-light font-sans">
                        {val.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Leadership Team Section (3 placeholder team cards: grey avatar + "İsim — Unvan") */}
      <section id="team-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
          <div className="flex justify-center">
            <SectionLabel>Uzman Yönetim</SectionLabel>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            Zanaatkar Kadromuz
          </h2>
          <p className="text-xs text-charcoal/70 leading-relaxed font-sans font-light">
            Projelerimizi titizlikle çizen, denetleyen ve hayallerinizi topraklara nakşeden asil ekibimizle tanışın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div 
              id={`team-member-${i}`}
              key={i} 
              className="bg-white border border-light/95 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col h-full text-center animate-on-scroll"
            >
              {/* Grey placeholder avatar as required */}
              <div className="h-64 bg-slate-200 flex items-center justify-center relative select-none">
                <Users className="w-20 h-20 text-slate-400 opacity-60" />
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute bottom-3 right-3 bg-forest text-gold text-[8px] uppercase tracking-widest font-bold px-2 py-1 rounded">
                  Peyzaj Sarayı Yetkilisi
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between font-sans">
                <div>
                  <h3 className="font-serif text-lg font-bold text-forest mb-1">
                    {member.name}
                  </h3>
                  <span className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-4">
                    {member.title}
                  </span>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                    {member.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-light/65 mt-6 text-[9px] text-[#a3835a] uppercase tracking-widest font-bold">
                  Samsun Koordinatörlüğü
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botanical Divider */}
      <BotanicalDivider variant="light" />

      {/* 5. 4-item "Neden Biz?" Icon List */}
      <section id="why-us-section" className="py-20 bg-forest text-white min-w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <Trees className="w-96 h-96 -left-12 -bottom-12 absolute text-gold" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          
          <div className="text-center max-w-xl mx-auto space-y-4 mb-16 select-none">
            <span className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.2em]">Kusursuz Seçenek</span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-white leading-tight">
              Neden Peyzaj Sarayı?
            </h2>
            <p className="text-cream/70 text-xs sm:text-sm font-light">
              Doğayı bilimsel ilkelerle mülkünüze işleyerek fark yarattığımız 4 ana sütunumuz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsList.map((item, idx) => (
              <div 
                id={`why-us-item-${idx}`}
                key={idx} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 space-y-4 animate-on-scroll"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/15 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-semibold text-gold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-cream/75 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="py-8 bg-cream"></div>

    </div>
  );
}
