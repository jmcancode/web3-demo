import React, {Fragment} from 'react';
// custom styles
import "./Nav.css";
// moralis
import {useMoralis} from "react-moralis"
// logo
import logo from "../../assets/logo.png"
// react-router-dom
import {useNavigate} from 'react-router-dom'

function Navigation() {
    const {user} = useMoralis()
    let navigate = useNavigate();
    return (
        <Fragment>
            <nav className="logo-nav">
                <img src={logo} alt="logo" width={100} height={100} className="logo"/>
            </nav>
            <header id="nav-bar" className="nav-bar">
                <nav>
                    <ul>
                        <li onClick={() => {navigate("/")}}>
                            Mint
                        </li>
                        <li>
                            Road Map
                        </li>
                        <li>
                            Gallery
                        </li>
                        <li>
                            Members
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                       
                        <small
                            onClick={() => {
                            navigate("/account")
                        }}
                            className="user-info">
                            {user.get("username")}
                        </small>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
}

export default Navigation;
