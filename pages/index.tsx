import type { NextPage } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    // Only executes on the client side to avoid the "ReferenceError: document is not defined" error
    if (typeof window !== "undefined") {
      let sections = document.querySelectorAll("section");
      let sidebarLinks = document.querySelectorAll(".sidebarLink");

      let progressValue = 0;
      const totalHeight = document.documentElement.scrollHeight - screen.height;

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
            sidebarLinks[i].classList.remove("text-gray-500");
            sidebarLinks[i].classList.add("text-black");
          } else {
            sidebarLinks[i].classList.remove("text-black");
            sidebarLinks[i].classList.add("text-gray-500");
          }
        }

        progressBar.style.width = `${(progressValue / totalHeight) * 100}%`; // Dynamically set the width of the progress bar
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

      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 sm:px-10 md:px-20 xl:px-40 2xl:px-52 overflow-hidden">
        <Navbar />

        <ProgressBar />

        <Intro />

        <Projects />

        <Skills />

        <Certificates />

        <About />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
