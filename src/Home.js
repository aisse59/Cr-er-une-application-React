import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // props
 const [blogs,setBlog] = useState(null);
 
   


  useEffect(()=> {
    fetch('http://localhost:3000/blogs')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      
      setBlog(data);
    })
  },[]);
 


    return ( 
        <div className="home">
          { blogs && <BlogList blogs={blogs} title={'Liste des blogs'} />  }
        </div>
     );
}
 
export default Home;