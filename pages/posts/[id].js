import PostContent from "../../components/posts/postdetail/post-content";
import { getPostData, getFileNames } from "../../lib/post-util";

const PostDetail = ({ post }) => {
  return <PostContent post={post} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;
  const data = getPostData(id);
  return {
    props: {
      post: data,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const fileNames = getFileNames();
  const slugs = fileNames.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: slugs?.map((name) => ({
      params: {
        id: name,
      },
    })),
    fallback: "blocking", //blocking-for couple of paths true:no path generated false:all should be pre generated
  };
}

export default PostDetail;
