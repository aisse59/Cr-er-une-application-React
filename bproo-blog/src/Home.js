import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // props
 const [blogs,setBlog] = useState([
    {
        id:1,
        title : "Bienvenu dans mon blog",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
        author: "Duplex",
        date: "02/01/2021"
    },
    {
        id:2,
        title: "La nuit des codeurs",
        body: "Lorem, ipsum dolor sit amet consectetur ",
        author: "Tony",
        date: "02/01/2021"
        },
    {
        id:3,
        title: "La documentation",
        body: "Lorem, ipsum dolor sit amet consectetur ",
        author: "Tony",
        date: "03/01/2021"
        }
 ]);
 
   const [name,setName] = useState('Duplex');

 const HandleDelete = (id)=> {
    const newBlogs =  blogs.filter((blog)=> blog.id !== id);
    setBlog(newBlogs);
  }

  useEffect(()=> {
    console.log('useEffect a été appelé');
    console.log(blogs);
  },[name]);
 


    return ( 
        <div className="home">
         <BlogList blogs={blogs} title={'Liste des blogs'} HandleDelete={HandleDelete}/>
        <button onClick={() => setName('Tony')}>changer le nom </button>
        <p>{name} </p>
        </div>
     );
}
 
export default Home;