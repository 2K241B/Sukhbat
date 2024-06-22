import { Copyright } from 'lucide-react';
export const Footer = () => {
  return (
    <div className="dark:bg-[#111827] flex justify-center items-center bg-gray-50 h-[68px] ">
      <Copyright size={16} />
      <p className="text-sm text-gray-600 ml-2">
        2023 | Designed and coded with ❤️️ by Sagar Shah
      </p>
    </div>
  );
};
