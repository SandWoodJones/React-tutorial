import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import "./BlogDetails.css"

function BlogDetails() {
    const { id } = useParams();

    const { data: blog, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);

    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    }  

    return (
        <div className="blog-details">
            {error && <div className="error-message">{error}</div>}
            {isLoading && <div className="error-message">Loading...</div>}
                
            {blog.length != 0 && (
                <article>
                    <div className="blog-heading">
                        <h2>{blog.title}</h2>
                        <h3>- {blog.author}</h3>
                    </div>
                    <div className="blog-body">{blog.body}</div>

                    <button onClick={handleDelete}>
                        <span className="filled-button material-icons-sharp">delete</span>
                        <span className="outlined-button material-icons-sharp">&#xe92e;</span>
                    </button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;