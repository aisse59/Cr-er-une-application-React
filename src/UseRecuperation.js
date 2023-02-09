import { useEffect,useState } from "react";

const useRecuperation = (url) => {

    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        setTimeout(() => {
          fetch(url)
        .then((response) => {
          if(!response.ok){
            throw Error ('Désolé une erreur est survenue...');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch( err => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        })
        },2000)
      }, [url]);
      
      return {data,isLoading,error}
}
 
export default useRecuperation;