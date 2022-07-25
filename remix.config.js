/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "server/build",
  mdx: async (filename) => {
    const [rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight, remarkToc] =
      await Promise.all([
        import("rehype-slug").then((mod) => mod.default),
        import("rehype-autolink-headings").then((mod) => mod.default),
        import("rehype-highlight").then((mod) => mod.default),
        import("remark-toc").then((mod) => mod.default),
      ]);
    return {
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight],
      remarkPlugins: [remarkToc],
    };
  },
};
