import { useParams, Link } from "react-router-dom";
import { Trees, MapPin, Calendar, Layers, ShieldCheck, ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { PROJECTS } from "../data";
import SectionLabel from "../components/SectionLabel";
import BotanicalDivider from "../components/BotanicalDivider";
import SEO from "../components/SEO";
import Picture from "../components/Picture";

export default function ProjectDetail() {
  let { slug } = useParams<{ slug: string }>();

  // Gracefully handle older slug mapping for the Ladik/Geyikosan mesire project link
  if (slug === "geyikosan-mesire-alani") {
    slug = "alaçam-geyikosan-mesire";
  }

  // Find the requested project
  const projectIndex = PROJECTS.findIndex(p => p.slug === slug);
  const project = PROJECTS[projectIndex];

  // If project is not found, display a stylish 404 message block
  if (!project) {
    return (
      <div id="project-not-found" className="bg-cream pt-32 pb-24 text-center font-sans">
        <div className="max-w-md mx-auto bg-white border border-light p-10 rounded-2xl space-y-6 shadow-md">
          <Trees className="w-16 h-16 text-gold mx-auto animate-pulse" />
          <h1 className="font-serif text-3xl font-bold text-forest">Proje Bulunamadı</h1>
          <p className="text-sm text-charcoal/70 leading-relaxed font-light">
            Aradığınız prestijli peyzaj projesi mevcut değil veya adresi değiştirilmiş olabilir.
          </p>
          <div className="pt-2">
            <Link
              to="/projeler"
              className="bg-forest text-gold px-6 py-3 rounded-md uppercase tracking-widest text-xs font-bold font-sans inline-flex items-center gap-2 hover:bg-[#122e23] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Tüm Projelere Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Build dynamic Project schema
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": project.title,
    "description": project.description,
    "url": `https://peyzajsarayi.com/projeler/${project.slug}`,
    "image": project.mainImage,
    "location": {
      "@type": "Place",
      "name": project.location
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Peyzaj Sarayı",
      "telephone": "+905421221355"
    }
  };

  // Find related projects (filter out current project, taking other 3 projects)
  const relatedProjects = PROJECTS.filter(p => p.slug !== project.slug).slice(0, 3);

  return (
    <div id={`project-detail-${project.slug}`} className="bg-cream pt-20 min-h-screen">
      <SEO 
        title={project.title}
        description={project.description.slice(0, 155) + "..."}
        path={`/projeler/${project.slug}`}
        image={project.mainImage}
        type="article"
        schema={projectSchema}
      />
      
      {/* 1. Full-bleed Header Image Section */}
      <section id="project-hero" className="relative h-[60vh] min-h-[450px] flex items-end justify-start text-white overflow-hidden py-16 select-none">
        
        {/* Full bleed image */}
        <div className="absolute inset-0 z-0">
          <Picture
            src={project.mainImage}
            alt={project.title}
            loading="eager"
            fetchpriority="high"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-700 hover:scale-103"
          />
          {/* Elegant Forest & Charcoal gradient for readable text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent"></div>
        </div>

        {/* Hero content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="space-y-4 max-w-4xl">
            
            {/* Breadcrumbs */}
            <div id="breadcrumbs" className="flex items-center gap-2 text-xs font-sans text-cream/75 mb-2 font-medium">
              <Link to="/" className="hover:text-gold transition-colors">Ana Sayfa</Link>
              <ChevronRight className="w-3 h-3 opacity-60" />
              <Link to="/projeler" className="hover:text-gold transition-colors">Projeler</Link>
              <ChevronRight className="w-3 h-3 opacity-60" />
              <span className="text-gold font-semibold truncate max-w-[200px]">{project.title}</span>
            </div>
            
            {/* H1 Project Title */}
            <h1 id="project-title-heading" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-md text-white">
              {project.title}
            </h1>

            {/* Sub-line */}
            <p className="font-sans text-cream/80 text-sm max-w-2xl font-light leading-relaxed">
              {project.location} bölgesinde hayata geçirdiğimiz asil peyzaj mühendisliği projesi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Info Bar: Horizontal Pills */}
      <section id="project-info-bar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-30">
        <div className="bg-white border border-light p-6 rounded-2xl shadow-md">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 font-sans text-xs">
            
            {/* Date Pill */}
            <div className="flex items-center gap-2 bg-cream/50 border border-light/60 px-4 py-2.5 rounded-full text-charcoal">
              <Calendar className="w-4 h-4 text-gold shrink-0" />
              <span><strong>Tarih:</strong> {project.date || project.year}</span>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 bg-cream/50 border border-light/60 px-4 py-2.5 rounded-full text-charcoal">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span><strong>Konum:</strong> {project.location}</span>
            </div>

            {/* Category Pill */}
            <div className="flex items-center gap-2 bg-cream/50 border border-light/60 px-4 py-2.5 rounded-full text-charcoal">
              <Layers className="w-4 h-4 text-gold shrink-0" />
              <span><strong>Kategori:</strong> {project.category}</span>
            </div>

            {/* Services Pill */}
            {project.services && project.services.length > 0 && (
              <div className="flex items-center gap-2 bg-forest/5 border border-forest/15 px-4 py-2.5 rounded-full text-forest">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>
                  <strong>Hizmetler:</strong> {project.services.join(", ")}
                </span>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 3. 2-Column Layout (Overview left + Image right) */}
      <section id="project-overview-narrative" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Project Overview text */}
          <div className="lg:col-span-7 space-y-6">
            <SectionLabel>Tasarım & Mimari Hikayesi</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest leading-tight">
              Proje Genel Bakış
            </h2>
            <div className="text-charcoal/80 text-sm leading-relaxed font-light space-y-4">
              <p>
                {project.description}
              </p>
              <p>
                Peyzaj Sarayı uzman ekibi olarak, her projemize sadece bir bahçe düzenlemesi olarak değil, doğayla bütünleşen yaşayan bir mimari yapıt olarak yaklaşıyoruz. Alanın toprağını, iklimini ve müşterilerimizin hayallerini harmanlayarak fonksiyonelliği lüks estetik detaylarla taçlandırıyoruz.
              </p>
            </div>

            {/* Checklist Features */}
            {project.features && project.features.length > 0 && (
              <div className="pt-4">
                <h4 className="font-serif text-lg font-semibold text-forest mb-4">Öne Çıkan Uygulama Özellikleri</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs text-charcoal/85">
                      <span className="w-5 h-5 rounded-full bg-forest text-gold flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: Premium Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-light max-w-md mx-auto lg:max-w-none">
              <Picture
                src={project.gallery && project.gallery[1] ? project.gallery[1] : project.mainImage}
                alt={`${project.title} Genel Görünüm`}
                className="w-full h-[400px] object-cover object-center transform hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. 3-Step Narrative: Meydan Okuma (Challenge) → Çözüm (Solution) → Sonuç (Result) */}
      <section id="narrative-timeline" className="py-16 bg-white min-w-full border-y border-light/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          
          <div className="text-center max-w-xl mx-auto space-y-4 mb-12">
            <SectionLabel>Uygulama Süreci</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
              Adım Adım Proje Çözümü
            </h2>
            <p className="text-xs text-charcoal/60 leading-relaxed font-light">
              Mühendislik zorluklarını akılcı, ekolojik ve lüks detaylarla çözerek mükemmele kavuşturduğumuz zanaat aşamalarımız.
            </p>
          </div>

          {/* 3 Step horizontal grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1: Meydan Okuma */}
            <div className="bg-cream/40 border border-light/75 rounded-2xl p-8 relative flex flex-col justify-between space-y-6">
              <span className="absolute top-4 right-6 text-gold/25 font-serif text-6xl font-extrabold select-none leading-none">01</span>
              <div>
                <span className="inline-block bg-earth/10 text-earth border border-earth/20 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
                  Zorluklar
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">Meydan Okuma</h3>
                <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* Step 2: Çözüm */}
            <div className="bg-forest text-white border border-forest rounded-2xl p-8 relative flex flex-col justify-between space-y-6 shadow-md">
              <span className="absolute top-4 right-6 text-gold/20 font-serif text-6xl font-extrabold select-none leading-none">02</span>
              <div>
                <span className="inline-block bg-gold text-charcoal text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
                  Mühendislik
                </span>
                <h3 className="font-serif text-xl font-bold text-gold mb-3">Çözüm</h3>
                <p className="text-xs text-cream/90 leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Step 3: Sonuç */}
            <div className="bg-cream/40 border border-light/75 rounded-2xl p-8 relative flex flex-col justify-between space-y-6">
              <span className="absolute top-4 right-6 text-gold/25 font-serif text-6xl font-extrabold select-none leading-none">03</span>
              <div>
                <span className="inline-block bg-forest/10 text-forest border border-forest/10 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
                  Nihai Durum
                </span>
                <h3 className="font-serif text-xl font-bold text-forest mb-3">Sonuç</h3>
                <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                  {project.result || "Kararlaştırılan estetik hedeflere ve bitki sağlığına zamanında erişildi. Alan kalıcı lüks ve konforlu doğa dinlenme noktasına dönüştürüldü."}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Related Projects Grid at Bottom (3 cards) */}
      <section id="related-projects-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 text-center md:text-left">
          <div>
            <SectionLabel>Dikkatinizi Çekebilir</SectionLabel>
            <h3 className="font-serif text-2.5xl sm:text-3xl font-bold text-forest mt-1">İlginizi Çekecek Diğer Projeler</h3>
          </div>
          <Link
            to="/projeler"
            className="text-xs font-bold uppercase tracking-widest text-[#a3835a] hover:text-forest transition-colors inline-flex items-center gap-1.5"
          >
            Tüm Albümü İncele
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((relProj) => (
            <Link
              key={relProj.slug}
              to={`/projeler/${relProj.slug}`}
              className="group bg-white border border-light/70 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-56 relative overflow-hidden select-none">
                <Picture
                  src={relProj.mainImage}
                  alt={relProj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-forest/90 text-gold text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1.5 rounded-sm">
                  {relProj.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-gold/90 uppercase tracking-wider font-bold block mb-1">
                    {relProj.location}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-forest leading-snug group-hover:text-gold transition-colors block mb-2">
                    {relProj.title}
                  </h4>
                </div>
                <div className="pt-4 mt-4 border-t border-light/65 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-forest group-hover:text-gold transition-colors">
                  <span>Detayları İncele</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Contact/CTA section */}
      <section id="contact-cta-section" className="bg-forest py-16 text-white min-w-full select-none border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <Trees className="w-96 h-96 -right-12 -bottom-12 absolute text-gold" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10 font-sans">
          <SectionLabel>Bizimle İletişime Geçin</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold tracking-wide">
            Benzer Bir Proje İçin Bize Ulaşın
          </h2>
          <p className="text-cream/70 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Hayalinizdeki konut bahçesi, rulo çim uygulaması veya fidanlık tesisi için projelendirme teklifinizi hemen alın. Botanik lüksümüzü açık alanlarınıza taşıyalım.
          </p>
          <div className="pt-4">
            <Link
              to="/iletisim"
              className="bg-gold hover:bg-[#a3835a] text-charcoal font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-md transition-all duration-300 inline-block shadow-md"
            >
              Projelendirme Teklifi Al
            </Link>
          </div>
        </div>
      </section>

      <div className="py-12 bg-cream"></div>

    </div>
  );
}
