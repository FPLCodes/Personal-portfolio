import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  image: StaticImageData;
  github: string;
  site?: string;
  description: string;
  tags: Array<string>;
}

export default function Project(props: Props) {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="700"
      data-aos-once="true"
      className="flex just flex-col flex-1 gap-y-2 max-w-7xl lg:max-w-5xl self-center"
    >
      <h1 className="w-full text-3xl">{props.title}</h1>
      <div className="flex flex-col gap-y-2 md:flex-row gap-x-6">
        <div className="w-full flex flex-col row-2 gap-y-6">
          <div className="drop-shadow">
            <Image
              className="rounded"
              src={props.image}
              alt="Short demo gif of SocialLite"
            />
          </div>
          <div
            style={{
              justifyContent: props.site ? "space-between" : "center",
            }}
            className="flex px-4"
          >
            <div className="line">
              <a
                href={props.github}
                target="_blank"
                className="font-bold transition-all github-text"
              >
                GITHUB
              </a>
              <div className="bg-gray-800 w-0 transition-all line-bg"></div>
            </div>

            {props.site ? (
              <div className="line">
                <a
                  href={props.site}
                  target="_blank"
                  className="text-orange-500 font-bold transition-all site-text"
                >
                  LIVE SITE
                </a>
                <div className="bg-orange-500 w-0 transition-all line-bg"></div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <p
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="mb-6 mt-4 md:mt-0 text-lg font-light"
          >
            {props.description}
          </p>
          <div>
            <div className="flex flex-wrap gap-x-3 gap-y-3 text-xs lg:text-sm lg:font-medium cursor-default">
              {props.tags.map((tag, idx) => (
                <p
                  key={idx}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-delay={((idx + 1) * 100).toString()}
                  data-aos-once="true"
                  className="py-2 px-3 rounded-lg text-orange-400 transition-all duration-300 bg-orange-100 hover:bg-orange-200 hover:shadow-md"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
