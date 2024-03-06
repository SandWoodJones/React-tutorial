import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="outer-div">
            <nav className="navbar">
                <h1>The SandWood Blog</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create" className="create-blog">New Blog</Link>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;