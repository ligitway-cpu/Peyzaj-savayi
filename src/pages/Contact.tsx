import { useState } from "react";
import { useForm } from "react-hook-form";
import { Trees, MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Instagram, ShieldCheck } from "lucide-react";
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

interface ContactFormInputs {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  gardenSize: string;
  message: string;
  kvkk: boolean;
}

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormInputs>({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "Peyzaj Tasarımı & Uygulama",
      gardenSize: "",
      message: "",
      kvkk: false
    }
  });

  const onSubmit = (data: ContactFormInputs) => {
    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
    }, 1500);
  };

  const servicesList = [
    "Peyzaj Tasarımı & Uygulama",
    "Bahçe Bakım Hizmetleri",
    "Rulo Çim Üretim ve Uygulaması",
    "Dış Mekan Süs Bitkisi Üretim ve Satışı",
    "Sert Zemin & Dış Mekan Yapıları"
  ];

  return (
    <div id="contact-page" className="bg-cream pt-20 min-h-screen">
      <SEO 
        title="İletişim"
        description="Peyzaj Sarayı Samsun Tekkeköy merkez ofisimiz ve fidanlığımız ile iletişime geçin. Bahçe ölçümleri, numune analizi ve 3D tasarım talepleriniz için ücretsiz ön keşif formunu doldun."
        path="/iletisim"
        schema={[landscapingSchema, orgSchema]}
      />
      
      {/* Editorial Page Header */}
      <div 
        id="contact-hero" 
        className="bg-forest text-white py-20 relative overflow-hidden text-center select-none"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Trees className="w-96 h-96 mx-auto text-gold" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.25em] bg-white/5 px-3 py-1.5 rounded border border-white/10">İrtibat Büromuz</span>
          <h1 id="contact-main-heading" className="font-serif text-4xl sm:text-6xl font-bold tracking-wide">
            Bizimle İletişime Geçin
          </h1>
          <p className="font-sans text-cream/70 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Tekkeköy'deki üretim seramızdan Atakum'daki lüks konut bahçenize kadar, hayalinizdeki peyzajı projelendirmek için ilk adımı atın.
          </p>
        </div>
      </div>

      {/* Main Grid Content Area */}
      <section id="contact-content-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (60%): Contact Request Form */}
          <div className="lg:col-span-7 bg-white border border-light rounded-3xl p-6 sm:p-10 shadow-md animate-on-scroll">
            
            <div className="space-y-2 mb-8">
              <span className="text-xs font-bold text-gold uppercase tracking-wider block">Ücretsiz Ön Keşif & Proje</span>
              <h2 className="font-serif text-2.5xl sm:text-3.5xl font-bold text-forest leading-snug">
                Fiyat Teklifi Talep Edin
              </h2>
              <p className="text-xs text-charcoal/65 font-light leading-relaxed">
                Bitki sağlığı, drenaj analizi ve rulo çim serimi için ziraat mühendislerimizin ön keşif çalışmasından faydalanmak için formu doldurabilirsiniz.
              </p>
            </div>

            {isSuccess ? (
              <div id="contact-success-card" className="flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6 text-emerald-600 shadow-md animate-bounce">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h4 className="font-serif text-3xl font-bold text-forest mb-3">Talebiniz alındı!</h4>
                <p className="text-sm text-charcoal/75 max-w-sm font-sans leading-relaxed">
                  En kısa sürede sizi arayacağız.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 border border-forest hover:bg-forest/5 text-forest text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-md transition-colors cursor-pointer"
                >
                  Yeni Bir Form Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Name and Phone Inputs Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      className={`w-full bg-cream/30 border rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors ${
                        errors.fullName ? "border-red-500 bg-red-50/10" : "border-light"
                      }`}
                      placeholder="Örn. Hanımefendi / Beyefendi"
                      {...register("fullName", { 
                        required: "Lütfen adınızı ve soyadınızı yazınız." 
                      })}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-[10px] font-sans font-medium mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Telefon Numarası *
                    </label>
                    <input
                      type="tel"
                      className={`w-full bg-cream/30 border rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors ${
                        errors.phone ? "border-red-500 bg-red-50/10" : "border-light"
                      }`}
                      placeholder="Örn. 0542 122 13 55"
                      {...register("phone", { 
                        required: "Telefon numarası girmek zorunludur." 
                      })}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-[10px] font-sans font-medium mt-1 block">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                </div>

                {/* Email and Garden Size Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      E-posta Adresi (İsteğe Bağlı)
                    </label>
                    <input
                      type="email"
                      className={`w-full bg-cream/30 border rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors ${
                        errors.email ? "border-red-500" : "border-light"
                      }`}
                      placeholder="Örn. name@example.com"
                      {...register("email", {
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Lütfen geçerli bir e-posta adresi yazın."
                        }
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-[10px] font-sans font-medium mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Garden Size */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Bahçe Büyüklüğü (İsteğe Bağlı)
                    </label>
                    <input
                      type="text"
                      className="w-full bg-cream/30 border border-light rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                      placeholder="Örn. 300 m² veya Yaklaşık Ebat"
                      {...register("gardenSize")}
                    />
                  </div>

                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                    Talep Ettiğiniz Hizmet *
                  </label>
                  <select
                    className="w-full bg-cream/30 border border-light rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    {...register("service")}
                  >
                    {servicesList.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                    Mesajınız & Talepleriniz
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-cream/30 border border-light rounded-lg p-3.5 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Arsanızın lokasyonu, zemin durumu ve eklenmesini dilediğiniz özel bitki türlerini buraya not edebilirsiniz..."
                    {...register("message")}
                  />
                </div>

                {/* KVKK Checkbox */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="kvkk"
                      className={`mt-1 h-4 w-4 rounded border-light text-forest focus:ring-forest cursor-pointer ${
                        errors.kvkk ? "outline-red-500" : ""
                      }`}
                      {...register("kvkk", { 
                        required: "Lütfen KVKK onay kutusunu işaretleyin." 
                      })}
                    />
                    <label htmlFor="kvkk" className="text-[11px] text-charcoal/70 leading-normal font-light select-none">
                      Peyzaj Sarayı ile paylaştığım iletişim bilgilerimin, teklif hazırlama ve randevu planlama süreçleri kapsamında KVKK ilkelerine uygun işlenmesini kabul ediyorum. *
                    </label>
                  </div>
                  {errors.kvkk && (
                    <span className="text-red-500 text-[10px] font-sans font-medium block pl-6">
                      {errors.kvkk.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-[#a3835a] text-charcoal font-bold uppercase tracking-widest text-xs py-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:bg-sage/40 disabled:text-charcoal/40"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-charcoal-700" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Talebiniz Alınıyor...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-charcoal" />
                        Teklif Talep Et
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column (40%): Details and embedded Google Maps */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 animate-on-scroll">
            
            <div className="space-y-4">
              <SectionLabel>Hızlı İletişim Hatları</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest leading-snug">
                Saray Kalitesine <br />
                <span className="italic font-normal text-gold">Hemen Erişin</span>
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Tekkeköy ofisimizde yer alan showroomumuzda veya fidanlık seralarımızda sizleri de ağırlamaktan onur duyarız. Bize aşağıdaki numaralardan ve sosyal platformlardan rehberlik alabilirsiniz.
              </p>
            </div>

            {/* Structured Contact Elements Info Card */}
            <div className="bg-white border border-light p-6 rounded-2xl shadow-xs space-y-6">
              
              <ul className="space-y-5 text-sm font-sans text-charcoal/80">
                
                {/* Location */}
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-forest/5 flex items-center justify-center text-forest shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-gold" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-forest mb-0.5">Merkez Seralar & Üretim</h5>
                    <span className="text-xs font-light text-charcoal/70 block mb-1">Peyzaj Sarayı Botanik Deposu</span>
                    <p className="text-xs font-semibold text-charcoal">Tekkeköy, Samsun</p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-forest/5 flex items-center justify-center text-forest shrink-0">
                    <Phone className="w-4.5 h-4.5 text-gold" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-forest mb-0.5">Doğrudan İrtibat Telefonu</h5>
                    <a 
                      href="tel:+905421221355" 
                      className="text-sm font-bold text-[#a3835a] hover:text-forest transition-colors block"
                    >
                      +90 542 122 13 55
                    </a>
                  </div>
                </li>

                {/* WhatsApp */}
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-forest/5 flex items-center justify-center text-forest shrink-0">
                    <MessageCircle className="w-4.5 h-4.5 text-[#25D366]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-forest mb-0.5">WhatsApp Hızlı Destek</h5>
                    <a 
                      href="https://wa.me/905421221355" 
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-forest bg-forest/5 px-3.5 py-1.5 rounded hover:bg-forest/10 transition-colors inline-block mt-1 border border-forest/10"
                    >
                      Yazışmayı Başlat →
                    </a>
                  </div>
                </li>

                {/* Instagram */}
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-forest/5 flex items-center justify-center text-forest shrink-0">
                    <Instagram className="w-4.5 h-4.5 text-gold" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-forest mb-0.5">Sosyal Medya İmzalarımız</h5>
                    <a 
                      href="https://instagram.com/peyzaj_sarayi" 
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#a3835a] hover:text-forest transition-colors block"
                    >
                      @peyzaj_sarayi
                    </a>
                  </div>
                </li>

                {/* Working Hours */}
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-forest/5 flex items-center justify-center text-forest shrink-0">
                    <Clock className="w-4.5 h-4.5 text-gold" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-forest mb-0.5">Çalışma Saatlerimiz</h5>
                    <p className="text-xs font-light text-charcoal/70">Pzt–Cmt 08:00–18:00</p>
                    <p className="text-[10px] italic text-[#a3835a] font-medium mt-0.5">Pazar günleri fidanlığımız randevu ile açılır.</p>
                  </div>
                </li>

              </ul>

            </div>

            {/* Embedded Google Maps Centered on Tekkeköy, Samsun */}
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-xs border border-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47915.22858102434!2d36.4173875569476!3d41.25008088001648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40887ee0ba76dd8d%3A0xe7a33a8d626da4e6!2sTekkek%C3%B6y%2C%20Samsun!5e0!3m2!1str!2str!4v1717540000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Peyzaj Sarayı Tekkeköy Seraları Harita Koordinatları"
                className="grayscale saturate-[0.4] hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-3 left-3 bg-forest text-gold py-1.5 px-3 rounded text-[9px] font-bold uppercase tracking-wider shadow-sm pointer-events-none">
                Üretim Tesisi Haritası
              </div>
            </div>

            {/* Guarantee Box info */}
            <div className="bg-forest text-white rounded-2xl p-5 border border-forest flex items-center gap-3.5 shadow-sm select-none">
              <ShieldCheck className="w-10 h-10 text-gold shrink-0" />
              <div>
                <h6 className="font-serif text-sm font-bold text-gold leading-none mb-1.5">Ziraat Mühendisi Güvencesi</h6>
                <p className="text-[10px] text-cream/70 leading-normal font-light">
                  İlettiğiniz her metrekare analiz dosyası ziraat mühendisleri denetimiyle teknik süzgeçten geçirilerek bütçelendirilir.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Botanical Divider */}
      <BotanicalDivider variant="light" />

      {/* Spacing */}
      <div className="py-8 bg-cream"></div>

    </div>
  );
}
