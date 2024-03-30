import Link from "next/link";

import classes from "./post-item.module.css";
import Image from "next/image";

const PostItem = ({ post }) => {
  const { title, time, description, image, slug } = post;
  const imagePath = `/posts/${image}`;
  return (
    <li className={classes.post}>
      <Link href={`posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt="post image"
            height={300}
            width={300}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{new Date(time).toLocaleDateString("en-US")}</time>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
