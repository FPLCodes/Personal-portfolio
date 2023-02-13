import type { NextPage } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Certificates from "../components/Certificates";

const Home: NextPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let sections = document.querySelectorAll("section");
      let sidebarLinks = document.querySelectorAll("li");

      window.addEventListener("scroll", function () {
        // Current position of the user's scroll
        let scrollPos =
          document.documentElement.scrollTop || document.body.scrollTop;

        for (let i = 0; i < sections.length; i++) {
          let sectionTop = sections[i].offsetTop - 400; // top position of the current section element, minus 200 pixels
          let sectionBottom = sectionTop + sections[i].offsetHeight; // top position of the current section element, plus its height

          if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
            sidebarLinks[i].classList.add("text-indigo-400");
          } else {
            sidebarLinks[i].classList.remove("text-indigo-400");
          }
        }
      });
    }
  }, []);

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
        <div className="fixed right-10 top-1/3 mt-10 h-screen">
          <nav>
            <ul className="flex flex-col text-center text-gray-500 font-light">
              <li className="hover:text-indigo-400 transition-all duration-500 cursor-pointer">
                Projects
              </li>
              <div>|</div>

              <li className="hover:text-indigo-400 transition-all duration-500 cursor-pointer">
                Skills
              </li>
              <div>|</div>

              <li className="hover:text-indigo-400 transition-all duration-500 cursor-pointer">
                Certificates
              </li>
              <div>|</div>

              <li className="hover:text-indigo-400 transition-all duration-500 cursor-pointer">
                About
              </li>
              <div>|</div>

              <li className="hover:text-indigo-400 transition-all duration-500 cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>
        </div>

        <Intro />

        <Projects />

        <Skills />

        <Certificates />

        <About />

        <Contact />
      </main>

      <footer className="flex gap-x-4 h-14 w-full items-center justify-center border-t md:mt-32 bg-gray-100">
        <h1 className="text-xs font-light">
          © 2023 Sahab Ul Ferdous. All rights reserved.
        </h1>
      </footer>
    </div>
  );
};

export default Home;
