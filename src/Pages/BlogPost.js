import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const BlogPost = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`https://dev.to/api/articles/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);
  function createMarkup() {
    return { __html: data.body_html };
  }
  return (
    <div className="w-[1216px] flex flex-col justify-center gap-8">
      <h2 className="text-[36px] font-semibold">{data.title}</h2>
      <div className="flex items-center gap-2">
        <img
          className="size-[28px] rounded-full"
          src={data?.user?.profile_image}
          alt="ProfileImage"
        ></img>
        <p className="text-[14px] leading-5 text-[#696A75] font-medium capitalize">
          {data?.user?.username}
        </p>
        <p className="text-[14px] leading-5 text-[#696A75] ml-3">
          {data?.published_at}
        </p>
      </div>
      <img src={data?.social_image} alt="coverImage" />
      <div
        className="flex flex-col gap-5 text-xl leading-8 text-[#3B3C4A]"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>
  );
};
