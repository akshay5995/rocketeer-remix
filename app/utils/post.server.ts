export const postFromModule = (mod: {
  filename: string;
  attributes: { meta: any };
}) => {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
};
