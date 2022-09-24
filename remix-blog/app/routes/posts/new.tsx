import { Link } from "@remix-run/react";

function NewPost() {
  return (
    <>
      <div className="page-header">
        <h1>New Post</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>

      <div className="page-content">
        <form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="body">post body</label>
            <textarea name="body" id="body" />
          </div>
          <button className="btn btn-block" type="submit">
            Add post
          </button>
        </form>
      </div>
    </>
  );
}

export default NewPost;
