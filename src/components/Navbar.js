import { Search } from 'lucide-react';
import Logo from '../Assets/Logo.png';
import { AllBlogContent, Menutext } from '../constants.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const styles = {
  container:
    'flex gap-[118px] py-8 justify-start items-start max-w-[1130px] mr-[90px]',
  navbarContainer: 'flex gap-[21px]',
  menu: 'flex gap-10 w-[667px] justify-center items-center',
  inputContainer:
    'flex flex-col py-2 pr-2 pl-4 bg-[#F4F4F5] rounded-[5px] items-center w-[166px] gap-3  relative',
  input: 'bg-[#F4F4F5] w-[114px] text-sm font-normal leading-5 outline-none',
};

export const Navbar = () => {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState(AllBlogContent);
  const [isShow, setIsShow] = useState(true);
  const handlerClick = () => {
    setIsShow(!isShow);
  };
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const x = searchText.filter((el, i) =>
    el.title.toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div className={styles.container}>
      <Link to="/Home">
        <img src={Logo} alt="Logo" className="min-w-[158px] min-h-[36px]"></img>
      </Link>
      <div className={styles.navbarContainer}>
        <div className={styles.menu}>
          {Menutext.map((el) => (
            <Link to={`/${el}`}>
              <p className="hover:font-medium">{el}</p>
            </Link>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <div className="flex items-center">
            <input
              placeholder="Search"
              className={styles.input}
              onChange={onChangeHandler}
              onClick={handlerClick}
            />
            <Search
              size={16}
              onClick={handlerClick}
              className="cursor-pointer"
            />
          </div>
          {isShow ? (
            <div className="absolute top-[40px] left-0 bg-[#F4F4F5] w-[300px] pr-2 pl-4 rounded-[5px] flex flex-col gap-2 py-2 z-20">
              {x.map((el, i) => (
                <div className="flex flex-col gap-1 border-b-2 p-2 last:border-0">
                  <p className="text-[#4B6BFB]">{el.tag}</p>
                  <p className="font-medium">{el.title}</p>
                  <p className="text-[#97989F]">{el.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
