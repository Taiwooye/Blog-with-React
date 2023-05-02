import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [errFlag, setErrFlag] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    console.log(errFlag);
    if (errFlag) {
      return false;
    }

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      // history.go(-1);
      history.push('/')
    });

  };

  const validateField = (v, type) => {
    //console.log(v.trim().length <= 0);
    if (v.trim().length <= 0) {
      setErrFlag(true);
      if (type === "Title") {
        return setTitle(v);
      } else {
        return setBody(v);
      }
    }
    setErrFlag(false);

    if (type === "Title") {
      return setTitle(v);
    } else {
      return setBody(v);
    }
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => validateField(e.target.value, "Title")}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => validateField(e.target.value, "Body")}
        ></textarea>

        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="miles">miles</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
