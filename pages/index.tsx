import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SocialLite from "../public/SocialLite.png";
import TicTacToe from "../public/tic-tac-toe.png";
import AniCountdown from "../public/AniCountdown.png";
import US_GDP from "../public/US-GDP.png";
import Cplusplus from "../public/cplusplus.png";

import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

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
        <link rel="icon" href="/favicon.ico" />
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

        <section id="projects" className="flex flex-col w-full gap-y-72 pt-40">
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-once="true"
            className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-2/3 xl:1/2 self-center md:self-start"
          >
            <h1 className="w-full text-3xl">SocialLite</h1>
            <div className="flex flex-col gap-y-2 md:flex-row gap-x-4">
              <div className="w-full flex flex-col row-2 gap-y-6">
                <Image
                  src={SocialLite}
                  alt="Screenshot of SocialLite"
                  className={
                    "self-center md:self-start md:w-full rounded-sm transition-all hover:scale-95 drop-shadow-lg"
                  }
                />
                <div className="flex justify-between px-4">
                  <div className="line">
                    <a
                      href="https://github.com/FPLCodes/SocialLite"
                      target="_blank"
                      className="font-bold transition-all github-text"
                    >
                      GITHUB
                    </a>
                    <div className="bg-gray-800 w-0 transition-all line-bg"></div>
                  </div>
                  <div className="line">
                    <a
                      href="https://social-lite-app.herokuapp.com/"
                      target="_blank"
                      className="text-orange-500 font-bold transition-all site-text"
                    >
                      LIVE SITE
                    </a>
                    <div className="bg-orange-500 w-0 transition-all line-bg"></div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <p className="mb-4 text-lg font-light">
                  An online messaging platform created using VueJS. <br></br>
                  User authentication is handled by Firebase and messages are
                  sent and stored in Firestore.
                </p>
                <div>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs cursor-default">
                    <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                      JavaScript
                    </p>
                    <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                      VueJS
                    </p>
                    <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                      Firebase
                    </p>
                    <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                      MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-once="true"
            className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-2/3 xl:1/2 self-center md:self-end"
          >
            <h1 className="w-full text-3xl">Tic-tac-toe</h1>
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-2">
              <div className="w-full flex flex-col gap-y-6">
                <Image
                  src={TicTacToe}
                  alt="Screenshot of tic-tac-toe"
                  className={
                    "self-center md:w-full rounded-sm transition-all hover:scale-95 drop-shadow-lg"
                  }
                />
                <div className="flex justify-between px-4">
                  <div className="line">
                    <a
                      href="https://github.com/FPLCodes/Tic-tac-toe"
                      target="_blank"
                      className="font-bold transition-all github-text"
                    >
                      GITHUB
                    </a>
                    <div className="bg-gray-800 w-0 transition-all line-bg"></div>
                  </div>
                  <div className="line">
                    <a
                      href="https://tictactoe-fp.netlify.app/"
                      target="_blank"
                      className="text-orange-500 font-bold transition-all site-text"
                    >
                      LIVE SITE
                    </a>
                    <div className="bg-orange-500 w-0 transition-all line-bg"></div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <p className="mb-4 text-lg font-light">
                  A simple web app game where you can play tic-tac-toe with
                  someone else or with a bot.
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs cursor-default">
                  <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                    JavaScript
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                    React
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-once="true"
            className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-2/3 xl:1/2 self-center md:self-start"
          >
            <h1 className="w-full text-3xl">AniCountdown bot</h1>
            <div className="flex flex-col gap-y-2 md:flex-row gap-x-4">
              <div className="w-full flex flex-col row-2 gap-y-6">
                <Image
                  src={AniCountdown}
                  alt="Screenshot of AniCountdown bot"
                  className={
                    "self-center md:self-start md:w-full rounded-sm transition-all hover:scale-95 drop-shadow-lg"
                  }
                />
                <div className="flex justify-center">
                  <div className="line">
                    <a
                      href="https://github.com/FPLCodes/Anime-Countdown-Bot"
                      target="_blank"
                      className="font-bold transition-all github-text"
                    >
                      GITHUB
                    </a>
                    <div className="bg-gray-800 w-0 transition-all line-bg"></div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <p className="mb-4 text-lg font-light">
                  An anime (episode release) countdown bot for discord.{" "}
                  <br></br> Puppeteer is used to retrieve data from an external
                  source and discord.js allows us to communicate and display the
                  data to user.
                </p>
                <div>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs cursor-default">
                    <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                      JavaScript
                    </p>
                    <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                      Discord.js
                    </p>
                    <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                      Puppeteer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-once="true"
            className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-2/3 xl:1/2 self-center md:self-end"
          >
            <h1 className="w-full text-3xl">US-GDP Data Visualisation</h1>
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-2">
              <div className="w-full flex flex-col gap-y-6">
                <Image
                  src={US_GDP}
                  alt="Screenshot of US-GDP Data Visualisation"
                  className={
                    "self-center md:w-full rounded-sm transition-all hover:scale-95 drop-shadow-lg"
                  }
                />
                <div className="flex justify-between px-4">
                  <div className="line">
                    <a
                      href="https://github.com/FPLCodes/US-GPD"
                      target="_blank"
                      className="font-bold transition-all github-text"
                    >
                      GITHUB
                    </a>
                    <div className="bg-gray-800 w-0 transition-all line-bg"></div>
                  </div>
                  <div className="line">
                    <a
                      href="https://us-gdp.netlify.app/"
                      target="_blank"
                      className="text-orange-500 font-bold transition-all site-text"
                    >
                      LIVE SITE
                    </a>
                    <div className="bg-orange-500 w-0 transition-all line-bg"></div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <p className="mb-4 text-lg font-light">
                  An interactive bar chart web app representing the GPD of the
                  United States from 1947-2015.
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs cursor-default">
                  <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                    JavaScript
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                    React
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg transition-all hover:bg-orange-200 border-orange-400 text-orange-500 font-bold">
                    D3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          className="mt-72 w-full px-4"
        >
          <h1 className="text-4xl font-bold text-orange-500">Skills</h1>
          <div className="flex flex-col gap-y-6 w-full justify-around md:justify-around pt-16">
            <ul className="pt-3 flex flex-wrap gap-6 w-full text-center justify-center">
              <li className="transition-all hover:scale-105">
                <img src="js.png" width={"75px"} />
                JavaScript
              </li>
              <li className="transition-all hover:scale-105">
                <img src="python.png" width={"75px"} /> Python
              </li>
              <li className="transition-all hover:scale-105 flex flex-col">
                <Image src={Cplusplus} width="80" height="80" />
                C++
              </li>

              <li className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/354259/react.svg"
                  width="75px"
                />
                React
              </li>
              <li className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/354528/vue.svg"
                  width="75px"
                />
                Vue
              </li>
              <li className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/353735/firebase.svg"
                  width="75px"
                />
                Firebase
              </li>
              <li className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/373307/mongodb-opened.svg"
                  width="75px"
                />
                MongoDB
              </li>

              <li className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/374171/vscode.svg"
                  width="75px"
                />
                VSCode
              </li>
              <li className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/373623/git.svg"
                  width="75px"
                />
                Git
              </li>
            </ul>
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          className="mt-60 w-full px-4"
        >
          <h1 className="text-4xl font-bold text-orange-500">Background</h1>
          <div className="pt-16 font-light space-y-6 lg:w-2/3">
            <p>
              I am an <b>18 year old student</b> that loves coding and pretty
              much any tech related stuff 👨‍💻
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
