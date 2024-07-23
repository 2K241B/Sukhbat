import { Link } from 'react-router-dom';

const styles = {
  container: 'flex flex-col items-center gap-[100px]',
  text: 'text-[#696A75] font-base font-normal leading-6 mb-6',
};

export const ErrorPage = () => {
  return (
    <div className="flex w-[642px] h-[338px] justify-center items-center gap-8">
      <h1 className="text-7xl">404</h1>
      <span className="border-r-[1px] h-[156px] border-[#E8E8EA]"></span>
      <div className="flex flex-col gap-5">
        <h1 className="text-[#000] text-2xl font-semibold leading-10">
          Page Not Found
        </h1>
        <p className={styles.text}>
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link to="/Home">
          <button className="flex py-[10px] px-[16px] justify-center items-center bg-[#4B6BFB] rounded-[6px] text-[#fff] w-fit">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};
