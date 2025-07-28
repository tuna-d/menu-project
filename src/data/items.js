import { v4 as uuid } from "uuid"
import categories from "./categories"

let menuItems = [
  {
    category: "Yemek",
    items: [
      {
        name: "English Breakfast",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377634_60679_20240530090222.jpg",
        desc: "Zeytinyağı ve tereyağında sotelenmiş salkım kiraz domates ve kültür mantarı, ağır ateşte taze adaçayı ile dinlendirilmiş İngiliz tatlı fasülyesi, çift göz yumurta, domuz bacon* ve ev yapımı dana sosis ile... *Tercihe göre dana bacon ile servis edilebilir. ⏱ Hazırlanış süresi min. 15 dakikadır.",
        price: 650.0,
      },
      {
        name: "Patates Kızartması",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377635_60679_20241021044505.jpg",
        desc: "",
        price: 225.0,
      },
      {
        name: "Trüflü Patates Kızartması",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377636_60679_20241021044330.jpg",
        desc: "Kurutulmuş maydanoz, trüf yağı ve parmesan ile…",
        price: 300.0,
      },
      {
        name: "Sıcak Tabağı",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377637_60679_20241021044340.jpg",
        desc: "Soğan halkası, çıtır tavuk, sosis ve patates kızartması",
        price: {
          Klasik: 400.0,
          "Trüflü Patates ile": 440.0,
        },
      },
      {
        name: "Fish And Chips",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377640_60679_20240530090616.jpg",
        desc: "Kaparili tartar, naneli bezelye püresi ve ızgara limon… *Panede eser miktarda bira kullanılmıştır.",
        price: 485.0,
      },
      {
        name: "Club Sandwich",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377641_60679_20240530090714.jpg",
        desc: "İçerisinde ızgara tavuk, dana jambon, çırpılmış yumurta, cheddar peyniri, kaşar peyniri, domates, turşu, marul, mayonez.. Yanında patates kızartması ile..",
        price: {
          Klasik: 440.0,
          "Trüflü Patates ile": 470.0,
        },
      },
      {
        name: "Queensize Chicken Sandwich",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5535891_60679_20240628021837.jpg",
        desc: "Ciabatta ekmeğinde 250 gr. panelenmiş tavuk, az acılı ve adaçaylı çektirme sos, cheddar peyniri, vinegret ile harmanlanmış coleslaw, kaffirlimelı mayonez...",
        price: {
          Klasik: 420.0,
          "Trüflü Patates ile": 445.0,
        },
      },
      {
        name: "Bacon Ve Kuzu Cottolu Sandwich",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5387018_60679_20240601085448.jpg",
        desc: "Ciabatta ekmeğine sürülmüş zeytin pesto, dana bacon, kuzu cotto, eski kaşar, kuzu kulağı, roka...",
        price: 660.0,
      },
      {
        name: "Narenciyeli Pancar Salatası",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6099729_60679_20241030031031.jpg",
        desc: "Fırınlanmış pancar, endivyen salata, portakal segment, glaze narenciye sos, antep fıstığı kreması, şefin özel chia & keten tohumu krakeri ile...",
        price: 375.0,
      },
      {
        name: "Enginarlı Salata",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5386981_60679_20240601085139.jpg",
        desc: "Çanak enginar, enginar püresi, badem-incir vinegret, maskolin yeşillik, bakla cips, kırmızı soğan, hatay halhali zeytin, domates... *Vinegrettte eser miktarda kırmızı şarap kullanılmıştır.",
        price: 375.0,
      },
      {
        name: "Bunch Falafel",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6099828_60679_20241030032309.jpg",
        desc: "Şefin özel falafel yorumu, fırınlanmış karnabahar, tane baharatlar ve zeytinyağı ile fırınlanmış baby havuç, fırınlanmış kapya biberi, tabbule salata ile...",
        price: 425.0,
      },
      {
        name: "Bunch Poke",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5962079_60679_20241002102512.jpg",
        desc: "Soya ve sriracha ile marine edilmiş 160 gr. somon, kinoa, avokado, havuç, salatalık, miso&tahin sos ve nori yaprakları ile şefin özel Poke yorumu...",
        price: 650.0,
      },
      {
        name: "Ekmek Üstü Dana Eti Babaganuş",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5387019_60679_20240601085712.jpg",
        desc: "Ekşi maya ekmek üzerinde tahinli köz sebze ile hazırlanmış şefin özel babaganuşu, uzun pişirilmiş 90 gr. dana incik ve osso buco karışımı, nane, maydonoz ve kırmızı soğan turşusu... *Etin pişirilmesinde eser miktarda kırmızı şarap kullanılmıştır.",
        price: 440.0,
      },
      {
        name: "Ekşili Humus Üzeri Somon",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5484280_60679_20240614021859.jpg",
        desc: "Tabanda ekşili yaz humusu, etrafında limon vinegret ile harmanlanmış kırmızı soğan ve semiz otu, nohut cipsi, 180 gr. somon...",
        price: 650.0,
      },
      {
        name: "Bangers and Mash",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377642_60679_20240530090819.jpg",
        desc: "%100 el yapımı dana sosis, tane hardallı ve frenk soğanlı patates püresi, üzerine soğan sos...",
        price: 475.0,
      },
      {
        name: "Chicken Tikka Masala",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5997315_60679_20241010124557.jpg",
        desc: "El yapımı garam masala baharatı ile hazırlanmış tikka masala sos, tavuk but, kakule ve anason ile pişirilen kızarmış basmati pirinci, ekşili yoğurt sos, nane, maydanoz ve kırmızı soğan turşusu ile...",
        price: 475.0,
      },
      {
        name: "Trapani Pestolu Makarna",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5387021_60679_20240601085606.jpg",
        desc: "Sicilya tipi domates pestosu, confit sarımsak yağı, parmesan, ince doğranmış frenk soğanı, conchiglie makarna...",
        price: 400.0,
      },
      {
        name: "Zucchini Spaghetti",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5535829_60679_20240628120154.jpg",
        desc: "Krema&limon sos, taze kabak, taze nane, kavrulmuş panko, parmesan ve kurutulmuş maydonoz ile...",
        price: 375.0,
      },
      {
        name: "Vongale Spaghetti",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5959197_60679_20241004021857.jpg",
        desc: "Beyaz şarap ve rende sarımsak ile pişmiş kum midyesi, tereyağ, limon kabuğu ve gremolata ile...",
        price: 500.0,
      },
      {
        name: "Peynir Tabağı",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5844065_60679_20240905113405.jpg",
        desc: "İsli Çerkez peyniri, Gravyer peyniri, Mihaliç peyniri, taze keçi peyniri, kuru et, lahana turşusu ve armut püresi ile...",
        price: 650.0,
      },
    ],
  },
  {
    category: "Tatlı",
    items: [
      {
        name: "Jameson Whiskey Chocolate Mousse",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5992859_60679_20241009030231.jpg",
        desc: "Jameson Black Barrel ve bitter çikolata ile yapılmış mousse, üzerinde tuzlu fındıklı crumble ile...",
        price: 330.0,
      },
      {
        name: "Bademli Yaban Mersinli Tart",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5387025_60679_20241030030337.jpg",
        desc: "Fransız tipi badem dolgusu, taze yaban mersini ve tart hamuru, pudra şekeri ve dondurma ile...",
        price: 285.0,
      },
    ],
  },
  {
    category: "Şişe Bira",
    items: [
      {
        name: "Tuborg Gold 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377487_60679_20240530093436.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Carlsberg 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377488_60679_20240530093552.jpg",
        desc: "",
        price: 260.0,
      },
      {
        name: "Tuborg Amber 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377489_60679_20240530093655.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Tuborg Filtresiz 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377490_60679_20240530093749.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Carlsberg Luna 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377677_60679_20240530093945.jpg",
        desc: "",
        price: 270.0,
      },
      {
        name: "Frederik Neipa 35 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/7466501_60679_20250620103353.jpg",
        desc: "",
        price: 280.0,
      },
      {
        name: "Frederik Tropic IPA 35 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/7496106_60679_20250626023815.jpg",
        desc: "",
        price: 280.0,
      },
      {
        name: "Frederik India Pale Ale 35 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377493_60679_20240530094031.jpg",
        desc: "",
        price: 280.0,
      },
      {
        name: "Frederik Brown Ale 35 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377491_60679_20240530094115.jpg",
        desc: "",
        price: 280.0,
      },
      {
        name: "Frederik Wheat Ipa 35 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377494_60679_20240530094340.jpg",
        desc: "",
        price: 280.0,
      },
      {
        name: "Frederik Marzen Lager 35 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377492_60679_20240530094546.jpg",
        desc: "",
        price: 280.0,
      },
      {
        name: "Frederik Local 35 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6600568_60679_20250129112118.jpg",
        desc: "",
        price: 280.0,
      },
      {
        name: "Blanc 33 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377501_60679_20240530094638.jpg",
        desc: "",
        price: 220.0,
      },
      {
        name: "Weihenstephaner 33 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377496_60679_20240530094742.jpg",
        desc: "",
        price: 300.0,
      },
      {
        name: "Weihenstephaner Vitus 33 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377497_60679_20240530094828.jpg",
        desc: "",
        price: 365.0,
      },
      {
        name: "Guinness 44 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377498_60679_20240530094956.jpg",
        desc: "",
        price: 415.0,
      },
      {
        name: "Grimbergen Blonde 33 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377656_60679_20240530095106.jpg",
        desc: "",
        price: 385.0,
      },
      {
        name: "Grimbergen Double Ambrée 33 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377657_60679_20240530095200.jpg",
        desc: "",
        price: 385.0,
      },
      {
        name: "Desperados 33 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377500_60679_20240530095425.jpg",
        desc: "",
        price: 350.0,
      },
      {
        name: "Efes Glutensiz 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5433858_60679_20240608101720.jpg",
        desc: "",
        price: 300.0,
      },
      {
        name: "Miller 33 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6640332_60679_20250203084317.jpg",
        desc: "",
        price: 355.0,
      },
      {
        name: "Miller Lime 33 CL",
        image:
          "https://cdn.adisyo.com/mahrezphotos/7307731_60679_20250523123452.jpg",
        desc: "",
        price: 355.0,
      },
      {
        name: "Hoegaarden 33 cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5433806_60679_20240608103203.jpg",
        desc: "",
        price: 380.0,
      },
    ],
  },
  {
    category: "Fıçı Bira",
    items: [
      {
        name: "Tuborg Fıçı 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377503_60679_20240614081810.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Tuborg Fıçı 30 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377504_60679_20240614081823.jpg",
        desc: "",
        price: 210.0,
      },
      {
        name: "Carlsberg Fıçı 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377505_60679_20240601112058.jpg",
        desc: "",
        price: 260.0,
      },
      {
        name: "Carlsberg Fıçı 30 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377506_60679_20240601112120.jpg",
        desc: "",
        price: 230.0,
      },
      {
        name: "Carlsberg Luna Fıçı 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377736_60679_20240601112157.jpg",
        desc: "",
        price: 280.0,
      },
      {
        name: "Carlsberg Luna Fıçı 30 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377737_60679_20240601112219.jpg",
        desc: "",
        price: 245.0,
      },
      {
        name: "Blanc Fıçı 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377509_60679_20240614081926.jpg",
        desc: "",
        price: 325.0,
      },
      {
        name: "Blanc Fıçı 30 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377510_60679_20240614081937.jpg",
        desc: "",
        price: 285.0,
      },
      {
        name: "Weihenstephaner Fıçı 50 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377507_60679_20240601112343.jpg",
        desc: "",
        price: 400.0,
      },
      {
        name: "Weihenstephaner Fıçı 30 Cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377508_60679_20240601112351.jpg",
        desc: "",
        price: 350.0,
      },
      {
        name: "Guinness Fıçı 50 cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377511_60679_20240601112403.jpg",
        desc: "",
        price: 410.0,
      },
      {
        name: "Guinness Fıçı 25 cl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377512_60679_20240601112413.jpg",
        desc: "",
        price: 290.0,
      },
    ],
  },
  {
    category: "Bunch The Cocktails",
    items: [
      {
        name: "Drizzle",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377780_60679_20250718040825.jpg",
        desc: "⛱️ El Yapımı Karpuz Likörü, Absolut, Martini Fiero, Mastik Tentür, Karpuz, Nane",
        price: 615.0,
      },
      {
        name: "Blaze",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377779_60679_20240707092217.jpg",
        desc: "⛱️ Tanqueray Nº Ten, St-Germain, El Yapımı Kavun & Ananas Sübye, Elderflower Tentür, Fesleğen, Tane Karabiber",
        price: 615.0,
      },
      {
        name: "Ruby",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6248357_60679_20241129050757.jpg",
        desc: "Malfy Gin Rosa, Ojo De Tigre Joven, Luxardo Maraschino, Böğürtlen, Limon, Soda, Nane, Maldon Tuz",
        price: 615.0,
      },
      {
        name: "Top-Notch",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6217528_60679_20241122055446.jpg",
        desc: "Malfy Con Limone, Italicus, Bianco Vermut, Ojo De Tigre Joven",
        price: 615.0,
      },
      {
        name: "Anti-Venom",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6746425_60679_20250221070300.jpg",
        desc: "Clarified Milk Punch Jameson, Kahlúa, Limon, BunchMix",
        price: 615.0,
      },
      {
        name: "Second To None",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5485203_60679_20240614032103.jpg",
        desc: "Ojo De Tigre Joven, Jameson, El Yapımı Kekik & Narenciye Sosu, Lime Cordial",
        price: 585.0,
      },
      {
        name: "Pop Rocks",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377528_60679_20240613015602.jpg",
        desc: "Jameson, Olmeca Silver, Havana Club, Böğürtlen, Frambuaz, BunchMix, Patlayan Şeker",
        price: 555.0,
      },
      {
        name: "Perky",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377759_60679_20240613011618.jpg",
        desc: "Jameson Black Barrel, Safari, Fesleğen, Mango, Limon, BunchMix",
        price: 555.0,
      },
      {
        name: "Green Lantern",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377529_60679_20240613011727.jpg",
        desc: "Malfy, Kivi, Salatalık, BunchMix",
        price: 555.0,
      },
      {
        name: "Holly Jolly",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377527_60679_20240613020442.jpg",
        desc: "🌶 Absolut Raspberri, Beefeater Pink, @annaperenina Reçeli, Çilek, Limon, BunchMix",
        price: 585.0,
      },
      {
        name: "Dirty Thirty",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377530_60679_20240613015834.jpg",
        desc: "Jameson, Havana Club, Triple Sec, Malfy, Olmeca Silver, Campari, Çarkıfelek Meyvesi, Greyfurt, Limon, BunchMix",
        price: 555.0,
      },
      {
        name: "Maypop",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377531_60679_20240613012559.jpg",
        desc: "Malfy, Havana Club, Çarkıfelek Meyvesi, BunchMix",
        price: 555.0,
      },
      {
        name: "True North",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377760_60679_20240613011904.jpg",
        desc: "Absolut, El Yapımı Yoğurt Likörü, Kahlua, Chocolate Bitters, Zest Badem, Limon",
        price: 555.0,
      },
      {
        name: "Shamrock",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377532_60679_20240613011305.jpg",
        desc: "Absolut, Absolut Lime, Lime, Kuzu Kulağı, Lime Cordial, BunchMix",
        price: 555.0,
      },
      {
        name: "Winter Margarita",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377535_60679_20241010015914.jpg",
        desc: "Olmeca, Aperol, Triple Sec, Greyfurt, Limon",
        price: 555.0,
      },
      {
        name: "Passion X",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377652_60679_20240613020110.jpg",
        desc: "Malfy, Safari, Acıbadem Likörü, Triple Sec, Portakal, Limon, BunchMix",
        price: 555.0,
      },
      {
        name: "No Mercy",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377698_60679_20240613014834.jpg",
        desc: "🌶🌶 Malibu, Chili Infused Olmeca Silver, Ananas, Limon, BunchMix",
        price: 555.0,
      },
    ],
  },
  {
    category: "Klasik Kokteyl",
    items: [
      {
        name: "Long Island",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377536_60679_20250405011914.jpg",
        desc: "Havana Club, Malfy, Olmeca Silver, Absolut, Triple Sec",
        price: 575.0,
      },
      {
        name: "Mojito",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377537_60679_20250405011954.jpg",
        desc: "Havana Club",
        price: 555.0,
      },
      {
        name: "Margarita",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377539_60679_20240614083433.jpg",
        desc: "Olmeca Silver, Triple Sec",
        price: 525.0,
      },
      {
        name: "Negroni",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377538_60679_20250405012203.jpg",
        desc: "Malfy, Martini Rosso, Campari",
        price: 575.0,
      },
      {
        name: "Absolut Martini",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377540_60679_20240614083536.jpg",
        desc: "Absolut",
        price: 525.0,
      },
      {
        name: "Dirty Martini",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377541_60679_20250405012343.jpg",
        desc: "Malfy",
        price: 555.0,
      },
      {
        name: "Cin Martini",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377542_60679_20250405012436.jpg",
        desc: "Malfy",
        price: 555.0,
      },
      {
        name: "Espresso Martini",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377732_60679_20240602101635.jpg",
        desc: "Absolut, Kahlua",
        price: 555.0,
      },
      {
        name: "Vanilia Espresso Martini",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377733_60679_20240602101728.jpg",
        desc: "Absolut Vanilia, Kahlua",
        price: 555.0,
      },
      {
        name: "Cin Fizz",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377545_60679_20250405012615.jpg",
        desc: "Malfy",
        price: 555.0,
      },
      {
        name: "Cin Tonic",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377546_60679_20250405012715.jpg",
        desc: "Malfy",
        price: 555.0,
      },
      {
        name: "Cin Soda",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377547_60679_20250405012840.jpg",
        desc: "Malfy",
        price: 525.0,
      },
      {
        name: "Pink Fizz",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377719_60679_20250405012956.jpg",
        desc: "Malfy Gin Rosa",
        price: 555.0,
      },
      {
        name: "Pink Tonic",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377693_60679_20250405013204.jpg",
        desc: "Malfy Gin Rosa",
        price: 555.0,
      },
      {
        name: "Pink Soda",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377694_60679_20250405013246.jpg",
        desc: "Malfy Gin Rosa",
        price: 525.0,
      },
      {
        name: "Whiskey Sour",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377550_60679_20250405013542.jpg",
        desc: "Jim Beam",
        price: 555.0,
      },
      {
        name: "Lynchburg Lemonade",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377655_60679_20250405013629.jpg",
        desc: "",
        price: 575.0,
      },
      {
        name: "Old Fashioned",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377678_60679_20250405013718.jpg",
        desc: "Jim Beam, Angostura Bitter",
        price: 525.0,
      },
      {
        name: "Boulevardier",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377796_60679_20250405014015.jpg",
        desc: "Jim Beam, Martini Rosso, Campari",
        price: 575.0,
      },
      {
        name: "Coffee Boulevardier",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377823_60679_20250405014125.jpg",
        desc: "Jameson Cold Brew, Martini Rosso, Campari",
        price: 575.0,
      },
      {
        name: "Amaretto Sour",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377766_60679_20250405014235.jpg",
        desc: "",
        price: 525.0,
      },
      {
        name: "Aperol Spritz",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377551_60679_20250603020631.jpg",
        desc: "",
        price: 525.0,
      },
      {
        name: "Campari Spritz",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377731_60679_20240602104341.jpg",
        desc: "",
        price: 525.0,
      },
      {
        name: "Campari Tonic",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377689_60679_20240602104353.jpg",
        desc: "",
        price: 500.0,
      },
      {
        name: "White Russian",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377552_60679_20250405014340.jpg",
        desc: "Absolut, Kahlua",
        price: 525.0,
      },
      {
        name: "Black Russian",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377553_60679_20250405014443.jpg",
        desc: "Absolut, Kahlua",
        price: 525.0,
      },
      {
        name: "Cuba Libre",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377554_60679_20250405014527.jpg",
        desc: "Havana Club",
        price: 525.0,
      },
      {
        name: "Irish Car Bomb",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377555_60679_20250603020615.jpg",
        desc: "Jameson",
        price: 475.0,
      },
    ],
  },
  {
    category: "Kırmızı Şarap",
    items: [
      {
        name: "Gordias Kalecikkarası Cabernet Franc 2020",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5935233_60679_20240927022026.jpg",
        desc: "%55 Cabernet Franc, %45 Kalecikkarası kupajı. Burunda kakao, kırmızı meyve, pamuk şekeri aromatik yapısı ile..",
        price: {
          Şişe: 1200.0,
          Kadeh: 325.0,
        },
      },
      {
        name: "Gordias Syrah 2021",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377841_60679_20240602105130.jpg",
        desc: "Yarı Tatlı 50 Cl",
        price: 1400.0,
      },
      {
        name: "Vinolus Blend 2020",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5934548_60679_20240927013152.jpg",
        desc: "%73 Kalecikkarası, %27 Syrah kupajı. Yakut rengi, burunda kırmızı meyveler belirgin -frambuaz ve kiraz- damakta fıçı aromaları -vişne, frambuaz, erik, baharatlar, vanilya- zarif tanen yapısı ile dolgun bir şarap...",
        price: {
          Şişe: 1600.0,
          Kadeh: 430.0,
        },
      },
      {
        name: "Vinolus Kalecikkarası & Tempranillo 2023",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5934656_60679_20240927014412.jpg",
        desc: "%59 Kalecikkarası, %41 Tempranillo kupajı. Koyu yakut rengi, burunda olgun kırmızı meyveler -frambuaz, erik, kiraz- ve fıçıdan gelen aromaların eşlik ettiği, damakta ise burun ile uyumlu vişne, frambuaz ve baharatlardan oluşan zarif tanen yapısı ile dolgun bir şarap...",
        price: 2000.0,
      },
      {
        name: "Suvla Papazkarası 2023",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5844043_60679_20240905110217.jpg",
        desc: "",
        price: {
          Şişe: 1400.0,
          Kadeh: 380.0,
        },
      },
      {
        name: "Suvla Kumkale Merlot 2021",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5844044_60679_20240905110207.jpg",
        desc: "",
        price: 1300.0,
      },
    ],
  },
  {
    category: "Beyaz Şarap",
    items: [
      {
        name: "Gordias Sauvignon Blanc 2023",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377675_60679_20240602105249.jpg",
        desc: "",
        price: {
          Şişe: 1200.0,
          Kadeh: 325.0,
        },
      },
      {
        name: "Gordias Kalecikkarası Beyaz 2021",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377688_60679_20240602105336.jpg",
        desc: "",
        price: 1300.0,
      },
      {
        name: "Vinolus Chardonnay 2023",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5934670_60679_20240927014642.jpg",
        desc: "Burunda vanilya, beyaz çiçek, badem ve tereyağı aromaları ile meyveli yapıdadır. Özellikle şeftali ve kayısı baskındır. Tropikal meyve aromaları fıçı ile zarif ve iyi entegre olmuştur. Beyaz çiçek, ayva ve narenciye aromaları yanında geriden bal, hafif tereyağı ve kızarmış ekmek damakta hissedilir. Yağlı ve mineralli yapısı ve diri asitliği ile canlı, yoğun ve uzun bitişe sahiptir.",
        price: 2300.0,
      },
      {
        name: "Suvla Kumkale Narince Emir 2023",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5844048_60679_20240905110544.jpg",
        desc: "",
        price: {
          Şişe: 1300.0,
          Kadeh: 350.0,
        },
      },
      {
        name: "Mezzacorona Pinot Grigio 2023",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5857048_60679_20240927014850.jpg",
        desc: "",
        price: 1800.0,
      },
    ],
  },
  {
    category: "Roze Şarap",
    items: [
      {
        name: "Gordias Nana Kalecik Karası Roze 2022",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377525_60679_20240602105540.jpg",
        desc: "",
        price: {
          Şişe: 1200.0,
          Kadeh: 325.0,
        },
      },
      {
        name: "Suvla Blush Karasakız 2023",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5844051_60679_20240905110947.jpg",
        desc: "",
        price: {
          Şişe: 1800.0,
          Kadeh: 485.0,
        },
      },
      {
        name: "Suvla Rose Cabernet Karasakız 2023",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5844052_60679_20240905110956.jpg",
        desc: "",
        price: 1500.0,
      },
    ],
  },
  {
    category: "Köpüklü Şarap",
    items: [
      {
        name: "Vinolus Pet-Nat 2023",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5934677_60679_20240927015055.jpg",
        desc: "%30 Syrah, %70 Kalecikkarası kupajı. Şeker pembemsi rengi ile burunda yoğun çilek, frambuaz, karpuz gibi kırmızı meyvelerin öne çıktığı zengin bir aroma profiline sahiptir. Damakta ise burunla uyumlu ve orta-üst asiditesi ile ağzı sulandıran yarı köpüklü ve yarı tatlı bir şaraptır.",
        price: {
          Şişe: 1400.0,
          Kadeh: 380.0,
        },
      },
      {
        name: "Tallero",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377526_60679_20240614075950.jpg",
        desc: "Vino Frizzante Secco",
        price: {
          Şişe: 1200.0,
          Kadeh: 325.0,
        },
      },
      {
        name: "Cinzano Prosecco",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5390617_60679_20240614080002.jpg",
        desc: "",
        price: 3500.0,
      },
    ],
  },
  {
    category: "Shot",
    items: [
      {
        name: "Bumbu Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5434110_60679_20240608104452.jpg",
        desc: "",
        price: 375.0,
      },
      {
        name: "Jameson Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377379_60679_20240604074556.jpg",
        desc: "",
        price: 265.0,
      },
      {
        name: "Absolut Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377556_60679_20240604074631.jpg",
        desc: "",
        price: 220.0,
      },
      {
        name: "Beefeater Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377664_60679_20240604074737.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Malfy Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377764_60679_20240604074815.jpg",
        desc: "",
        price: 345.0,
      },
      {
        name: "Jägermeister Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377557_60679_20240604074846.jpg",
        desc: "",
        price: 220.0,
      },
      {
        name: "Jägermeister Manifest Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377836_60679_20240604074913.jpg",
        desc: "",
        price: 320.0,
      },
      {
        name: "Jägermeister Cold Brew Coffee Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377814_60679_20240604074952.jpg",
        desc: "",
        price: 235.0,
      },
      {
        name: "Jägermeister Orange Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/7515234_60679_20250630025435.jpg",
        desc: "",
        price: 220.0,
      },
      {
        name: "Olmeca Silver",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377558_60679_20240604075023.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Olmeca Dark Chocolate",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377559_60679_20240604075047.jpg",
        desc: "",
        price: 215.0,
      },
      {
        name: "Olmeca Altos",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377745_60679_20240604075203.jpg",
        desc: "",
        price: 310.0,
      },
      {
        name: "Casamigos Mezcal",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377791_60679_20240604075259.jpg",
        desc: "",
        price: 380.0,
      },
      {
        name: "Ojo De Tigre Joven Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377786_60679_20240604075357.jpg",
        desc: "",
        price: 490.0,
      },
      {
        name: "Ojo De Tigre Reposado Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377787_60679_20240604075428.jpg",
        desc: "",
        price: 570.0,
      },
      {
        name: "Del Maguey VIDA Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6105884_60679_20241031051913.jpg",
        desc: "",
        price: 620.0,
      },
      {
        name: "Shanky's Whip Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6105833_60679_20241031050546.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Fireball Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377806_60679_20240604075507.jpg",
        desc: "",
        price: 230.0,
      },
      {
        name: "Baileys Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377654_60679_20240604075559.jpg",
        desc: "",
        price: 160.0,
      },
      {
        name: "Havana Club Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377562_60679_20240604075652.jpg",
        desc: "",
        price: 265.0,
      },
      {
        name: "Smirnoff North Shot",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377563_60679_20240604075731.jpg",
        desc: "",
        price: 185.0,
      },
      {
        name: "Malfy Pink Rosa Shot",
        image:
          "https://addisonwines.com/cdn/shop/files/malfyginrosapinkgrapefruit_1_699x700.png?v=1733346916",
        desc: "",
        price: 345.0,
      },
    ],
  },
  {
    category: "Viski",
    items: [
      {
        name: "Chivas Regal 12",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377384_60679_20240604080209.jpg",
        desc: "Scotch",
        price: {
          Tek: 390.0,
          Duble: 545.0,
        },
      },
      {
        name: "Chivas Extra 13 Sherry Cask Selection",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377803_60679_20240604080240.jpg",
        desc: "Scotch",
        price: {
          Tek: 460.0,
          Duble: 645.0,
        },
      },
      {
        name: "Chivas Extra 13 Tequila Cask Selection",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377815_60679_20240604080314.jpg",
        desc: "Scotch",
        price: {
          Tek: 460.0,
          Duble: 645.0,
        },
      },
      {
        name: "Chivas Extra Smooth & Smoky",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6151264_60679_20241108041316.jpg",
        desc: "Scotch",
        price: {
          Tek: 410.0,
          Duble: 575.0,
        },
      },
      {
        name: "Chivas Regal XV",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377574_60679_20240604080350.jpg",
        desc: "Scotch",
        price: {
          Tek: 620.0,
          Duble: 870.0,
        },
      },
      {
        name: "Chivas Regal 18",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377575_60679_20240604080416.jpg",
        desc: "Scotch",
        price: {
          Tek: 855.0,
          Duble: 1200.0,
        },
      },
      {
        name: "Chivas Regal Mizunara",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377816_60679_20240604080445.jpg",
        desc: "Scotch",
        price: {
          Tek: 710.0,
          Duble: 995.0,
        },
      },
      {
        name: "Ballantine’s Finest",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377576_60679_20240608105422.jpg",
        desc: "Scotch",
        price: {
          Tek: 280.0,
          Duble: 390.0,
        },
      },
      {
        name: "Ballantine’s 7",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377386_60679_20240608105506.jpg",
        desc: "Scotch",
        price: {
          Tek: 300.0,
          Duble: 420.0,
        },
      },
      {
        name: "Ballantine’s 10",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377840_60679_20240608105610.jpg",
        desc: "Scotch",
        price: {
          Tek: 320.0,
          Duble: 450.0,
        },
      },
      {
        name: "Ballantine’s 17",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377817_60679_20240608105641.jpg",
        desc: "Scotch",
        price: {
          Tek: 725.0,
          Duble: 1015.0,
        },
      },
      {
        name: "Ballantine’s 21",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6659312_60679_20250206093443.jpg",
        desc: "Scotch",
        price: {
          Tek: 1280.0,
          Duble: 1790.0,
        },
      },
      {
        name: "The Deacon",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377798_60679_20240608105713.jpg",
        desc: "Scotch",
        price: {
          Tek: 465.0,
          Duble: 650.0,
        },
      },
      {
        name: "Dimple",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377577_60679_20240608105758.jpg",
        desc: "Scotch",
        price: {
          Tek: 285.0,
          Duble: 400.0,
        },
      },
      {
        name: "Johnnie Walker Red Label",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377578_60679_20240608105838.jpg",
        desc: "Scotch",
        price: {
          Tek: 255.0,
          Duble: 355.0,
        },
      },
      {
        name: "Johnnie Walker Black Ruby",
        image:
          "https://cdn.adisyo.com/mahrezphotos/7477233_60679_20250622011417.jpg",
        desc: "Scotch",
        price: {
          Tek: 375.0,
          Duble: 525.0,
        },
      },
      {
        name: "Johnnie Walker Black Label",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377579_60679_20240608105917.jpg",
        desc: "Scotch",
        price: {
          Tek: 340.0,
          Duble: 475.0,
        },
      },
      {
        name: "Johnnie Walker Double Black",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377580_60679_20240608105950.jpg",
        desc: "Scotch",
        price: {
          Tek: 400.0,
          Duble: 560.0,
        },
      },
      {
        name: "J&B Rare",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377581_60679_20240608110154.jpg",
        desc: "Scotch",
        price: {
          Tek: 240.0,
          Duble: 335.0,
        },
      },
      {
        name: "Monkey Shoulder",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377595_60679_20240608110304.jpg",
        desc: "Scotch",
        price: {
          Tek: 440.0,
          Duble: 615.0,
        },
      },
      {
        name: "Smokey Monkey",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377728_60679_20240608110358.jpg",
        desc: "Scotch",
        price: {
          Tek: 490.0,
          Duble: 685.0,
        },
      },
      {
        name: "Jameson Standard",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377582_60679_20240608110550.jpg",
        desc: "Irish",
        price: {
          Tek: 335.0,
          Duble: 470.0,
        },
      },
      {
        name: "Jameson Black Barrel",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377585_60679_20240608110628.jpg",
        desc: "Irish",
        price: {
          Tek: 435.0,
          Duble: 610.0,
        },
      },
      {
        name: "Jameson Stout Edition",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377586_60679_20240608110729.jpg",
        desc: "Irish",
        price: {
          Tek: 355.0,
          Duble: 500.0,
        },
      },
      {
        name: "Jameson IPA Edition",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377587_60679_20240608110810.jpg",
        desc: "Irish",
        price: {
          Tek: 355.0,
          Duble: 500.0,
        },
      },
      {
        name: "Jameson Cold Brew",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377789_60679_20240608111816.jpg",
        desc: "Irish & Coffee",
        price: {
          Tek: 300.0,
          Duble: 420.0,
        },
      },
      {
        name: "Tullamore D.E.W.",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377747_60679_20240608112902.jpg",
        desc: "Irish",
        price: {
          Tek: 325.0,
          Duble: 455.0,
        },
      },
      {
        name: "Jim Beam",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377385_60679_20240611011606.jpg",
        desc: "Burbon",
        price: {
          Tek: 335.0,
          Duble: 470.0,
        },
      },
      {
        name: "Bulleit Bourbon",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377588_60679_20240611011638.jpg",
        desc: "Burbon",
        price: {
          Tek: 485.0,
          Duble: 680.0,
        },
      },
      {
        name: "Aberlour 12",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377591_60679_20240611011716.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 655.0,
          Duble: 920.0,
        },
      },
      {
        name: "Aberlour 14",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377725_60679_20240611011802.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 890.0,
          Duble: 1245.0,
        },
      },
      {
        name: "Aberlour Casg Annamh",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377726_60679_20240611011858.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 1000.0,
          Duble: 1400.0,
        },
      },
      {
        name: "Aberlour A'bunadh",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377818_60679_20240611012001.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 1380.0,
          Duble: 1930.0,
        },
      },
      {
        name: "The Glenlivet 12",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377594_60679_20240611012031.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 580.0,
          Duble: 810.0,
        },
      },
      {
        name: "The Glenlivet Founder’s Reserve",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377744_60679_20240611012246.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 435.0,
          Duble: 610.0,
        },
      },
      {
        name: "Caperdonich 18",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377843_60679_20240611012529.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 2390.0,
          Duble: 3350.0,
        },
      },
      {
        name: "Glenfiddich 12",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377589_60679_20240611012724.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 670.0,
          Duble: 940.0,
        },
      },
      {
        name: "Glenfiddich 15",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377590_60679_20240611012826.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 1015.0,
          Duble: 1420.0,
        },
      },
      {
        name: "Glenfiddich 18",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6565513_60679_20250124015912.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 1660.0,
          Duble: 2325.0,
        },
      },
      {
        name: "Glenfarclas 12",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6861481_60679_20250314031819.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 840.0,
          Duble: 1175.0,
        },
      },
      {
        name: "Glenfarclas 15",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6861498_60679_20250314031830.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 1255.0,
          Duble: 1755.0,
        },
      },
      {
        name: "The Glendronach 12",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6785952_60679_20250301034711.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 830.0,
          Duble: 1160.0,
        },
      },
      {
        name: "The Macallan 12",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377593_60679_20240611012952.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 870.0,
          Duble: 1220.0,
        },
      },
      {
        name: "The Macallan 15",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377676_60679_20240611013133.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 1615.0,
          Duble: 2260.0,
        },
      },
      {
        name: "The Singleton 12",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377782_60679_20240611013205.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 380.0,
          Duble: 530.0,
        },
      },
      {
        name: "Talisker 8",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377722_60679_20240611013233.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 680.0,
          Duble: 950.0,
        },
      },
      {
        name: "Talisker 10",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377592_60679_20240611013303.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 600.0,
          Duble: 840.0,
        },
      },
      {
        name: "The Dalmore Cigar Malt Reserve",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377799_60679_20240611013353.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 1460.0,
          Duble: 2045.0,
        },
      },
      {
        name: "Lagavulin 8",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377700_60679_20240611013422.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 600.0,
          Duble: 840.0,
        },
      },
      {
        name: "Benriach 12",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6708716_60679_20250214033733.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 625.0,
          Duble: 875.0,
        },
      },
      {
        name: "Glenmorangie 10",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377774_60679_20240611013527.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 460.0,
          Duble: 645.0,
        },
      },
      {
        name: "Ardbeg 10",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377773_60679_20240611013609.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 610.0,
          Duble: 855.0,
        },
      },
      {
        name: "Auchentoshan 10",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377735_60679_20240611013646.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 440.0,
          Duble: 615.0,
        },
      },
      {
        name: "Connemara",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377723_60679_20240611013728.jpg",
        desc: "Single Malt (Scotch)",
        price: {
          Tek: 575.0,
          Duble: 805.0,
        },
      },
      {
        name: "J.P. Wiser’s 10",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377820_60679_20240611014116.jpg",
        desc: "Canadian",
        price: {
          Tek: 300.0,
          Duble: 420.0,
        },
      },
      {
        name: "Pike Creek 10",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377819_60679_20240611014153.jpg",
        desc: "Canadian",
        price: {
          Tek: 365.0,
          Duble: 510.0,
        },
      },
      {
        name: "Lot No. 40",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377804_60679_20240611014233.jpg",
        desc: "Rye (Canadian)",
        price: {
          Tek: 555.0,
          Duble: 775.0,
        },
      },
      {
        name: "Woodford Reserve Straight Bourbon",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6024826_60679_20241015022729.jpg",
        desc: "Kentucky Straight Bourbon",
        price: {
          Tek: 440.0,
          Duble: 615.0,
        },
      },
      {
        name: "Woodford Reserve Malt",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6024884_60679_20241015022805.jpg",
        desc: "Kentucky Straight Malt",
        price: {
          Tek: 480.0,
          Duble: 670.0,
        },
      },
      {
        name: "Woodford Reserve Rye",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6024903_60679_20241015022827.jpg",
        desc: "Kentucky Straight Rye",
        price: {
          Tek: 480.0,
          Duble: 670.0,
        },
      },
      {
        name: "Woodford Reserve Wheat",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6024928_60679_20241015022853.jpg",
        desc: "Kentucky Straight Wheat",
        price: {
          Tek: 480.0,
          Duble: 670.0,
        },
      },
      {
        name: "Jack Daniel's",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377596_60679_20240611014330.jpg",
        desc: "Tennessee",
        price: {
          Tek: 370.0,
          Duble: 520.0,
        },
      },
      {
        name: "Gentleman Jack",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377681_60679_20240611014359.jpg",
        desc: "Tennessee",
        price: {
          Tek: 440.0,
          Duble: 615.0,
        },
      },
      {
        name: "Jack Daniel's Single Barrel Select",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377682_60679_20240611014422.jpg",
        desc: "Tennessee",
        price: {
          Tek: 745.0,
          Duble: 1045.0,
        },
      },
      {
        name: "Jack Daniel's Bonded Rye",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5965042_60679_20241003035810.jpg",
        desc: "Tennessee",
        price: {
          Tek: 670.0,
          Duble: 940.0,
        },
      },
      {
        name: "Jack Daniel's Honey",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377597_60679_20240611014635.jpg",
        desc: "Tennessee",
        price: {
          Tek: 385.0,
          Duble: 540.0,
        },
      },
      {
        name: "Jack Daniel's Apple",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377598_60679_20240611014455.jpg",
        desc: "Tennessee",
        price: {
          Tek: 385.0,
          Duble: 540.0,
        },
      },
      {
        name: "Jack Daniel's Fire",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377599_60679_20240611014540.jpg",
        desc: "Tennessee",
        price: {
          Tek: 385.0,
          Duble: 540.0,
        },
      },
    ],
  },
  {
    category: "Cin",
    items: [
      {
        name: "Beefeater",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377569_60679_20240611014722.jpg",
        desc: "",
        price: {
          Tek: 300.0,
          Duble: 420.0,
        },
      },
      {
        name: "Beefeater Pink",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377570_60679_20240611014753.jpg",
        desc: "",
        price: {
          Tek: 300.0,
          Duble: 420.0,
        },
      },
      {
        name: "Beefeater Blood Orange",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6637893_60679_20250203014009.jpg",
        desc: "",
        price: {
          Tek: 300.0,
          Duble: 420.0,
        },
      },
      {
        name: "Malfy",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377383_60679_20240611014819.jpg",
        desc: "",
        price: {
          Tek: 435.0,
          Duble: 610.0,
        },
      },
      {
        name: "Malfy Gin Rosa",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377670_60679_20240611014846.jpg",
        desc: "",
        price: {
          Tek: 435.0,
          Duble: 610.0,
        },
      },
      {
        name: "Malfy Con Limone",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377671_60679_20240611014912.jpg",
        desc: "",
        price: {
          Tek: 435.0,
          Duble: 610.0,
        },
      },
      {
        name: "Monkey 47 Sloe Gin",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377778_60679_20240611015032.jpg",
        desc: "",
        price: {
          Tek: 480.0,
          Duble: 675.0,
        },
      },
      {
        name: "Tanqueray",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377571_60679_20240611015243.jpg",
        desc: "",
        price: {
          Tek: 325.0,
          Duble: 455.0,
        },
      },
      {
        name: "Tanqueray Flor De Sevilla",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377756_60679_20240611015302.jpg",
        desc: "",
        price: {
          Tek: 345.0,
          Duble: 485.0,
        },
      },
      {
        name: "Tanqueray Nº Ten",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377757_60679_20240611015356.jpg",
        desc: "",
        price: {
          Tek: 460.0,
          Duble: 645.0,
        },
      },
      {
        name: "Hendrick's",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377572_60679_20240611015522.jpg",
        desc: "",
        price: {
          Tek: 610.0,
          Duble: 855.0,
        },
      },
      {
        name: "Hendrick's Orbium",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377831_60679_20240611015613.jpg",
        desc: "",
        price: {
          Tek: 700.0,
          Duble: 980.0,
        },
      },
      {
        name: "Hendrick's Grand Cabaret",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6092915_60679_20241029104212.jpg",
        desc: "",
        price: {
          Tek: 700.0,
          Duble: 980.0,
        },
      },
      {
        name: "Bulldog",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6105826_60679_20241031050338.jpg",
        desc: "",
        price: {
          Tek: 440.0,
          Duble: 615.0,
        },
      },
      {
        name: "Roku",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377573_60679_20240611015727.jpg",
        desc: "",
        price: {
          Tek: 515.0,
          Duble: 720.0,
        },
      },
      {
        name: "Mosaik Anatolian Gin",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377812_60679_20240611015823.jpg",
        desc: "",
        price: {
          Tek: 410.0,
          Duble: 575.0,
        },
      },
      {
        name: "Bombay Sapphire",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377769_60679_20240611015751.jpg",
        desc: "",
        price: {
          Tek: 360.0,
          Duble: 505.0,
        },
      },
    ],
  },
  {
    category: "Votka",
    items: [
      {
        name: "Absolut",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377651_60679_20240611020107.jpg",
        desc: "",
        price: {
          Tek: 280.0,
          Duble: 390.0,
        },
      },
      {
        name: "Absolut Red Bull",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377653_60679_20240611020116.jpg",
        desc: "",
        price: 380.0,
      },
      {
        name: "Absolut Tonic",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377666_60679_20240611020155.jpg",
        desc: "",
        price: 380.0,
      },
      {
        name: "Absolut Soda",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377667_60679_20240611020203.jpg",
        desc: "",
        price: 380.0,
      },
      {
        name: "Absolut Raspberri",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377565_60679_20240611020317.jpg",
        desc: "",
        price: {
          Tek: 280.0,
          Duble: 390.0,
        },
      },
      {
        name: "Absolut Mandrin",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377380_60679_20240611020324.jpg",
        desc: "",
        price: {
          Tek: 280.0,
          Duble: 390.0,
        },
      },
      {
        name: "Absolut Lime",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377566_60679_20240611020333.jpg",
        desc: "",
        price: {
          Tek: 280.0,
          Duble: 390.0,
        },
      },
      {
        name: "Absolut Vanilia",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377381_60679_20240611020342.jpg",
        desc: "",
        price: {
          Tek: 280.0,
          Duble: 390.0,
        },
      },
      {
        name: "Absolut ELYX",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377568_60679_20240611020715.jpg",
        desc: "",
        price: {
          Tek: 545.0,
          Duble: 765.0,
        },
      },
      {
        name: "Ketel One",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377721_60679_20240611020729.jpg",
        desc: "",
        price: {
          Tek: 460.0,
          Duble: 645.0,
        },
      },
      {
        name: "Beluga",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377564_60679_20240611020744.jpg",
        desc: "",
        price: {
          Tek: 680.0,
          Duble: 950.0,
        },
      },
    ],
  },
  {
    category: "Rom",
    items: [
      {
        name: "Havana Club",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377600_60679_20240611021117.jpg",
        desc: "",
        price: {
          Tek: 335.0,
          Duble: 470.0,
        },
      },
      {
        name: "Havana Club 7",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377601_60679_20240611021124.jpg",
        desc: "",
        price: {
          Tek: 445.0,
          Duble: 625.0,
        },
      },
      {
        name: "Havana Club Selección",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377602_60679_20240611021131.jpg",
        desc: "",
        price: {
          Tek: 720.0,
          Duble: 1010.0,
        },
      },
      {
        name: "Bumbu",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377842_60679_20240611021140.jpg",
        desc: "",
        price: {
          Tek: 465.0,
          Duble: 650.0,
        },
      },
      {
        name: "Bumbu XO",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6659299_60679_20250206093231.jpg",
        desc: "",
        price: {
          Tek: 545.0,
          Duble: 765.0,
        },
      },
      {
        name: "Zacapa No. 23",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377829_60679_20240611021152.jpg",
        desc: "",
        price: {
          Tek: 585.0,
          Duble: 820.0,
        },
      },
    ],
  },
  {
    category: "Konyak",
    items: [
      {
        name: "Martell VS",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377605_60679_20240611021531.jpg",
        desc: "",
        price: {
          Tek: 610.0,
          Duble: 855.0,
        },
      },
      {
        name: "Martell VSOP",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377606_60679_20240611021548.jpg",
        desc: "",
        price: {
          Tek: 810.0,
          Duble: 1135.0,
        },
      },
    ],
  },
  {
    category: "Likör",
    items: [
      {
        name: "Baileys Irish Cream",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377607_60679_20240611021828.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Kahlúa",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377713_60679_20240611021847.jpg",
        desc: "",
        price: 245.0,
      },
      {
        name: "Malibu",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377609_60679_20240611021854.jpg",
        desc: "",
        price: 245.0,
      },
      {
        name: "Disaronno",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377765_60679_20240611022154.jpg",
        desc: "",
        price: 360.0,
      },
      {
        name: "Shanky's Whip",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6105841_60679_20241031050610.jpg",
        desc: "",
        price: {
          Tek: 300.0,
          Duble: 420.0,
        },
      },
      {
        name: "Fireball",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377805_60679_20240611051736.jpg",
        desc: "",
        price: {
          Tek: 290.0,
          Duble: 400.0,
        },
      },
      {
        name: "Jägermeister",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377612_60679_20240611051859.jpg",
        desc: "",
        price: 330.0,
      },
      {
        name: "Jäger Red Bull",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377613_60679_20240611051907.jpg",
        desc: "",
        price: 370.0,
      },
      {
        name: "Jägermeister Manifest",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377838_60679_20240611051922.jpg",
        desc: "",
        price: {
          Tek: 400.0,
          Duble: 560.0,
        },
      },
      {
        name: "Jägermeister Cold Brew Coffee",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377813_60679_20240611051935.jpg",
        desc: "",
        price: 350.0,
      },
      {
        name: "Jägermeister Orange",
        image:
          "https://cdn.adisyo.com/mahrezphotos/7515240_60679_20250630025416.jpg",
        desc: "",
        price: 330.0,
      },
      {
        name: "St-Germain",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377770_60679_20240611052018.jpg",
        desc: "",
        price: 535.0,
      },
    ],
  },
  {
    category: "Mezcal",
    items: [
      {
        name: "Ojo De Tigre Joven",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377784_60679_20240611052144.jpg",
        desc: "",
        price: {
          Tek: 610.0,
          Duble: 855.0,
        },
      },
      {
        name: "Ojo De Tigre Reposado",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377785_60679_20240611052153.jpg",
        desc: "",
        price: {
          Tek: 710.0,
          Duble: 995.0,
        },
      },
      {
        name: "Del Maguey VIDA",
        image:
          "https://cdn.adisyo.com/mahrezphotos/6105909_60679_20241031051929.jpg",
        desc: "",
        price: {
          Tek: 780.0,
          Duble: 1090.0,
        },
      },
      {
        name: "Casamigos",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377790_60679_20240611052202.jpg",
        desc: "",
        price: {
          Tek: 475.0,
          Duble: 665.0,
        },
      },
    ],
  },
  {
    category: "Sıcak İçecek",
    items: [
      {
        name: "Filtre Kahve",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377615_60679_20240614082812.jpg",
        desc: "",
        price: 180.0,
      },
      {
        name: "Espresso",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377738_60679_20240614083631.jpg",
        desc: "",
        price: 190.0,
      },
      {
        name: "Americano",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377746_60679_20240614083735.jpg",
        desc: "",
        price: 230.0,
      },
      {
        name: "Latte",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5415684_60679_20240614082941.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Irish Coffee",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377616_60679_20241108025028.jpg",
        desc: "",
        price: 300.0,
      },
      {
        name: "Baileys Coffee",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377617_60679_20250718035156.jpg",
        desc: "",
        price: 290.0,
      },
    ],
  },
  {
    category: "Soğuk İçecek",
    items: [
      {
        name: "Coca-Cola",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377620_60679_20240611052414.jpg",
        desc: "",
        price: 120.0,
      },
      {
        name: "Sprite",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377622_60679_20240611052451.jpg",
        desc: "",
        price: 120.0,
      },
      {
        name: "Fanta",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377623_60679_20240611052500.jpg",
        desc: "",
        price: 120.0,
      },
      {
        name: "FuseTea Şeftali",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377624_60679_20240611052509.jpg",
        desc: "",
        price: 120.0,
      },
      {
        name: "FuseTea Limon",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377625_60679_20240611052518.jpg",
        desc: "",
        price: 120.0,
      },
      {
        name: "Red Bull",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377626_60679_20240611052648.jpg",
        desc: "",
        price: 155.0,
      },
      {
        name: "Red Bull Sugarfree",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377690_60679_20240611052659.jpg",
        desc: "",
        price: 155.0,
      },
      {
        name: "Soda",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377388_60679_20240611052735.jpg",
        desc: "",
        price: 95.0,
      },
      {
        name: "Soda Limon",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377665_60679_20240611052743.jpg",
        desc: "",
        price: 120.0,
      },
      {
        name: "Churchill",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377662_60679_20240611052754.jpg",
        desc: "",
        price: 130.0,
      },
      {
        name: "Iced Americano",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5401574_60679_20240614082227.jpg",
        desc: "",
        price: 230.0,
      },
      {
        name: "Iced Latte",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5415688_60679_20240614082518.jpg",
        desc: "",
        price: 240.0,
      },
      {
        name: "Cold Brew",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5401568_60679_20240614083114.jpg",
        desc: "",
        price: 250.0,
      },
      {
        name: "Alkolsüz Kokteyl",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377631_60679_20240614084608.jpg",
        desc: "",
        price: 265.0,
      },
      {
        name: "Su",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377630_60679_20240611052852.jpg",
        desc: "",
        price: 45.0,
      },
    ],
  },
  {
    category: "Çerez",
    items: [
      {
        name: "Tuzlu Fıstık",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377632_60679_20240614081618.jpg",
        desc: "",
        price: 75.0,
      },
      {
        name: "Karışık Kuruyemiş",
        image:
          "https://cdn.adisyo.com/mahrezphotos/5377633_60679_20240614081604.jpg",
        desc: "",
        price: 140.0,
      },
    ],
  },
]

menuItems = menuItems.map((mi) => {
  return { ...mi, items: mi.items.map((i) => ({ ...i, id: uuid() })) }
})

export default menuItems
