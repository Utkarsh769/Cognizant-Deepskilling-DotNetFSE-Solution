function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "Understanding React",
      author: "John",
    },

    {
      id: 2,
      title: "Hooks in React",
      author: "Alice",
    },

    {
      id: 3,
      title: "React Router Guide",
      author: "Steve",
    },
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title}

            {" - "}

            {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
