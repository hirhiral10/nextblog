import AllPosts from "../../components/allposts/AllPosts";
import { getAllPosts } from "../../lib/post-util";

const PostsList = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
}

export default PostsList;
