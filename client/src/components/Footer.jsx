import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = ({ content }) => {
  return (
    <footer
      style={{ backgroundColor: "#0b1d3a" }} // Dark Navy Blue
      className="text-light py-5"
    >
      <div className="container">
        <div className="row">
          {/* Complaint Management System - now a bit wider */}
          <div className="col-md-5 mb-4">
            <h6 className="text-uppercase fw-bold">{content.title}</h6>
            <p>{content.footerParagraph}</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">{content.link}</h6>
            <ul className="list-unstyled">
              <li>
              <Link to="/" className="text-light text-decoration-none">{content.home}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">{content.contact}</Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">{content.about}</Link>
              </li>
              <li>
                <Link to="/services" className="text-light text-decoration-none">{content.otherServices}</Link>
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">{content.otherServices}</h6>
            <ul className="list-unstyled">
              <li><Link to="/public-form" className="text-light text-decoration-none">{content.service1Title}</Link></li>
              <li><Link to="/track" className="text-light text-decoration-none">{content.service2Title}</Link></li>
              <li><Link to="/faq" className="text-light text-decoration-none">F{content.service3Title}</Link></li>
            </ul>
          </div>

          {/* Logo & Social - now a bit narrower */}
          <div className="col-md-2 mb-4" id="social-media">
            <h5 className="fw-bold">{content.complaintManager}</h5>
            <div className="d-flex gap-3 mt-3">
              <a href="https://www.facebook.com/profile.php?id=100090606769121&rdid=7gb6Lm7sTi4DKqJe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CNV8QysEA#" className="text-light">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/" className="text-light">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="text-light" />

        {/* Bottom Text */}
        <div className="d-md-flex justify-content-between text-center text-md-start">
          <p className="mb-0">&copy; {new Date().getFullYear()} {content.title}</p>
          <p className="mb-0">
            <a href="#" className="text-light text-decoration-none">{content.privacyPolicy} </a> 
            <span>|</span>
              <span> {content.madeWith}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
