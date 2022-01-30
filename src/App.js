import {Fragment, useState} from 'react';
// custom styles
import './App.css';
// moralis
import {useMoralis} from "react-moralis"
// react-bootstrap
import {Modal, Form, Button} from "react-bootstrap"
// custom components
import Navigation from './components/nav/Nav';




function App() {
    const [lgShow,
        setLgShow] = useState(false);
    const {authenticate, isAuthenticated, signup} = useMoralis()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    if (!isAuthenticated) {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <h1>Crypto Chat</h1>
                    </div>
                    <div className="btn-group">
                        <div className='d-grid gap-2'>
                            <button onClick={() => setLgShow(true)} className="btn btn-dark">Email Address</button>
                        </div>
                        <div>
                            <button className="btn btn-dark" onClick={() => authenticate()}>Connect Wallet</button>
                        </div>
                        <div>
                            <Modal
                                size="lg"
                                show={lgShow}
                                onHide={() => setLgShow(false)}
                                aria-labelledby="example-modal-sizes-title-lg">
                                    <Modal.Header closeButton={true}>
                                        Crypto Chat
                                    </Modal.Header >
                               <Modal.Body className="modal-body">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Enter email"/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Password"/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Text>
                                                    <p>Already have an account? <a className="login-link" href="#Login">Login</a></p>
                                                </Form.Text>
                                            </Form.Group>
                                            <Button className="btn btn-dark" variant="primary" type="submit" onClick={() => signup(email,password, email)}>
                                                Enter
                                            </Button>
                                        </Form>
                                    </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </header>
            </div>
        );
    }

    return (
        <Fragment>
            <Navigation/>
            <div className="app-container">
                <section id="#hero">
                    <div className="welcome-container">
                        <div>
                            <p className="welcome text-center">Crypto Chat</p>
                        </div>
                        <div className="scroll">
                            scroll down
                        </div>
                    </div>
                </section>
                <section id="#eth" className="eth-container">
                    <div className="eth-inner-container">
                        <div>
                            <h1>Send ETH</h1>
                        </div>
                        <form className="form">
                            <input type="number" placeholder="Wallet Address"/>
                            <input type="number" placeholder="How much?"/>
                            <div>
                                <button onClick={() => alert('Payment sent')} className="btn btn-dark">
                                    send
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
                <section id="#verify" className="verify-container">
                    <div className="verify-inner-container">
                        <div>
                            <h1>Verify Contract</h1>
                        </div>
                        <form className="form">
                            <input type="text" placeholder="Contract ID"/>
                            <div className="d-grid gap-2">
                                <button className="btn btn-dark">Verify</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section id="#mint" className="mint-container">
                    <div className="mint-inner-container">
                        <div>
                            <h1>Mint NFTs here</h1>
                        </div>
                        <p>Display NFT's here.</p>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default App;
