import Photo2nd from '../assets/Photo2nd.png';
import AboutDark from '../assets/AboutDark.png';
import About768 from '../assets/About768.png';
import About768dark from '../assets/About768dark.png';
export const About = () => {
  return (
    <div className=" dark:bg-[#111827] pt-16 pr-4 pl-4 pb-16 bg-gray-50 md:flex md:flex-col mb:items-center md:pr-32 md:pl-32 md:pt-24 md:pb-24">
      <div className="mb-12 flex justify-center">
        <button className="dark:bg-[#374151] dark:text-[#D1D5DB] bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium w-[content-fit]">
          About me
        </button>
      </div>
      <div className="md:flex">
        <div className="md:min-h-[694px] md:min-w-[584px]">
          <img
            className="mb-12 max-w-[440px] max-h-[520px] md:hidden md:dark:hidden dark:hidden "
            src={Photo2nd}
            alt="Photo2nd"
          ></img>
          <img
            className="mb-12 max-w-[440px] max-h-[520px] md:hidden hidden md:dark:hidden dark:flex"
            src={AboutDark}
            alt="Photo2nd"
          ></img>
          <img
            className="mb-12 hidden md:flex dark:md:hidden "
            src={About768}
            alt="About768"
          ></img>
          <img
            className="mb-12 hidden md:hidden md:dark:flex "
            src={About768dark}
            alt="About768dark"
          ></img>
        </div>
        <div className=" dark:text-[#F9FAFB] flex flex-col gap-4 text-gray-600 text-base md:ml-24 md:text-justify">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-[#F9FAFB]">
            Curious about me? Here you have it:
          </h1>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <div className="flex gap-2.5">
            <div className="flex flex-col gap-2.5 ">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </div>
            <div className="flex flex-col gap-2.5">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </div>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
