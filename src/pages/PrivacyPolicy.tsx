import { Trees, ShieldCheck, Lock, EyeOff, Globe } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import BotanicalDivider from "../components/BotanicalDivider";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-cream pt-24 min-h-screen">
      <SEO 
        title="Gizlilik ve KVKK Politikası"
        description="Peyzaj Sarayı web sitesi Gizlilik, Çerez Politikası ve KVKK (Kişisel Verilerin Korunması Kanunu) prensipleri yürürlük detayları."
        path="/gizlilik-politikasi"
      />
      
      {/* Editorial Header */}
      <div className="bg-forest text-white py-16 relative overflow-hidden text-center select-none">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Trees className="w-96 h-96 mx-auto text-gold" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.25em]">Güvenlik Belgesi</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide">Gizlilik & KVKK Politikası</h1>
          <p className="font-sans text-cream/70 text-xs sm:text-sm max-w-xl mx-auto font-light">
            Emlak mülkiyet ve iletişim bilgilerinizin güvenliği, Peyzaj Sarayı güvencesi altındadır. Sorumluluk esaslarımızı şeffafça paylaşıyoruz.
          </p>
        </div>
      </div>

      {/* Content wrapper */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 font-sans">
        
        <div className="bg-white border border-light rounded-2xl p-6 sm:p-10 space-y-8 shadow-xs text-charcoal/80 text-xs sm:text-sm leading-relaxed font-light">
          
          <div className="flex items-center gap-4 border-b border-light pb-6">
            <ShieldCheck className="w-12 h-12 text-gold shrink-0" />
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest">Veri Güvenliği Taahhüdü</h2>
              <p className="text-[11px] text-charcoal/50 uppercase tracking-widest font-sans mt-0.5">Yürürlük Tarihi: 17 Haziran {currentYear}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-forest">1. Toplanan Kişisel Veriler</h3>
            <p>
              Sitemiz üzerinden doldurduğunuz \"Keşif & Teklif Al\" veya \"İletişim\" formlarında adınız, telefon numaranız, e-posta adresiniz, proje bölgeniz ve bahçe özelliklerinizi kapsayan teknik detaylar kaydedilmektedir. Bu veriler sadece teknik ekibimizin randevulandırma süreçleri ve size analiz dosyasını sunabilmesi için işlenir.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-forest">2. Bilgilerin Kullanım Şeması</h3>
            <p>
              Kanunen zorunlu haller dışında, topladığımız kişisel veya mülke ait fotoğraflar hiçbir şekilde üçüncü şahıs ya da kurumlarla ticari amaçla paylaşılmaz, kiralanmaz veya satılmaz. Fotoğraflanan projelerimiz, yalnızca işverenlerimizin (müşterilerimizin) yazılı onayı alındıktan sonra web sitemizin referanslar albümünde yayınlanabilmektedir.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-forest font-display">3. KVKK ve Müşteri Hakları</h3>
            <p>
              6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, dilediğiniz an şirketimize başvurarak verilerinizin sistemlerimizden tamamen silinmesini, güncellenmesini veya hangi amaçla tutulduğuna yönelik bilgi dökümünü talep edebilirsiniz. Taleplerinizi <strong>info@peyzajsarayi.com</strong> iletmeniz yeterlidir.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-forest">4. Çerez (Cookie) Kullanımı</h3>
            <p>
              Sitemizin görsel performansını artırmak, kullanıcı deneyiminizi ve sayfa yükleme hızlarını optimize etmek amacıyla tarayıcı çerezleri kullanılmaktadır. Çerezleri dilediğiniz an tarayıcı ayarlarınızdan bloke edebilir veya tamamen silebilirsiniz.
            </p>
          </div>

          <div className="border-t border-light/60 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-charcoal/40 select-none">
            <span>Peyzaj Sarayı Peyzaj Sanayi Ltd. Şti.</span>
            <span>KVKK Uyumlu Güvenli Altyapı</span>
          </div>

        </div>

      </section>

      {/* Botanical Divider */}
      <BotanicalDivider variant="light" />

    </div>
  );
}
