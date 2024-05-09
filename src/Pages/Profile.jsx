import Navigation from "./Navigation";
import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../log-in-button";

function Profile() {
    return (
    <div>
        <Navigation />
        <div className="profile">
            <header>
                <h1 className="profile-title">Login/Sign up</h1>
                <br />
                <div>
                <input type="text" placeholder="Username..." required/>
                </div>
                <br />
                <div>
                <input type="password" placeholder="Password..." required/>
                </div>
                
                <br />
                <LoginButton />
                {/* <button type="submit" className="login-btn">Log In</button> */}
            </header>
        </div>
    </div>
    )
}

export default Profile;