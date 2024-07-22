import { contactData } from '../constants.js/index.js';
import { ContactCard } from './ContactCard.js';

const styles = {
  container: 'flex flex-col items-center gap-[100px] h-full',
  text: 'text-[#696A75] font-base font-normal leading-6',
  input:
    'w-[225px] h-[38px] py-[14px] pr-[14px] pl-[20px] items-center flex gap-3 flex-shrink-0 border-[1px] border-[#DCDDDF] outline-none rounded-[5px]',
};
export const ContactPage = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col w-[643px] h-[389px] items-center py-[10px] pt-[14px] gap-5 flex-shrink-0">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold leading-10 ">Contact Us</h2>
          <p className={`w-[624px] h-[103px] ${styles.text}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex py-[10px] items-center gap-[50px]">
          {contactData.map((el) => (
            <ContactCard title={el.title} desc={el.desc} />
          ))}
        </div>
      </div>
      <div className="flex flex-col pt-[29px] pr-[130px] pb-[26px] pl-[35px] gap-5 bg-[#F6F6F7] rounded-[10px]">
        <div>
          <h2 className="text-2xl font-bold leading-10 mb-1 ">
            Leave a Message
          </h2>
        </div>
        <div className="flex flex-col items-start gap-5">
          <div className="flex gap-[28px]">
            <input className={styles.input} placeholder="Your Name" />
            <input className={styles.input} placeholder="Your Email" />
          </div>
          <div className="flex flex-col gap-5">
            <input
              className="w-[478px] h-[35px] py-[10px] pt-[14px]
        pl-5 border-[1px] border-[#DCDDDF] gap-3 items-center flex-shrink-0 outline-none rounded-[5px]"
              placeholder="Subject"
            />
            <div
              className="w-[478px] h-[134px] py-[10px] pt-[14px]
        pl-5 border-[1px] bg-[#fff] border-[#DCDDDF] flex items-start gap-3 flex-shrink-0 rounded-[5px]"
            >
              <input className="outline-none" placeholder="Write a message" />
            </div>
          </div>
          <button className="py-[10px] px-[16px] rounded-md  w-fit  text-[12px] bg-[#4B6BFB] text-white mt-[19px]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
