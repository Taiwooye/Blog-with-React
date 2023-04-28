const Bloglist = ({ blog, title}) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blog.map((blog) => (
        <div className="blogs-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>

        </div>
      ))}
    </div>
  );
};

export default Bloglist;
