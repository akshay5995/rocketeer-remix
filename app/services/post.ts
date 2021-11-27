import invariant from "tiny-invariant";
import { marked } from "marked";
const { PSDB } = require("planetscale-node");
const conn = new PSDB("main");

export type Post = {
  id: string;
  title: string;
  description: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
};

let postsCache: Post[] = [];

export const getPosts = async () => {
  if (postsCache.length == 0) {
    await repopulatePostsCache();
  }

  return postsCache.map((row: Post) => ({ id: row.id, title: row.title }));
};

const repopulatePostsCache = async () => {
  try {
    const [rows, _] = await conn.execute("select * from posts");

    postsCache = rows;
  } catch {
    console.log("DB query failed!!");
  }
};

export async function getPost(id: string) {
  if (postsCache.length == 0) {
    await repopulatePostsCache();
  }

  const post = postsCache.find((post) => post.id == id);

  invariant(!!post?.content, "Cannot find post content");

  const buff = Buffer.from(post?.content, "base64");
  const text = buff.toString("ascii");
  const html = marked(text);

  return { id: post?.id, title: post?.title, html: html };
}
