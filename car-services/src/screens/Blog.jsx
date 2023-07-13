import BlogFourSection from '../core/features/blogFourSection/BlogFourSection';
import BlogFullSection from '../core/features/blogFullSection/BlogFullSection';
import BlogHeader from '../core/features/blogHeader/BlogHeader';
import Cta from '../core/features/cta/Cta';
import GetInTouch from '../core/features/getInTouch/GetInTouch';

export const Blog = () => {
  return (
    <>
      <BlogHeader />
      <BlogFourSection />
      <BlogFullSection />
      <Cta />
      <GetInTouch />
    </>
  );
};
