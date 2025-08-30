import { notFound } from "next/navigation";
import { DataProvinsi } from "@/app/data/dataprovinsi";

export async function generateStaticParams() {
  return DataProvinsi.map((provinsi) => ({
    id: provinsi.id,
  }));
}


interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Provinsi({ params }: PageProps) {
  const { id } = await params;

  const data = DataProvinsi.find((item) => item.id === id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="p-10 bg-[rgb(238,238,238)] h-full w-screen flex flex-col scroll-smooth">
      <div className="md:bg-[url('/images/bg_heroimage.png')] bg-cover object-fill flex flex-col bg-center border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-screen hover:bg-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:h-[60vh]">
        <img
          className="object-cover w-full rounded-t-lg h-[60vh] md:h-full md:w-2xl md:rounded-none md:rounded-s-lg md:portrait:h-64"
          src={data.heroimg}
          alt={data.nama}
        />
        <div className="flex flex-col p-4 leading-normal">
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-5">
            ({data.nama})
          </h5>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 md:text-sm">
            {data.deskripsi}
          </p>
        </div>
      </div>
      <div className="bg-[url('/images/bg_teks.png')] bg-cover object-fill mt-20 block max-w-screen p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 hover:scale-102 duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.juduldesk1}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.penjelasan1}
        </p>
      </div>
      <div className="bg-[url('/images/bg_teks.png')] bg-cover mt-10 block max-w-screen p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 hover:scale-102 duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.adatistiadat}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.penjelasanadatistiadat}
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-8 justify-evenly items-center md:items-stretch">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-fill"
              alt={data.pakaianadat}
              src={data.kesenian!}
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.keseniantradisional}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.penjelasankesenian}
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-fill"
              alt={data.nama}
              src={data.kerajinan}
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.kerajinantangan}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.penjelasankerajinantangan}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-8 justify-evenly items-center md:items-stretch">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-fill"
              alt={data.nama}
              src={data.makanan}
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.kulinerkhas}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.penjelasankulinerkhas}
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-fill"
              alt={data.pakaianadat}
              src={data.pakaian!}
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.pakaianadat}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.penjelasanpakaianadat}
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-fill"
              alt={data.nama}
              src={data.upacara}
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.upacaraadat}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.penjelasanupacaraadat}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

