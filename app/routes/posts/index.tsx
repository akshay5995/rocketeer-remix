import { useLoaderData, Link, MetaFunction } from "remix";
import { getPosts } from "~/services/post";
import type { Post } from "~/services/post";

export const loader = () => getPosts();

export let meta: MetaFunction = () => {
  return {
    title: "Posts",
    description: "Posts of Rocketeer",
  };
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

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
