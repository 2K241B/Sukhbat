import { Menu, MoonStar, Sun } from 'lucide-react';

const s = '<SS/>';
const changeTheme = () => {
  document.documentElement.classList.toggle('dark');
};
export const Navbar = () => {
  return (
    <div className=" dark:bg-[#030712] items-center md:pt-4 md:pb-4 md:px-28 md:items-center md:font-medium md:flex md:justify-between">
      <div className="flex justify-between items-center p-4 md:p-0 border-b-[1px] md:border-none dark:border-[#1F2937]">
        <p className="text-gray-900 text-3xl font-bold dark:text-[#F9FAFB]">
          {s}
        </p>
        <Menu strokeWidth={2} className="md:hidden text-gray-600 " />
      </div>
      <div
        id="menuku"
        className=" p-4 gap-2 flex flex-col md:flex-row cursor-pointer md:flex md:text-gray-600 md:gap-x-6 md:text-base md:items-center dark:text-[#F9FAFB] md:p-0 absolute  md:z-0 md:relative w-[100%] md:w-auto dark:bg-[#030712] bg-[#FFFFFF] h-[830px] md:h-auto z-[-1]"
      >
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
        <svg
          className="hidden md:flex"
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="24"
          viewBox="0 0 1 24"
          fill="none"
        >
          <line x1="0.5" y1="24" x2="0.5" stroke="#F3F4F6" />
        </svg>

        <div
          id="menuka"
          className="flex md:items-center flex-col md:flex-row p-6 gap-4 md:p-0 absolute top-[222px] w-[100%] md:z-0 dark:bg-[#030712] bg-[#FFFFFF]  md:relative md:w-auto md:top-0 md:h-auto z-[-1] border-t-[1px] md:border-none dark:border-[#1F2937]"
        >
          <div className="flex flex-row justify-between items-center gap-4 md:gap-x-6 md:items-center md:p-6 dark:text-[#F9FAFB]">
            <p className="md:hidden">Switch Theme</p>
            <Sun onClick={changeTheme} className="dark:hidden cursor-pointer" />
            <MoonStar
              onClick={changeTheme}
              className="hidden dark:flex cursor-pointer"
            />
          </div>
          <button className="dark:bg-[#F9FAFB] w-[100%] dark:text-[#111827] bg-gray-900 text-gray-50 text-base h-[36px] md:w-[136px] rounded-xl ">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
