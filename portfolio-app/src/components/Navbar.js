import { Menu, MoonStar, Sun } from 'lucide-react';

const s = '<SS/>';
const changeTheme = () => {
  document.documentElement.classList.toggle('dark');
};

export const Navbar = ({ handlerClick }) => {
  return (
    <div className=" dark:bg-[#030712] items-center md:pt-4 md:pb-4 md:pl-20 md:pr-20 md:items-center md:font-medium flex justify-between p-4">
      <p className="text-gray-900 text-2xl md:text-3xl font-bold dark:text-[#F9FAFB]">
        {s}
      </p>
      <Menu
        strokeWidth={2}
        className="md:hidden text-gray-600 cursor-pointer"
        onClick={handlerClick}
      />
      <div className=" cursor-pointer hidden md:flex md:text-gray-600 md:gap-x-6 md:text-base md:items-center dark:text-[#F9FAFB]">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
        <span className="h-6 md:border-r md:border-gray-200 "></span>
        <div className="md:flex  md:gap-x-6 md:items-center">
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
  );
};
