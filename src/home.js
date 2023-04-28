import { useEffect, useState } from "react";
import Bloglist from "./bloglist";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setisPending(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blog={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
