import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceSlug: 'bahce-tasarimi',
    area: '',
    district: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const districts = [
    "Sarıyer", "Göktürk/Eyüpsultan", "Beşiktaş", "Kadıköy", "Beykoz", 
    "Florya/Bakırköy", "Şile", "Bodrum (Muğla/Yazlık)", "Diğer (İstanbul Dışı)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceSlug: 'bahce-tasarimi',
          area: '',
          district: '',
          notes: '',
        });
        onClose();
      }, 4000); // Close after 4s
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="quote-modal-overlay" className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            id="quote-modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative bg-cream border border-light max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-forest px-6 py-5 text-white flex items-center justify-between relative">
              <div>
                <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-semibold block mb-1">Peyzaj Sarayı</span>
                <h3 className="font-serif text-2xl font-semibold tracking-wide">Ücretsiz Danışmanlık ve Teklif Al</h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto flex-1">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mb-4 shadow-lg text-gold">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl font-semibold text-forest mb-2">Talebiniz Başarıyla Alındı!</h4>
                  <p className="text-charcoal/80 text-sm max-w-sm mb-6 font-sans">
                    Arsanızın özellikleri uzman ekiplerimiz tarafından incelenecek ve size özel ön-tasarım fikirleri ile <strong>24 saat içinde</strong> geri dönüş sağlanacaktır.
                  </p>
                  <p className="text-gold text-xs font-semibold tracking-widest uppercase">
                    Peyzaj Sarayı Değer Kattığı İçin Teşekkür Eder.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <p className="text-xs text-charcoal/70 mb-4 leading-relaxed">
                    Aşağıdaki formu eksiksiz doldurarak peyzaj mimarlarımızın arazi analizi ve ilk konsept çizimleri için rezervasyon kaydı oluşturabilirsiniz.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">Adınız Soyadınız *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Örn. Mehmet Yılmaz"
                        className="w-full bg-white border border-light rounded-lg px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">Telefon Numaranız *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Örn. 0542 122 1355"
                        className="w-full bg-white border border-light rounded-lg px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">E-posta Adresiniz</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Örn. iletisim@peyzajsarayi.com"
                      className="w-full bg-white border border-light rounded-lg px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">İlgilendiğiniz Hizmet</label>
                      <select
                        value={formData.serviceSlug}
                        onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                        className="w-full bg-white border border-light rounded-lg px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">Yaklaşık Alan (m²)</label>
                      <input
                        type="text"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        placeholder="Örn. 500 m²"
                        className="w-full bg-white border border-light rounded-lg px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">Proje Bölgesi</label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full bg-white border border-light rounded-lg px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Seçiniz...</option>
                      {districts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5 uppercase tracking-wider">Notlar / Özel İstekleriniz</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Hayalinizdeki bahçeyi ana hatlarıyla tarif edin (havuz, dikey canlı duvar vb.)..."
                      className="w-full bg-white border border-light rounded-lg p-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-forest text-gold font-semibold uppercase tracking-widest text-xs py-3.5 rounded-xl hover:bg-[#122e23] transition-colors duration-200 shadow-lg flex items-center justify-center gap-2 disabled:bg-sage/40 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Talebiniz Hazırlanıyor...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-gold-50" />
                          Ücretsiz Danışmanlık Kaydı Aç
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1 text-[10px] text-charcoal/50 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-gold" />
                    Zırâat ve Mimarlık Uzmanlığıyla
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
