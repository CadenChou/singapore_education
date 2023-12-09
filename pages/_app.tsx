import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-[#181a1b] text-text_white overflow-y-scroll h-screen w-screen snap-y snap-proximity">
        <main className="mb-32">
          <Navbar />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
