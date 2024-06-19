import Photo2nd from '../assets/Photo2nd.png';

const Second = () => {
  return (
    <div className="pt-16 pr-4 pl-4 pb-16">
      <div className="mb-12">
        <div className="flex justify-center mb-6">
          <button className="bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium">
            About me
          </button>
        </div>
        <img className="mb-12" src={Photo2nd} alt="Photo2nd"></img>
        <div className="flex flex-col gap-4 text-gray-600 text-base">
          <h1 className="text-2xl font-semibold mb-6 text-gray-900">
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
            <div className="flex flex-col gap-2.5">
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
export default Second;
