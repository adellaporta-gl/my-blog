import { Link } from "react-router-dom";

const NavBar = () => {
    const navBarJsx = (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/articles">Articles</Link></li>
            </ul>
        </nav>
    );
    return navBarJsx;
}

export default NavBar;