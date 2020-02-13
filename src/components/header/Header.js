import React from 'react';
import { Button } from 'semantic-ui-react'
import GetHelpModal from '../../components/gethelpmodal/GetHelpModal';
import Announcement from '../../components/banner/Announcement';
import './style.css';
import '../animate.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-139413334-1');

const styles = {
    button: {
        width: '70%',
        minWidth: 'calc(130px + 5vw)',
        height: 50,
        fontSize: 15,
    },
    announcementButton: {
        marginLeft: 8,
    }
}

class Header extends React.Component {
    onScrollDownClicked = () => {
        ReactGA.event({
            category: 'Header',
            action: 'Clicked Scroll Down Button'
          });
        this.props.scrollToContent();
    }

    onFilterClicked = (filterName) => {
        ReactGA.event({
            category: 'Header',
            action: 'Clicked Top Preset Filer: ' + filterName
          });
        this.props.onPresetFilterChange(filterName);
        this.props.scrollToContent();
    }

    render() {
        return (
                <section className = "b1">
                    {<Announcement
                        icon={{name: "wrench"}}
                        text={["Have business skills? ", <b>We are hiring!</b>]}
                        button={{
                            content:"Join us",
                            onClick: () => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfuV4-Eqm_lB32EjQn1Be_GjRIdETJyavbctmfwvf2fXvpOIw/viewform?usp=sf_link")
                        }}
                    /> }
                    <div className="helpbutton">
                            <GetHelpModal />
                    </div>
                        <div className = "stuff">
                            <img className="titleImage" src={require("./CLB_PrimaryLogo.png")}
                                      alt = "Campus Lightbox"/>
                            <div className="guide">
                            Your Guide to UBC Mental Health Resources
                            </div>
                            <div className="select">
                                Select From One of the Following Options
                            </div>
                            <div className="buttonsAll">
                            <span className="resourceButton1 animated fadeIn">
                            <Button inverted style={styles.button}
                                onClick={() => this.onFilterClicked("peer")}>Peer Support</Button>
                            </span>
                            <span className="resourceButton2 animated fadeIn">
                            <Button inverted style={styles.button}
                                onClick={() => this.onFilterClicked("professional")}>Professional Help</Button>
                            </span>
                            <span className="resourceButton3 animated fadeIn">
                            <Button inverted style={styles.button}
                                onClick={() => this.onFilterClicked("hotline")}>Phone Hotline</Button>
                            </span>
                            </div>
                            <div className="ButtonClass animated fadeInDown">
                                <Button onClick={this.onScrollDownClicked} inverted
                                    circular icon='angle down' />
                            </div>
                        </div>
                </section>
        )
    }
}

export default Header;
