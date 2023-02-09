import { useParams } from "react-router-dom";

const BlogDetail = () => {
   const {id} = useParams();

    return ( 
        <div className="detail-blog">
            <h2>Page de détail de blog - {id}</h2>
        </div>
     );
}
 
export default BlogDetail;