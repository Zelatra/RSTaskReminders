import { Link } from "react-router-dom";

function NavBar() {
    return(
        <header className="banner-top">
            <ul className="btn-list">
                <li className="banner-btn"><Link to="/">Home</Link></li>
                <li className="banner-btn"><Link to="/profile">Profile</Link></li>
                <li className="banner-btn"><Link to="/create">Create reminder</Link></li>
            </ul>
        </header>
    )
}

export default NavBar;