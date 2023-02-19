import Image from "next/image";
import Cplusplus from "../public/cplusplus.png";
import Python from "../public/python.png";

function Skills() {
  return (
    <section className="mt-48 w-full md:px-4">
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
        className="text-4xl font-bold text-orange-500"
      >
        Skills
      </h1>
      <div className="flex flex-col gap-y-6 w-full justify-around md:justify-around pt-16">
        <ul className="pt-3 sm:px-6 flex flex-col gap-14 w-full text-center">
          <li
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="space-y-10"
          >
            <p className="text-center sm:text-left text-lg font-bold">
              Languages
            </p>
            <div className="flex flex-wrap gap-6 sm:px-8 justify-center sm:justify-start">
              <div className="transition-all hover:scale-105">
                <img src="js.png" width={"75px"} alt="Javascript icon" />
                <p>JavaScript</p>
              </div>

              <div className="transition-all hover:scale-105 flex flex-col">
                <Image src={Python} width="75" height="75" alt="Python icon" />
                <p>Python</p>
              </div>

              <div className="transition-all hover:scale-105 flex flex-col">
                <img
                  src="https://www.svgrepo.com/show/353924/java.svg"
                  width="75px"
                  alt="Java icon"
                />
                <p>Java</p>
              </div>

              <div className="transition-all hover:scale-105 flex flex-col">
                <Image src={Cplusplus} width="75" height="75" alt="C++ icon" />
                <p>C++</p>
              </div>
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="space-y-10"
          >
            <p className="text-center sm:text-left text-lg font-bold">
              Front-end
            </p>
            <div className="flex flex-wrap gap-6 sm:px-8 justify-center sm:justify-start">
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/7866/html.svg"
                  width="75px"
                  alt="HTML icon"
                />
                <p>HTML</p>
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/134149/css.svg"
                  width="75px"
                  alt="CSS icon"
                />
                <p>CSS</p>
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/354259/react.svg"
                  width="75px"
                  alt="React icon"
                />
                <p>React</p>
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/354528/vue.svg"
                  width="75px"
                  alt="Vue icon"
                />
                <p>Vue</p>
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/374109/svelte.svg"
                  width="75px"
                  alt="Svelte icon"
                />
                <p>Svelte</p>
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
                  width="75px"
                  alt="Tailwind icon"
                />
                <p>Tailwind</p>
              </div>
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="space-y-10"
          >
            <p className="text-center sm:text-left text-lg font-bold">
              Back-end
            </p>
            <div className="flex flex-wrap gap-6 sm:px-8 justify-center sm:justify-start">
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/354118/nodejs.svg"
                  width="75px"
                  alt="Node icon"
                />
                <p>Node</p>
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/376367/express.svg"
                  width="75px"
                  alt="Express icon"
                />
                <p>Express</p>
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/353735/firebase.svg"
                  width="75px"
                  alt="Firebase icon"
                />
                <p>Firebase</p>
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/373307/mongodb-opened.svg"
                  width="75px"
                  alt="MongoDB icon"
                />
                <p>MongoDB</p>
              </div>
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="space-y-10"
          >
            <p className="text-center sm:text-left text-lg font-bold">Others</p>
            <div className="flex flex-wrap gap-6 sm:px-8 justify-center sm:justify-start">
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/374171/vscode.svg"
                  width="75px"
                  alt="VSCode icon"
                />
                <p>VSCode</p>
              </div>

              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/373623/git.svg"
                  width="75px"
                  alt="Git icon"
                />
                <p>Git</p>
              </div>

              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/303239/raspberry-pi-logo.svg"
                  width="75px"
                  alt="Raspberry pi icon"
                  className="mx-auto"
                />
                <p>Raspberry pi</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
