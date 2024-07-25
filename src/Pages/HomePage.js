import { AllBlogContent, AllBlogPostTag } from '../constants.js/index.js';
import { Carousel } from '../components/Carousel.js';
import { Trending } from '../components/Trending.js';
import { AllBlogPost } from './AllBlogPost.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AllBlogPostPage } from './AllBlogPostPage.js';
export const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://dev.to/api/articles').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-[100px]">
      <Carousel Content={data} />
      <Trending Content={data} />
      <AllBlogPostPage postTag={AllBlogPostTag} Content={data} />
    </div>
  );
};
