import SocialLiteDemo from "../public/projects/SocialLite demo.gif";
import TetrisTS from "../public/projects/TetrisTS.png";
import TrickyTacToeDemo from "../public/projects/tricky-tac-toe demo.gif";
import DiscrdClone from "../public/projects/discord-clone.png";
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
        title="Discord Landing Page Clone"
        image={DiscrdClone}
        github="https://github.com/FPLCodes/Discord-Clone"
        site="https://discord-replica.vercel.app/"
        description="Experience a pixel-perfect Discord landing page clone crafted with Next.js, styled by TailwindCSS, 
        and enhanced with HeadlessUI components. It's fully responsive and spans multiple pages for a comprehensive navigation experience."
        tags={["TypeScript", "Next.js", "TailwindCSS", "HeadlessUI"]}
      />

      <Project
        title="AniCountdown bot"
        image={AniCountdown}
        github="https://github.com/FPLCodes/Anime-Countdown-Bot"
        description="Stay ahead with an anime release countdown bot for Discord. Leveraging Puppeteer for live data retrieval and discord.js 
        for dynamic display, never miss an episode drop again."
        tags={["JavaScript", "Discord.js", "Puppeteer"]}
      />

      <Project
        title="US-GDP Data Visualisation"
        image={US_GDP}
        github="https://github.com/FPLCodes/US-GPD"
        site="https://us-gdp.netlify.app/"
        description="Explore economic history with an interactive web app showcasing the GDP of the United States from 1947-2015 
        through a dynamic bar chart."
        tags={["JavaScript", "React.js", "D3"]}
      />
    </section>
  );
}

export default Projects;
