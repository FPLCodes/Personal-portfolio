import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-zinc-700">
      <Head>
        <title>Sahab Ul Ferdous</title>
        <link rel="icon" href="/SF.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Script id="kwes" src="https://kwesforms.com/v2/kwes-script.js" />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-2 sm:px-10 md:px-20 xl:px-40 2xl:px-52 text-left">
        <Intro />

        <Projects />

        <Skills />

        <About />

        <Contact />
      </main>

      <footer className="flex gap-x-4 h-14 w-full items-center justify-center border-t md:mt-32 bg-gray-100">
        <h1 className="text-xs font-light">
          © 2022 Sahab Ul Ferdous. All rights reserved.
        </h1>
      </footer>
    </div>
  );
};

export default Home;
