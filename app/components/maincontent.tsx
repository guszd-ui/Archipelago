import Image from "next/image";

const MainContent = () => {
  return (
    <>
      <div className="h-full w-full scroll-smooth">
        <section
          id="Budaya"
          className="bg-[rgb(230,69,83)] h-screen flex justify-between text-gray-800"
        >
          <div className="flex-grow flex justify-center items-center">
            <div className="">
              <div className="w-3xl h-96 bg-white rounded-lg shadow-lg ml-28 hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col p-4">
                  <h1>JUDUL</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis quis laboriosam a magnam? Voluptates soluta in
                    cumque veniam harum praesentium, eum dolor inventore quod
                    atque est aliquam error facere totam!
                  </p>
                  <a
                    href="budaya-dan-tradisi"
                    className="flex items-center flex-grow p-4 bg-[rgb(230,69,83)] align-middle rounded-md"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow flex justify-end items-end">
            <Image
              className="hover:scale-110 transition-transform duration-300 origin-bottom-right"
              src="/images/Budaya.png"
              alt=""
              width={450}
              height={900}
            ></Image>
          </div>
        </section>
        <section
          id="Sejarah"
          className="bg-[rgb(239,241,245)] h-screen flex justify-between text-gray-800"
        >
          <div className="flex-grow flex justify-center items-center">
            <div className="">
              <div className="w-3xl h-96 bg-[rgb(230,69,83)] rounded-lg shadow-lg ml-28 hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col p-4 text-white">
                  <h1>JUDUL</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis quis laboriosam a magnam? Voluptates soluta in
                    cumque veniam harum praesentium, eum dolor inventore quod
                    atque est aliquam error facere totam!
                  </p>
                  <a
                    href=""
                    className="flex items-center flex-grow p-4 bg-[rgb(230,69,83)] align-middle rounded-md"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow flex justify-end items-end">
            <Image
              className="hover:scale-110 transition-transform duration-300 origin-bottom-right"
              src="/images/Sejarah.png"
              alt=""
              width={450}
              height={900}
            ></Image>
          </div>
        </section>
        <section
          id="Bahasa"
          className="bg-[rgb(230,69,83)] h-screen flex justify-center text-gray-800"
        >
          <div className="flex-grow flex justify-center items-center">
            <div className="">
              <div className="w-3xl h-96 bg-white rounded-lg shadow-lg  ml-28 hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col p-4">
                  <h1>JUDUL</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis quis laboriosam a magnam? Voluptates soluta in
                    cumque veniam harum praesentium, eum dolor inventore quod
                    atque est aliquam error facere totam!
                  </p>
                  <a
                    href=""
                    className="flex items-center flex-grow p-4 bg-[rgb(230,69,83)] align-middle rounded-md"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow flex justify-end items-end">
            <Image
              className="hover:scale-110 transition-transform duration-300 origin-bottom-right"
              src="/images/Bahasa.png"
              alt=""
              width={450}
              height={900}
            ></Image>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainContent;
