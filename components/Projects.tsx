import SocialLiteDemo from "../public/SocialLite demo.gif";
import TrickyTacToeDemo from "../public/tricky-tac-toe demo.gif";
import DiscrdClone from "../public/discord-clone.png";
import AniCountdown from "../public/AniCountdown.png";
import US_GDP from "../public/US-GDP.png";
import Project from "./Project";

function Projects() {
  return (
    <section id="projects" className="flex flex-col w-full gap-y-72 pt-40">
      <Project
        title="SocialLite"
        image={SocialLiteDemo}
        github="https://github.com/FPLCodes/SocialLite"
        site="https://social-lite-app.herokuapp.com/"
        description="An online messaging platform created using VueJS. User authentication is handled by Firebase 
        and messages are sent and stored in Firestore."
        tags={["JavaScript", "Vue.js", "Firebase", "MongoDB"]}
      />

      <Project
        title="Tricky-tac-toe"
        image={TrickyTacToeDemo}
        github="https://github.com/FPLCodes/Tricky-tac-toe"
        site="https://tricky-tac-toe.netlify.app/"
        description="Tic-tac-toe but with an AI implemented with minimax algorithm, making it impossible to beat."
        tags={["JavaScript", "Svelte", "Algorithm"]}
      />

      <Project
        title="Discord Clone"
        image={DiscrdClone}
        github="https://github.com/FPLCodes/Discord-Clone"
        site="https://discord-replica.vercel.app/"
        description="Discord landing page clone created with Next.js, TailwindCSS, and HeadlessUI. A Project aimed at improving my front-end development skills."
        tags={["TypeScript", "Next.js", "TailwindCSS", "HeadlessUI"]}
      />

      <Project
        title="AniCountdown bot"
        image={AniCountdown}
        github="https://github.com/FPLCodes/Anime-Countdown-Bot"
        site="https://tricky-tac-toe.netlify.app/"
        description="An anime (episode release) countdown bot for discord.
        Puppeteer is used to retrieve data from an external source and
        discord.js allows us to communicate and display the data to user."
        tags={["JavaScript", "Discord.js", "Puppeteer"]}
      />

      <Project
        title="US-GDP Data Visualisation"
        image={US_GDP}
        github="https://github.com/FPLCodes/US-GPD"
        site="https://us-gdp.netlify.app/"
        description="An interactive bar chart web app representing the GPD of the
        United States from 1947-2015."
        tags={["JavaScript", "React.js", "D3"]}
      />
    </section>
  );
}

export default Projects;
