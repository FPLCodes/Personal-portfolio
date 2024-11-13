import SocialLiteDemo from "../public/projects/SocialLite demo.gif";
import TetrisTS from "../public/projects/tetrisTS.png";
import TrickyTacToeDemo from "../public/projects/tricky-tac-toe demo.gif";
import AniCountdown from "../public/projects/AniCountdown.png";
import US_GDP from "../public/projects/US-GDP.png";
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
        title="KabanCrew"
        image={US_GDP}
        site="https://kanban-crew.vercel.app/"
        description="A project management tool for teams to collaborate and manage tasks efficiently following an Agile Scrum methodology.
        Contains product/sprint backlogs, user stories, sprints, burndown charts, and more."
        tags={["TypeScript", "Next.js", "TailwindCSS", "Firebase"]}
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

      <Project
        title="AniCountdown bot"
        image={AniCountdown}
        github="https://github.com/FPLCodes/Anime-Countdown-Bot"
        description="Stay ahead with an anime release countdown bot for Discord. Leveraging Puppeteer for live data retrieval and discord.js
        for dynamic display, never miss an episode drop again."
        tags={["JavaScript", "Discord.js", "Puppeteer"]}
      />
    </section>
  );
}

export default Projects;
