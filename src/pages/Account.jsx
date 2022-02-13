import React, {Fragment} from 'react';
// Moralis hook
import {useMoralis} from 'react-moralis'
// custom styles
import "./css/account.css"
// custom components
import Auth from './Auth';
import Navigation from "../components/nav/Nav"
//react-bootstrap
import {Tabs, Tab} from 'react-bootstrap'

function Account() {
    const {logout, isAuthenticated} = useMoralis();

    if (!isAuthenticated) {
        return <Auth/>
    }
    return (
        <Fragment>
            <Navigation/>
            <section>
                <div className="account-container">
                    <Tabs defaultActiveKey="nfts" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="wallet" title="Wallet">
                            Wallet Balance will be shown here.
                        </Tab>
                        <Tab eventKey="nfts" title="NFTs">
                            List all owned NFT's
                        </Tab>
                        <Tab eventKey="sell" title="Sell">
                            Sell your NFT's
                        </Tab>
                        <Tab eventKey="account" title="Account">
                            Account information.
                        </Tab>
                    </Tabs>
                </div>
                <div >
                    <button onClick={() => logout()} className="btn btn-dark">
                        Logout
                    </button>
                </div>
            </section>
        </Fragment>
    );
}

export default Account;
