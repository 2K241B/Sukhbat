import { Link } from 'react-router-dom';
import {
  CopyrightText,
  Menutext,
  facebooksvg,
  instagramsvg,
  linkedinsvg,
  logosvg,
  twittersvg,
} from '../constants.js';
const styles = {
  container:
    'flex flex-col items-center gap-[25px] bg-[#F6F6F7] w-full pt-[64px] border-t-[1px] border-[#E8E8EA]',
  aboutContainer: 'flex w-[1215px] items-start gap-5',
  about: 'w-[298px] flex-col items-start gap-6 flex-shrink-0',
  menu: 'flex flex-col justify-center items-start gap-[8px] flex-shrink-0 gap-[8px] text-[#3B3C4A] font-base font-normal leading-6 mb-1 ',
};
const stylestext = {
  text1: 'text-[#696A75] font-base font-normal leading-6 mb-6',
  text2: 'text-[#3B3C4A] font-base font-normal leading-6 mb-6',
};
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
          <h2 className="font-semibold leading-7 text-lg text-[#181A2A]">
            About
          </h2>
          <p className={stylestext.text1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className={stylestext.text2}>Email : info@jstemplate.net</p>
          <p className={stylestext.text2}>Phone : 880 123 456 789</p>
        </div>
        <div className="flex justify-center w-[512px] ">
          <div className={styles.menu}>
            {Menutext.map((el) => (
              <Link to={`/${el}`}>
                <p className="cursor-pointer hover:font-semibold">{el}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-[144px] h-4 flex-shrink-0 gap-[26px] cursor-pointer">
          {facebooksvg}
          {twittersvg}
          {instagramsvg}
          {linkedinsvg}
        </div>
      </div>
      <div className="flex items-center border-t-[1px] w-[1215px] justify-between pt-8 pb-[70px]">
        <div className="flex gap-[10px]">
          {logosvg}
          <div>
            <div className="flex">
              <h2 className="text-xl text-[#141624] leading-7 font-normal">
                Meta
              </h2>
              <h2 className="text-xl text-[#141624] leading-7 font-extrabold">
                Blog
              </h2>
            </div>
            <p className={stylestext.text2}>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex cursor-pointer ">
          {CopyrightText.map((el) => (
            <p
              className={`border-r-[1px] last:border-none px-4 ${stylestext.text2}`}
            >
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
