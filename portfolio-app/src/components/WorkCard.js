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
    <div className="p-8 ">
      <div className="bg-gray-100 p-8 rounded-t-lg">
        <img src={WorkCardImg} alt="WorkCardImg"></img>
      </div>
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
  );
};
export default WorkCard;
