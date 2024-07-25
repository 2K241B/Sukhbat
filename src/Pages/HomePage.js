import { AllBlogContent, AllBlogPostTag } from '../constants.js/index.js';
import { Carousel } from '../components/Carousel.js';
import { Trending } from '../components/Trending.js';
import { AllBlogPost } from './AllBlogPost.js';
export const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <Carousel Content={AllBlogContent} />
      <Trending Content={AllBlogContent} />
      <AllBlogPost postTag={AllBlogPostTag} />
    </div>
  );
};
