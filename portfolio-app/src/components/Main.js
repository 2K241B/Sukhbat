import Sagar from '../assets/Sagar.png';
import profile768 from '../assets/Profile768.png';
import { MapPin, Dot, Github, Twitter, Figma } from 'lucide-react';

const Main = () => {
  return (
    <div className="pr-4 pl-4 pt-16 pb-12 flex flex-col justify-center md:flex-row-reverse md:pr-32 md:pl-32 md:pt-24 md:pb-24">
      <div className="flex justify-center items-center">
        <img
          className="mb-12 flex min-w-[280px] min-h-[300px] md:hidden"
          src={Sagar}
          alt="Profile"
        />
        <img
          className="hidden md:flex max-w-[400px] max-h-[360px]"
          src={profile768}
        ></img>
      </div>
      <div className="mr-0 md:mr-12 text-justify">
        <h1 className="text-4xl mb-2 font-bold md:text-6xl">
          Hi, I’m Sagar 👋
        </h1>
        <p className="text-base text-gray-600 font-normal mb-12">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="text-gray-600 mb-12 ">
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
        <div className="flex text-gray-600 gap-4">
          <Github />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
};
export default Main;
