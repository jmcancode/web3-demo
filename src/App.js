import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// pages
import Main from "./pages/Main";
import FourOhFour from "./pages/FourOhFour"
import Account from "./pages/Account";
// routes
import "./components/routes/Routes"

function App() {

    return (
       <Router>
            <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="*" element={<FourOhFour/>}/>
        </Routes>
       </Router>
    )
}

export default App;
