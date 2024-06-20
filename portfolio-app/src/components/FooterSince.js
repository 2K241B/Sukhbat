import { Copyright } from 'lucide-react';
const FooterSince = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 h-[68px] w-[375px]">
      <Copyright size={16} />
      <p className="text-sm text-gray-600 ml-2">
        2023 | Designed and coded with ❤️️ by Sagar Shah
      </p>
    </div>
  );
};
export default FooterSince;
