import { AllBlogPostTag } from '../constants.js';
import { Carousel } from './Carousel';
import { Trending } from './Trending';
import { AllBlogPost } from './AllBlogPost.js';
export const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <Carousel />
      <Trending />
      <AllBlogPost postTag={AllBlogPostTag} />
    </div>
  );
};
