import jsIcon from '../assets/icons/javscript.png';
import tsIcon from '../assets/icons/typescript.png';
import reactIcon from '../assets/icons/react.png';
import nextIcon from '../assets/icons/nextjs.png';
import nodeIcon from '../assets/icons/nodejs.png';
import exIcon from '../assets/icons/express.png';
import nestIcon from '../assets/icons/nest.png';
import socketIcon from '../assets/icons/socket.png';
import postIcon from '../assets/icons/postgresql.png';
import mongoIcon from '../assets/icons/mongodb.png';
import sassIcon from '../assets/icons/sass.png';
import tailwindIcon from '../assets/icons/tailwindcss.png';
import figmaIcon from '../assets/icons/figma.png';
import cypressIcon from '../assets/icons/cypress.png';
import storyIcon from '../assets/icons/storybook.png';
import gitIcon from '../assets/icons/git.png';
import expressWhite from '../assets/icons/expressWhite.png';
import cypressWhite from '../assets/icons/cypressWhite.png';
import socketWhite from '../assets/icons/socketWhite.png';
const Iconstitle = () => {
  const iconsT = [
    { icons: jsIcon, title: 'Javascript' },
    { icons: tsIcon, title: 'Typescript' },
    { icons: reactIcon, title: 'React' },
    { icons: nextIcon, title: 'Next.js' },
    { icons: nodeIcon, title: 'Node.js' },
    { icons: exIcon, title: 'Express.js' },
    { icons: nestIcon, title: 'Nest.js' },
    { icons: socketIcon, title: 'Socket.io' },
    { icons: postIcon, title: 'PostgreSQL' },
    { icons: mongoIcon, title: 'MongoDB' },
    { icons: sassIcon, title: 'Sass/Scss' },
    { icons: tailwindIcon, title: 'Tailwindcss' },
    { icons: figmaIcon, title: 'Figma' },
    { icons: cypressIcon, title: 'Cypress' },
    { icons: storyIcon, title: 'Storybook' },
    { icons: gitIcon, title: 'Git' },
  ];
  // const iconsW = [
  //   { icons: jsIcon, title: 'Javascript' },
  //   { icons: tsIcon, title: 'Typescript' },
  //   { icons: reactIcon, title: 'React' },
  //   { icons: nextIcon, title: 'Next.js' },
  //   { icons: nodeIcon, title: 'Node.js' },
  //   { icons: expressWhite, title: 'Express.js' },
  //   { icons: nestIcon, title: 'Nest.js' },
  //   { icons: socketWhite, title: 'Socket.io' },
  //   { icons: postIcon, title: 'PostgreSQL' },
  //   { icons: mongoIcon, title: 'MongoDB' },
  //   { icons: sassIcon, title: 'Sass/Scss' },
  //   { icons: tailwindIcon, title: 'Tailwindcss' },
  //   { icons: figmaIcon, title: 'Figma' },
  //   { icons: cypressWhite, title: 'Cypress' },
  //   { icons: storyIcon, title: 'Storybook' },
  //   { icons: gitIcon, title: 'Git' },
  // ];
  return iconsT.map((el) => {
    return (
      <div className="text-center items-center flex flex-col gap-y-2">
        <img src={el.icons} alt={el.title}></img>
        <p>{el.title}</p>
      </div>
    );
  });
};
export default Iconstitle;
