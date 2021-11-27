import { useLoaderData, Link, Outlet } from "remix";
import type { MetaFunction } from "remix";
import { getPosts } from "~/services/post";
import type { Post } from "~/services/post";
import adminStyles from "~/styles/admin.css";

export let links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
};

export const loader = () => getPosts();

export let meta: MetaFunction = () => {
  return {
    title: "Admin Panel",
  };
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();

  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={post.id}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
