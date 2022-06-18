import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Sahab Ul Ferdous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 xl:px-40 text-left">
        <header className="flex flex-col gap-y-6 h-screen w-full justify-center text-middle">
          <div>
            <h1 className="text-5xl xl:text-6xl max-w-xl">Hello 👋 I'm</h1>
            <h1 className="text-5xl xl:text-6xl max-w-xl">Sahab Ul Ferdous</h1>
          </div>
          <h2 className="text-3xl xl:text-4xl max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </header>
        <section className="flex flex-col w-full gap-y-60 mt-40">
          <div
            id="project1"
            className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-1/2 self-center md:self-start"
          >
            <h1 className="w-max text-2xl">Project 1</h1>
            <div className="flex flex-col md:flex-row gap-x-3 w-full">
              <img
                src="https://downey.co.nz/wp-content/uploads/2015/09/awards-grey-box-large.jpg"
                className={"self-center md:w-64"}
              />
              <div className="w-full flex flex-col justify-between">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-around">
                  <p className="font-bold">GITHUB</p>
                  <p className="text-orange-500">DEMO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-1/2  self-center md:self-end">
            <h1 className="w-max text-2xl">Project 2</h1>
            <div className="flex flex-col md:flex-row gap-x-3 w-full">
              <img
                src="https://downey.co.nz/wp-content/uploads/2015/09/awards-grey-box-large.jpg"
                className={"self-center md:w-64"}
              />
              <div className="w-full flex flex-col justify-between">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-around">
                  <p className="font-bold">GITHUB</p>
                  <p className="text-orange-500">DEMO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60 w-full">
          <h1 className="text-3xl text-orange-500">Skills</h1>
          <div className="flex flex-wrap gap-y-4 w-full justify-around md:justify-around pt-16">
            <div className="w-1/2 md:w-max">
              <h2 className="font-bold text-xl">Languages</h2>
              <ul className="pt-3">
                <li>o JavaScript</li>
                <li>o Python</li>
                <li>o C++</li>
                <li>o C</li>
              </ul>
            </div>

            <div className="w-1/2 md:w-max">
              <h2 className="font-bold text-xl">Technologies</h2>
              <ul className="pt-3">
                <li>o React</li>
                <li>o Vue</li>
                <li>o Firebase</li>
                <li>o MongoDB</li>
              </ul>
            </div>

            <div className="w-1/2 md:w-max">
              <h2 className="font-bold text-xl">Tools</h2>
              <ul className="pt-3">
                <li>o VSCode</li>
                <li>o Git</li>
                <li>o Heroku</li>
              </ul>
            </div>

            <div className="w-1/2 md:w-max">
              <h2 className="font-bold text-xl">Design</h2>
              <ul className="pt-3">
                <li>o Photoshop</li>
                <li>o Figma</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex gap-x-4 h-14 w-full items-center justify-center border-t mt-24">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ fontSize: 23, color: "dodgerblue" }}
        />
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 23 }} />
        <FontAwesomeIcon
          icon={faYoutube}
          style={{ fontSize: 23, color: "red" }}
        />
      </footer>
    </div>
  );
};

export default Home;
