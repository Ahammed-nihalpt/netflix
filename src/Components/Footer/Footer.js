import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <div>
          <i class="fa-brands fa-facebook-f point"></i>
        </div>
        <div>
          <i class="fa-brands fa-instagram point"></i>
        </div>
        <div>
          <i class="fa-brands fa-twitter point"></i>
        </div>
        <div>
          <i class="fa-brands fa-youtube point"></i>
        </div>
      </div>
      <br />
      <div className="footer_menu">
        <div className="one">
          <p className="point underline">Audio Description</p>
          <p className="point underline">Investor Relations</p>
          <p className="point underline">Legal Notices</p>
        </div>
        <div className="one">
          <p className="point underline">Help Centre</p>
          <p className="point underline">Jobs</p>
          <p className="point underline">Cookie Preferences</p>
        </div>
        <div className="one">
          <p className="point underline">Gift Cards</p>
          <p className="point underline">Terms of Use</p>
          <p className="point underline">Corporate Information</p>
        </div>
        <div className="one">
          <p className="point underline">Media Centre</p>
          <p className="point underline">Privacy</p>
          <p className="point underline">Contact Us</p>
        </div>
      </div>
      <div className="footer_bottom">
        <button className="foot_btn">Service Code</button>
      </div>
    </div>
  );
}

export default Footer;
