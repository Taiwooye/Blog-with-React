import { useEffect, useState } from "react";
import Bloglist from "./bloglist";
import usefetch from "./usefetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error, } = usefetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blog={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
