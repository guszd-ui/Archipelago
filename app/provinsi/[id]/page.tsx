import { notFound } from "next/navigation";
import { DataProvinsi } from "@/app/data/dataprovinsi";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Provinsi({ params }: PageProps) {
  const { id } = await params;

  const data = DataProvinsi.find((item) => item.id === id);

  if (!data) return notFound();

  return (
    <div className="p-10 bg-[rgb(238,238,238)] h-full w-screen flex flex-col">
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
        ></Image>
      </div>
      <div className="flex justify-center p-4 flex-col gap-5">
        <div className="bg-[rgb(215,35,35)] rounded-md p-4 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
          <p className="mt-2 text-white">{data.deskripsi}</p>
        </div>
        <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
          <p>{data.juduldesk1}</p>
          <div className="bg-white shadow-lg p-3 rounded-sm">
            <p className="text-black">{data.penjelasan1}</p>
          </div>
        </div>
        <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
          <p>{data.adatistiadat}</p>
          <div className="bg-white shadow-lg p-3 rounded-sm">
            <p className="text-black">{data.penjelasanadatistiadat}</p>
          </div>
        </div>
        <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
          <p>{data.keseniantradisional}</p>
          <div className="bg-white shadow-lg p-3 rounded-sm">
            <p className="text-black">{data.penjelasankesenian}</p>
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
            <p>{data.kerajinantangan}</p>
            <div className="bg-white shadow-lg p-3 rounded-sm">
              <p className="text-black">{data.penjelasankerajinantangan}</p>
            </div>
          </div>
          <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
            <p>{data.kulinerkhas}</p>
            <div className="bg-white shadow-lg p-3 rounded-sm">
              <p className="text-black">{data.penjelasankulinerkhas}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
          <p>{data.pakaianadat}</p>
          <div className="bg-white shadow-lg p-3 rounded-sm">
            <p className="text-black">{data.penjelasanpakaianadat}</p>
          </div>
        </div>
        <div className="flex flex-col bg-[rgb(215,35,35)] rounded-md p-4 gap-3 shadow-lg hover:scale-102 transition-transform duration-200 origin-bottom">
          <p>{data.upacaraadat}</p>
          <div className="bg-white shadow-lg p-3 rounded-sm">
            <p className="text-black">{data.penjelasanupacaraadat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
