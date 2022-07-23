/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "server/build",
  mdx: async (filename) => {
    const [rehypeHighlight, remarkMdxToc] = await Promise.all([
      import("rehype-highlight").then((mod) => mod.default),
      import("remark-mdx-toc").then((mod) => mod.remarkMdxToc),
    ]);
    return {
      rehypePlugins: [rehypeHighlight, remarkMdxToc],
    };
  },
};
