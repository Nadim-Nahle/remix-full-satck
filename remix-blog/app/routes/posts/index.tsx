import { Link, useLoaderData } from "@remix-run/react";

export const loader = () => {
  console.log(123);
  const data = {
    posts: [
      {
        id: 1,
        title: "post 1",
        body: "test post",
      },
      {
        id: 2,
        title: "post 2",
        body: "test post",
      },
      {
        id: 3,
        title: "post 3",
        body: "test post",
      },
    ],
  };
  return data;
};

function PostItems() {
  const { posts } = useLoaderData();
  return (
    <div>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn">
          New Post
        </Link>
      </div>

      <ul className="posts-list">
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostItems;
