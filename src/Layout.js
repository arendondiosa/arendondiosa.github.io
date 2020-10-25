import React from "react";
import { Navbar } from "react-bootstrap";
// import { About } from "./components/About";
// import { Blog } from "./components/Blog";
// import { Features } from "./components/Features";
import { Resume } from "./components/Resume";
// import { Skills } from "./components/Skills";
// import { Started } from "./components/Started";
// import { Work } from "./components/Work";

export const Layout = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="#18325a"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="#home">
          <img
            src="/static/images/profile.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
      <div className="fh5co-loader"></div>

      <div id="page">
        <header
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <div className="display-t js-fullheight">
                  <div
                    className="display-tc js-fullheight animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <div
                      className="profile-thumb"
                      style={{
                        backgroundImage: `url("static/images/profile.png")`,
                      }}
                    ></div>
                    <h1>
                      <span>Alejandro E. Rendon</span>
                    </h1>
                    <h3>
                      <span>Software Developer</span>
                    </h3>
                    <p></p>
                    <ul className="fh5co-social-icons">
                      <li>
                        <a
                          href="https://twitter.com/arendondiosa"
                          target="blank_"
                        >
                          <i className="icon-twitter2"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://facebook.com/arendondiosa"
                          target="blank_"
                        >
                          <i className="icon-facebook2"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com/in/arendondiosa"
                          target="blank_"
                        >
                          <i className="icon-linkedin2"></i>
                        </a>
                      </li>
                    </ul>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <About /> */}
        <Resume />
        {/*
        <Features />
        <Skills />
        <Work />
        <Blog />
        <Started />

        
        <div id="fh5co-consult" className="fh5co-bg-dark">
          <div
            className="video fh5co-video"
            style={{ backgroundImage: `url("static/images/cover_bg_1.jpg")` }}
          >
            <div className="overlay"></div>
          </div>
          <div className="choose animate-box">
            <h2>Contact</h2>
            <form action="#">
              <div className="row form-group">
                <div className="col-md-6">
                  <input
                    type="text"
                    id="fname"
                    className="form-control"
                    placeholder="Your firstname"
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-6">
                  <input
                    type="text"
                    id="lname"
                    className="form-control"
                    placeholder="Your lastname"
                  />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Your subject of this message"
                  />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    className="form-control"
                    placeholder="Say something about us"
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
        <div id="fh5co-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  &copy; 2017 Free HTML5 Template. All Rights Reserved. <br />
                  Designed by{" "}
                  <a
                    href="https://freehtml5.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FreeHTML5.co
                  </a>{" "}
                  Demo Images:{" "}
                  <a
                    href="https://unsplash.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unsplash
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
