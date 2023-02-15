import type { NextPage } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  useEffect(() => {
    // Only executes on the client side to avoid the "ReferenceError: document is not defined" error
    if (typeof window !== "undefined") {
      let sections = document.querySelectorAll("section");
      let sidebarLinks = document.querySelectorAll(".sidebarLink");

      let height = document.documentElement.scrollHeight - screen.height;
      let progressValue = 0;

      const progressBar = document.querySelector(
        ".progress-bar"
      ) as HTMLElement;

      window.addEventListener("scroll", function () {
        // Current position of the user's scroll
        let scrollPos =
          document.documentElement.scrollTop || document.body.scrollTop;

        progressValue = scrollPos; // Progress bar at the bottom changes with the position of the users scroll

        for (let i = 0; i < sections.length; i++) {
          let sectionTop = sections[i].offsetTop - 250; // top position of the current section element - 250 pixels
          let sectionBottom = sectionTop + sections[i].offsetHeight; // top position of the current section element + its height

          if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
            sidebarLinks[i].classList.add("text-black");
          } else {
            sidebarLinks[i].classList.remove("text-black");
          }
        }

        // Dynamically set the width of the progress bar
        progressBar.style.width = `${(progressValue / height) * 100}%`;
        console.log(scrollPos);
      });

      // Automatically smooth scroll to clicked component
      for (let i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].addEventListener("click", function () {
          let sectionTop = sections[i].offsetTop - 150;
          window.scrollTo({
            top: sectionTop,
            behavior: "smooth",
          });
        });
      }
    }
  }, []);

  return (
    <div className="page flex min-h-screen flex-col items-center justify-center text-zinc-700">
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
        <Navbar />

        <div className="fixed z-50 w-full h-1 bottom-0">
          <div className="absolute progress-bar w-0 h-full bg-yellow-400"></div>
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
