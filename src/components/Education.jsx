import React from "react";

function Education() {
  const eduItems = [
    {
      id: 1,
      link: "https://mu.ac.in/",
      year: "2021-2025",
      degree: "Pursuing B.E Engineering in Computer Science",
      from: "Mumbai University",
    },
    {
      id: 2,
    link: "https://www.udemy.com/certificate/UC-aa42ad18-fff3-4701-bdfc-5ae2b97b59fa/",
      year: "2024",
      degree: "The Complete 2024 Web Development Bootcamp",
      from: "Udemy",
    },
    {
      id: 3,
    link: "https://www.freecodecamp.org/certification/fccc17ef70b-738d-442c-a436-58989a8eb9f6/responsive-web-design",
      year: "2024",
      degree: "Responsive Web Design",
      from: "freeCodeCamp",
    },
    {
      id: 4,
      link: "https://www.udemy.com/certificate/UC-11f51383-b6e7-44dc-a160-6e7743a71d92/",
      year: "2023",
      degree: "Introduction to Programming Using Python",
      from: "Udemy",
    },
    
  ];
  return (
    <div
      name="Education"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
       <h1 className="text-3xl font-bold mb-5 text-center">Education</h1>
      <div className="education-containers flex gap-5 flex-wrap flex-col lg:flex-row justify-center items-center">
      {eduItems.map(({ id, link,year,degree,from }) => (
                <div key={id} className="details-container h-48 min-w-1/3 border md:h-64 border-black p-5 sm:p-3 md:p-10 rounded-md w-[90%] sm:w-1/2 md:w-1/2 lg:w-1/3 bg-zinc-100">
                <a className="flex flex-col gap-2 p-5 sm:p-0 lg:p-5 " target="_blank" href={link}>
                <span className="text-green-500">{year}</span>
                <h2 className="text-lg md:text-xl ">{degree}</h2>
                <li className="text-sm text-gray-500">{from}</li>
                </a>
              </div>
                
              ))}</div>
      
    </div>
  );
}

export default Education;
