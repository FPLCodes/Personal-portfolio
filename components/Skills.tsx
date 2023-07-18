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
    ],
  },

  {
    title: "Front-end",
    icons: [
      {
        src: "https://www.svgrepo.com/show/7866/html.svg",
        alt: "HTML icon",
        label: "HTML",
      },
      {
        src: "https://www.svgrepo.com/show/134149/css.svg",
        alt: "CSS icon",
        label: "CSS",
      },
      {
        src: "https://www.svgrepo.com/show/354259/react.svg",
        alt: "React icon",
        label: "React",
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
        src: "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
        alt: "Next.JS icon",
        label: "Next",
      },
      {
        src: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
        alt: "Tailwind icon",
        label: "TailwindCSS",
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
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-once="true"
              className="space-y-10"
            >
              <p className="text-center sm:text-left text-lg font-bold">
                {section.title}
              </p>
              <div className="flex flex-wrap gap-6 sm:px-8 justify-center sm:justify-start">
                {section.icons.map((icon, index) => (
                  <div
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-delay={((index + 1) * 100).toString()}
                    data-aos-once="true"
                    key={index}
                    className="transition-all hover:scale-105"
                  >
                    <Image
                      src={icon.src}
                      width={75}
                      height={75}
                      alt={icon.alt}
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
