import { useLoaderData } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";
import { getPost } from "~/services/post";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export let meta: MetaFunction = ({ params }) => {
  return {
    title: params.slug || "Post",
  };
};

export default function PostSlug() {
  const post = useLoaderData();

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
