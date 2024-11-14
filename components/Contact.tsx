import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDiscord,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      className="mt-48 mb-10 w-full px-2 md:px-4"
    >
      <h1 className="text-4xl text-orange-500 font-bold mb-8">Get in touch</h1>

      <div className="flex flex-col md:flex-row md:items-center">
        <div className="space-y-8 w-full md:w-1/2 font-light">
          <div className="bg-zinc-100 flex gap-x-2 place-items-center p-4 rounded-md">
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 22 }} />
            <p>sahabferdous1@gmail</p>
          </div>

          <a
            href="https://github.com/FPLCodes"
            target="_blank"
            className="bg-zinc-100 flex gap-x-2 place-items-center p-4 rounded-md transition duration-300 hover:shadow hover:bg-zinc-200"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: 24 }} />
            <p>FPLCodes</p>
          </a>

          <a
            href="https://www.linkedin.com/in/sahab-ul-ferdous/"
            target="_blank"
            className="bg-zinc-100 flex gap-x-2 place-items-center p-4 rounded-md transition duration-300 hover:shadow hover:bg-zinc-200"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 24 }} />
            <p>Sahab Ul Ferdous</p>
          </a>

          <div className="bg-zinc-100 flex gap-x-2 place-items-center p-4 rounded-md">
            <FontAwesomeIcon icon={faDiscord} style={{ fontSize: 20 }} />
            <p>FPLogistic#7999</p>
          </div>
        </div>

        <div className="bg-gray-300 hidden md:block w-1 h-48 rounded-xl place-self-center mx-10 lg:mx-20 2xl:mx-32"></div>

        <form
          className="kwes-form md:w-1/2 space-y-8 py-10 md:py-0"
          action="https://kwesforms.com/api/foreign/forms/VYUaY10qgL1m56DMgych"
        >
          <div className="flex flex-col gap-y-2">
            <label className="text-lg font-light" htmlFor="name">
              Name
            </label>
            <input
              className="border-2 rounded-md h-12 px-2 bg-zinc-50"
              type="text"
              name="name"
              required
            ></input>
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-lg font-light" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 rounded-md h-12 px-2 bg-zinc-50"
              type="email"
              name="email"
              required
            ></input>
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-lg font-light" htmlFor="message">
              Message
            </label>
            <textarea
              className="border-2 rounded-md h-40 px-2 py-2 bg-zinc-50"
              name="message"
              required
            ></textarea>
          </div>

          <button
            className="border-2 w-full lg:w-auto border-orange-400 rounded-md px-6 py-2 text-white transition-all bg-orange-400 hover:bg-orange-500"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
