import logo from './logo.svg';
import './App.css';
// moralis
import {useMoralis} from "react-moralis"

function App() {
  
  const {authenticate, isAuthenticated, user, logout} = useMoralis()

    if (!isAuthenticated) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           <div>
             <button className="btn" onClick={() => authenticate()}>Connect Wallet</button>
             </div> 
          </header>
        </div>
      );
    }

    return (
      <div className="app-container">
        <h1>Welcome {user.get("username")}</h1>
        <div>
          <button className="btn" onClick={() => logout()}>Logout</button>
        </div>
      </div>
    )
}

export default App;
