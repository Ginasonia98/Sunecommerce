import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div>
                <span className="fw-bold fs-2 logo-color self-center">
                Sun Shop
                </span>
            </div>
          </div>
          <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
            <div className="">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://instagram.com/chikogina_?igshid=YmMyMTA2M2Y="
                    className="text-decoration-none text-white ms-1"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ginatobing/"
                    className="text-decoration-none text-white ms-1"
                  >
                    Linkeidn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ginasonia98?tab=repositories"
                    className="text-decoration-none text-white ms-1"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h4 className="text-white">Website</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://chikomoviestreaming.netlify.app/"
                    className="text-decoration-none text-white ms-1"
                  >
                    Chiko Movie Streaming Web
                  </a>
                </li>
                <li>
                  <a
                    href="https://psalm-tv-web-streaming.vercel.app/"
                    className="text-decoration-none text-white ms-1"
                  >
                    Psalm Tv
                  </a>
                </li>
                <li>
                  <a
                    href="https://rainbowfoodjournal.netlify.app/"
                    className="text-decoration-none text-white ms-1"
                  >
                    Rainbow Food Journal
                  </a>
                </li>
                <li>
                  <a
                    href="https://ginasonia98.github.io/Travellinweb.github.io/"
                    className="text-decoration-none text-white ms-1"
                  >
                    Travvellin Web
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div>
              <div>
                <label
                  for="Newsletter"
                  className="form-label text-white fw-bold"
                >
                  Subscribe To Our Newsletter
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
                <button className="button-50 mt-1">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <div className="copyright">
            <p className="me-1 text-white">
              &copy; All Rights Reserved. Made By
              <span className="text-decoration-none text-white ms-1">
                Gina Sonia Br Tobing
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

