import React from "react";
import passlock from "./Images/image1.png";
import blogger from "./Images/l2.png";
import cloudnest from "./Images/l4.png";
import task from "./Images/l5.png";
import fileshare from "./Images/image2.png";
import notes from "./Images/image3.png";
import pomodoro from "./Images/image4.png";
import pong from "./Images/image5.png";
import turt from "./Images/image6.png";
import vibeShare from "./Images/image.png";
function PortFolio() {
  const cardItem = [
     {
      id: 1,
      logo: vibeShare,
      name: "Vibe-SHARE",
      desc:"Video Sharing App(Youtube-Twitter)",
      link:"https://vibeshare-ermv.onrender.com/",
      link1:"https://github.com/akk1310/VibeShare"
    },
    {
      id: 2,
      logo: blogger,
      name: "Blogger",
      desc:"Blog Writing App",
      link:"https://blogger-application-git-main-akk1310s-projects.vercel.app/",
      link1:"https://github.com/akk1310/Blogger-Application"
    },
    {
      id: 3,
      logo: cloudnest,
      name: "Cloud Nest",
      desc:"Cloud Storage App",
      link:"https://cloud-nest-five.vercel.app/",
      link1:"https://github.com/akk1310/CloudNest"
    },
    {
      id: 4,
      logo: task,
      name: "Task Minder",
      desc:"Todo Manager App",
      link:"https://task-minder-gamma.vercel.app/",
      link1:"https://github.com/akk1310/TaskMinder"
    },
    {
      id: 5,
      logo: passlock,
      name: "PassLock",
      desc:"Password Manager App",
      link:"https://akk1310.github.io/passlock/",
      link1:"https://github.com/akk1310/passlock"
    },
    {
      id: 6,
      logo: fileshare,
      name: "File Connect",
      desc:"File Sharing App",
      link:"https://file-trnasfer-frontend10.onrender.com/",
      link1:"https://github.com/akk1310/file-trnasfer"
    },
    {
      id: 7,
      logo: notes,
      name: "Keeper",
      desc:"Notes saving App",
      link:"https://notesloader.netlify.app/",
      link1:"https://github.com/akk1310/notes"
    },
    {
      id: 8,
      logo: pomodoro,
      name: "Pomodro",
      desc:"Pomodro App using Python GUI",
      link:"https://github.com/akk1310/pomodro",
      link1:"https://github.com/akk1310/pomodro"
    },
    {
      id: 9,
      logo: pong,
      name: "Pong",
      desc:"Pong Game using Python GUI",
      link:"https://github.com/akk1310/Pong-game",
      link1:"https://github.com/akk1310/Pong-game"
    },
    {
      id: 10,
      logo: turt,
      name: "Turtle-Crossing ",
      desc:"Turtle Crossing Gameusing Python GUI",
      link:"https://github.com/akk1310/Turtle-crossing",
      link1:"https://github.com/akk1310/Turtle-crossing"

    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <p className="text-center text-gray-500">Browse my Recent Projects</p>
        <h1 className="text-3xl text-center mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1  place-items-center    lg:grid-cols-2  2xl:grid-cols-3 gap-10 my-5">
          {cardItem.map(({ id, logo, name,desc,link,link1 }) => (
            <div
              className="md:w-[400px] md:h-[450px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className=" h-[250px]   border-black  border-[2px] w-full rounded-3xl"
                alt="project_profile"
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {desc}
                 
                </p>
              </div>
              <div className=" px-4 py-4 space-x-3 justify-around">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded">
                  <a target="_blank" href={link1}>
                  Github

                  </a>
                </button>
                <button  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                <a target="_blank" href={link}>
                  Live Demo

                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
