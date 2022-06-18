import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Sahab Ul Ferdous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 xl:px-40 text-center">
        <header className="flex flex-col gap-y-6 h-screen w-full justify-center text-left">
          <h1 className="text-5xl xl:text-6xl max-w-xl">Hello 👋 I'm</h1>
          <h1 className="text-5xl xl:text-6xl max-w-xl">Sahab Ul Ferdous</h1>
          <h2 className="text-3xl xl:text-4xl max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </header>
        <section className="flex flex-col w-full gap-y-40">
          <div className="flex flex-col flex-1 gap-y-2">
            <h1 className="w-max text-2xl">Project 1</h1>
            <div className="flex gap-x-3 w-max">
              <img
                src="https://downey.co.nz/wp-content/uploads/2015/09/awards-grey-box-large.jpg"
                width={"200px"}
                height={"200px"}
              />
              <div>
                <p className="w-40 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-around">
                  <p>GITHUB</p>
                  <p>WEBSITE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-y-2">
            <h1 className="w-max text-2xl self-end">Project 2</h1>
            <div className="flex gap-x-3 w-max self-end">
              <div>
                <p className="w-40 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-around">
                  <p>GITHUB</p>
                  <p>WEBSITE</p>
                </div>
              </div>
              <img
                src="https://downey.co.nz/wp-content/uploads/2015/09/awards-grey-box-large.jpg"
                width={"200px"}
                height={"200px"}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex h-12 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
