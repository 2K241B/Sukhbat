import upwork from '../assets/upwork.png';
const Card = () => {
  const CardItems = [
    {
      icon: upwork,
      present: 'Nov 2021 - Present',
      title: 'Sr. Frontend Developer',
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Ut pretium arcu et massa semper, id fringilla leo semper.',
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ],
    },
    {
      icon: upwork,
      present: 'Jul 2017 - Oct 2021',
      title: 'Sr. Frontend Developer',
      text: [
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ],
    },
    {
      icon: upwork,
      present: 'Dec 2015 - May 2017',
      title: 'Full Stack Developer',
      text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    },
  ];
  return CardItems.map((el) => {
    return (
      <div className="w-[343px] md:w-[896px] h-[348px] md:h-[fit-content] p-8 rounded-xl bg-white mb-6 shadow-lg flex flex-col gap-y-4 md:flex-row md:gap-x-12">
        <img className="w-[102px] h-7" src={el.icon} alt="upwork"></img>
        <div className="md:flex-row-reverse md:flex md:gap-x-12">
          <p className="text-base text-gray-700">{el.present}</p>
          <div className="">
            <h1 className="text-gray-900 size-lg font-semibold md:mb-4">
              {el.title}
            </h1>
            <div className="">
              {el.text.map((t) => (
                <li className="text-base text-gray-600">{t}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  });
};
export default Card;
