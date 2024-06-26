import { useState } from 'react';
import './App.css';
import {
  About,
  Contact,
  Experience,
  Main,
  Skills,
  Work,
  Footer,
  Navbar,
} from './components';

import { MoonStar, Sun, X } from 'lucide-react';
const changeTheme = () => {
  document.documentElement.classList.toggle('dark');
};
function App() {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);
  const handlerClick = () => setIsMobileMenuShow(!isMobileMenuShow);
  return (
    <div>
      <Navbar handlerClick={handlerClick} />
      {isMobileMenuShow ? (
        <div className="absolute w-[100%] top-0 h-[100%] dark:bg-[#030712] bg-[#FFFFFF]">
          <div className="flex justify-between p-4 items-center border-b-[1px] dark:border-[#1F2937]">
            <div className="text-center  font-bold dark:text-[#F9FAFB] text-2xl ">
              {'<SS/>'}
            </div>
            <X
              className="text-gray-600 cursor-pointer"
              onClick={handlerClick}
            />
          </div>
          <div className=" p-4 gap-2 flex flex-col cursor-pointer dark:text-[#D1D5DB] text-gray-600 w-[100%] dark:bg-[#030712] bg-[#FFFFFF]">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col p-4 gap-4 dark:bg-[#030712] bg-[#FFFFFF] border-t-[1px] dark:border-[#1F2937] text-gray-600">
            <div className="flex flex-row justify-between items-center gap-4  dark:text-[#F9FAFB]">
              <p>Switch Theme</p>
              <Sun
                onClick={changeTheme}
                className="dark:hidden cursor-pointer"
              />
              <MoonStar
                onClick={changeTheme}
                className="hidden dark:flex cursor-pointer"
              />
            </div>
            <button className="dark:bg-[#F9FAFB] w-[100%] dark:text-[#111827] bg-gray-900 text-gray-50 text-base rounded-xl py-1">
              Download CV
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Main />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
