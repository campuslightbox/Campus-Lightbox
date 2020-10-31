import React from "react";
import { Button, Modal } from "semantic-ui-react";
import GetHelpModal from "../../components/gethelpmodal/GetHelpModal";
import CovidModal from "../../components/covidmodal/CovidModal";
import QuizApp from "../../components/phase2-quiz/App";
// import Announcement from '../../components/banner/Announcement';
import "./style.css";
import "../animate.css";
import ReactGA from "react-ga";

ReactGA.initialize("UA-139413334-1");

const styles = {
  button: {
    width: "70%",
    minWidth: "calc(130px + 5vw)",
    height: 50,
    fontSize: 15,
  },
  buttonResource: {
    width: "40%",
    minWidth: "200px",
    height: 50,
    fontSize: 15,
  },
  announcementButton: {
    marginLeft: 8,
  },
};

class Header extends React.Component {
  onScrollDownClicked = () => {
    ReactGA.event({
      category: "Header",
      action: "Clicked Scroll Down Button",
    });
    this.props.scrollToContent();
  };

  onFilterClicked = (filterName) => {
    ReactGA.event({
      category: "Header",
      action: "Clicked Top Preset Filer: " + filterName,
    });
    this.props.onPresetFilterChange(filterName);
    this.props.scrollToContent();
  };

  state = {
    right: "-150px",
    right2: "-150px",
    expiration: "",
  };
  
  startTimer = (e) => {
    let expiredAt = new Date();
    expiredAt = expiredAt.setSeconds(expiredAt.getSeconds());
    localStorage.setItem("expiration", expiredAt);
  };
  scrollToMiddle = (e) => {
    const currentTime = new Date().getTime();
    const expireTime = localStorage.getItem("expiration");
    if (
      window.scrollY > 700 &&
      expireTime !== null &&
      currentTime - Number(expireTime) > 10000
    ) {
      this.setState({ right: "30px", right2: "12px" });
    } else {
      this.setState({ right: "-150px", right2: "-150px" });
    }
  };
  componentDidMount() {
    window.addEventListener("load", this.startTimer);
    window.addEventListener("scroll", this.scrollToMiddle);
  }

  render() {
    return (
      <section className="b1">
        {/*  {<Announcement
                        icon={{name: "wrench"}}
                        text={["Have finance/marketing skills? ", <b>We are hiring!</b>]}
                        button={{
                            content:"Join us",
                            onClick: () => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfuV4-Eqm_lB32EjQn1Be_GjRIdETJyavbctmfwvf2fXvpOIw/viewform?usp=sf_link")
                        }}
                    /> } */}
        <div className="helpbutton">
          <GetHelpModal />
        </div>
        <div className="covidbutton">
          <CovidModal />
        </div>
        <div className="stuff">
          <img
            className="titleImage"
            src={require("./CLB_PrimaryLogo.png")}
            alt="Campus Lightbox"
          />
          <div className="guide">Your Guide to UBC Mental Health Resources</div>
          <div className="select">Select From One of the Following Options</div>
          
          <div className="startquiz" style={{ right: this.state.right }}>
            <h4 id="helper" style={{ right: this.state.right2 }}>
              Help me pick
            </h4>
            <Modal
              dimmer="blurring"
              trigger={
                <button className="circular ui icon button green massive">
                  <i className="icon leaf"></i>
                </button>
              }
              closeIcon
              size="large"
            >
              <Modal.Header>Resource Recommender</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <QuizApp />
                </Modal.Description>
              </Modal.Content>

              {/* <Modal.Actions>
                <GetHelpModal />
              </Modal.Actions> */}
            </Modal>

            <br />
            <br />
          </div>
          
          
          <div className="buttonsAll">
            <span className="resourceButton1 animated fadeIn">
              <Button
                inverted
                style={styles.button}
                onClick={() => this.onFilterClicked("peer")}
              >
                Peer Support
              </Button>
            </span>
            <span className="resourceButton2 animated fadeIn">
              <Button
                inverted
                style={styles.button}
                onClick={() => this.onFilterClicked("professional")}
              >
                Professional Help
              </Button>
            </span>
            <span className="resourceButton3 animated fadeIn">
              <Button
                inverted
                style={styles.button}
                onClick={() => this.onFilterClicked("hotline")}
              >
                Phone Hotline
              </Button>
            </span>
          </div>
          <br />
          <br />
          <div className="resourceButton4 animated fadeIn">
            <Modal
              dimmer="blurring"
              trigger={
                <Button
                color='green'
                style={styles.buttonResource}
              >
                Resource Recommender
              </Button>
              }
              closeIcon
              size="large"
            >
              <Modal.Header>Resource Recommender</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <QuizApp />
                </Modal.Description>
              </Modal.Content>

              {/* <Modal.Actions>
                <GetHelpModal />
              </Modal.Actions> */}
            </Modal>
            <br />
            <br />
          </div>
          <div className="ButtonClass animated fadeInDown">
            <Button
              onClick={this.onScrollDownClicked}
              inverted
              circular
              icon="angle down"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
