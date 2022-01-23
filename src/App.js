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
                <section>
                    <p>Welcome, {user.get("username")}</p>
                </section>
                <section>
                    <div>
                        <button className="btn" onClick={() => logout()}>Logout</button>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default App;
