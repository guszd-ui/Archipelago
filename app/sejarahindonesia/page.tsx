"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

type Section = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  body: string;
};

const pembahasan: Section[] = [
  {
    title: "KENAPA INDONESIA DIJAJAH?",
    imageSrc: "/images/sejarah/bumbu.png",
    imageAlt: "Rempah-rempah Nusantara",
    body:
      "Karena di meja makan bangsawan Eropa rempah-rempah seperti cengkih, pala, dan lada bukan sekadar bumbu melainkan penanda gengsi, pengawet makanan, serta “obat” versi zamannya, maka dari pulau-pulau jauh yang hanya menumbuhkan rempah tertentu dalam jumlah terbatas berangkatlah kapal-kapal yang dibayar mahal untuk menembus badai dan persaingan, pedagang mengikat perjanjian, membangun benteng, dan memonopoli pasokan agar selisih harga dari kebun ke istana tetap gemuk, sementara di hilir para juru masak, tabib, dan kaum berada menuntut lebih banyak rasa dan wangi, sehingga sebuah jaringan dagang raksasa pun tumbuh—membentangkan rute, menstandarkan takaran, dan menjadikan rempah komoditas primadona—hingga pada akhirnya, ketika bibit tersebar ke koloni lain, teknologi pelayaran dan informasi memangkas biaya, dan selera pasar bergeser ke gula, kopi, dan teh, “keajaiban” kelangkaannya pudar, namun pelajarannya awet: siapa menguasai sumber langka dan gerbang distribusi, dialah yang memegang harga.",
  },
  {
    title: "KEDATANGAN BANGSA EROPA",
    imageSrc: "/images/sejarah/kedatanganeropa.png",
    imageAlt: "Kedatangan bangsa Eropa ke Nusantara",
    body:
      "Pada abad ke-16, Portugis menjadi pelopor dengan merebut Malaka pada 1511 dan mencapai pusat rempah di Maluku setahun-dua tahun sesudahnya, membuka jalur dagang langsung ke sumber cengkih dan pala; tak lama kemudian Spanyol masuk lewat Tidore (1521), meski rivalitas kedua kerajaan Iberia dibatasi oleh perjanjian internasional. Memasuki abad ke-17, Inggris hadir melalui English East India Company (1600) dan Belanda melalui VOC (1602), dua kongsi dagang “bersenjata” yang memadukan modal, armada, dan pasukan. VOC lalu mengonsolidasikan jaringan benteng dan pelabuhan, mendirikan Batavia (1619), merebut pos-pos strategis di Ambon dan Banda, serta menegakkan monopoli rempah melalui perjanjian dagang yang mengikat dan—tak jarang—kekerasan. Setelah VOC dibubarkan (1799), kekuasaan beralih ke administrasi kolonial Hindia Belanda, sementara Inggris sempat memerintah Jawa (1811–1816). Semua ini berlangsung di tengah politik lokal Nusantara yang terfragmentasi, sehingga strategi devide et impera dan kontrol atas produksi serta distribusi rempah menjadikan pengaruh Eropa mengakar hingga berabad-abad berikutnya.",
  },
  {
    title: "SISTEM TANAM PAKSA",
    imageSrc: "/images/sejarah/perbudakan.png",
    imageAlt: "Sistem Tanam Paksa (Cultuurstelsel)",
    body:
      "Pada dekade 1830 – 1870, pemerintah kolonial Belanda menerapkan Cultuurstelsel terutama di Jawa: petani diwajibkan menyerahkan sekitar seperlima lahannya (atau jam kerjanya) untuk menanam komoditas ekspor seperti kopi, tebu, nila, dan teh; hasilnya disetor kepada pemerintah dengan harga yang ditentukan, sementara aparat lokal menekan pemenuhan kuota tanpa memedulikan gagal panen. Beban ini, ditambah pungutan dan kerja paksa (dwangarbeid), menggerus lahan pangan, mendorong utang dan kelaparan di sejumlah wilayah, serta menjerumuskan banyak keluarga ke kemiskinan—sementara keuntungan besar dari setoran komoditas mengalir ke kas Belanda (batig slot). Sistem ini perlahan dihentikan pada paruh akhir abad ke-19 seiring kritik kemanusiaan dan perubahan kebijakan ekonomi, namun jejak ketimpangannya lama membekas pada masyarakat pedesaan.",
  },
  {
    title: "Tonggak Awal Pergerakan Nasional (1908—1928)",
    imageSrc: "/images/sejarah/tokohpenting.png",
    imageAlt: "Organisasi pergerakan nasional Indonesia",
    body:
      "Dimulai dari Budi Utomo (1908) yang lahir di lingkungan pelajar STOVIA dengan penekanan pada pendidikan dan kebudayaan, arus organisasi modern cepat melebar: Sarekat Islam (1912) di bawah H.O.S. Tjokroaminoto menghimpun massa pedagang dan buruh dari isu ekonomi menuju agenda politik; Indische Partij (1912) lewat Douwes Dekker, Tjipto, dan Ki Hadjar menyuarakan nasionalisme tegas “Indie untuk Indier”; Muhammadiyah (1912) memperbarui pendidikan dan kerja sosial, sementara Taman Siswa (1922) menegaskan pendidikan kerakyatan “Tut Wuri Handayani”; Nahdlatul Ulama (1926) menguatkan jaringan keagamaan dan sosial pesantren; di luar negeri, Perhimpunan Indonesia (rename 1925) menggerakkan diplomasi dan propaganda kemerdekaan; di dalam negeri, PNI (1927) di bawah Soekarno memusatkan energi pada nonkooperasi dan konsolidasi massa; jejaring kepemudaan dipererat sejak Kongres Pemuda I (1926) dan berpuncak pada Sumpah Pemuda (28 Oktober 1928)—momen krusial ketika para pemuda mengikrarkan satu tanah air, satu bangsa, dan satu bahasa Indonesia, sambil mengangkat Merah Putih dan memperdengarkan “Indonesia Raya”, meneguhkan identitas kebangsaan serta arah perjuangan menuju kemerdekaan.",
  },
  {
    title: "Pendudukan Jepang (1942—1945): Babak Baru Menuju Kemerdekaan",
    imageSrc: "/images/sejarah/kedatanganjepang.png",
    imageAlt: "Pendudukan Jepang di Indonesia",
    body:
      "Jepang datang dengan propaganda “pembebas Asia” (saudara tua) dan pada awalnya disambut sebagian kalangan setelah tumbangnya Hindia Belanda, tetapi segera berubah menjadi kekuasaan militer yang keras: ekonomi diarahkan total untuk perang (beras, karet, minyak disita; penjatahan ketat), kebebasan sipil ditekan, dan jutaan orang dipaksa kerja paksa sebagai romusha—membangun rel, lapangan udara, dan benteng dalam kondisi yang sangat buruk, banyak yang tak pernah kembali. Di sisi lain, demi mobilisasi massa Jepang membentuk dan menggilir organisasi seperti PUTERA lalu Jawa Hokokai, merekrut pemuda ke Heiho dan membentuk PETA (1943); langkah-langkah ini tanpa sengaja melatih disiplin, kepemimpinan, dan jaringan kader yang kelak menjadi tulang punggung perjuangan. Menjelang akhir perang, Jepang membentuk BPUPKI (Mei 1945) dan PPKI (Agustus 1945) sebagai alat legitimasi, namun forum-forum ini justru dimanfaatkan para pemimpin Indonesia untuk merumuskan dasar negara dan perangkat awal kenegaraan. Ketika kekalahan Jepang menciptakan kekosongan kekuasaan pada Agustus 1945, pengalaman organisasi, militansi pemuda, dan kesiapan politik yang tumbuh selama pendudukan menjadi modal krusial yang mengantar pada Proklamasi 17 Agustus 1945.",
  },
  {
    title: "Menjelang Proklamasi 1945",
    imageSrc: "/images/sejarah/hirosima.png",
    imageAlt: "Menjelang Proklamasi: Hiroshima, Nagasaki, Rengasdengklok",
    body:
      "Pengeboman atom di Hiroshima (6 Agustus 1945) dan Nagasaki (9 Agustus 1945) mengguncang poros perang dan memaksa Jepang menerima syarat penyerahan Sekutu pada 15 Agustus 1945; di Jakarta, golongan muda segera mendesak agar kemerdekaan diproklamasikan tanpa menunggu mekanisme PPKI, sehingga pada 16 Agustus dini hari Soekarno dan Hatta “diamankan” ke Rengasdengklok untuk menjauhkan mereka dari tekanan/etiket birokrasi Jepang sekaligus memastikan deklarasi dilakukan atas nama bangsa sendiri. Setelah negosiasi yang dimediasi Achmad Soebardjo, keduanya kembali ke Jakarta pada malam yang sama; naskah proklamasi lalu dirumuskan di rumah Laksamana Tadashi Maeda (Jln. Imam Bonjol No. 1) oleh Soekarno, Hatta, dan Soebardjo, kemudian diketik oleh Sayuti Melik dengan sejumlah penyesuaian redaksi (antara lain menjadi “atas nama bangsa Indonesia”). Esok harinya, 17 Agustus 1945 pukul sekitar 10.00, proklamasi dibacakan di Pegangsaan Timur 56—bendera Merah Putih yang dijahit Fatmawati dikibarkan, dan berita kemerdekaan disebarluaskan lewat radio serta selebaran; momen ini menandai lahirnya Republik Indonesia sekaligus membuka babak revolusi mempertahankan kemerdekaan di seluruh penjuru Nusantara.",
  },
  {
    title: "Pembacaan Teks Proklamasi",
    imageSrc: "/images/sejarah/proklamasi.png",
    imageAlt: "Pembacaan Proklamasi 17 Agustus 1945",
    body:
      "Pada hari Jumat, 17 Agustus 1945, pukul 10.00, di halaman kediaman Soekarno di Jalan Pegangsaan Timur No. 56 Jakarta, Soekarno—didampingi Mohammad Hatta—membacakan naskah Proklamasi kemerdekaan Indonesia (hasil ketikan Sayuti Melik) dalam sebuah upacara yang sederhana namun sarat makna; usai pembacaan, bendera Merah Putih karya jahitan Fatmawati dikibarkan—dengan pengibaran dipimpin Latief Hendraningrat bersama Suhud—diiringi lagu “Indonesia Raya” yang dinyanyikan hadirin, dan dari momen singkat itu berita kemerdekaan disebarluaskan lewat radio serta selebaran ke berbagai kota, memantik pengibaran Merah Putih dan pengambilalihan pusat-pusat kekuasaan di daerah sebagai awal lahirnya Republik Indonesia.",
  },
  {
    title: "TOKOH - TOKOH",
    imageSrc: "/images/sejarah/tokoh.png",
    imageAlt: "Tokoh-tokoh kemerdekaan Indonesia",
    body:
      "Jenderal Sudirman (1916–1950) adalah mantan guru Muhammadiyah yang menjadi Panglima Besar TNI pada usia sangat muda; ia memimpin perang gerilya 1948–1949 meski sakit berat, menjaga eksistensi Republik. Fatmawati (1923–1980) adalah Ibu Negara pertama sekaligus penjahit Sang Saka Merah Putih yang dikibarkan pada 17 Agustus 1945, aktif dalam kegiatan sosial-kemanusiaan. Soekarno (1901–1970) adalah Proklamator dan Presiden pertama RI, perumus Pancasila, pendiri PNI, orator ulung, pernah diasingkan Belanda, dan penggerak Konferensi Asia–Afrika 1955. Mohammad Hatta (1902–1980) adalah Proklamator dan Wakil Presiden pertama, ekonom yang menekankan demokrasi politik dan ekonomi kerakyatan; tokoh Perhimpunan Indonesia yang pernah diasingkan, dikenal sebagai Bapak Koperasi Indonesia. Keempatnya mewakili dimensi militer, simbolik, politik, dan gagasan yang membentuk fondasi negara.",
  },
];

function truncateWords(text: string, maxWords = 55) {
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "…";
}

export default function SejarahIndonesia() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <main className="w-full min-h-screen bg-white px-4 md:px-10 scroll-smooth overflow-x-hidden">
      <motion.h1
        className="text-center font-bold text-3xl md:text-4xl text-red-700 py-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        SEJARAH INDONESIA
      </motion.h1>
      <motion.div
        className="relative mx-auto w-full max-w-6xl h-[min(60vh,560px)] sm:h-[min(68vh,620px)] overflow-hidden rounded-xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/images/sejarah/2orang.png"
          alt="Ilustrasi dua orang pejuang"
          fill
          sizes="(min-width: 768px) 80vw, 95vw"
          className="z-10 object-contain object-bottom pointer-events-none"
          priority
        />
        <Image
          src="/images/sejarah/bebatuan.png"
          alt="Bebatuan di bagian bawah latar"
          fill
          sizes="(min-width: 768px) 80vw, 95vw"
          className="z-20 object-contain object-bottom pointer-events-none"
        />
      </motion.div>
      <div className="mx-auto w-full max-w-6xl">
        {pembahasan.map((item, idx) => {
          const isOpen = !!expanded[idx];
          const text = isOpen ? item.body : truncateWords(item.body);

          return (
            <motion.section
              key={idx}
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-red-700 rounded-t-xl px-4 py-3">
                <h2 className="text-white text-center text-xl md:text-2xl font-bold">
                  {item.title}
                </h2>
              </div>
              <div className="bg-white rounded-b-xl shadow-2xl outline-1 outline-red-600 p-4 md:p-6">
                <div className="w-full justify-self-center mb-5">
                  <div className="relative w-full max-w-2xl mx-auto h-[min(40vh,380px)] md:h-[min(48vh,480px)] overflow-hidden rounded-lg">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 60vw, 90vw"
                      className="object-contain hover:scale-[1.02] transition-transform duration-300 will-change-transform"
                    />
                  </div>
                </div>

                <div>
                  <p
                    className="text-black leading-relaxed md:leading-7 text-sm md:text-base"
                    style={{ textAlign: "justify" }}
                  >
                    {text}
                  </p>

                  <div className="mt-3 flex justify-center">
                    <button
                      onClick={() =>
                        setExpanded((s) => ({ ...s, [idx]: !s[idx] }))
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-700 text-white font-medium hover:opacity-95 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                      aria-expanded={isOpen}
                      aria-controls={`desc-${idx}`}
                    >
                      {isOpen ? "Tutup teks" : "Baca selengkapnya"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      <div className="h-10" />
    </main>
  );
}
