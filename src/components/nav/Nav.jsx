import React, {Fragment} from 'react';
// custom styles
import "./Nav.css";
// moralis
import {useMoralis} from "react-moralis"
// logo
import logo from "../../assets/logo.png"

function Navigation() {
    const {logout, user} = useMoralis()
    return (
        <Fragment>
            <div className="nav-bar">
                <nav>
                    <img
                        src={logo}
                        alt="logo"
                        width={100}
                        height={100}
                        style={{
                        height: '50px'
                    }}/>
                </nav>
                <nav >
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Send Eth
                        </li>
                        <li>
                            Transfer NFTs
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li onClick={() => logout()}>
                            Logout
                        </li>
                        <small className="user-info">
                            {user.get("username")}
                        </small>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
}

export default Navigation;
