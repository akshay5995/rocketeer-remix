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

export const getPosts = async (): Promise<PostMeta[]> => {
  const [rows, _] = await db.execute("select * from posts", []);

  return rows.map(
    (row: PostRow): PostMeta => ({
      id: row.id,
      title: row.title,
      description: row.description,
      createdAt: row.createdAt,
    })
  );
};

export const getPost = async (id: string): Promise<Post> => {
  const [rows, _] = await db.execute("select * from posts where id = ?", [id]);

  invariant(!!rows.length, "Cannot find post");

  const post: PostRow = rows[0];

  const html = post?.content
    ? markDownToHtml(decodeFromBase64(post?.content))
    : "";

  return {
    id: post?.id,
    title: post?.title,
    html: html,
    createdAt: post?.createdAt,
  };
};
