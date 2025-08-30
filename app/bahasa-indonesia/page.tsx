"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    src: "/images/bahasaindonesia/sumpahpemuda.jpg",
    alt: "Naskah Sumpah Pemuda",
    caption: "Naskah otentik Kongres Pemuda Indonesia Kedua (Sumpah Pemuda)."
  },
  {
    src: "/images/bahasaindonesia/pesertakongres.png",
    alt: "Peserta Kongres Pemuda II",
    caption: "Para peserta Kongres Pemuda II yang menjadi tonggak sejarah bahasa."
  },
];

export default function BahasaIndonesia() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef < HTMLDivElement | null > (null);
  const [maxHeight, setMaxHeight] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const COLLAPSED_HEIGHT = 240;

  const recalcHeight = () => {
    if (contentRef.current) setMaxHeight(contentRef.current.scrollHeight);
  };

  useEffect(() => {
    recalcHeight();
    window.addEventListener("resize", recalcHeight);
    return () => window.removeEventListener("resize", recalcHeight);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <motion.div
        layout
        className="flex flex-col md:flex-row md:flex-nowrap items-start justify-start md:justify-between gap-6 md:gap-10 p-6 bg-cover bg-center bg-[url(/images/bahasaindonesia/bgtokoh.png)] w-full px-4 md:px-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          layout
          className="bg-red-600 shadow-md rounded-md p-4 w-full md:w-auto md:flex-[1_1_auto] md:min-w-0 md:max-w-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            SEJARAH BAHASA INDONESIA
          </motion.h1>

          <motion.div
            layout
            className="bg-white text-black p-4 rounded-sm relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              id="konten-bahasa"
              ref={contentRef}
              animate={{ maxHeight: expanded ? maxHeight : COLLAPSED_HEIGHT }}
              initial={false}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: "hidden" }}
              layout
            >
              <div className="prose max-w-none">
                <p>
                  Bahasa Indonesia, yang merupakan bahasa nasional di Indonesia, memiliki sejarah yang menarik. Bahasa ini lahir pada tanggal 28 Oktober 1928, ketika pemuda-pemuda dari berbagai wilayah di Indonesia berkumpul dalam Kerapatan Pemuda dan mengucapkan Sumpah Pemuda.
                </p>
                <p>
                  Sumpah ini menyatakan tekad untuk memiliki satu tanah air, yaitu Indonesia, menjadi satu bangsa, yaitu bangsa Indonesia, dan mengangkat bahasa Indonesia sebagai bahasa persatuan. Pada tahun 1945, melalui Undang-Undang Dasar Negara Republik Indonesia, bahasa Indonesia secara resmi diakui sebagai bahasa negara. Sejarah bahasa Indonesia tidak terlepas dari bahasa Melayu, yang telah digunakan di wilayah Asia Tenggara sejak abad ke-7. Bahasa Melayu menjadi bahasa kebudayaan dan bahasa perhubungan antar suku tidak hanya di Nusantara, namun juga menyebar ke asia tenggara.
                </p>
                <p>
                  Dengan tersebarnya agama Islam, bahasa Melayu semakin berkembang dan menyebar ke seluruh wilayah Nusantara. Bahasa Melayu juga mengalami pengaruh dari berbagai budaya daerah dan menyerap kosakata dari bahasa-bahasa lain seperti Sanskerta, Persia, Arab, dan Eropa. Bahasa ini juga memiliki variasi dan dialek yang berbeda. Perkembangan bahasa Melayu di wilayah Nusantara memiliki peran penting dalam memperkuat persaudaraan dan persatuan bangsa Indonesia. Pada tanggal 28 Oktober 1928, pemuda-pemuda Indonesia yang tergabung dalam perkumpulan pergerakan secara sadar memilih bahasa Melayu sebagai bahasa Indonesia, sebagai bahasa persatuan bagi seluruh bangsa Indonesia.
                </p>
                <p>
                  Kemerdekaan Republik Indonesia pada tanggal 17 Agustus 1945 memperkuat kedudukan bahasa Indonesia sebagai bahasa negara. Sejak itu, bahasa Indonesia terus berkembang pesat. Kegiatan politik, perdagangan, persuratkabaran, dan majalah berperan penting dalam memodernisasi bahasa Indonesia. Saat ini, bahasa Indonesia digunakan oleh berbagai lapisan masyarakat di seluruh Indonesia. Namun, kita juga tetap melestarikan bahasa daerah sebagai bagian dari kekayaan budaya Nusantara, serta tetap belajar dan menguasai bahasa asing.
                </p>
                <p>
                  Sejarah singkat ini menggambarkan perjalanan bahasa Indonesia yang kini menjadi bahasa nasional yang menyatukan seluruh bangsa Indonesia. Kita semua diharapkan untuk menghormati dan menggunakan bahasa Indonesia, serta menjaga keberagaman bahasa daerah dan tetap mempelajari bahasa-bahasa asing.
                </p>
              </div>
            </motion.div>

            <AnimatePresence initial={false}>
              {!expanded && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-12 h-24 bg-gradient-to-t from-white to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:underline focus:outline-none"
              aria-controls="konten-bahasa"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {expanded ? "Tutup" : "Baca selengkapnya"}
              <motion.span
                className="inline-block"
                aria-hidden="true"
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                ▾
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          layout
          className="w-full md:w-[26rem] md:flex-none md:self-start order-first md:order-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full shadow-xl rounded-lg">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg relative">
              <AnimatePresence initial={false}>
                  <motion.div
                      key={currentSlide}
                      className="absolute inset-0"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                      <Image
                          src={carouselImages[currentSlide].src}
                          alt={carouselImages[currentSlide].alt}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                      />
                  </motion.div>
              </AnimatePresence>
            </div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-1 bg-white/50 rounded-full hover:bg-white/80 transition"
              aria-label="Gambar Sebelumnya"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-1 bg-white/50 rounded-full hover:bg-white/80 transition"
              aria-label="Gambar Berikutnya"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
            
            {/* Indikator Titik */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
                  aria-label={`Pindah ke gambar ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Caption Gambar */}
          <div className="mt-4 text-center text-sm text-gray-800 px-4">
            <AnimatePresence mode="wait">
              <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
              >
                  {carouselImages[currentSlide].caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}