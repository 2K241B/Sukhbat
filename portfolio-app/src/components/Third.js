const iconsTitle = [
  { icons: './assets/icons/javscript.png', title: 'Javascript' },
  { icons: './assets/icons/typescript.png', title: 'Typescript' },
  { icons: './assets/icons/react.png', title: 'React' },
  { icons: './assets/icons/nextjs.png', title: 'Next.js' },
  { icons: './assets/icons/nodejs.png', title: 'Node.js' },
  { icons: './assets/icons/express.png', title: 'Express.js' },
  { icons: './assets/icons/nest.png', title: 'Nest.js' },
  { icons: './assets/icons/socket.png', title: 'Socket.io' },
  { icons: './assets/icons/postgresql.png', title: 'PostgreSQL' },
  { icons: './assets/icons/mongodb.png', title: 'MongoDB' },
  { icons: './assets/icons/sass.png', title: 'Sass/Scss' },
  { icons: './assets/icons/tailwindcss.png', title: 'Tailwindcss' },
  { icons: './assets/icons/figma.png', title: 'Figma' },
  { icons: './assets/icons/cypress.png', title: 'Cypress' },
  { icons: './assets/icons/storybook.png', title: 'Storybook' },
  { icons: './assets/icons/git.png', title: 'Git' },
];

const Third = () => {
  return (
    <div className="pt-16 pr-4 pl-4 pb-16">
      <div className="flex justify-center mb-4">
        <button className="bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium">
          Skills
        </button>
      </div>
      <p className="text-lg text-gray-600 font-normal text-center">
        The skills, tools and technologies I am really good at:
      </p>
      <div>
        <img></img>
        <p></p>
      </div>
    </div>
  );
};

export default Third;
