import React, {Fragment} from 'react';
import "../App.css"
// moralis
import {useMoralis} from 'react-moralis';
// custom comps
import Navigation from '../components/nav/Nav'
import Auth from '../pages/Auth'

function Main() {
   
    const { isAuthenticated} = useMoralis()

    if (!isAuthenticated) {
        return (
           <Auth/>
        );
    }

    return (
        <Fragment>
            <Navigation/>
            <div className="app-container">
                <section id="#hero">
                    <div className="welcome-container">
                        <div>
                            <p className="welcome text-center">Lorem ipsum dolor sit amet,
                                <br/>
                                consectetur adip.</p>
                        </div>
                        <div className="scroll">
                            scroll down
                        </div>
                    </div>
                </section>
                <section id="#eth" className="eth-container">
                    <div className="eth-inner-container">
                        <div>
                            <h1>Mint Here</h1>
                        </div>
                    </div>
                </section>
                <section id="#verify" className="verify-container">
                    <div className="verify-inner-container">
                        <div>
                            <h1>Road Map</h1>
                        </div>
                    </div>
                </section>
                <section id="#mint" className="mint-container">
                    <div className="mint-inner-container">
                        <div>
                            <h1>Gallery</h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="#team" className="team-container">
                        <div className="team-inner-container">
                            <h1>Team</h1>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Main;
