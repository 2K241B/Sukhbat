import WorkCard from './WorkCard';

const Work = () => {
  return (
    <div className="pt-16 pr-4 pl-4 pb-16 md:pr-32 md:pl-32 md:pt-24 md:pb-24">
      <div className="flex justify-center mb-4">
        <button className="bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium">
          Work
        </button>
      </div>
      <p className="text-lg text-gray-600 font-normal text-center mb-6">
        Some of the noteworthy projects I have built:
      </p>
      <div>
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
};
export default Work;
