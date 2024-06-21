import Iconstitle from './Iconstitle';

const Skills = () => {
  return (
    <div className="pt-16 pr-4 pl-4 pb-16">
      <div className="flex justify-center mb-4">
        <button className="bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium">
          Skills
        </button>
      </div>
      <p className="text-lg text-gray-600 font-normal text-center mb-6">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-wrap justify-between gap-11">
        <Iconstitle />
      </div>
    </div>
  );
};

export default Skills;
