import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            {/* <span className="text-xl text-green-500">Welcome</span> */}
            <div className="flex space-x-0 text-2xl md:text-4xl flex-col space-y-0 ">
              <h1>Hello, I'm Adnan Kundlik,</h1> <br />
             
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["a Developer", " a Programmer", " a Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="p-10 sm:p-0 text-sm md:text-md text-justify">
            <p className="mb-1">Aspiring Software Engineer
            </p>
            <p>
            Hi, I'm <span className="font-bold ">Adnan Kundlik</span> , a passionate coder and aspiring software developer. I am an enthusiastic beginner working towards becoming an Associate Software Engineer. With a passion for technology and problem-solving, I am committed to developing my skills and learn something new everyday and gain knowledge in software development. My journey is driven by a desire to create efficient and innovative software solutions.

            </p>
              

            
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  
                  <li>
                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/akk1310" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/u/AdnanKundlik/" target="_blank">
                      <SiLeetcode className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.naukri.com/code360/profile/Adnansaviour" target="_blank">
                      <SiCodingninjas className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
              <div className="rounded-xl  bg-black text-white p-3 border w-fit"> <a target="_blank" href="https://drive.google.com/file/d/11XO-cUGwsqhI_DppQWZUMhAh-L1yv3lj/view">Download Resume</a> </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1  flex justify-center">
            <img
              src="man2.gif"
              className=" md:w-[450px] md:h-[450px]"
              alt="profile_gif"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
