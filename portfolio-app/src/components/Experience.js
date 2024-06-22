import Card from './Card';
export const Experience = () => {
  return (
    <div className="pt-16 pr-4 pl-4 pb-16 bg-gray-50 md:pr-32 md:pl-32 md:pt-24 md:pb-24 dark:bg-[#111827]">
      <div className="flex justify-center mb-4">
        <button className="dark:text-[#D1D5DB] dark:bg-[#374151] bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium">
          Experience
        </button>
      </div>
      <p className="dark:text-[#D1D5DB] text-lg text-gray-600 font-normal text-center mb-6 md:mb-12">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className=" flex flex-col justify-center items-center md:flex md:justify-center md:flex-col md:items-center">
        <Card />
      </div>
    </div>
  );
};
