import * as pbi from "../routes/posts/powerbi-report-component.mdx";
import * as js from "../routes/posts/javascript.mdx";
import * as useReport from "../routes/posts/use-report.mdx";

interface Meta {
  title: string;
  description: string;
  data: string;
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
  return [postFromModule(pbi), postFromModule(js), postFromModule(useReport)];
};
