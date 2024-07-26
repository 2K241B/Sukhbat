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
    <div className="w-[1216px] justify-center">
      <h2 className="text-[36px] font-semibold">{data.title}</h2>
      <div className="flex items-center">
        <img
          className="size-[28px] rounded-full"
          src={data?.user?.profile_image}
          alt="ProfileImage"
        ></img>
        <p>{data?.user?.username}</p>
        <p>{data?.published_at}</p>
      </div>
      <img src={data?.social_image} alt="coverImage" />
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};
