import Image from "next/image";
import Markdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const PostContent = ({ post }) => {
  const { title, image, content } = post;
  const customRenderers = {
    h2: "h3",
    img: (img) => (
      <Image alt={title} src={`/posts/${img.src}`} width={600} height={300} />
    ),
    code: (data) => {
      const { children, className } = data;
      return (
        <Prism style={atomDark} language={className} children={children} />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={image} />
      <Markdown components={customRenderers}>{content}</Markdown>
    </article>
  );
};

export default PostContent;
