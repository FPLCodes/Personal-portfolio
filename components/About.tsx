function About() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      className="mt-60 w-full md:px-4"
    >
      <h1 className="text-4xl font-bold text-orange-500">About me</h1>
      <div className="pt-16 font-light space-y-6 lg:w-2/3">
        <p>
          Hey there, I'm Sahab. I love coding and pretty much any tech related
          stuff 👨‍💻
        </p>
        <p>
          I've always enjoyed creating things and wanted to create my own video
          game, however I had no idea where to start. <b>For over 2 years</b> I
          used my free time to learn programming languages and new technologies,
          as well as algorithms and data structures through YouTube and online
          courses. During this period I also discovered a newfound love for web
          development.
        </p>
        <p>
          <b>When I'm not coding</b> I'm probably gaming, watching anime, or
          working out 💪
        </p>
        <p>
          Fun fact, I have a gaming{" "}
          <a
            className="text-red-500 hover:text-red-300"
            href="https://www.youtube.com/c/FPLogistic"
            target="_blank"
          >
            YouTube channel!
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
