import Card from './Card';
const Experience = () => {
  return (
    <div className="pt-16 pr-4 pl-4 pb-16 bg-gray-50 md:pr-32 md:pl-32 md:pt-24 md:pb-24">
      <div className="flex justify-center mb-4">
        <button className="bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium">
          Experience
        </button>
      </div>
      <p className="text-lg text-gray-600 font-normal text-center mb-6">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className=" flex flex-col justify-center items-center md:flex md:justify-center md:flex-col md:items-center">
        <Card />
      </div>
    </div>
  );
};
export default Experience;
