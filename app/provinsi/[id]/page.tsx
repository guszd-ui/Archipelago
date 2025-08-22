import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Provinsi({ params }: PageProps) {
  const { id } = await params;

  if (!id) return notFound();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Provinsi: {id}</h1>
      <p>Ini halaman detail provinsi dengan ID: {id}</p>
    </div>
  );
}
