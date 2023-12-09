import Head from "next/head";
import Image from "next/image";
import skyline from "../public/homepage.jpg";
import background from "../public/background.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="w-full overflow-x-hidden">
        <div className="relative w-full h-[55vh]">
          <Image src={background} alt={""} layout="fill" objectFit="cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-6xl text-center">
            <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Education and Mental Health in Singapore
            </span>
          </div>
        </div>

        <div className="text-xl flex flex-col justify-center items-center space-y-5 mt-8">
          <div>Hello!</div>
          <div className="max-w-[70vw]">
            This website presents information regarding Singapore's educational
            system. Singapore is widely regarded to have one of the world's top
            performing education systems. This website will help you to
            understand more about the Singapore education system, as well as the
            potential pitfalls of high academic and assessment achievement. To
            read on, please use the navbar at the top of the website. Please
            enjoy, thank you!
          </div>
        </div>
      </main>
    </>
  );
}
