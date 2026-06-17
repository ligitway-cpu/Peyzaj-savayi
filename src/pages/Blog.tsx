import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, Search, BookOpen, X, Sparkles, Trees, ChevronRight } from "lucide-react";
import { BLOG_POSTS } from "../data";
import SectionLabel from "../components/SectionLabel";
import BotanicalDivider from "../components/BotanicalDivider";
import SEO from "../components/SEO";
import Picture from "../components/Picture";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [readingPostSlug, setReadingPostSlug] = useState<string | null>(null);

  const filteredPosts = BLOG_POSTS.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const activeReadingPost = BLOG_POSTS.find((p) => p.slug === readingPostSlug);

  return (
    <div className="bg-cream pt-24 min-h-screen">
      <SEO 
        title="Blog & Botanik Kültürü"
        description="Peyzaj mimarisi tüyoları, asırlık ağaç dikimleri, rulo çim bakımı ve bahçecilik pratikleri hakkında ziraat mühendislerimizin hazırladığı eğitici blog yazıları."
        path="/blog"
      />
      
      {/* Editorial Header */}
      <div className="bg-forest text-white py-20 relative overflow-hidden text-center select-none">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Trees className="w-96 h-96 mx-auto text-gold" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-gold font-sans font-semibold text-xs uppercase tracking-[0.25em]">Saray Arşivi</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-wide">Peyzaj & Botanik Kültürü</h1>
          <p className="font-sans text-cream/70 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Bahçe mimarisinin incelikleri, asırlık ağaç formlarının seçilmesi ve dört mevsim yaşayan sağlıklı toprak bakımı hakkında ziraat mühendislerimizin uzmanlık yazıları.
          </p>
        </div>
      </div>

      {/* Main Blog Panel */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search tool block */}
        <div className="max-w-md mx-auto mb-16 relative font-sans">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-charcoal/40">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Makale konusu, bitki türü veya etiket ara..."
            className="w-full bg-white border border-light rounded-lg pl-12 pr-6 py-3.5 text-sm text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
          />
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white border border-light rounded-2xl max-w-sm mx-auto space-y-4">
            <BookOpen className="w-12 h-12 text-gold mx-auto opacity-45" />
            <h3 className="font-serif text-xl font-bold text-forest">Arama Sonucu Bulunamadı</h3>
            <p className="text-xs text-charcoal/60 leading-relaxed font-sans max-w-xs mx-auto">
              Yazmış olduğunuz kelimeyle eşleşen bir uzmanlık bülteni bulunmamaktadır. Lütfen farklı terimlerle arama yapın.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white border border-light rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
              >
                
                {/* Cover Image */}
                <div className="h-56 overflow-hidden relative select-none">
                  <Picture
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                  
                  {/* Category tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tg, tIdx) => (
                      <span key={tIdx} className="bg-forest/90 text-gold text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md font-sans border border-gold/10">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between font-sans">
                  <div className="space-y-3">
                    {/* Meta info info */}
                    <div className="flex items-center gap-4 text-[10px] text-charcoal/40 font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-600" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs text-charcoal/70 leading-relaxed font-light line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-light/60 mt-6 flex items-center justify-between">
                    <span className="text-[10px] text-charcoal/50 leading-none">
                      Yazar: <strong>{post.author.split(' ')[0]}</strong>
                    </span>

                    <button
                      onClick={() => setReadingPostSlug(post.slug)}
                      className="text-xs font-bold uppercase tracking-wider text-forest group-hover:text-gold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      OKUMAYA DEVAM ET
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </article>
            ))}
          </div>
        )}

      </section>

      {/* Floating Reading Drawer overlay module */}
      {activeReadingPost && (
        <div id="blog-reading-overlay" className="fixed inset-0 z-100 flex items-center justify-end">
          {/* Backdrop screen */}
          <div 
            onClick={() => setReadingPostSlug(null)}
            className="absolute inset-0 bg-charcoal/75 backdrop-blur-sm"
          />

          {/* Drawer Sheet content */}
          <div className="relative bg-cream w-full max-w-2xl h-full shadow-2xl overflow-y-auto z-10 border-l border-light flex flex-col font-sans">
            
            {/* Header Sticky Action */}
            <div className="sticky top-0 bg-forest text-white p-5 flex items-center justify-between border-b border-light z-20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                <span className="font-serif text-lg font-bold tracking-wide">Peyzaj Sarayı Değerli Çözümler</span>
              </div>
              <button 
                onClick={() => setReadingPostSlug(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Okuyucuyu Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Reading banner block */}
            <div className="h-64 sm:h-80 w-full relative select-none">
              <Picture 
                src={activeReadingPost.image} 
                alt={activeReadingPost.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex items-center gap-3 text-[10px] text-gold font-bold uppercase tracking-widest bg-forest/30 backdrop-blur-xs px-3 py-1 rounded-sm border border-gold/10 inline-block w-fit">
                  {activeReadingPost.tags.join(" • ")}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-black leading-tight drop-shadow-sm">
                  {activeReadingPost.title}
                </h2>
              </div>
            </div>

            {/* Content Article details */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              
              <div className="flex items-center justify-between border-b border-light pb-4 text-xs text-charcoal/50">
                <span className="flex items-center gap-1.5 font-bold">
                  <User className="w-4 h-4 text-gold-600" />
                  YAZAR: {activeReadingPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  TARİH: {activeReadingPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {activeReadingPost.readTime}
                </span>
              </div>

              {/* Parsed Text Content - split by double newline */}
              <div className="space-y-5 text-sm text-charcoal/85 leading-relaxed font-sans font-light">
                {activeReadingPost.content.split("\n\n").map((para, pIdx) => {
                  if (para.startsWith("###")) {
                    return (
                      <h3 key={pIdx} className="font-serif text-xl sm:text-2xl font-bold text-forest pt-3">
                        {para.replace("###", "").trim()}
                      </h3>
                    );
                  }
                  if (para.startsWith("-")) {
                    return (
                      <ul key={pIdx} className="space-y-2 pl-4 list-disc marker:text-gold">
                        {para.split("\n").map((li, lIdx) => (
                          <li key={lIdx} className="font-light">
                            {li.replace("-", "").trim()}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={pIdx} className="text-pretty">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* End of article disclaimer note */}
              <div className="bg-white border border-light p-5 rounded-2xl space-y-3 pt-4">
                <h4 className="font-serif font-bold text-forest">Bahçe Analizi Yaptırmak İster misiniz?</h4>
                <p className="text-xs text-charcoal/60 leading-relaxed font-light">
                  Arazinizin özelliklerine has bitki seçimi ve sulama planlaması yaptırmak için uzman mühendislerimizle hemen iletişime geçebilirsiniz.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/905421221355"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-forest text-gold px-5 py-2.5 rounded-sm uppercase tracking-widest text-[10px] font-bold inline-flex items-center gap-1.5 transition-transform hover:scale-102"
                  >
                    <Trees className="w-4 h-4" />
                    Bize Projenizi Danışın
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Botanical Divider */}
      <BotanicalDivider variant="light" />

      {/* Spacing for layout */}
      <div className="py-8 bg-cream"></div>

    </div>
  );
}
