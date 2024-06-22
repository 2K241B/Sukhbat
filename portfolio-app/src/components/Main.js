import Sagar from '../assets/Sagar.png';
import SagarDark from '../assets/SagarDark.png';

import profile768 from '../assets/Profile768.png';
import darkSagar768 from '../assets/darkSagar768.png';

import {
  MapPin,
  Github,
  Twitter,
  Figma,
  Sun,
  Menu,
  MoonStar,
} from 'lucide-react';
const s = '<SS/>';
const changeTheme = () => {
  document.documentElement.classList.toggle('dark');
};

export const Main = () => {
  return (
    <>
      <div className=" dark:bg-[#030712] items-center md:pt-4 md:pb-4 md:pl-20 md:pr-20 md:items-center md:font-medium flex justify-between p-4">
        <p className="text-gray-900 text-3xl font-bold dark:text-[#F9FAFB]">
          {s}
        </p>
        <Menu strokeWidth={2} className="md:hidden text-gray-600 " />
        <div className=" cursor-pointer hidden md:flex md:text-gray-600 md:gap-x-6 md:text-base md:items-center dark:text-[#F9FAFB]">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div className="md:flex md:ml-12 md:gap-x-6 md:items-center">
            <Sun onClick={changeTheme} className="dark:hidden cursor-pointer" />
            <MoonStar
              onClick={changeTheme}
              className="hidden dark:flex cursor-pointer"
            />
            <button className="dark:bg-[#F9FAFB] dark:text-[#111827] md:bg-gray-900 md:text-gray-50 md:text-base md:h-[36px] md:w-[136px] md:rounded-xl">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className=" dark:bg-[#030712] dark:text-[#F9FAFB] pr-4 pl-4 pt-16 pb-12 flex flex-col justify-center md:flex-row-reverse md:pr-32 md:pl-32 md:pt-24 md:pb-24">
        <div className="flex justify-center items-center">
          <img
            className="mb-12 flex dark:hidden min-w-[280px] min-h-[300px] md:hidden"
            src={Sagar}
            alt="Profile"
          />
          <img
            className="mb-12 flex min-w-[280px] min-h-[300px] hidden md:hidden md:dark:hidden dark:flex"
            src={SagarDark}
            alt="Profile"
          />
          <img
            className="hidden md:flex max-w-[400px] max-h-[360px] dark:hidden"
            src={profile768}
            alt="Profile768"
          ></img>
          <img
            className="hidden md:dark:flex max-w-[400px] max-h-[360px]"
            src={darkSagar768}
            alt="Profile768"
          ></img>
        </div>
        <div className="mr-0 md:mr-12 text-justify ">
          <h1 className="text-4xl mb-2 font-bold md:text-6xl">
            Hi, I’m Sagar 👋
          </h1>
          <p className="text-base text-gray-600 font-normal mb-12 dark:text-[#D1D5DB]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="text-gray-600 mb-12 dark:text-[#D1D5DB] ">
            <div className="flex items-center gap-2 mb-2">
              <MapPin />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="size-2 bg-[#10B981] rounded-full m-2"
                bg-color-green-600
              ></button>
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex text-gray-600 gap-4 dark:text-[#D1D5DB]">
            <Github />
            <Twitter />
            <Figma />
          </div>
        </div>
      </div>
    </>
  );
};
