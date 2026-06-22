import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    slug: "atakum-bahce-temizligi",
    title: "Atakum Konut Bahçesi Temizliği",
    turkishTitle: "Atakum Konut Bahçesi Temizliği",
    category: "Konut",
    categorySlug: "konut",
    location: "Atakum, Samsun",
    area: "450 m²",
    year: "2026",
    date: "Nisan 2026",
    client: "Ayhan Bey & Villa Sakinleri",
    description: "Atakum sahil şeridinde yer alan villanın bahçesindeki tüm yabani ot temizliği, toprak havalandırması ve bitki gençleştirme çalışmalarını kapsayan periyodik temizlik ve çevre düzenleme projesidir.",
    challenge: "Bahçenin uzun süre bakımsız kalması nedeniyle yabani otlar tüm çim alanı kaplamış ve süs ağaçları budanmadığı için formunu kaybetmişti.",
    solution: "Yabani otlar organik yöntemlerle temizlendikten sonra toprak özel makinelerle havalandırıldı. Ağaçlara gençleştirme budaması uygulanarak bitki sağlığı geri kazandırıldı. Toprak vitamin takviyeleri ile desteklendi.",
    result: "Bahçe eski asaletine kavuşurken, toprak vitamin takviyeleri sayesinde bitkiler daha gür ve canlı bir görünüme sahip oldu. Peyzaj alanı sürdürülebilir bir yapıya kavuştu.",
    mainImage: "/images/atakum_bahce_bakimi.jpg",
    gallery: [
      "/images/atakum_bahce_bakimi.jpg",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558904541-efa8c3a30fc9?q=80&w=1200"
    ],
    features: [
      "Yabani otlardan tamamen arındırılmış sağlıklı toprak tabakası",
      "Mevsimsel ve estetik form verici gençleştirme budaması",
      "Ziraat mühendisi onaylı vitamin ve mineral destek üniteleri",
      "Zararlı böceklere karşı organik koruyucu ilaçlama"
    ],
    services: ["Bahçe Temizliği", "Çim Biçimi", "Budama"]
  },
  {
    slug: "engiz-rulo-cim",
    title: "Engiz Rulo Çim Üretim ve Uygulama",
    turkishTitle: "Engiz Rulo Çim Üretim ve Uygulama",
    category: "Çim Uygulama",
    categorySlug: "cim-uygulama",
    location: "Engiz, Samsun",
    area: "1,100 m²",
    year: "2026",
    date: "Haziran 2026",
    client: "Demircan Çiftliği",
    description: "Geniş bir çiftlik evinin bahçesine, basılmaya ve gölgeye dayanıklı üstün kaliteli hazır rulo çim serimi yaptık. Altyapı, tesviye ve drenaj sistemini kusursuz şekilde hazırlayarak çimlerin ömrünü uzattık.",
    challenge: "Killi toprak yapısı nedeniyle su göllenme yapıyordu. Bu durum çim köklerini çürütme riski taşıyordu.",
    solution: "Toprak tesviye edilirken dere kumu ve organik gübre ilavesiyle geçirgenlik artırıldı. Otomatik damlama ve rotor sulama sistemi kurularak rulo çim serme işlemi tamamlandı.",
    result: "Samsun'un zorlu iklim koşullarına tam uyum sağlayan, basılmaya dayanıklı ve yemyeşil bir çim katmanı elde edildi. Otomatik sulama sayesinde su sarfiyatı yarı yarıya azaldı.",
    mainImage: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Yabancı otsuz gölgeye dayanıklı premium hazır çim",
      "Akıllı otomatik rotorlu sulama sistemi altyapısı",
      "Kumlanmış ve geçirgenliği artırılmış toprak altı drenajı",
      "Mükemmel seviyede düzleştirilmiş lazer tesviye"
    ],
    services: ["Rulo Çim Üretimi", "Çim Uygulama"]
  },
  {
    slug: "alaçam-geyikosan-mesire",
    title: "Geyikosan Mesire Alanı Peyzajı",
    turkishTitle: "Geyikosan Mesire Alanı Peyzajı",
    category: "Kamu Alanı",
    categorySlug: "kamu-alani",
    location: "Geyikosan, Alaçam – Samsun",
    area: "8,500 m²",
    year: "2026",
    date: "Nisan 2026",
    client: "Alaçam Belediyesi",
    description: "Alaçam beldesinin en popüler doğa destinasyonlarından olan Geyikosan Mesire Alanı'nda doğal dokuyu bozmadan, yerli ağaç türleri ve yürüyüş yolları ile rekreasyon çalışmaları yürüttük.",
    challenge: "Doğal ormanlık arazinin topografyasını korumak ve yoğun insan trafiğine dayanıklı, çevreye duyarlı malzemeler kullanmak gerekiyordu.",
    solution: "Zemin kaplamalarında tamamen doğal ahşap ve sıkıştırılmış kayrak tozu yollar tercih edildi. Lokal flora ile yüzde yüz uyumlu meşe, çam ve gürgen dikimleri yapılarak ekolojik denge desteklendi.",
    result: "Doğal yaşam alanı korunarak halkın konforluca kullanabileceği rekreasyon patikaları, sosyal donatı alanları ve asil dinlenme durakları peyzaja kazandırıldı.",
    mainImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1500",
    gallery: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1500",
      "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Çevre dostu doğal kayrak tuzu patika yolları",
      "Lokal orman örtüsüne uyumlu meşe ve çam fidanı ekimi",
      "Doğal masif ahşap kent mobilyaları montajı",
      "Doğaya zarar vermeyen düşük voltajlı led aydınlatmalar"
    ],
    services: ["Ağaç Dikimi", "Yürüyüş Yolu"]
  },
  {
    slug: "tekkekoy-fidan-ureticisi",
    title: "Tekkeköy Süs Bitkisi Üretim Tesisi",
    turkishTitle: "Tekkeköy Süs Bitkisi Üretim Tesisi",
    category: "Ticari",
    categorySlug: "ticari",
    location: "Tekkeköy, Samsun",
    area: "3,200 m²",
    year: "2026",
    date: "2026 (Devam Eden)",
    client: "Peyzaj Sarayı Botanik Deposu",
    description: "Tekkeköy ilçesindeki süs bitkisi üretim tesisinde yüksek aşılı soliter ağaçlar, çalı grupları ve mevsim çiçeklerinin bilimsel tarım yöntemleriyle yetiştirilmesini sağlayan modern sera projemizdir.",
    challenge: "Seralardaki yüksek nem ihtiyacı ve mevsimsel sıcaklık dengesizlikleri bitki kalitesini düşürüyor, kontrolsüz sulama ise kaynak israfına yol açıyordu.",
    solution: "Akıllı otomasyona sahip yağmur sensörlü sisleme sulama hattı kuruldu. Isı perdeleri ve modern havalandırma üniteleri ile bitkiler için ideal mikroklima sağlandı.",
    result: "Nitelikli süs bitkisi üretimi ve fide gelişimi %40 oranında hızlanırken, akıllı sulama otomasyonu ile su ve enerji tüketiminde çevre dostu tasarruf sağlandı.",
    mainImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Bilgisayar kontrollü akıllı sisleme ve sulama ağı",
      "Otomatik açılır kapanır iklimlendirme perdeleri",
      "Bölünmüş fidanlık ve tohum çimlendirme odaları",
      "Gelişmiş zemin ısıtma ve drenaj altyapısı"
    ],
    services: ["Fidan Üretimi", "Sulama Sistemi"]
  }
];
