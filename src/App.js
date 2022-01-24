import logo from './logo.svg';
import './App.css';
// moralis
import {useMoralis} from "react-moralis"
import {Fragment} from 'react';

function App() {

    const {authenticate, isAuthenticated, user, logout} = useMoralis()

    if (!isAuthenticated) {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>
                        <button className="btn" onClick={() => authenticate()}>Connect Wallet</button>
                    </div>
                </header>
            </div>
        );
    }

    return (
        <Fragment>
            <div className="app-container">
                <section id="#hero">
                    <div className="welcome-container">
                        <div>
                            <p className="welcome">Welcome, {user.get("username")}</p>
                        </div>
                        <div>
                            <div>
                                <button onClick={() => logout()}>Logout</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="#eth" className="eth-container">
                    <p>Send Ethereum</p>
                </section>
                <section id="#verify" className="verify-container">
                    <p>Verify Contract</p>
                </section>
                <section id="#mint" className="mint-container">
                    <p>Mint NFTS</p>
                </section>
            </div>
        </Fragment>
    )
}

export default App;
