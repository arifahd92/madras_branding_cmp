import React from "react";
import classes from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className="container">
        <div className={classes.container}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-4 d-flex justify-content-center align-items-center">
              <img
                src="https://www.tmbc.in/assets/images/footer-logo.png"
                alt="logo"
              />
            </div>
            <div className="col-sm-4 d-flex justify-content-center align-items-center text-white">
              <ul>
                <li>home</li>
                <li>about</li>
                <li>services</li>
                <li>client</li>
              </ul>
            </div>
            <div className="col-sm-4 d-flex justify-content-center align-items-center text-white">
              Privacy Policy Terms and Conditions Return Policy
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-6 offset-4 text-white">
              The Madras Branding Company (C) Copyright All Rights Reserved
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <div className=" col-sm-6 border-top border-secondayr border-2 my-4 offset-4"></div>
            <hr />
          </div>
          <div className="row d-flex justify-content-center align-items-center offset-4">
            <a
              href="https://www.facebook.com/tmbc.in"
              className=" col-2 btn btn-success btn-sm mr-2"
            >
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/tmbc-in"
              className=" col-2 btn btn-danger btn-sm"
            >
              <i className="bi bi-linkedin"></i> linkedin
            </a>
            <a
              href="https://www.instagram.com/themadrasbrandingcompany/"
              className=" col-2 btn btn-success btn-sm mr-2"
            >
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
