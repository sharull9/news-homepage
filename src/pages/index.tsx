import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Trending from "@/components/Trending";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "800", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>News homepage | FrontendMentor.io | sharull</title>
        <meta name="description" content="This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main
        className={`${inter.className} px-5 overflow-x-hidden desktop:max-w-[1280px] mx-auto`}
      >
        <header>
          <Header />
        </header>
        <section>
          <HeroSection />
        </section>
        <section>
          <Trending />
        </section>
      </main>
    </>
  );
}
