import BlogList from "./BlogList";
import useRecuperation from "./UseRecuperation";


const Home = () => {
    
    const {data: blogs,isLoading,error} = useRecuperation('http://localhost:8000/blogs?_sort=id&_order=desc');
    return ( 
        <div className="home">
          { error && <div style={{'color':'red'}}>{error}</div> }
          {isLoading && <div>En cour de traitement ....</div> }
          { blogs && <BlogList blogs={blogs} title={'Liste des blogs'} />  }
        </div>
     );
}
 
export default Home;