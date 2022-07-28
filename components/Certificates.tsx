import Image from "next/image";
import ffc1 from "../public/fcc1.jpg";
import ffc2 from "../public/fcc2.jpg";

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
      <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-12 pt-16">
        <div className="border-2">
          <Image src={ffc1} />
        </div>

        <div className="border-2">
          <Image src={ffc2} />
        </div>

        <div className="border-2">
          <img src="https://www.sololearn.com/certificates/course/en/16832789/1158/landscape/png" />
        </div>
      </div>
    </section>
  );
}

export default Certificates;
