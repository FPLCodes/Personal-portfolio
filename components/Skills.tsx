import Image from "next/image";

const sections = [
  {
    title: "Languages",
    icons: [
      {
        src: "js.png",
        alt: "JavaScript icon",
        label: "JavaScript",
      },
      {
        src: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
        alt: "TypeScript icon",
        label: "TypeScript",
      },
      {
        src: "python.png",
        alt: "Python icon",
        label: "Python",
      },
      {
        src: "https://www.svgrepo.com/show/353924/java.svg",
        alt: "Java icon",
        label: "Java",
      },
      {
        src: "cplusplus.png",
        alt: "C++ icon",
        label: "C++",
      },
      {
        src: "https://www.svgrepo.com/show/373660/haskell.svg",
        alt: "Haskell icon",
        label: "Haskell",
      },
    ],
  },

  {
    title: "Front-end",
    icons: [
      {
        src: "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
        alt: "Next.JS icon",
        label: "Next",
      },
      {
        src: "https://www.svgrepo.com/show/354259/react.svg",
        alt: "React icon",
        label: "React",
      },
      {
        src: "react-native.png",
        alt: "React Native icon",
        label: "React Native",
      },
      {
        src: "flutter.png",
        alt: "Flutter icon",
        label: "Flutter",
      },
      {
        src: "https://www.svgrepo.com/show/354528/vue.svg",
        alt: "Vue.js icon",
        label: "Vue",
      },
      {
        src: "https://www.svgrepo.com/show/374109/svelte.svg",
        alt: "Svelte icon",
        label: "Svelte",
      },
      {
        src: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
        alt: "Tailwind icon",
        label: "TailwindCSS",
      },
      {
        src: "https://www.svgrepo.com/show/508915/flask.svg",
        alt: "Flask icon",
        label: "Flask",
      },
    ],
  },
  {
    title: "Back-end",
    icons: [
      {
        src: "https://www.svgrepo.com/show/354118/nodejs.svg",
        alt: "Node icon",
        label: "Node",
      },
      {
        src: "https://www.svgrepo.com/show/376367/express.svg",
        alt: "Express icon",
        label: "Express",
      },
      {
        src: "https://www.svgrepo.com/show/353735/firebase.svg",
        alt: "Firebase icon",
        label: "Firebase",
      },
      {
        src: "https://www.svgrepo.com/show/373307/mongodb-opened.svg",
        alt: "MongoDB icon",
        label: "MongoDB",
      },
      {
        src: "postman.svg",
        alt: "Postman icon",
        label: "Postman",
      },
    ],
  },
  {
    title: "Others",
    icons: [
      {
        src: "https://www.svgrepo.com/show/374171/vscode.svg",
        alt: "VSCode icon",
        label: "VSCode",
      },
      {
        src: "https://www.svgrepo.com/show/373623/git.svg",
        alt: "Git icon",
        label: "Git",
      },
      {
        src: "https://www.svgrepo.com/show/303239/raspberry-pi-logo.svg",
        alt: "Raspberry pi icon",
        label: "Raspberry pi",
      },
      {
        src: "solana.png",
        alt: "Solana icon",
        label: "Solana",
      },
    ],
  },
];

function Skills() {
  return (
    <section className="mt-48 w-full px-2 md:px-4">
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
          {sections.map((section) => (
            <li
              key={section.title}
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-once="true"
              className="space-y-2"
            >
              <p className="text-center sm:text-left text-lg font-bold">
                {section.title}
              </p>
              <div className="flex flex-wrap gap-6 h-36 items-center sm:px-8 justify-center sm:justify-start">
                {section.icons.map((icon, index) => (
                  <div
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-delay={((index + 1) * 100).toString()}
                    data-aos-once="true"
                    key={index}
                    className="my-2 overflow-visible"
                  >
                    <Image
                      src={icon.src}
                      width={75}
                      height={75}
                      alt={icon.alt}
                      className="transition-all duration-300 hover:-translate-y-1"
                    />
                    <p>{icon.label}</p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
