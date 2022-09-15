import Image from "next/image";
import ffc1 from "../public/fcc1.jpg";
import ffc2 from "../public/fcc2.jpg";

function Certificates() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      className="mt-48 w-full md:px-4"
    >
      <h1 className="text-4xl font-bold text-orange-500">Certificates</h1>
      <div className="flex flex-col md:grid grid-cols-2 xl:grid-cols-4 gap-12 pt-16">
        <a
          className="border-4 transition-all drop-shadow hover:drop-shadow-md hover:border-orange-300 duration-500"
          href="https://www.freecodecamp.org/certification/fplcodes/responsive-web-design"
          target="_blank"
        >
          <Image src={ffc1} />
        </a>

        <a
          className="border-4 transition-all drop-shadow hover:drop-shadow-md hover:border-orange-300 duration-500"
          href="https://www.freecodecamp.org/certification/fplcodes/javascript-algorithms-and-data-structures"
          target="_blank"
        >
          <Image src={ffc2} />
        </a>

        <a
          className="border-4 transition-all drop-shadow hover:drop-shadow-md hover:border-orange-300 duration-500"
          href="https://www.sololearn.com/certificates/course/en/16832789/1158/landscape/png"
          target="_blank"
        >
          <img src="https://www.sololearn.com/certificates/course/en/16832789/1158/landscape/png" />
        </a>

        <a
          className="border-4 transition-all drop-shadow hover:drop-shadow-md hover:border-orange-300 duration-500"
          href="https://www.sololearn.com/certificates/course/en/16832789/1024/landscape/png"
          target="_blank"
        >
          <img src="https://www.sololearn.com/certificates/course/en/16832789/1024/landscape/png" />
        </a>
      </div>
    </section>
  );
}

export default Certificates;
