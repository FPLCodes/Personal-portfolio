import { useEffect, useState } from "react";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Intro() {
  const [option, setOption] = useState(0);
  const [array, setArray] = useState<any[]>([]);

  const changeOption = () => {
    if (option === 3) setOption(0);
    else setOption((option) => option + 1);
  };

  useEffect(() => {
    let delay = 3400;
    if (option === 0) delay = 4800;
    const textChange = setInterval(() => {
      changeOption();
    }, delay);

    return () => {
      clearInterval(textChange);
    };
  }, [option]);

  useEffect(() => {
    let word = "";
    {
      option === 0
        ? (word = "developer")
        : option === 1
        ? (word = "CS student")
        : option === 2
        ? (word = "gamer")
        : (word = "programmer");
    }

    const arr: string[] = [];
    let i = 0;

    const add = setInterval(() => {
      arr.push(word[i]);
      setArray([...arr]);
      i++;
      if (!word[i]) {
        clearInterval(add);
        setTimeout(() => {
          const remove = setInterval(() => {
            arr.pop();
            setArray([...arr]);
            if (!arr[0]) {
              clearInterval(remove);
            }
          }, 50);
        }, 2000);
      }
    }, 50);

    return () => {
      clearInterval(add);
    };
  }, [option]);

  return (
    <header className="flex flex-col gap-y-6 h-screen w-full justify-center text-middle pb-16">
      <div
        data-aos="fade-right"
        data-aos-duration="700"
        data-aos-once="true"
        className="text-5xl xl:text-6xl text-center sm:text-left"
      >
        <h1>Hello, 👋 I'm</h1>
        <h1 className="font-bold">Sahab Ul Ferdous</h1>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="700"
        data-aos-once="true"
        data-aos-delay="100"
        className="text-2xl md:text-3xl xl:text-4xl flex gap-x-2 justify-center sm:justify-start"
      >
        <h2>21 year old</h2>
        <div className="flex gap">
          <b>
            {option === 0 ? (
              <h2 className="text-green-500">{array.join("")}</h2>
            ) : option === 1 ? (
              <h2 className="text-blue-500">{array.join("")}</h2>
            ) : option === 2 ? (
              <h2 className="text-purple-500">{array.join("")}</h2>
            ) : (
              <h2 className="text-red-600">{array.join("")}</h2>
            )}
          </b>
          <p className="type">|</p>
        </div>
      </div>
      <div className="absolute place-self-center bottom-32 transition-all hover:pb-2 animate-bounce">
        <a
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          href="#projects"
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            style={{ fontSize: 32, color: "darkorange" }}
          />
        </a>
      </div>
    </header>
  );
}

export default Intro;
