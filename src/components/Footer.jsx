import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

function Footer() {
  const d = new Date();
  let year = d.getFullYear(); 
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
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
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; {year} . All rights reserved.
              </p>
              <p className="text-sm">❤️Adnan Kundlik ❤️ Made with Love ❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
