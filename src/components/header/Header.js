import React from 'react';
import { Button } from 'semantic-ui-react'
import GetHelpModal from '../../components/gethelpmodal/GetHelpModal';
import './style.css';


class Header extends React.Component {

    onItemClick = () => {
        window.scroll({
            top: 600,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
                <section className = "b1">
                    <div className="helpbutton">
                        <div className="modal">
                            <GetHelpModal />
                        </div>
                    </div>
                    <div className = "in1" >
                        <div className = "stuff">
                            <h1> <img src={require("./logo2.png")}
                                      alt = "Campus Lightbox" /> </h1>
                            <h3>Click a resource button to get started</h3>
                            <a className="btn" href="#">Peer</a>
                            <a className = "btn" href = "#">Professional</a>
                            <a className="btn" href="#">Phone</a>

                            <div className="ButtonClass">
                                <Button onClick={this.onItemClick}  inverted
                                    circular color='orange' icon='angle down' />
                            <h4>Or scroll down for more options</h4>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Header;
