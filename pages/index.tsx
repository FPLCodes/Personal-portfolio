import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";

import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  const [option, setOption] = useState(0);
  const [array, setArray] = useState<any[]>([]);

  const changeOption = () => {
    if (option === 3) setOption(0);
    else setOption((option) => option + 1);
  };

  useEffect(() => {
    console.log(option);
    let delay = 3400;
    if (option === 0) delay = 4800;
    const textChange = setInterval(() => {
      changeOption();
    }, delay);

    return () => {
      clearInterval(textChange);
    };
  }, [option]);

  useEffect(() => {
    let word = "";
    {
      option === 0
        ? (word = "Full stack developer")
        : option === 1
        ? (word = "student")
        : option === 2
        ? (word = "gamer")
        : (word = "YouTuber");
    }

    const arr: string[] = [];
    let i = 0;

    const add = setInterval(() => {
      arr.push(word[i]);
      setArray([...arr]);
      i++;
      if (!word[i]) {
        clearInterval(add);
        setTimeout(() => {
          const remove = setInterval(() => {
            arr.pop();
            setArray([...arr]);
            if (!arr[0]) {
              clearInterval(remove);
            }
          }, 50);
        }, 2000);
      }
    }, 50);

    return () => {
      clearInterval(add);
    };
  }, [option]);

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
        <header className="flex flex-col gap-y-6 h-screen w-full justify-center text-middle pb-16">
          <div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl max-w-xl">
              Hello, 👋 I'm
            </h1>
            <h1 className="text-4xl md:text-5xl xl:text-6xl max-w-xl font-bold">
              Sahab Ul Ferdous
            </h1>
          </div>
          <div className="text-2xl md:text-3xl xl:text-4xl max-w-xl flex gap-x-2">
            <h2>18 year old</h2>
            <div className="flex gap">
              <b>
                {option === 0 ? (
                  <h2 className="text-green-500">{array.join("")}</h2>
                ) : option === 1 ? (
                  <h2 className="text-blue-500">{array.join("")}</h2>
                ) : option === 2 ? (
                  <h2 className="text-purple-500">{array.join("")}</h2>
                ) : (
                  <h2 className="text-red-600">{array.join("")}</h2>
                )}
              </b>
              <p className="type">|</p>
            </div>
          </div>
          <div className="absolute place-self-center bottom-32 transition-all hover:pb-2 animate-bounce">
            <a href="#projects">
              <FontAwesomeIcon
                icon={faArrowDown}
                style={{ fontSize: 32, color: "darkorange" }}
              />
            </a>
          </div>
        </header>

        <Projects />

        <Skills />

        <section
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          className="mt-60 w-full px-4"
        >
          <h1 className="text-4xl font-bold text-orange-500">About me</h1>
          <div className="pt-16 font-light space-y-6 lg:w-2/3">
            <p>
              Hey there, I'm Sahab. I love coding and pretty much any tech
              related stuff 👨‍💻
            </p>
            <p>
              I've always enjoyed creating things and wanted to create my own
              video game, however I had no idea where to start.{" "}
              <b>For over 2 years</b> I used my free time to learn programming
              languages and new technologies, as well as algorithms and data
              structures through YouTube and online courses. During this period
              I also discovered a newfound love for web development.
            </p>
            <p>
              <b>When I'm not coding</b> I'm probably gaming, watching anime, or
              doing calisthenics 💪
            </p>
            <p>
              Fun fact, I have a gaming{" "}
              <a
                className="text-red-500 hover:text-red-300"
                href="https://www.youtube.com/c/FPLogistic"
                target="_blank"
              >
                YouTube channel!
              </a>
            </p>
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          className="mt-48 w-full px-4"
        >
          <h1 className="text-4xl text-orange-500 font-bold mb-8">
            Get in touch
          </h1>

          <div className="flex flex-col md:flex-row md:items-center">
            <div className="space-y-8 w-full md:w-1/2 font-light">
              <div className="bg-zinc-100 flex gap-x-2 place-items-center p-4 rounded-md">
                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 22 }} />
                <p>sahabferdous1@gmail</p>
              </div>

              <div className="bg-zinc-100 flex gap-x-2 place-items-center p-4 rounded-md">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: 24 }} />
                <p>FPLCodes</p>
              </div>

              <div className="bg-zinc-100 flex gap-x-2 place-items-center p-4 rounded-md">
                <FontAwesomeIcon icon={faDiscord} style={{ fontSize: 20 }} />
                <p>FPLogistic #7999</p>
              </div>
            </div>

            <div className="bg-gray-300 hidden md:block w-1 h-48 rounded-xl place-self-center mx-10 lg:mx-20 2xl:mx-32"></div>

            <form
              className="kwes-form md:w-1/2 space-y-8 py-10 md:py-0"
              action="https://kwesforms.com/api/foreign/forms/VYUaY10qgL1m56DMgych"
            >
              <div className="flex flex-col gap-y-2">
                <label className="text-lg font-light" htmlFor="name">
                  Name
                </label>
                <input
                  className="border-2 rounded-md h-12 px-2 bg-zinc-50"
                  type="text"
                  name="name"
                  required
                ></input>
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="text-lg font-light" htmlFor="email">
                  Email
                </label>
                <input
                  className="border-2 rounded-md h-12 px-2 bg-zinc-50"
                  type="email"
                  name="email"
                  required
                ></input>
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="text-lg font-light" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="border-2 rounded-md h-40 px-2 py-2 bg-zinc-50"
                  name="message"
                  required
                ></textarea>
              </div>

              <button
                className="border-2 w-full lg:w-auto border-orange-400 rounded-md px-6 py-2 text-white transition-all bg-orange-400 hover:bg-orange-500"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="flex gap-x-4 h-14 w-full items-center justify-center border-t mt-32 bg-gray-100">
        <h1 className="text-xs font-light">
          © 2022 Sahab Ul Ferdous. All rights reserved.
        </h1>
      </footer>
    </div>
  );
};

export default Home;
