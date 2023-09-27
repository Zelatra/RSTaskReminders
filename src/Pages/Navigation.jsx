import { NavLink } from "react-router-dom";


function Navigation() {
    return(
        <div>
            <header className="banner-top">
                <ul>
                    <li>
                        <NavLink to="/" className="banner-btn">Home</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/profile" className="banner-btn">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create-reminder" className="banner-btn">Create reminder</NavLink>
                    </li>
                    <li>
                        <NavLink to="/market-watch" className="banner-btn">Market watch</NavLink>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Navigation;