import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myLogo from "../../assets/images/logo-sm.png";
function nav() {
  return (
    <Row>
      <Col>
        <header>
          <nav className="header" id="header">
            <div className="logo">
              <img className="logo-img" src={myLogo} alt="AstraSyntax" />
            </div>
            <div className="Nav-bar">
              <ul className="main-nav-list" id="main-nav-list">
                <li>
                  <a href="/#" className="main-nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#" className="main-nav-link">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/#" className="main-nav-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#" className="main-nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#" className="main-nav-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/#" className="main-nav-link nav-cta">
                    Templates
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </Col>
    </Row>
  );
}

export default nav;
