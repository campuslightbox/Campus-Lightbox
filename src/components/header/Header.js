import React from 'react';
import { Button } from 'semantic-ui-react'
import GetHelpModal from '../../components/gethelpmodal/GetHelpModal';
import './style.css';

const style = {
    button: {
        margin: 8,
    }
}

class Header extends React.Component {
    onScrollDownClicked = () => {
        this.scrollToContent();
    }

    scrollToContent = () => {
        window.scroll({
            top: 600,
            left: 0,
            behavior: 'smooth'
        });
    }

    onFilterClicked = (filterName) => {
        this.props.onPresetFilterChange(filterName);
        this.scrollToContent();
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
                            <Button inverted size="large" style={style.button}
                                onClick={() => this.onFilterClicked("peer")}>Peer</Button>
                            <Button inverted size="large" style={style.button}
                                onClick={() => this.onFilterClicked("professional")}>Professional</Button>
                            <Button inverted size="large" style={style.button}
                                onClick={() => this.onFilterClicked("hotline")}>Phone</Button>

                            <div className="ButtonClass">
                                <Button onClick={this.onScrollDownClicked} inverted
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
