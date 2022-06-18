import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
          <div className="self-center absolute bottom-20">
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ fontSize: 30, color: "orange" }}
            />
          </div>
        </header>
        <section className="flex flex-col w-full gap-y-40 mt-40">
          <div className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-1/2 self-center md:self-start">
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
                  <p>GITHUB</p>
                  <p>DEMO</p>
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
                  <p>GITHUB</p>
                  <p>DEMO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section></section>
      </main>

      <footer className="flex h-12 w-full items-center justify-center border-t mt-16"></footer>
    </div>
  );
};

export default Home;
