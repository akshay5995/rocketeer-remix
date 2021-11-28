import { useLoaderData, Link, MetaFunction } from "remix";
import { getPosts } from "~/services/post.server";
import type { PostMeta } from "~/services/post.server";

export const loader = () => getPosts();

export let meta: MetaFunction = () => {
  return {
    title: "Posts",
    description: "Posts of Rocketeer",
  };
};

export default function Posts() {
  const posts = useLoaderData<PostMeta[]>();

  return (
    <div>
      <h1>Posts</h1>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
