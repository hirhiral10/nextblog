import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDir = path.join(process.cwd(), "content");

export function getFileNames() {
  return fs.readdirSync(postDir);
}

export function getPostData(fileName) {
  const slug = fileName.replace(/\.md$/, "");
  const filepath = path.join(postDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    ...data,
    content,
    slug,
  };
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postDir);
  const allPosts = fileNames.map((file) => getPostData(file));
  return allPosts.sort((postA, postB) => (postA.time > postB.time ? -1 : 1));
}

export function getFeaturedPosts() {
  const allposts = getAllPosts();
  return allposts.filter((post) => post.isFeatured);
}
