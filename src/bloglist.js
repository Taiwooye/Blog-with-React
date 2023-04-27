const Bloglist = ({ blog, title,handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blog.map((blog) => (
        <div className="blogs-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <button onClick={() =>handleDelete(blog.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
