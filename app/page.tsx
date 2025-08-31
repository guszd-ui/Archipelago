import Image from "next/image";
import MainContent from "./components/maincontent";

export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      <div className="relative h-screen overflow-hidden bg-[url('/images/bg_jumbotron.png')] bg-cover bg-no-repeat p-6 md:p-12 text-center text-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="text-white font-poppins">
              <div className="relative flex justify-center items-center">
                <h2 className="relative z-10 mb-4 text-5xl md:text-9xl font-semibold animate-fade-up animate-duration-[800ms]">
                  ARCHIPELAGO
                </h2>
                <Image
                  className="absolute top-1/2 left-1/2 h-auto max-w-[280px] -translate-x-1/2 -translate-y-1/2 opacity-40 md:max-w-2xl -z-10"
                  src={"/images/bg_peta.png"}
                  alt=""
                  height={1024}
                  width={1024}
                />
              </div>
              <h4 className="mb-6 text-base md:text-xl font-semibold animate-fade-up animate-duration-[900ms]">
                Budaya & Tradisi - Sejarah - Bahasa Indonesia
              </h4>
              <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group py-1.5 px-2.5 animate-fade-up animate-duration-[1200ms]">
                <span className="w-56 h-48 rounded bg-red-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-red-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                  <a href="#budaya">MULAI</a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="" id="budaya">
        <MainContent />
      </section>
    </div>
  );
}
