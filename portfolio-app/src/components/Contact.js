import { Mail, BookCopy, Phone, Github, Twitter, Figma } from 'lucide-react';

const contact = [
  { icon: <Mail />, email: 'reachsagarshah@gmail.com', boxIcon: <BookCopy /> },
  { icon: <Phone />, email: '+91 8980500565', boxIcon: <BookCopy /> },
];
const footersvg = (
  <svg
    width="37"
    height="36"
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.5 14H16.5C15.3954 14 14.5 14.8954 14.5 16V26C14.5 27.1046 15.3954 28 16.5 28H26.5C27.6046 28 28.5 27.1046 28.5 26V16C28.5 14.8954 27.6046 14 26.5 14Z"
      stroke="#4B5563"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 22C9.4 22 8.5 21.1 8.5 20V10C8.5 8.9 9.4 8 10.5 8H20.5C21.6 8 22.5 8.9 22.5 10"
      stroke="#4B5563"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Contact = () => {
  return (
    <div className=" dark:bg-[#030712] pt-16 pr-4 pl-4 pb-16">
      <div className="flex justify-center mb-4">
        <button className="dark:text-[#D1D5DB] dark:bg-[#374151] bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium">
          Get in touch
        </button>
      </div>
      <p className="text-xl dark:text-[#D1D5DB] text-gray-600 font-normal text-center mb-6">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      {contact.map((el) => {
        return (
          <div className="flex justify-center gap-4 h-9">
            <div className="text-gray-600 dark:text-[#D1D5DB]">{el.icon}</div>
            <h1 className="text-lg font-bold dark:text-[#F9FAFB]">
              {el.email}
            </h1>
            <div className="text-gray-600 dark:text-[#D1D5DB]">{footersvg}</div>
          </div>
        );
      })}
      <p className="text-base dark:text-[#D1D5DB] text-gray-600 font-normal text-center mb-4 mt-6">
        You may also find me on these platforms!
      </p>
      <div className="flex justify-center gap-4 text-gray-600 dark:text-[#D1D5DB]">
        <Github />
        <Twitter />
        <Figma />
      </div>
    </div>
  );
};
