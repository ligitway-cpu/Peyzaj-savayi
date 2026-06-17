import { useState } from "react";
import { Link } from "react-router-dom";
import { HelpCircle, ChevronDown, ChevronUp, Trees, Phone, MessageSquare, BookOpen } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import BotanicalDivider from "../components/BotanicalDivider";
import SEO from "../components/SEO";

export default function FAQ() {
  const [openFAQId, setOpenFAQId] = useState<number | null>(0);

  const faqs = [
    {
      question: "Bahçe etüdü ve projelendirme süreci nasıl işliyor?",
      answer: "Yerinde yapılan zemin eğimi, toprak geçirgenliği, güneş yönü ve drenaj analizinden sonra, ziraat mühendislerimiz denetimi altında alanınıza en uygun bitki seçimi planlanır. İstekleriniz ve hayalleriniz doğrultusunda hazırlanan projelendirme dökümanları ve 3D peyzaj simülasyonları onayınıza sunularak süreç başlatılır."
    },
    {
      question: "Kullandığınız rulo çimler nereden tedarik ediliyor?",
      answer: "Rulo hazır çimlerimizin tamamı Samsun Tekkeköy ilçesindeki kendi fidanlık ve botanik deponuzda, tamamen Karadeniz iklim özelliklerine tam uyumlu, yabancı ot barındırmayan ve basılmaya dayanıklı elit tohumlar kullanılarak yetiştirilir. Doğrudan üreticiden sahaya nakledildiği için kök adaptasyon süresi son derece kısadır."
    },
    {
      question: "Peyzaj fidanlarınızı ve süs bitkilerinizi kendiniz mi yetiştiriyorsunuz?",
      answer: "Evet, dış mekan süs bitkilerimizin büyük kısmı Tekkeköy'deki kendi üretim tesisimizde fidanlıktan tohumlama ve aşılamayla yetiştirilmektedir. Ayrıca talep eden müşterilerimiz için tasarıma asalet veren asırlık zeytin agacı, ithal akçaağaçlar gibi soliter ağaç teminini de güvenli bir şekilde gerçekleştirmekteyiz."
    },
    {
      question: "Bahçe bakım hizmetlerini periyodik olarak almak zorunda mıyız?",
      answer: "Böyle bir zorunluluk bulunmamaktadır. Sezonluk rulo çim havalandırması, ağaç budama, ilaçlama gibi tek seferlik acil canlandırma uygulamalarımızın yanında; bahçenizin dört mevsim saray görkeminde kalması için haftalık veya 15 günlük akrediteli periyodik bakım paketlerimizden faydalanabilirsiniz."
    },
    {
      question: "Otomatik sulama sistemi kurdurmak gerçekten su tasarrufu sağlar mı?",
      answer: "Evet, akıllı yağmur sensörlü otomatik sulama ve mikro damlama hatlarımız manuel hortumlu sulamaya nazaran su sarfiyatını %50'ye kadar azaltır. Sistem, güneşin dik gelmediği sabah erken saatlerde toprağın ihtiyacı kadar milimetrik debide sulama yaptığı için buharlaşma kayıplarını sıfırlar ve bitkinizi korur."
    },
    {
      question: "Peyzaj uygulamalarında teslim sonrasında bir garanti veriyor musunuz?",
      answer: "Anahtar teslim bitkilendirme ve hazır rulo çim serim işlemlerinin ardından gelen ilk 3 aylık can alıcı gelişim sürecinde, ziraat mühendislerimiz yerinizde periyodik kontroller yürütür. Bitki adaptasyonunu artıracak koruyucu vitamin, mineral ve ilaç takviyeleri markamız tarafından ücretsiz sağlanmaktadır."
    },
    {
      question: "Bahçe büyüklüğü ve toprak analizi peyzaj maliyetini nasıl etkiler?",
      answer: "Uygulama bütçesi; bahçenizin metrekare cinsinden alan büyüklüğüne, arsanın tesviye ve drenaj ihtiyacına, seçilecek fidan cinslerine (soliter ağaçlar, ithal türler vb.) göre belirlenir. Sahada yapacağımız ücretsiz ön keşif ve toprak analizinin ardından size detaylı bir kalem bazlı teklif dökümanı sunarız."
    },
    {
      question: "Samsun dışında Karadeniz'deki diğer şehirlere de hizmet veriyor musunuz?",
      answer: "Merkezimiz Samsun Tekkeköy'de olup; Atakum, Alaçam, 19 Mayıs (Engiz) gibi Samsun'un ilçeleri başta olmak üzere Ordu, Sinop, Giresun ve Amasya gibi komşu Karadeniz illerinde de anahtar teslim villa peyzaj tasarımları, rulo çim serme ve mühendislik hizmetleri sunmaktayız."
    }
  ];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFAQ = (idx: number) => {
    if (openFAQId === idx) {
      setOpenFAQId(null);
    } else {
      setOpenFAQId(idx);
    }
  };

  return (
    <div id="faq-page" className="bg-cream pt-20 min-h-screen">
      <SEO 
        title="Sıkça Sorulan Sorular"
        description="Peyzaj Sarayı Sıkça Sorulan Sorular (SSS) sayfası. Bahçe tasarımı, rulo çim serimi, otomatik sulama, bitki temini ve bakım hizmetleri hakkında merak ettiğiniz tüm soruların cevapları."
        path="/sss"
        schema={jsonLdData}
      />

      {/* Hero Header (60vh) */}
      <div 
        id="faq-hero-header" 
        className="bg-forest text-white py-24 relative overflow-hidden text-center select-none"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Trees className="w-96 h-96 mx-auto text-gold animate-pulse" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.25em] bg-white/5 px-3 py-1.5 rounded border border-white/10">Saray Bilgi Bankası</span>
          <h1 id="faq-main-heading" className="font-serif text-4xl sm:text-6xl font-bold tracking-wide">
            Sıkça Sorulan Sorular
          </h1>
          <p className="font-sans text-cream/70 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Dış mekan projelendirme süreçleri, toprak ıslahı, rulo çim serimi, sulama tasarrufları ve garanti standartları hakkında aklınızdaki tüm cevaplar.
          </p>
        </div>
      </div>

      {/* Main Accordion Panel Section */}
      <section id="faq-accordion-block" className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section title Intro */}
        <div className="text-center max-w-xl mx-auto space-y-4 mb-14 text-pretty">
          <div className="flex justify-center">
            <SectionLabel>Detaylı Bilgiler</SectionLabel>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-forest leading-tight">
            Şeffaf Bilgilendirme ve Karşılıklı Güven
          </h2>
          <p className="text-xs text-charcoal/65 font-sans font-light">
            Sorunsuz ve asil bir bahçe deneyimi yaşamanız için uygulamalarımızdaki tüm teknik detayları ve merak ettiklerinizi şeffafça açıklıyoruz.
          </p>
        </div>

        {/* 8 accordion panels container */}
        <div id="accordion-list" className="space-y-4 font-sans">
          {faqs.map((faq, idx) => {
            const isOpen = openFAQId === idx;
            return (
              <div 
                id={`accordion-item-${idx}`}
                key={idx}
                className="bg-white border border-light rounded-2xl overflow-hidden shadow-xs hover:shadow-xs transition-shadow duration-300 animate-on-scroll"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-forest hover:text-gold transition-colors duration-200 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gold font-sans text-[10px] font-bold tracking-widest bg-forest/5 px-2 py-0.5 rounded border border-gold/15 shrink-0 hidden sm:inline-block">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="leading-snug text-sm sm:text-base">{faq.question}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cream shrink-0 flex items-center justify-center text-forest">
                    {isOpen ? (
                      <ChevronUp className="w-4.5 h-4.5 text-forest" />
                    ) : (
                      <ChevronDown className="w-4.5 h-4.5 text-forest" />
                    )}
                  </div>
                </button>

                {/* Accordion Content Drop */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light border-t border-light/50 bg-cream/15">
                    <p className="text-pretty">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Still Have Questions Block */}
        <div id="additional-questions" className="mt-16 bg-white border border-light rounded-3xl p-8 sm:p-10 text-center space-y-6 max-w-2xl mx-auto shadow-sm animate-on-scroll">
          <BookOpen className="w-12 h-12 text-gold mx-auto" />
          <h3 className="font-serif text-2xl sm:text-3.5xl font-bold text-forest">Aklınızda Farklı Bir Konu mu Var?</h3>
          <p className="text-xs text-charcoal/70 leading-relaxed font-sans max-w-sm mx-auto font-light">
            Sera kapasitemiz, fidan fiyat listelemelerimiz ve Samsun dışındaki diğer şehirlerin sevkiyat durumları için uzmanlarımızla dilediğiniz an direkt irtibata geçebilirsiniz.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/iletisim"
              className="bg-forest hover:bg-[#122e23] text-gold px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs text-center transition-colors min-w-[200px]"
            >
              Teklif İsteyin
            </Link>
            <a
              href="https://wa.me/905421221355"
              target="_blank"
              rel="noreferrer"
              className="border border-forest/30 hover:bg-forest/5 text-forest px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs inline-flex items-center justify-center gap-2 text-center transition-all min-w-[200px]"
            >
              <MessageSquare className="w-4.5 h-4.5 text-[#25D366]" />
              WhatsApp Destek
            </a>
          </div>
        </div>

      </section>

      {/* Botanical Divider */}
      <BotanicalDivider variant="light" />

      {/* Bottom spacer */}
      <div className="py-12 bg-cream"></div>

    </div>
  );
}
