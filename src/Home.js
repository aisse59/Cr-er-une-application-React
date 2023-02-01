import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // props
 const [blogs,setBlog] = useState(null);
 
   

 const HandleDelete = (id)=> {
    const newBlogs =  blogs.filter((blog)=> blog.id !== id);
    setBlog(newBlogs);
  }

  useEffect(()=> {
    fetch('  http://localhost:3000/blogs')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
  },[]);
 


    return ( 
        <div className="home">
         <BlogList blogs={blogs} title={'Liste des blogs'} HandleDelete={HandleDelete}/>
        
        </div>
     );
}
 
export default Home;