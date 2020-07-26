import React from "react";
// import { About } from "./components/About";
// import { Blog } from "./components/Blog";
// import { Features } from "./components/Features";
// import { Resume } from "./components/Resume";
// import { Skills } from "./components/Skills";
// import { Started } from "./components/Started";
// import { Work } from "./components/Work";

export const Layout = () => {
  return (
    <>
      {/* <nav
        className="navbar navbar-inverse navbar-expand-lg sticky-top"
        role="navigation"
      >
        <a className="navbar-brand" href="#">
          Flat UI
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-collapse-01"
        ></button>
        <div className="collapse navbar-collapse" id="navbar-collapse-01">
          <ul className="nav navbar-nav mr-auto">
            <li className="active">
              <a href="#fakelink">Products</a>
            </li>
            <li>
              <a href="#fakelink">Features</a>
            </li>
          </ul>
          <form className="navbar-form form-inline my-2 my-lg-0" action="#" role="search">
            <div className="form-group">
              <div className="input-group">
                <input className="form-control" id="navbarInput-01" type="search" placeholder="Search">
                <span className="input-group-btn">
                  <button type="submit" className="btn"><span className="fui-search"></span></button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </nav> */}
      <div className="fh5co-loader"></div>

      <div id="page">
        <header
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
          style={{ backgroundImage: `url("static/images/cover_bg_3.jpg")` }}
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

        {/* <About />
        <Resume />
        <Features />
        <Skills />
        <Work />
        <Blog />
        <Started />

        <div id="fh5co-consult">
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
        </div> */}
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
        </div>
      </div>
    </>
  );
};
