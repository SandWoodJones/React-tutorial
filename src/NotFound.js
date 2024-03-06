import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h2>404</h2>
            <h3>Page not found</h3>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NotFound;