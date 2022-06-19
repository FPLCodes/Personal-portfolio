import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube, faJs } from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
  return (
    <html className="flex min-h-screen scroll-smooth flex-col items-center justify-center">
      <Head>
        <title>Sahab Ul Ferdous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 xl:px-40 text-left text-zinc-700">
        <header className="flex flex-col gap-y-6 h-screen w-full justify-center text-middle">
          <div>
            <h1 className="text-5xl xl:text-6xl max-w-xl">Hello, 👋 I'm</h1>
            <h1 className="text-5xl xl:text-6xl max-w-xl">Sahab Ul Ferdous</h1>
          </div>
          <h2 className="text-3xl xl:text-4xl max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </header>

        <section className="flex flex-col w-full gap-y-60 mt-40">
          <div className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-2/3 xl:1/2 self-center md:self-start">
            <h1 className="w-full text-3xl">SocialLite</h1>
            <div className="flex flex-col gap-y-2 md:flex-row gap-x-4">
              <div className="w-full flex flex-col gap-y-2">
                <img
                  src="SocialLite.png"
                  className={
                    "self-center md:self-start md:w-full rounded-sm transition-all hover:scale-105 drop-shadow-lg hover:drop-shadow-2xl"
                  }
                />
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs">
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    JavaScript
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    VueJS
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    Firebase
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    MongoDB
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2 justify-between">
                <p className="mb-4 text-lg font-light">
                  An online messaging platform where you can message other users
                  around the world.
                </p>
                <div className="flex justify-around">
                  <a
                    href="https://github.com/FPLCodes/SocialLite"
                    target="_blank"
                    className="font-bold"
                  >
                    GITHUB
                  </a>
                  <a
                    href="https://social-lite-app.herokuapp.com/"
                    target="_blank"
                    className="text-orange-500 font-bold"
                  >
                    LIVE SITE
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-2/3 xl:1/2 self-center md:self-end">
            <h1 className="w-full text-3xl">Tic-tac-toe</h1>
            <div className="flex flex-col md:flex-row gap-x-4">
              <div className="w-full flex flex-col gap-y-2">
                <img
                  src="tic-tac-toe.png"
                  className={
                    "self-center md:w-full rounded-sm transition-all hover:scale-105 drop-shadow-lg hover:drop-shadow-2xl"
                  }
                />
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs">
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    JavaScript
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    React
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-between">
                <p className="mb-4 text-lg font-light">
                  A simple web app game where you can play tic-tac-toe with
                  someone else or with a bot.
                </p>
                <div className="flex justify-around">
                  <a
                    href="https://github.com/FPLCodes/Tic-tac-toe"
                    target="_blank"
                    className="font-bold"
                  >
                    GITHUB
                  </a>
                  <a
                    href="https://tictactoe-fp.netlify.app/"
                    target="_blank"
                    className="text-orange-500 font-bold"
                  >
                    LIVE SITE
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-2/3 xl:1/2 self-center md:self-start">
            <h1 className="w-full text-3xl">AniCountdown bot</h1>
            <div className="flex flex-col gap-y-2 md:flex-row gap-x-4">
              <div className="w-full flex flex-col gap-y-2">
                <img
                  src="https://downey.co.nz/wp-content/uploads/2015/09/awards-grey-box-large.jpg"
                  className={
                    "self-center md:self-start md:w-full rounded-sm transition-all hover:scale-105 drop-shadow-lg hover:drop-shadow-2xl"
                  }
                />
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs">
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    JavaScript
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    Discord.js
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-2 justify-between">
                <p className="mb-4 text-lg font-light">
                  An anime (episode release) countdown bot for discord.
                </p>
                <div className="flex justify-around">
                  <a
                    href="https://github.com/FPLCodes/Anime-Countdown-Bot"
                    target="_blank"
                    className="font-bold"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-2/3 xl:1/2 self-center md:self-end">
            <h1 className="w-full text-3xl">US-GDP Data Visualisation</h1>
            <div className="flex flex-col md:flex-row gap-x-4">
              <div className="w-full flex flex-col gap-y-2">
                <img
                  src="https://downey.co.nz/wp-content/uploads/2015/09/awards-grey-box-large.jpg"
                  className={
                    "self-center md:w-full rounded-sm transition-all hover:scale-105 drop-shadow-lg hover:drop-shadow-2xl"
                  }
                />
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs">
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    JavaScript
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    React
                  </p>
                  <p className="border-2 py-1 px-2 rounded-lg border-orange-400 text-orange-500 font-bold">
                    D3
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-between">
                <p className="mb-4 text-lg font-light">
                  An interactive bar chart representing the GPD of the United
                  States from 1947-2015.
                </p>
                <div className="flex justify-around">
                  <a
                    href="https://github.com/FPLCodes/US-GPD"
                    target="_blank"
                    className="font-bold"
                  >
                    GITHUB
                  </a>
                  <a
                    href="https://us-gdp.netlify.app/"
                    target="_blank"
                    className="text-orange-500 font-bold"
                  >
                    LIVE SITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60 w-full">
          <h1 className="text-4xl font-bold text-orange-500">Skills</h1>
          <div className="flex flex-col gap-y-6 w-full justify-around md:justify-around pt-16">
            <ul className="pt-3 flex flex-wrap gap-6 w-full text-center justify-center">
              <li>
                <img src="js.png" width={"75px"} />
                JavaScript
              </li>
              <li>
                <img src="python.png" width={"75px"} /> Python
              </li>
              <li>
                <img src="c++.png" width={"75px"} /> C++
              </li>

              <li>
                <img
                  src="https://www.svgrepo.com/show/354259/react.svg"
                  width="75px"
                />
                React
              </li>
              <li>
                <img
                  src="https://www.svgrepo.com/show/354528/vue.svg"
                  width="75px"
                />
                Vue
              </li>
              <li>
                <img
                  src="https://www.svgrepo.com/show/353735/firebase.svg"
                  width="75px"
                />
                Firebase
              </li>
              <li>
                <img
                  src="https://www.svgrepo.com/show/373307/mongodb-opened.svg"
                  width="75px"
                />
                MongoDB
              </li>

              <li>
                <img
                  src="https://www.svgrepo.com/show/374171/vscode.svg"
                  width="75px"
                />
                VSCode
              </li>
              <li>
                <img
                  src="https://www.svgrepo.com/show/373623/git.svg"
                  width="75px"
                />
                Git
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="flex gap-x-4 h-14 w-full items-center justify-center border-t mt-24">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ fontSize: 24, color: "dodgerblue" }}
        />
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 24 }} />
      </footer>
    </html>
  );
};

export default Home;
