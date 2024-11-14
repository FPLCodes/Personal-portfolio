import SocialLiteDemo from "../public/projects/SocialLite demo.gif";
import TetrisTS from "../public/projects/tetrisTS.png";
import TrickyTacToeDemo from "../public/projects/tricky-tac-toe demo.gif";
import Mintopia from "../public/projects/mintopia.gif";
import KanbanCrew from "../public/projects/kanban-crew.gif";
import Project from "./Project";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col w-full gap-y-72 mt-40 px-2 md:px-0"
    >
      <Project
        title="SocialLite"
        image={SocialLiteDemo}
        github="https://github.com/FPLCodes/SocialLite"
        description="Connect instantly with others using SocialLite, powered by VueJS for seamless interactivity. Enjoy secure login via Firebase
        and real-time chat with messages safeguarded in Firestore."
        tags={["JavaScript", "Vue.js", "Firebase", "MongoDB"]}
      />

      <Project
        title="KanbanCrew"
        image={KanbanCrew}
        github="https://github.com/SilverMarcs/KanbanCrew"
        site="https://kanban-crew.vercel.app/"
        description="A project management tool for teams to collaborate and manage tasks efficiently following an Agile Scrum methodology.
        Contains product/sprint backlogs, user stories, sprints, burndown charts, and more."
        tags={[
          "TypeScript",
          "Next.js",
          "TailwindCSS",
          "Firebase",
          "Agile",
          "Scrum",
        ]}
      />

      <Project
        title="Mintopia"
        image={Mintopia}
        github="https://github.com/FPLCodes/Mintopia"
        site="https://mintopia.vercel.app/"
        description="Decentralized platform to create and manage NFTs on the Solana blockchain. Built with modern web technologies and powered by the Metaplex ecosystem, Mintopia simplifies NFT management with a sleek, user-friendly interface."
        tags={[
          "TypeScript",
          "Next.js",
          "TailwindCSS",
          "Solana",
          "Metaplex",
          "Blockchain",
        ]}
      />

      <Project
        title="TetrisTS"
        image={TetrisTS}
        github="https://github.com/FPLCodes/TetrisTS"
        site="https://tetris-ts.netlify.app/"
        description="Reactive and robust rendition of the classic tetris game, employing FRP principles with TypeScript and RxJS for a clean,
        maintainable codebase and a dynamic user experience."
        tags={["TypeScript", "HTML", "CSS", "RxJS", "FRP"]}
      />

      <Project
        title="Tricky-tac-toe"
        image={TrickyTacToeDemo}
        github="https://github.com/FPLCodes/Tricky-tac-toe"
        site="https://tricky-tac-toe.netlify.app/"
        description="Engage with a classic game of Tic-tac-toe, now elevated with an unbeatable AI powered by the minimax algorithm.
        Perfect your strategies and test the limits of possibility."
        tags={["JavaScript", "Svelte", "Algorithm"]}
      />
    </section>
  );
}

export default Projects;
