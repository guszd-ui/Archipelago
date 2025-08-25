"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const MainContent = () => {
  return (
    <main className="min-h-screen w-full scroll-smooth overflow-x-hidden">
      <section
        id="Budaya"
        className="bg-[#E64553] text-gray-800 h-screen overflow-hidden"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-8 md:py-0 h-full">
          <motion.div
            className="order-1 w-full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-full max-w-xl bg-white rounded-xl shadow-lg mx-auto md:ml-16 p-6 hover:scale-[1.02] transition-transform duration-300">
              <h1 className="text-2xl font-bold mb-3">BUDAYA &amp; TRADISI</h1>
              <p className="text-gray-700 mb-5">
                Jelajahi warisan budaya Nusantara—tari, musik, ritual, hingga
                kerajinan—yang membentuk jati diri bangsa dari Sabang sampai
                Merauke.
              </p>
              <Link
                href="/budaya-dan-tradisi"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#E64553] text-white font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E64553]"
                aria-label="Menuju halaman Budaya dan Tradisi"
              >
                Jelajahi
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="order-2 w-full justify-self-center md:justify-self-end"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[min(44vh,420px)] sm:h-[min(52vh,520px)] md:h-[min(64vh,600px)] overflow-hidden rounded-lg">
              <Image
                src="/images/Budaya.png"
                alt="Ilustrasi budaya dan tradisi Indonesia"
                fill
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-contain hover:scale-105 transition-transform duration-300 origin-bottom will-change-transform"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      <section
        id="Sejarah"
        className="bg-[#EFF1F5] text-gray-800 h-screen overflow-hidden"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-8 md:py-0 h-full">
          <motion.div
            className="order-1 w-full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-full max-w-xl bg-[#E64553] text-white rounded-xl shadow-lg mx-auto md:ml-16 p-6 hover:scale-[1.02] transition-transform duration-300">
              <h1 className="text-2xl font-bold mb-3">SEJARAH INDONESIA</h1>
              <p className="opacity-95 mb-5">
                Mari eksplor sejarah Indonesia—dari kerajaan-kerajaan besar,
                masa kolonial, pergerakan nasional, hingga era kemerdekaan dan
                seterusnya.
              </p>
              <Link
                href="/sejarahindonesia"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-[#E64553] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E64553]"
                aria-label="Menuju halaman Sejarah Indonesia"
              >
                Buka Halaman
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="order-2 w-full justify-self-center md:justify-self-end"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[min(44vh,420px)] sm:h-[min(52vh,520px)] md:h-[min(64vh,600px)] overflow-hidden rounded-lg">
              <Image
                src="/images/Sejarah.png"
                alt="Ilustrasi perjalanan sejarah Indonesia"
                fill
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-contain hover:scale-105 transition-transform duration-300 origin-bottom will-change-transform"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <section
        id="Bahasa"
        className="bg-[#E64553] text-gray-800 h-screen overflow-hidden"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-8 md:py-0 h-full">
          {/* Card */}
          <motion.div
            className="order-1 w-full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-full max-w-xl bg-white rounded-xl shadow-lg mx-auto md:ml-16 p-6 hover:scale-[1.02] transition-transform duration-300">
              <h1 className="text-2xl font-bold mb-3">BAHASA INDONESIA</h1>
              <p className="text-gray-700 mb-5">
                Pelajari perkembangan Bahasa Indonesia—dari akar bahasa Melayu,
                Sumpah Pemuda 1928, hingga pembakuan ejaan modern dan perannya
                sebagai bahasa persatuan.
              </p>
              <Link
                href="/bahasa-indonesia"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#E64553] text-white font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E64553]"
                aria-label="Menuju halaman Bahasa Indonesia"
              >
                Pelajari
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="order-2 w-full justify-self-center md:justify-self-end"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[min(44vh,420px)] sm:h-[min(52vh,520px)] md:h-[min(64vh,600px)] overflow-hidden rounded-lg">
              <Image
                src="/images/Bahasa.png"
                alt="Ilustrasi Bahasa Indonesia sebagai bahasa persatuan"
                fill
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-contain hover:scale-105 transition-transform duration-300 origin-bottom will-change-transform"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
