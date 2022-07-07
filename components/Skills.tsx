import Image from "next/image";
import Cplusplus from "../public/cplusplus.png";

function Skills() {
  return (
    <section className="mt-48 w-full px-4">
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
                JavaScript
              </div>

              <div className="transition-all hover:scale-105">
                <img src="python.png" width={"75px"} alt="Python icon" /> Python
              </div>

              <div className="transition-all hover:scale-105 flex flex-col">
                <Image src={Cplusplus} width="75" height="75" alt="C++ icon" />
                C++
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
                HTML
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/134149/css.svg"
                  width="75px"
                  alt="CSS icon"
                />
                CSS
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/354259/react.svg"
                  width="75px"
                  alt="React icon"
                />
                React
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/354528/vue.svg"
                  width="75px"
                  alt="Vue icon"
                />
                Vue
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
                  width="75px"
                  alt="Tailwind icon"
                />
                Tailwind
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
                Node
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/376367/express.svg"
                  width="75px"
                  alt="Express icon"
                />
                Express
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/353735/firebase.svg"
                  width="75px"
                  alt="Firebase icon"
                />
                Firebase
              </div>
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/373307/mongodb-opened.svg"
                  width="75px"
                  alt="MongoDB icon"
                />
                MongoDB
              </div>
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="space-y-10"
          >
            <p className="text-center sm:text-left text-lg font-bold">Tools</p>
            <div className="flex flex-wrap gap-6 sm:px-8 justify-center sm:justify-start">
              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/374171/vscode.svg"
                  width="75px"
                  alt="VSCode icon"
                />
                VSCode
              </div>

              <div className="transition-all hover:scale-105">
                <img
                  src="https://www.svgrepo.com/show/373623/git.svg"
                  width="75px"
                  alt="Git icon"
                />
                Git
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
