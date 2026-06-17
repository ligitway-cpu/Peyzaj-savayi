import { Link } from "react-router-dom";
import { Trees, Phone, Mail, MapPin, Clock, ArrowUpRight, Instagram, Facebook, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Bahçe Tasarımı", slug: "bahce-tasarimi" },
    { name: "Akıllı Sulama", slug: "otomatik-sulama" },
    { name: "Dikey Canlı Bahçe", slug: "dikey-bahce" },
    { name: "Sert Zemin Düşeme", slug: "sert-zemin-tas-doseme" },
    { name: "Premium Rulo Çim", slug: "rulo-cim-bitki" },
    { name: "Profesyonel Bakım", slug: "periyodik-bakim" },
  ];

  const corporate = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetlerimiz", path: "/hizmetler" },
    { name: "Projelerimiz", path: "/projeler" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Uzmanlık Yazıları (Blog)", path: "/blog" },
    { name: "Sıkça Sorulan Sorular", path: "/sss" },
    { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" },
  ];

  return (
    <footer className="bg-forest text-white border-t border-white/5 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Trees className="w-8 h-8 text-gold transition-transform duration-350 group-hover:rotate-6" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-widest text-white leading-none">
                  PEYZAJ SARAYI
                </span>
                <span className="font-sans text-[9px] tracking-[0.25em] text-gold uppercase mt-1">
                  PREMIUM BOTANICAL DESIGN
                </span>
              </div>
            </Link>
            <p className="text-sm text-cream/70 leading-relaxed font-light">
              Doğayı mühendislik standartları, peyzaj mimarlığı estetiği ve derin botanik sevgisiyle harmanlayarak hayalinizdeki dış mekanları yaşayan sanat eserlerine dönüştürüyoruz.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/80 hover:text-gold hover:border-gold hover:bg-white/5 transition-all outline-none"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/80 hover:text-gold hover:border-gold hover:bg-white/5 transition-all outline-none"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 text-xs text-gold font-semibold uppercase tracking-wider pl-2 border-l border-white/10">
                <Award className="w-5 h-5 text-gold" />
                <span>ISO 9001 TÜRKAK</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold tracking-wide text-gold">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link 
                    to={`/hizmetler`} 
                    className="text-sm text-cream/70 hover:text-gold transition-colors flex items-center gap-1.5 group font-light"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold tracking-wide text-gold">Kurumsal Bölüm</h4>
            <ul className="space-y-3">
              {corporate.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-sm text-cream/70 hover:text-gold transition-colors flex items-center gap-1.5 group font-light"
                  >
                    <span className="w-1.5 h-[1px] bg-gold/40 group-hover:w-3 transition-all duration-300"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold tracking-wide text-gold font-display">İletişim Bilgileri</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-cream/75 leading-relaxed font-light">
                  Mithatpaşa Mah. Selanik Bulvarı No: 124 <br />
                  Göktürk - Eyüpsultan / İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a 
                  href="tel:+905421221355" 
                  className="text-sm text-cream/75 hover:text-gold transition-colors font-light"
                >
                  +90 542 122 13 55
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a 
                  href="mailto:info@peyzajsarayi.com" 
                  className="text-sm text-cream/75 hover:text-gold transition-colors font-light"
                >
                  info@peyzajsarayi.com
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="text-xs text-cream/60 leading-relaxed font-light">
                  <span>Pazartesi - Cumartesi: 09:00 - 19:00</span>
                  <span className="block text-gold/80 italic mt-0.5">Pazar: Randevu ile Açık</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50 text-center sm:text-left">
            &copy; {currentYear} Peyzaj Sarayı Peyzaj Sanayi Ticaret Ltd. Şti. Tüm Hakları Saklıdır.
          </p>
          <div className="flex items-center gap-5 text-xs text-cream/50">
            <Link to="/gizlilik-politikasi" className="hover:text-gold transition-colors">
              Gizlilik Politikası
            </Link>
            <span>•</span>
            <span className="hover:text-gold transition-colors flex items-center gap-0.5">
              <span>Sertifikalı Ziraat Hizmetleri</span>
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
