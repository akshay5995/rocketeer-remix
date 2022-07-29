import * as pbi from "../routes/posts/powerbi-report-component.mdx";
import * as js from "../routes/posts/javascript.mdx";
import * as useReport from "../routes/posts/use-report.mdx";
import * as pnpmFilters from "../routes/posts/pnpm-filters.mdx";
import * as localstack from "../routes/posts/localstack.mdx";
import invariant from "tiny-invariant";

export interface Meta {
  title: string;
  description: string;
  date: string;
  published: boolean;
}

export interface Post extends Meta {
  slug: string;
}

const postFromModule = (mod: {
  filename: string;
  attributes: { meta: Meta };
}): Post => {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
};

const allPosts = [
  postFromModule(pbi),
  postFromModule(js),
  postFromModule(useReport),
  postFromModule(pnpmFilters),
  postFromModule(localstack),
];

export const getPosts = async (showDrafts = false): Promise<Post[]> => {
  const posts = allPosts.filter((post) => showDrafts || post.published);

  return posts;
};

export const getPost = async (slug: string): Promise<Post> => {
  const post = allPosts.find((post) => post.slug === slug);

  invariant(post, "Post not found!");

  return post;
};
