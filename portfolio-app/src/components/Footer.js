import { Mail, BookCopy, Phone, Github, Twitter, Figma } from 'lucide-react';

const contact = [
  { icon: <Mail />, email: 'reachsagarshah@gmail.com', boxIcon: <BookCopy /> },
  { icon: <Phone />, email: '+91 8980500565', boxIcon: <BookCopy /> },
];

const Footer = () => {
  return (
    <div className="pt-16 pr-4 pl-4 pb-16">
      <div className="flex justify-center mb-4">
        <button className="bg-gray-200 justify-start px-5 py-1 items-center rounded-xl text-gray-600 text-sm font-medium">
          Get in touch
        </button>
      </div>
      <p className="text-xl text-gray-600 font-normal text-center mb-6">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      {contact.map((el) => {
        return (
          <div className="flex justify-center gap-4 h-9">
            <div className="text-gray-600">{el.icon}</div>
            <h1 className="text-lg font-bold">{el.email}</h1>
            <div className="text-gray-600">{el.boxIcon}</div>
          </div>
        );
      })}
      <p className="text-base text-gray-600 font-normal text-center mb-4 mt-6">
        You may also find me on these platforms!
      </p>
      <div className="flex justify-center gap-4 text-gray-600">
        <Github />
        <Twitter />
        <Figma />
      </div>
    </div>
  );
};

export default Footer;
