"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function BahasaIndonesia() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const COLLAPSED_HEIGHT = 240;

  const recalcHeight = () => {
    if (contentRef.current) setMaxHeight(contentRef.current.scrollHeight);
  };

  useEffect(() => {
    recalcHeight();
  }, []);

  useEffect(() => {
    recalcHeight();
  }, [expanded]);
  
  useEffect(() => {
    if (!contentRef.current) return;
    const ro = new ResizeObserver(() => recalcHeight());
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <main className="bg-white h-screen overflow-hidden">
      <motion.div
        layout
        className="flex flex-col md:flex-row justify-start md:justify-evenly gap-6 md:gap-10 p-6 bg-white w-full h-full px-4 md:px-10 overflow-hidden"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          layout
          className="bg-red-600 shadow-md rounded-md p-4 max-w-6xl w-full max-h-full overflow-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
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
              <p>
                Bahasa Indonesia, yang merupakan bahasa nasional di Indonesia,
                memiliki sejarah yang menarik. Bahasa ini lahir pada tanggal 28
                Oktober 1928, ketika pemuda-pemuda dari berbagai wilayah di
                Indonesia berkumpul dalam Kerapatan Pemuda dan mengucapkan
                Sumpah Pemuda.
              </p>
              <p>
                Sumpah ini menyatakan tekad untuk memiliki satu tanah air, yaitu
                Indonesia, menjadi satu bangsa, yaitu bangsa Indonesia, dan
                mengangkat bahasa Indonesia sebagai bahasa persatuan. Pada tahun
                1945, melalui Undang-Undang Dasar Negara Republik Indonesia,
                bahasa Indonesia secara resmi diakui sebagai bahasa negara.
                Sejarah bahasa Indonesia tidak terlepas dari bahasa Melayu, yang
                telah digunakan di wilayah Asia Tenggara sejak abad ke-7. Bahasa
                Melayu menjadi bahasa kebudayaan dan bahasa perhubungan antar
                suku tidak hanya di Nusantara, namun juga menyebar ke asia
                tenggara.
              </p>
              <p>
                Dengan tersebarnya agama Islam, bahasa Melayu semakin berkembang
                dan menyebar ke seluruh wilayah Nusantara. Bahasa Melayu juga
                mengalami pengaruh dari berbagai budaya daerah dan menyerap
                kosakata dari bahasa-bahasa lain seperti Sanskerta, Persia,
                Arab, dan Eropa. Bahasa ini juga memiliki variasi dan dialek
                yang berbeda. Perkembangan bahasa Melayu di wilayah Nusantara
                memiliki peran penting dalam memperkuat persaudaraan dan
                persatuan bangsa Indonesia. Pada tanggal 28 Oktober 1928,
                pemuda-pemuda Indonesia yang tergabung dalam perkumpulan
                pergerakan secara sadar memilih bahasa Melayu sebagai bahasa
                Indonesia, sebagai bahasa persatuan bagi seluruh bangsa
                Indonesia.
              </p>
              <p>
                Kemerdekaan Republik Indonesia pada tanggal 17 Agustus 1945
                memperkuat kedudukan bahasa Indonesia sebagai bahasa negara.
                Sejak itu, bahasa Indonesia terus berkembang pesat. Kegiatan
                politik, perdagangan, persuratkabaran, dan majalah berperan
                penting dalam memodernisasi bahasa Indonesia. Saat ini, bahasa
                Indonesia digunakan oleh berbagai lapisan masyarakat di seluruh
                Indonesia. Namun, kita juga tetap melestarikan bahasa daerah
                sebagai bagian dari kekayaan budaya Nusantara, serta tetap
                belajar dan menguasai bahasa asing.
              </p>
              <p>
                Sejarah singkat ini menggambarkan perjalanan bahasa Indonesia
                yang kini menjadi bahasa nasional yang menyatukan seluruh bangsa
                Indonesia. Kita semua diharapkan untuk menghormati dan
                menggunakan bahasa Indonesia, serta menjaga keberagaman bahasa
                daerah dan tetap mempelajari bahasa-bahasa asing.
              </p>
            </motion.div>
            <AnimatePresence initial={false}>
              {!expanded && (
                <motion.div
                  aria-hidden
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
                aria-hidden
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
          className="flex flex-col gap-10 max-h-full w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            layout
            className="rounded-sm relative group"
            initial={{ scale: 0.995, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              className="rounded-md hover:scale-200 origin-top-right duration-300 hover:shadow-2xl hover:shadow-red-950 hover:outline-2 hover:outline-amber-50 w-72 md:w-96 h-auto"
              src={"/images/bahasaindonesia/sumpahpemuda.jpg"}
              alt="Sumpah Pemuda"
              height={1024}
              width={1024}
            />
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div
              aria-hidden
              className="pointer-events-none fixed inset-x-0 -bottom-5 z-50 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
            >
              <div className="mx-auto w-full max-w-3xl p-4 flex justify-start">
                <div className="overflow-hidden">
                  <Image
                    src="/images/bahasaindonesia/Bahasaindonesiaup.png"
                    alt="Pratinjau gambar kedua"
                    width={1600}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-sm text-gray-600">FOTO 2</div>
        </motion.div>
      </motion.div>
    </main>
  );
}
