import Iconstitle from './Iconstitle';

export const Skills = () => {
  return (
    <div className=" dark:text-[#D1D5DB] dark:bg-[#030712] pt-16 pr-4 pl-4 pb-16 md:pr-32 md:pl-32 md:pt-24 md:pb-24 md:flex md:flex-col md:items-center">
      <div className="  flex justify-center mb-4">
        <button className="dark:text-[#D1D5DB] dark:bg-[#374151] bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium">
          Skills
        </button>
      </div>
      <p className=" dark:text-[#D1D5DB] text-lg text-gray-600 font-normal text-center mb-6 md:mb-12">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-wrap justify-between gap-11 md:gap-20 md:max-w-[1280px]">
        <Iconstitle />
      </div>
    </div>
  );
};
