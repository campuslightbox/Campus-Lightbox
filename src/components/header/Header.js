// import Announcement from '../../components/banner/Announcement';
import "./style.css";
import "./animate.css";

import { Button, Icon, Modal } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import CovidModal from "../covidModal/CovidModal";
import GetHelpModal from "../getHelpModal/GetHelpModal";
import ReactGA from "react-ga";
import ResourceRecommender from "../resourceRecommender/ResourceRecommender";
import logo from "./CLB_PrimaryLogo.png";

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

function Header(props) {
  const [right, setRight] = useState("-150px");
  const [right2, setRight2] = useState("-150px");
  const [isCrisis, setIsCrisis] = useState(false);

  function handleCrisis() {
    setIsCrisis(true);
  }

  const onScrollDownClicked = () => {
    ReactGA.event({
      category: "Header",
      action: "Clicked Scroll Down Button",
    });
    props.scrollToContent();
  };

  const onFilterClicked = (filterName) => {
    ReactGA.event({
      category: "Header",
      action: "Clicked Top Preset Filer: " + filterName,
    });
    props.onPresetFilterChange(filterName);
    props.scrollToContent();
  };

  const startTimer = (e) => {
    let expiredAt = new Date();
    expiredAt = expiredAt.setSeconds(expiredAt.getSeconds());
    localStorage.setItem("expiration", expiredAt);
  };
  const scrollToMiddle = (e) => {
    const currentTime = new Date().getTime();
    const expireTime = localStorage.getItem("expiration");
    if (
      window.scrollY > 700 &&
      expireTime !== null &&
      currentTime - Number(expireTime) > 10000
    ) {
      setRight("30px");
      setRight2("12px");
    } else {
      setRight("-150p");
      setRight2("-150px");
    }
  };
  useEffect(() => {
    window.addEventListener("load", startTimer);
    window.addEventListener("scroll", scrollToMiddle);
  }, []);

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
        <Button onClick={handleCrisis} color="red">
          <Icon name="heart outline" />
          Get Help Now
        </Button>
        <GetHelpModal isCrisis={isCrisis} setIsCrisis={setIsCrisis} />
      </div>
      {/* <div className="covidbutton">
        <CovidModal />
      </div> */}
      <div className="stuff">
        <img className="titleImage" src={logo} alt="Campus Lightbox" />
        <div className="guide">Your Guide to UBC Mental Health Resources</div>
        <div className="select">
          Get a suggested resource or choose your own below.
        </div>

        <div className="startquiz" style={{ right: right }}>
          <h4 id="helper" style={{ right: right2 }}>
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
                <ResourceRecommender />
              </Modal.Description>
            </Modal.Content>

            {/* <Modal.Actions>
                <GetHelpModal />
              </Modal.Actions> */}
          </Modal>

          <br />
        </div>
        <br />
        <div className="resourceButton4 animated fadeIn">
          <Modal
            dimmer="blurring"
            trigger={
              <Button color="green" style={styles.buttonResource}>
                Resource Recommender
              </Button>
            }
            closeIcon
            size="large"
          >
            <Modal.Header>Resource Recommender</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <ResourceRecommender />
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
            onClick={onScrollDownClicked}
            inverted
            circular
            icon="angle down"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
