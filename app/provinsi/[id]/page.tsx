import { notFound } from "next/navigation";
import { DataProvinsi } from "@/app/data/dataprovinsi";
import Image from "next/image";
import { div } from "motion/react-client";

// Fungsi ini memberitahu Next.js semua kemungkinan ID yang ada,
// yang dapat menyelesaikan masalah build pada halaman dinamis.
export async function generateStaticParams() {
  return DataProvinsi.map((provinsi) => ({
    id: provinsi.id,
  }));
}

// Menggunakan kembali interface dan signature fungsi asli Anda.
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Provinsi({ params }: PageProps) {
  // Menggunakan kembali cara Anda yang benar untuk mendapatkan id.
  const { id } = await params;

  const data = DataProvinsi.find((item) => item.id === id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="p-10 bg-[rgb(238,238,238)] h-full w-screen flex flex-col scroll-smooth">
      <div className="w-screen h-auto flex justify-center">
        <h1 className="text-2xl font-bold text-black absolute rounded-sm bg-[rgb(238,238,238)] items-center p-4">
          Provinsi: {id} ({data.nama})
        </h1>
      </div>

      <div className="w-full h-auto flex justify-center">
        <Image
          className="rounded-sm w-5/6 h-5/6"
          alt={data.nama}
          src={data.heroimg}
          width={3140}
          height={2280}
        />
      </div>
      <div className="flex justify-center p-4 flex-col gap-5">
        <div className="bg-[rgb(215,35,35)] rounded-md p-4 shadow-lg hover:scale-105 transition-transform duration-200 origin-bottom">
          <p className="mt-2 text-white text-center">{data.deskripsi}</p>
        </div>
        <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
          <p className="font-bold">{data.juduldesk1}</p>
          <div className="bg-white shadow-lg p-3 rounded-sm">
            <p className="text-black">{data.penjelasan1}</p>
          </div>
        </div>
        <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
          <p className="font-bold">{data.adatistiadat}</p>
          <div className="bg-white shadow-lg p-3 rounded-sm">
            <p className="text-black">{data.penjelasanadatistiadat}</p>
          </div>
        </div>
        <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
          <p className="font-bold">{data.keseniantradisional}</p>
          <div className="bg-white shadow-lg p-3 rounded-sm">
            <p className="text-black">{data.penjelasankesenian}</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="rounded-sm m-2 h-auto w-[70vh] items-center shadow-2xl outline-2 outline-blue-50 hover:scale-101 hover:outline-1 hover:outline-amber-50 origin-bottom transition-transform duration-300"
              alt={data.nama}
              src={data.kesenian!}
              width={1400}
              height={800}
            />
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200  origin-bottom">
            <p className="font-bold">{data.kerajinantangan}</p>
            <div className="bg-white shadow-lg p-3 rounded-sm">
              <p className="text-black">{data.penjelasankerajinantangan}</p>
            </div>
            <Image
              className="hover:outline-1 hover:outline-amber-50 rounded-sm h-[50vh] w-full items-center shadow-2xl outline-2 outline-blue-50 hover:scale-105 origin-bottom-left transition-transform duration-300"
              alt={data.nama}
              src={data.kerajinan!}
              width={700}
              height={400}
            />
          </div>
          <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
            <p className="font-bold">{data.kulinerkhas}</p>
            <div className="bg-white shadow-lg p-3 rounded-sm">
              <p className="text-black">{data.penjelasankulinerkhas}</p>
            </div>
            <div className="flex justify-end">
              <Image
                className="rounded-sm h-[50vh] w-full items-center hover:outline-1 hover:outline-amber-50 shadow-2xl outline-2 outline-blue-50 hover:scale-105 hover:justify-start origin-bottom-right transition-transform duration-300"
                alt={data.nama}
                src={data.makanan!}
                width={700}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-between">
          <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
            <p>{data.pakaianadat}</p>
            <div className="bg-white shadow-lg p-3 rounded-sm">
              <p className="text-black">{data.penjelasanpakaianadat}</p>
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-sm m-2 h-auto w-[70vh] items-center shadow-2xl outline-2 outline-blue-50 hover:outline-1 hover:outline-amber-50 hover:scale-102 origin-bottom transition-transform duration-300"
                alt={data.nama}
                src={data.pakaian!}
                width={1400}
                height={800}
              />
            </div>
          </div>
          <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
            <p>{data.upacaraadat}</p>
            <div className="bg-white shadow-lg p-3 rounded-sm">
              <p className="text-black">{data.penjelasanupacaraadat}</p>
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-sm m-2 h-auto w-[70vh] items-center shadow-2xl outline-2 outline-blue-50 hover:scale-102 origin-bottom hover:outline-1 hover:outline-amber-50 transition-transform duration-300"
                alt={data.nama}
                src={data.upacara!}
                width={1400}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}