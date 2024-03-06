import { Link } from 'react-router-dom';

function BlogList({ blogs }) {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`} key={blog.id}>
                    <div className="blog-preview">
                        <h2>{blog.title}</h2>
                        <p>- {blog.author}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BlogList;