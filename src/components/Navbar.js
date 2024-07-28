import { Search } from 'lucide-react';
import Logo from '../Assets/Logo.png';
import { Menutext } from '../constants.js';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const styles = {
  container:
    'flex gap-[118px] py-8 justify-start items-start max-w-[1130px] mr-[90px]',
  navbarContainer: 'flex gap-[21px] items-center',
  menu: 'flex gap-10 w-[667px] justify-center items-center',
  inputContainer:
    'flex flex-col py-2 pr-2 pl-4 bg-[#F4F4F5] rounded-[5px] items-center w-[166px] gap-3  relative',
  input: 'bg-[#F4F4F5] w-[114px] text-sm font-normal leading-5 outline-none',
};

export const Navbar = () => {
  const [searchText, setSearchText] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://dev.to/api/articles').then((response) => {
      setSearchText(response.data);
    });
  }, []);
  const [text, setText] = useState('');

  const [isShow, setIsShow] = useState(false);
  const handlerClick = () => {
    setIsShow(!isShow);
  };
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const x = searchText.filter((el, i) =>
    el.title.toLowerCase().includes(text.toLowerCase())
  );
  const handlePostClick = (id) => {
    navigate(`/Post/${id}`);
  };
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
            <div className="absolute top-[40px] left-0 bg-[#F4F4F5] w-[280px] px-2 py-2 rounded-[5px] flex flex-col gap-2 z-20 h-[560px] overflow-auto">
              {x.map((el, i) => (
                <div
                  className="flex flex-col gap-1 border-b-2 last:border-0 p-2 cursor-pointer"
                  onClick={() => handlePostClick(el.id)}
                >
                  <p className="text-[#4B6BFB]">{el.tag_list[0]}</p>
                  <p className="font-medium">{el.title}</p>
                  <p className="text-[#97989F]">{el.published_at}</p>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <Link
          to="/Login"
          className="px-3 py-[7px] font-medium rounded-2xl  w-fit  text-[14px] bg-[#4B6BFB] text-white capitalize"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
