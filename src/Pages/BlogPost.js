import { useEffect, useState } from 'react';

export const BlogPost = () => {
  const [count, setCount] = useState(10);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (count <= 0) return;
    if (start) {
      let interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [start, count]);

  const handlerClick = () => {
    setStart(!start);
  };
  return (
    <div className="h-[948px]">
      <h2 className="text-xl mb-3 font-semibold">Countdown Timer</h2>
      <p>Time Remaning: {count}</p>
      <button
        className="bg-blue-500 px-2 text-white rounded-md mt-1"
        onClick={handlerClick}
      >
        Click
      </button>
    </div>
  );
};
