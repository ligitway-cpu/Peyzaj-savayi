import { Project, Service, BlogPost, FAQItem } from "./types";
import { PROJECTS as IMPORTED_PROJECTS } from "./data/projects";

export const PROJECTS = IMPORTED_PROJECTS;

export const SERVICES: Service[] = [
  {
    id: "bahce-tasarimi",
    title: "Anahtar Teslim Bahçe Tasarımı & Projelendirme",
    description: "Hayalinizdeki yeşil alanı, mimari estetik ve botanik uzmanlıkla buluşturarak 3D görselleştirme eşliğinde sıfırdan tasarlıyoruz.",
    longDescription: "Bahçe tasarımı, sadece bitki yerleştirmek değil; yaşam alanınızın açık havadaki uzantısını kurgulamaktır. Peyzaj Sarayı olarak, arazinizin topografyasını, güneş alma açılarını ve toprak yapısını analiz ediyoruz. Sizin yaşam tarzınıza ve estetik tercihlerinize uygun fonksiyonel şemalar üretiyoruz. Konsept çizim aşamasından fotogerçekçi 3D modellemeye, bitki seçim listelerinden sert zemin planlarına kadar tüm süreçleri bütüncül bir yaklaşımla yürütüyoruz.",
    iconName: "Compass",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Kişiye özel 2D ve 3D peyzaj mimari projeleri",
      "Mikroklima ve toprak analizine uygun bitkilendirme tasarımları",
      "Aydınlatma ve su ögeleri entegrasyonu",
      "Sürdürülebilir, az bakım gerektiren ekolojik bahçe konseptleri"
    ]
  },
  {
    id: "otomatik-sulama",
    title: "Akıllı Otomatik Sulama Sistemleri",
    description: "Su kaynaklarını koruyan akıllı sensörlü altyapılar ile bitkilerinizin ihtiyacı olan nemi tam zamanında ve optimize miktarda sunuyoruz.",
    longDescription: "Doğru sulama, peyzajın uzun ömürlü olmasının temel anahtarıdır. Mühendislik standartlarında tasarladığımız otomatik sulama sistemleri, homojen su dağılımı sağlayarak su sarfiyatını en aza indirir. Yağmur ve nem sensörleri sayesinde gereksiz sulamayı engeller, hava durumuna göre otomatik ayarlama yapar. Damlama, mikro jet ve rotor sprinkler kullanarak her bitki grubunun su ihtiyacını ayrı bölgelerde (zonlarda) yönetiyoruz.",
    iconName: "Droplet",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Hunter ve Rain Bird premium Alman/Amerikan altyapısı",
      "Akıllı telefon bağlantılı Wi-Fi kontrol üniteleri",
      "Minimum su tüketimiyle maksimum verim sağlayan zonlama",
      "Mevsimsel geçişlerde otomatik program güncellemeleri"
    ]
  },
  {
    id: "dikey-bahce",
    title: "Dikey Bahçe & Yaşayan Duvarlar",
    description: "Dar alanlarda doğanın mucizesini hissetmeniz için dikey yüzeyleri yaşayan, nefes alan sanat eserlerine dönüştürüyoruz.",
    longDescription: "Dikey bahçeler, kentsel alanlarda betonu doğayla örtmenin en şık yoludur. Hem iç mekan ofis ortamlarında hem de dış cephelerde uyguladığımız yaşayan duvarlar, havayı temizler, akustik yalıtım sağlar ve mikroklimayı iyileştirir. Özel keçe katmanları, otomatik besin dozajlama sistemleri ve entegre aydınlatmalar ile bitkilerin düşey düzlemde sağlıklı şekilde gelişmesini sağlıyoruz.",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1530731141654-5961ad6f7d61?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Otomatik besin (sıvı gübre) enjeksiyonlu kapalı devre sulama",
      "İç mekana özel tam spektrumlu LED büyüme ışıkları",
      "Hafifletilmiş statik yük bindiren modüler paneller",
      "Geniş egzotik ve lokal iç-dış mekan bitki koleksiyonu"
    ]
  },
  {
    id: "sert-zemin-tas-doseme",
    title: "Sert Zemin Uygulamaları & Taş Düşeme",
    description: "Doğal traverten, granit ve kayrak taşlarıyla, bahçenizin yürüyüş yollarını ve sosyal alanlarını uzun ömürlü sanat zeminlerine çeviriyoruz.",
    longDescription: "Sert peyzaj ögeleri (hardscaping), bahçenin iskeletini oluşturur. Peyzaj Sarayı kalitesiyle; traverten teras kaplamaları, doğal kayrak taşından yürüme yolları, granit küptaş araç yolları ve andezit istinat duvarları inşa ediyoruz. Alt yapı drenajını kusursuz uygulayarak, göllenme ve çökmeleri engelliyor, yıllara meydan okuyan sağlamlıkta zeminler teslim ediyoruz.",
    iconName: "Grid",
    image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Denizli birinci sınıf traverten ve doğal Bodrum kayrak taşları",
      "Su birikmesini engelleyen profesyonel eğimlendirme ve drenaj",
      "Bahçe şöminesi, barbekü alanları ve lüks oturma köşeleri",
      "Işıklı zemin armatürleri montajı"
    ]
  },
  {
    id: "rulo-cim-bitki",
    title: "Premium Hazır Rulo Çim & Nitelikli Bitki Temini",
    description: "Özel üretim, yabancı otsuz, sık dokulu hazır çimlerimizle bahçenizi sadece birkaç saat içinde kusursuz bir yeşil örtüye kavuşturuyoruz.",
    longDescription: "Rulo çim kalitesi, tohum türünden yetiştirilme sürecine kadar özen gerektirir. Peyzaj Sarayı olarak, ezilmeye dayanıklı gür gölgeli premium tohum karışımlarından (Festuca tohum ağırlıklı) üretilen rulo çimleri kullanıyoruz. Ayrıca, yurt dışından ithal nitelikli soliter bitkileri (Bonsai zeytin ağaçları, Japon Akçaağaçları) ve kendi fidanlığımızda yetiştirdiğimiz yerli formlu ağaçları bahçenizde toprakla buluşturuyoruz.",
    iconName: "Sprout",
    image: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Günübirlik kesim ve aynı gün profesyonel serme işlemi",
      "Yabancı ot barındırmayan, kök tutumu yüksek adaptasyon",
      "Lüks sınıf soliter ağaçlar ve yaşlı nitelikli gövde formları",
      "Bitki dikimlerinde organik toprak zenginleştirici ekleri"
    ]
  },
  {
    id: "periyodik-bakim",
    title: "Profesyonel Bahçe Bakım Hizmetleri",
    description: "Ziraat mühendisleri ve uzman bahçıvan kontrolünde, bitkilerinizin estetik formunu ve sağlığını dört mevsim boyunca koruyoruz.",
    longDescription: "Yaşayan bir sanat eseri olan peyzaj, ilk günkü ihtişamını sürdürebilmek için kesintisiz bakım ister. Alanında profesyonel ekibimizle; çim biçme, mevsimsel budama, gübreleme, koruyucu ilaçlama ve otomatik sulama ayarlarını periyodik olarak gerçekleştiriyoruz. Ziraat mühendislerimiz tarafından yapılan düzenli sağlık taraması ile zararlılara karşı erken dönem önlemler alıyoruz.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Haftalık veya 15 günlük periyodik ziyaret planları",
      "Mevsimsel form budamaları (Topiary) ve gençleştirme",
      "Zorunlu ve koruyucu organik/kimyasal organik gübre destekleri",
      "Zararlı böceklere ve mantar hastalıklarına karşı entegre mücadele"
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "modern-bahce-tasariminda-suyun-rolu",
    title: "Moden Bahçe Tasarımında Suyun Dinginleştirici Gücü",
    excerpt: "Süs havuzları, dikey şelaleler ve modern fıskiyelerin peyzaj mimarisindeki psikolojik etkisi ve uygulama ipuçları.",
    content: "Peyzaj tasarımında su, sadece görsel bir öge değil, ortamın ruhunu değiştiren en güçlü işitsel ve duyusal etkendir. Bir şelaleden dökülen suyun sesi, şehir gürültüsünü maskelerken; durgun bir süs havuzu ise gökyüzünün yansımasını bahçenize taşıyarak sakinlik hissi uyandırır.\n\n### Havuz ve Fıskiye Seçiminde Nelere Dikkat Edilmeli?\n\n1. **Ölçek ve Orantı:** Küçük bir Zen bahçesine devasa bir şelale yerleştirmek görsel dengeyi bozar. Benzer şekilde geniş bir çim alandaki ufak bir fıskiye de yetersiz görünecektir.\n2. **Altyapı ve Filtrasyon:** Su ögelerinin her zaman berrak ve kokusuz kalması için biyolojik filtrasyon sistemleri ve devirdaim (sirkülasyon) pompaları kusursuz planlanmalıdır.\n3. **Bitki Uyumu:** Su kenarlarında yüksek nemi seven sazlıklar, lotus (nilüfer) çiçekleri ve nemcil Japon Akçaağaçları gibi türler kullanarak doğallığı pekiştirebilirsiniz.\n\nBiz Peyzaj Sarayı olarak, her su projesini bahçenin doğal eğimi ve rüzgar yönüne göre kurguluyoruz. Böylece suyun buharlaşma kaybını minimize ederken rüzgarla birlikte serinliğin oturma köşelerine taşınmasını sağlıyoruz.",
    date: "12 Mayıs 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1500",
    tags: ["Su Ögeleri", "Bahçe Tasarımı", "Teras Tasarımı"],
    author: "Zeynep Akar (Peyzaj Mimarı)"
  },
  {
    slug: "kurakcil-peyzaj-ve-su-tasarrufu",
    title: "Kurakçıl Peyzaj (Xeriscaping) ile Bahçenizde %60 Su Tasarrufu",
    excerpt: "Küresel iklim kriziyle birlikte su tüketimini en aza indiren kurakçıl peyzajın incelikleri ve en sevilen dayanıklı bitkiler.",
    content: "Dünyamızda temiz su kaynakları her geçen gün azalırken, peyzaj dünyası da büyük bir dönüşüm geçiriyor. Kurakçıl peyzaj (Xeriscaping), estetikten ödün vermeden, su kaynaklarını koruyan ve bölgenin doğal florasına uyum sağlayan bahçeler tasarlama sanatıdır.\n\n### Kurakçıl Bahçenin 3 Altın Kuralı\n\n- **Malçlama:** Toprak yüzeyini çam kabukları, çakıl taşları veya kurutulmuş yapraklarla örtmek evaporasyonu (buharlaşmayı) önleyerek köklerin nemli kalmasını sağlar.\n- **Doğru Bitki Gruplaması:** Su ihtiyacı benzer olan bitkileri aynı bölgelere ekmek, sulama planınızı mükemmelleştirir.\n- **Lokal Türler:** Bölgenin ikliminde doğal olarak yetişen meşe, zeytin, begonvil ve lavanta gibi bitkiler, dışarıdan sulamaya neredeyse hiç ihtiyaç duymazlar.\n\nBahçenizde geniş, sulama canavarı çim alanlar yerine Bodrum kayrak taşları, çakıl yatakları ve aromatik bitki adaları oluşturarak hem zahmetsiz hem de göz alıcı bir şıklık yakalayabilirsiniz.",
    date: "28 Nisan 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1500",
    tags: ["Sürdürülebilirlik", "Akdeniz Florası", "Ekolojik Tarım"],
    author: "Selim Yılmaz (Ziraat Mühendisi)"
  },
  {
    slug: "villa-bahcelerinde-mahremiyet-saglama",
    title: "Villa Bahçelerinde Doğal Çitlerle Mahremiyet Sağlama Rehberi",
    excerpt: "Beton duvarların soğukluğu yerine, yaprak dökmeyen yaşayan yeşil duvarlarla bahçenizi dış gözlerden şık bir şekilde koruyun.",
    content: "Lüks konut ve villalarda en çok aranan konulardan biri de mahremiyettir. Ancak bahçenizi 3 metrelik loş beton duvarlarla kapatmak, sizi doğadan soyutlar. Bunun yerine bitkisel bariyerler kurarak hem güvenli hem de yemyeşil bir güvenlik hissi elde edebilirsiniz.\n\n### Yaprak Dökmeyen En Popüler Çit Bitkileri\n\n1. **Leylandi (Cupressocyparis leylandii):** Yılda 1 metreye kadar hızlı uzayan, rüzgarı kesen, sık yapılı vazgeçilmez bir çit dostudur.\n2. **Limon Servi (Cupressus macrocarpa):** Açık yeşil-sarı yaprak dokusu ve hoş limon kokusuyla bahçenize aydınlık bir ferahlık verir.\n3. **Alev Çalısı (Photinia fraseri):** Bahar aylarında kırmızılaşan sürgün uçlarıyla hem mahremiyet sağlar hem de muazzam bir renk şöleni sunar.\n\nÇitlerinizi düzenli budayarak kutu (topiary) formuna getirebilir, aralarına yerleştireceğiniz gizli ışık hatlarıyla akşamları görkemli bir saray bahçesi hissi yaratabilirsiniz.",
    date: "14 Mart 2026",
    readTime: "3 dk okuma",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    tags: ["Çit Bitkileri", "Villa Tasarımı", "Pratik Bilgiler"],
    author: "Ömer Sarraf (Baş Bahçıvan)"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Tasarım ve projelendirme süreci ne kadar sürer?",
    answer: "Arazinin büyüklüğüne ve projenin karmaşıklığına bağlı olarak, ilk röleve alımı ve konsept çizimlerimiz 1 ila 2 hafta sürer. Revizyon süreçleri ve tam 3D fotogerçekçi görsellerin hazırlanması ile birlikte anahtar teslim projelendirme dosyası 3-4 hafta içinde tamamlanarak onayınıza sunulur.",
    category: "Projelendirme"
  },
  {
    id: "faq-2",
    question: "Sadece tasarım mı yapıyorsunuz yoksa uygulamayı da üstleniyor musunuz?",
    answer: "Peyzaj Sarayı olarak anahtar teslim hizmet veriyoruz. Kendi bünyemizde barındırdığımız peyzaj mimarları, ziraat mühendisleri, teknik sert zemin ustaları ve bahçıvan ekiplerimizle projeyi çizmekle kalmıyor; drenaj kazısından sulama sistemlerine, rulo çimlemeden soliter ithal ağaç dikimlerine kadar her aşamayı bizzat hayata geçiriyoruz.",
    category: "Hizmet Kapsamı"
  },
  {
    id: "faq-3",
    question: "Bahçeme uygun bitkileri nasıl belirliyorsunuz?",
    answer: "Peyzaj projesine başlamadan önce arazinizden toprak numunesi alıp analiz yapıyoruz. Bölgenin yıllık yağış rejimini, rüzgar yönlerini, kışın en düşük sıcaklık ortalamasını ve bahçenizin güneş/gölge alan haritasını çıkararak sadece estetik görünen değil, o bölgede yıllar boyu sağlıklı yaşayacak doğru bitki listesini (botanik haritası) oluşturuyoruz.",
    category: "Botanik & Altyapı"
  },
  {
    id: "faq-4",
    question: "Otomatik sulama kurdurmak su faturalarını artırır mı?",
    answer: "Aksine, otomatik sulama sistemleri doğru kurulduğunda su faturalarınızı ortalama %40 ile %50 oranında düşürür. Manuel el hortumu ile yapılan sulamalarda ciddi su israfı ve dengesiz dağılım yaşanır. Akıllı sensörlü sistemlerimiz ise sadece toprağın nemi azaldığında ve buharlaşmanın en düşük olduğu gece/sabah erken saatlerde bitki ihtiyacı kadar nokta atışı sulama yapar.",
    category: "Botanik & Altyapı"
  },
  {
    id: "faq-5",
    question: "Proje bittikten sonra bahçenin bakımı konusunda yardımcı oluyor musunuz?",
    answer: "Evet, teslim ettiğimiz tüm projelerin ilk 3 aylık adaptasyon döneminde ücretsiz haftalık kontrol sağlıyoruz. Sonrasında ise dileyen müşterilerimizle yıllık sözleşmeli profesyonel periyodik bakım hizmeti (haftalık veya 15 günde bir ziyaret programlarıyla) yürütmekteyiz. Bahçenizin her mevsim saray kalitesinde parlaması sağlanır.",
    category: "Bakım & Garanti"
  }
];
