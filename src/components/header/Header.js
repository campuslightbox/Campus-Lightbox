import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/etline-font.css';
import './css/flexslider.css';
import './css/normalize.min.css';
import './css/queries.css';
import './css/styles.css';


class Header extends Component {
    render() {
        return (
          <div className = "Header">

          <section className="hero">

              <div className="container">
                  <div className="row">
                      <div className="col-md-6 col-md-offset-3">
                          <div className="hero-content text-center">
                              <h1>Campus Lightbox</h1>
                              <p className="intro">an initiative by Project Aurora</p>
                              <a href="#" className="btn btn-accent btn-large btn-margin-right">Peer</a>
                              <a href="#" className="btn btn-accent btn-large btn-margin-right">Professional</a>
                              <a href="#" className="btn btn-accent btn-large ">Phone</a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          </div>
        );
    }
}

export default Header;
