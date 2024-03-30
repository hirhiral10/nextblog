import Hero from "../components/HomePage/Hero";
import Featuredposts from "../components/HomePage/FeaturedList";
import { getFeaturedPosts } from "../lib/post-util";

const HomePage = ({ posts }) => {
  return (
    <div>
      <Hero />
      <Featuredposts posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
}

export default HomePage;
