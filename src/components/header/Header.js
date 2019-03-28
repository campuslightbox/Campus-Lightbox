import React, { Component } from 'react';
import GetHelpModal from '../../components/gethelpmodal/GetHelpModal';
import { Button} from 'semantic-ui-react'
import './style.css';


class Header extends React.Component {
    render() {
        return (
                <section className = "b1">
                    <div className="row">
                        <div className="text-left offset-10">
                            <GetHelpModal />
                        </div>
                    </div>
                    <div className = "in1" >
                        <div className = "stuff" >
                            <h1> Campus Lightbox </h1>
                        <h2>an initiative by Project Aurora</h2>
                            <a className="btn" href="#">Peer</a>
                            <a className = "btn" href = "#">Professional</a>
                            <a className="btn" href="#">Phone</a>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Header;
