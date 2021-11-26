import { useLoaderData, Link } from "remix";
import { getPosts } from "~/services/post";
import type { Post } from "~/services/post";

export const loader = () => getPosts();

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <h1>Posts</h1>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
