import { SquareArrowOutUpRight } from 'lucide-react';
import WorkCardImg from '../assets/WorkCardImg.png';

const buttons = [
  'React',
  'Next.js',
  'Typescript',
  'Nest.js',
  'PostgreSQL',
  'Tailwindcss',
  'Figma',
  'Cypress',
  'Storybook',
  'Git',
];
const WorkCard = () => {
  return (
    <div className="p-8 flex flex-col items-center md:flex md:flex-row md:justify-center ">
      <div className="bg-gray-100 p-8 rounded-t-lg w-[343px] h-[256px] md:min-h-[480px] md:min-w-[576px] md:rounded-none md:rounded-l-lg shadow-lg">
        <img className="size-full" src={WorkCardImg} alt="WorkCardImg"></img>
      </div>
      <div className="md:p-6 md:h-[480px] md:w-[576px] shadow-lg rounded-r-lg">
        <h1 className="pt-8 text-gray-900 text-lg font-bold mb-6">Fiskil</h1>
        <p className="text-base text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap mb-6">
          {buttons.map((el) => {
            return (
              <button className="bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium mr-2 mb-2">
                {el}
              </button>
            );
          })}
        </div>
        <SquareArrowOutUpRight className="text-gray-600" />
      </div>
    </div>
  );
};
export default WorkCard;
