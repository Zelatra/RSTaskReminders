import { NavLink } from "react-router-dom";


function Navigation() {
    return(
        <div>
            <header className="banner-top">
                <ul className="btn-list">
                    <li>
                        <NavLink to="/" className="banner-btn">Home</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/profile" className="banner-btn">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create" className="banner-btn">Create reminder</NavLink>
                    </li>
                    <li>
                        <NavLink to="/market" className="banner-btn">Market watch</NavLink>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Navigation;