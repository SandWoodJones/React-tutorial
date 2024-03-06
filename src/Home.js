import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div className="error-message">{error}</div>}
            {isLoading && <div className="error-message">Loading...</div>}
            { blogs.length != 0 && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;  