import * as pbi from "../routes/posts/powerbi-report-component.mdx";
import * as js from "../routes/posts/javascript.mdx";
import * as useReport from "../routes/posts/use-report.mdx";
import * as pnpmFilters from "../routes/posts/pnpm-filters.mdx";

interface Meta {
  title: string;
  description: string;
  data: string;
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

export const getPosts = async (): Promise<Post[]> => {
  const posts = [
    postFromModule(pbi),
    postFromModule(js),
    postFromModule(useReport),
    postFromModule(pnpmFilters),
  ].filter((post) => post.published);

  return posts;
};
