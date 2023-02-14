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
    // Only executes on the client side to avoid the "ReferenceError: document is not defined" error
    if (typeof window !== "undefined") {
      let sections = document.querySelectorAll("section");
      let sidebarLinks = document.querySelectorAll(".sidebarLink");

      window.addEventListener("scroll", function () {
        // Current position of the user's scroll
        let scrollPos =
          document.documentElement.scrollTop || document.body.scrollTop;

        for (let i = 0; i < sections.length; i++) {
          let sectionTop = sections[i].offsetTop - 150; // top position of the current section element - 150 pixels
          let sectionBottom = sectionTop + sections[i].offsetHeight; // top position of the current section element + its height

          if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
            sidebarLinks[i].classList.add("text-indigo-400");
          } else {
            sidebarLinks[i].classList.remove("text-indigo-400");
          }
        }
      });

      // Automatically smooth scroll to clicked component
      for (let i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].addEventListener("click", function () {
          let sectionTop = sections[i].offsetTop - 100;
          window.scrollTo({
            top: sectionTop,
            behavior: "smooth",
          });
        });
      }
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

      <main className="flex w-full flex-1 flex-col items-center justify-center px-2 sm:px-10 md:px-20 xl:px-40 2xl:px-52">
        <nav className="fixed m-1/2 top-0 mt-4 z-50 invisible sm:visible">
          <ul className="flex flex-row text-center text-gray-500 font-light space-x-3">
            <li
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay="100"
              className="sidebarLink hover:text-indigo-400 transition-all duration-200 cursor-pointer"
            >
              Projects
            </li>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay="200"
              className="h-0.5 w-3 bg-gray-400 self-center"
            />

            <li
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay="300"
              className="sidebarLink hover:text-indigo-400 transition-all duration-200 cursor-pointer"
            >
              Skills
            </li>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay="400"
              className="h-0.5 w-3 bg-gray-400 self-center"
            />

            <li
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay="500"
              className="sidebarLink hover:text-indigo-400 transition-all duration-200 cursor-pointer"
            >
              Certificates
            </li>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay="600"
              className="h-0.5 w-3 bg-gray-400 self-center"
            />

            <li
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay="700"
              className="sidebarLink hover:text-indigo-400 transition-all duration-200 cursor-pointer"
            >
              About
            </li>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay="800"
              className="h-0.5 w-3 bg-gray-400 self-center"
            />

            <li
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-delay="900"
              className="sidebarLink hover:text-indigo-400 transition-all duration-200 cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </nav>

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
