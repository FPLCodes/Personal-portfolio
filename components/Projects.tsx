import Image from "next/image";

import SocialLite from "../public/SocialLite.png";
import SocialLiteDemo from "../public/SocialLite demo.gif";
import TicTacToe from "../public/tic-tac-toe.png";
import AniCountdown from "../public/AniCountdown.png";
import US_GDP from "../public/US-GDP.png";

import { useState } from "react";

function Projects() {
  const [isHovering, setIsHovered] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
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
            {isHovering ? (
              <Image
                src={SocialLiteDemo}
                alt="Screenshot of SocialLite"
                className={
                  "self-center md:self-start md:w-full rounded-sm transition-all drop-shadow-lg"
                }
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            ) : (
              <Image
                src={SocialLite}
                alt="Short demo of SocialLite"
                className={
                  "self-center md:self-start md:w-full rounded-sm transition-all drop-shadow-lg"
                }
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            )}

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
              User authentication is handled by Firebase and messages are sent
              and stored in Firestore.
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
              A simple web app game where you can play tic-tac-toe with someone
              else or with a bot.
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
              An anime (episode release) countdown bot for discord. <br></br>{" "}
              Puppeteer is used to retrieve data from an external source and
              discord.js allows us to communicate and display the data to user.
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
  );
}

export default Projects;
