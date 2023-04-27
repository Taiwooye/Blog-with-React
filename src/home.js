import { useEffect, useState } from "react";
import Bloglist from "./bloglist";
const Home = () => {
  // const[name, setName] = useState('Input User Info');

  //     const handleclick =()=>{
  //       setName('Cannot be empty');
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "welcome party", body: "lorem ipsum...", author: "mark", id: 2 },
    {
      title: "web dev top tips",
      body: "lorem ipsum...",
      author: "Miles",
      id: 3,
    },
    
  ]);

  const handleDelete = (id) =>{
  const newBlogs = blogs.filter(blog => blog.id !==id);
  setBlogs(newBlogs);
  }

  useEffect(()=>{
    console.log('use effect ran');

  }, [])

  return (
    <div className="home">
      <Bloglist blog={blogs} title="All Blogs!" handleDelete={handleDelete} />
  

      {/* <input type="text" placeholder="Email..." />
           <input type="text" placeholder="password" />
           <button onClick={handleclick}>Submit</button>
           <p>{name}!</p> */}
    </div>
  );
};

export default Home;
