import Image from "next/image";
import ffc1 from "../public/fcc1.jpg";
import ffc2 from "../public/fcc2.jpg";

const certificates = [
  {
    src: ffc1,
    href: "https://www.freecodecamp.org/certification/fplcodes/responsive-web-design",
  },
  {
    src: ffc2,
    href: "https://www.freecodecamp.org/certification/fplcodes/javascript-algorithms-and-data-structures",
  },
  {
    src: "https://www.sololearn.com/certificates/course/en/16832789/1158/landscape/png",
    href: "https://www.sololearn.com/certificates/course/en/16832789/1158/landscape/png",
    width: 1754,
    height: 1238,
    alt: "Sololarn Intermediate Python certificate",
  },
  {
    src: "https://www.sololearn.com/certificates/course/en/16832789/1024/landscape/png",
    href: "https://www.sololearn.com/certificates/course/en/16832789/1024/landscape/png",
    width: 1754,
    height: 1238,
    alt: "Sololarn JavaScript certificate",
  },
];

function Certificates() {
  return (
    <section className="mt-48 w-full md:px-4">
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-once="true"
        className="text-4xl font-bold text-orange-500"
      >
        Certificates
      </h1>
      <div className="flex flex-col md:grid grid-cols-2 xl:grid-cols-4 gap-12 pt-16">
        {certificates.map((certificate, index) => (
          <a
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={((index + 1) * 200).toString()}
            data-aos-once="true"
            key={index}
            className="border-4 transition-all drop-shadow hover:drop-shadow-md hover:border-orange-300 duration-500 flex"
            href={certificate.href}
            target="_blank"
          >
            <Image
              src={certificate.src}
              width={certificate.width}
              height={certificate.height}
              alt={certificate.alt}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
