import React, {useState} from 'react';
// react-moralis
import {useMoralis} from 'react-moralis';
// react-bootstrap
import {Modal, Form, Button} from 'react-bootstrap'
//custom styles
import "../App.css";

function Auth() {
    const [lgShow,
        setLgShow] = useState(false);
    const {authenticate, signup} = useMoralis()
    const [email,
        setEmail] = useState();
    const [password,
        setPassword] = useState();

 
        return (
            <div className="App">
                <header className="App-header">
                    <div className="inner-app-header">
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
                                                <Form.Control
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    type="email"
                                                    placeholder="Enter email"/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                    type="password"
                                                    placeholder="Password"/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Text>
                                                    <p>Already have an account?
                                                        <a className="login-link" href="#Login">Login</a>
                                                    </p>
                                                </Form.Text>
                                            </Form.Group>
                                            <Button
                                                className="btn btn-dark"
                                                variant="primary"
                                                type="submit"
                                                onClick={() => signup(email, password, email)}>
                                                Enter
                                            </Button>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    
  }

    export default Auth;
