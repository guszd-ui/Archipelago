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
    <div className="p-4 md:p-10 bg-[rgb(238,238,238)] min-h-screen w-screen flex flex-col scroll-smooth">
      <div className="md:bg-[url('/images/bg_heroimage.png')] bg-cover object-cover flex flex-col bg-center bg-white rounded-lg shadow-lg md:flex-row md:max-w-screen md:h-[40vh]">
        <img
          className="object-cover w-full rounded-t-lg h-[40vh] md:h-full md:w-2/5 md:rounded-none md:rounded-s-lg"
          src={data.heroimg}
          alt={data.nama}
        />
        <div className="flex flex-col p-6 md:p-8 leading-normal">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-[rgb(215,35,35)] mt-5">
            ({data.nama})
          </h5>

          <p className="mb-3 font-normal text-[rgb(48,56,65)] md:text-base">
            {data.deskripsi}
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-20 block max-w-screen p-6 bg-white border border-[rgb(58,71,80)]/20 rounded-lg shadow-md transition-shadow hover:shadow-xl duration-300">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[rgb(215,35,35)]">
          {data.juduldesk1}
        </h5>
        <p className="font-normal text-[rgb(48,56,65)]">{data.penjelasan1}</p>
      </div>

      <div className="bg-white mt-10 block max-w-screen p-6 border border-[rgb(58,71,80)]/20 rounded-lg shadow-md transition-shadow hover:shadow-xl duration-300">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[rgb(215,35,35)]">
          {data.adatistiadat}
        </h5>
        <p className="font-normal text-[rgb(48,56,65)]">
          {data.penjelasanadatistiadat}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="w-full bg-white border border-[rgb(58,71,80)]/20 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <img
              className="rounded-t-lg w-full h-full object-cover"
              alt={data.pakaianadat}
              src={data.kesenian!}
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[rgb(215,35,35)]">
              {data.keseniantradisional}
            </h5>
            <p className="mb-3 font-normal text-[rgb(48,56,65)]">
              {data.penjelasankesenian}
            </p>
          </div>
        </div>
        <div className="w-full bg-white border border-[rgb(58,71,80)]/20 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <img
              className="rounded-t-lg w-full h-full object-cover"
              alt={data.nama}
              src={data.kerajinan}
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[rgb(215,35,35)]">
              {data.kerajinantangan}
            </h5>
            <p className="mb-3 font-normal text-[rgb(48,56,65)]">
              {data.penjelasankerajinantangan}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="w-full bg-white border border-[rgb(58,71,80)]/20 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <img
              className="rounded-t-lg w-full h-full object-cover"
              alt={data.nama}
              src={data.makanan}
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[rgb(215,35,35)]">
              {data.kulinerkhas}
            </h5>
            <p className="mb-3 font-normal text-[rgb(48,56,65)]">
              {data.penjelasankulinerkhas}
            </p>
          </div>
        </div>
        <div className="w-full bg-white border border-[rgb(58,71,80)]/20 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <img
              className="rounded-t-lg w-full h-full object-cover"
              alt={data.pakaianadat}
              src={data.pakaian!}
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[rgb(215,35,35)]">
              {data.pakaianadat}
            </h5>
            <p className="mb-3 font-normal text-[rgb(48,56,65)]">
              {data.penjelasanpakaianadat}
            </p>
          </div>
        </div>
        <div className="w-full bg-white border border-[rgb(58,71,80)]/20 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <img
              className="rounded-t-lg w-full h-full object-cover"
              alt={data.nama}
              src={data.upacara}
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[rgb(215,35,35)]">
              {data.upacaraadat}
            </h5>
            <p className="mb-3 font-normal text-[rgb(48,56,65)]">
              {data.penjelasanupacaraadat}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
