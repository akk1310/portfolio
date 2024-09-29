import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";

import javascript from "../../public/javascript.png";

function Skills() {
  //   const cardItem = [
  //     {
  //       id: 1,
  //       logo: html,
  //       name: "MongoDB",
  //     },
  //     {
  //       id: 2,
  //       logo: css,
  //       name: "CSS",
  //     },
  //     {
  //       id: 3,
  //       logo: java,
  //       name: "Java",
  //     },
  //     {
  //       id: 4,
  //       logo: javascript,
  //       name: "JavaScript",
  //     },
  //     {
  //       id: 5,
  //       logo: oracle,
  //       name: "Oracle",
  //     },
  //     {
  //       id: 6,
  //       logo: spring,
  //       name: "Spring",
  //     },
  //     {
  //       id: 7,
  //       logo: springBoot,
  //       name: "Spring Boot",
  //     },
  //   ];
  return (


    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 border-t-2 p-5"
    >
      <div className="container" >
        <p className="section__text__p1 text-center">Explore My</p>
        <h1 className="title text-center text-2xl">Experience</h1>

        <div className="about-containers flex flex-col items-center xl:items-stretch xl:flex-row gap-10 mt-10">
          <div className="h-{500} details-container border-2 w-[90%] sm:w-[70%] xl:w-[48%] rounded-3xl p-10 border-gray-500">
            <h2 className="experience-sub-title text-xl text-center text-gray-600">Frontend Development</h2>
            <div className="article-container grid lg:grid-cols-2 gap-10 mt-10 items-center justify-center">

              <article className="flex gap-2">
                <img
                  src={html}
                  alt="Experience icon"
                  className="icon w-20 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className="flex gap-2">
                <img
                  src={css}
                  alt="Experience icon"
                  className="icon w-20 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article className="flex gap-2">
                <img
                  src={javascript}
                  alt="Experience icon"
                  className="icon w-20 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article className="flex gap-2">
                <img
                  src="react.svg"
                  alt="Experience icon"
                  className="icon w-20 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article className="flex gap-2">
                <img
                  src="tailwindcss-icon.svg"
                  alt="Experience icon"
                  className="icon w-20 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>Tailwind Css</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article className="flex gap-2">
                <img
                  src="bootstrap.png"
                  alt="Experience icon"
                  className="icon w-20 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Experienced</p>
                </div>
              </article>

              <article className="flex gap-2">
                <img
                  src="nextjs-icon.svg"
                  alt="Experience icon"
                  className="icon w-20 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>NextJs</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              
            </div>
          </div>
          <div className="h-{500} details-container border-2 w-[90%] sm:w-[70%] xl:w-[48%] rounded-3xl p-10 border-gray-500">
            <h2 className="experience-sub-title text-xl text-center text-gray-600">Backend Development</h2>
            <div className="article-container grid lg:grid-cols-2 gap-10 mt-10 items-center justify-center">

              <article className="flex gap-2">
                <img
                  src="mongodb.jpg"
                  alt="Experience icon"
                  className="icon w-28 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>Mongodb</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article className="flex gap-2">
                <img
                  src="express.svg"
                  alt="Experience icon"
                  className="icon w-28 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article className="flex gap-2">
                <img
                  src="nodejs.svg"
                  alt="Experience icon"
                  className="icon w-28 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>NodeJS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article className="flex gap-2">
                <img
                  src="git.svg"
                  alt="Experience icon"
                  className="icon w-28 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article className="flex gap-2">
                <img
                  src="github-icon.svg"
                  alt="Experience icon"
                  className="icon w-24 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>GitHub</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article className="flex gap-2">
                <img
                  src="python.svg"
                  alt="Experience icon"
                  className="icon w-24 cursor-pointer hover:scale-110 duration-300"
                />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>

        </div>
       
      </div>
      
    </div>

  );
}

export default Skills;
