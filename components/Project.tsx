import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  image: StaticImageData;
  github: string;
  site?: string;
  description: string;
  tags: Array<string>;
  transition: string;
}

export default function Project(props: Props) {
  return (
    <div
      data-aos={props.transition}
      data-aos-duration="700"
      data-aos-once="true"
      className="flex flex-col flex-1 gap-y-2 w-5/6 lg:w-2/3 xl:1/2 self-center"
    >
      <h1 className="w-full text-3xl">{props.title}</h1>
      <div className="flex flex-col gap-y-2 md:flex-row gap-x-5">
        <div className="w-full flex flex-col row-2 gap-y-6">
          <Image
            className="rounded"
            src={props.image}
            alt="Short demo gif of SocialLite"
          />
          <div className="flex justify-between px-4">
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
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <p
            data-aos={props.transition}
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="mb-4 text-lg font-light"
          >
            {props.description}
          </p>
          <div>
            <div className="flex flex-wrap gap-x-3 gap-y-3 text-sm cursor-default">
              {props.tags.map((tag, idx) => (
                <p
                  data-aos={props.transition}
                  data-aos-duration="500"
                  data-aos-delay={((idx + 1) * 100).toString()}
                  data-aos-once="true"
                  className="py-2 px-3 rounded-lg text-orange-400 font-medium transition-all duration-300 bg-orange-100 hover:bg-orange-200 hover:shadow-md"
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
