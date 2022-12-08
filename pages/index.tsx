import HomeBlogListing from '@/components/home/home_blog_listing';
import HomeHero from '@/components/home/home_hero';
import Layout from '@/components/layout';

const Home = () => {
  return (
    <Layout>
      <HomeHero />
      <HomeBlogListing />
    </Layout>
  );
};

export default Home;
