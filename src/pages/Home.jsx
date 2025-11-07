import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { BlogPreview } from '../components/sections/BlogPreview';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <BlogPreview />
    </>
  );
};