import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';
import { PostsOrPages } from '@tryghost/content-api';
import { getAllPosts } from '@/common/ghost';
import HomeBlogListing from '@/components/home/home_blog_listing';
import HomeHero from '@/components/home/home_hero';
import Layout from '@/components/layout';

interface HomeProps extends WithChildren {
  posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
  return (
    <Layout>
      <HomeHero />
      <HomeBlogListing posts={posts} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const rawPosts = (await getAllPosts({})) as PostsOrPages;

  if (!rawPosts.length) {
    return { props: { posts: [] } };
  }

  const posts = rawPosts;

  return { props: { posts } };
}
