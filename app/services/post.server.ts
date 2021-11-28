import invariant from "tiny-invariant";
import { decodeFromBase64, markDownToHtml } from "~/utils/text.sever";
import { db } from "~/utils/db.server";

type PostRow = {
  id: string;
  title: string;
  description: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
};

export type PostMeta = Omit<PostRow, "content" | "updatedAt">;

interface Post extends Omit<PostMeta, "description"> {
  html: string;
}

const postMap: Map<string, PostRow> = new Map<string, PostRow>();

let postListCache: PostRow[] = [];

export const getPosts = async (): Promise<PostMeta[]> => {
  if (postMap.size == 0) {
    await repopulatePostsCache();
  }

  return postListCache.map(
    (row: PostRow): PostMeta => ({
      id: row.id,
      title: row.title,
      description: row.description,
      createdAt: row.createdAt,
    })
  );
};

const repopulatePostsCache = async () => {
  try {
    const [rows, _] = await db.execute("select * from posts", []);

    rows.forEach((post: PostRow) => {
      postMap.set(post.id, post);
      postListCache.push(post);
    });
  } catch {
    console.log("DB query failed!!");
  }
};

export const getPost = async (id: string): Promise<Post> => {
  if (postMap.size == 0) {
    await repopulatePostsCache();
  }

  const post = postMap.get(id);

  invariant(!!post?.content, "Cannot find post content");

  const html = markDownToHtml(decodeFromBase64(post.content));

  return {
    id: post?.id,
    title: post?.title,
    html: html,
    createdAt: post?.createdAt,
  };
};
