"use client";
import Image from "next/image";
import Link from "next/link";

// Data untuk konten kita
const contentData = [
  {
    id: "Budaya",
    title: "BUDAYA & TRADISI",
    description:
      "Jelajahi warisan budaya Nusantara—tari, musik, ritual, hingga kerajinan—yang membentuk jati diri bangsa dari Sabang sampai Merauke.",
    link: "/budaya-dan-tradisi",
    buttonText: "Jelajahi",
    imageSrc: "/images/bg_tradisi.png",
  },
  {
    id: "Sejarah",
    title: "SEJARAH INDONESIA",
    description:
      "Mari eksplor sejarah Indonesia—dari kerajaan-kerajaan besar, masa kolonial, pergerakan nasional, hingga era kemerdekaan dan seterusnya.",
    link: "/sejarahindonesia",
    buttonText: "Buka Halaman",
    imageSrc: "/images/bg_sejarah.png",
  },
  {
    id: "Bahasa",
    title: "BAHASA INDONESIA",
    description:
      "Pelajari perkembangan Bahasa Indonesia—dari akar bahasa Melayu, Sumpah Pemuda 1928, hingga pembakuan ejaan modern dan perannya sebagai bahasa persatuan.",
    link: "/bahasa-indonesia",
    buttonText: "Pelajari",
    imageSrc: "/images/bg_bahasa.png",
  },
];

const MainContent = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentData.map((item) => (
            // Menambahkan margin-top agar ada ruang untuk gambar yang keluar
            <div key={item.id} className="mt-12">
              <div className="relative flex flex-col rounded-lg bg-white text-surface shadow-lg">
                {/* 1. Wrapper gambar diangkat ke atas dengan margin negatif */}
                <div className="relative -mt-12 mx-auto w-[calc(100%-3rem)]">
                  <Link href={item.link} className="block">
                    {/* 2. Gambar diberi shadow dan border radius penuh */}
                    <Image
                      className="rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                      src={item.imageSrc}
                      alt={`Gambar untuk ${item.title}`}
                      width={500}
                      height={300}
                    />
                  </Link>
                </div>

                {/* 3. Konten teks diberi padding atas tambahan */}
                <div className="p-6 pt-8 flex flex-col flex-grow text-center">
                  <h5 className="mb-2 text-xl font-bold leading-tight text-gray-800">
                    {item.title}
                  </h5>
                  <p className="mb-4 text-base text-gray-600 flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={item.link}
                      className="inline-block bg-[#E64553] text-white font-semibold px-6 py-2.5 rounded-md hover:bg-red-700 transition-colors"
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
