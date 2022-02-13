import React from 'react';
// react-moralis
import {useMoralis} from 'react-moralis';
//custom styles
import "../App.css";

function Auth() {

    const {authenticate, authError, isAuthenticating, Moralis} = useMoralis()

    const handleCustomLogin = async() => {
        await authenticate({
            provider: "web3Auth",
            clientId: process.env.REACT_APP_WEB3_AUTH,
            chainId: Moralis.Chains.ETH_MAINET,
            theme: "light",
            default: ['google', 'facebook', 'twitter', 'reddit', 'discord', 'apple', 'github', 'email_passwordless']
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="inner-app-header">

                    <div className="auth-card">
                        <div>
                            {isAuthenticating && <p >Authenticating</p>}
                            {authError && (
                                <p >{JSON.stringify(authError.message)}</p>
                            )}
                        </div>
                        <div>

                            <button className="btn btn-dark" onClick={handleCustomLogin}>Authentication</button>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    );

}

export default Auth;
