import React from "react";
import "../styles/footer.css";


function Footer() {
  return (
    <div>
      <div className="footer">
        <h2>Let's Work Together</h2>
        <a href="#">Download Resume</a>
      </div>
      <div className="icons">
      <FontAwesomeIcon icon="fa-brands fa-instagram" />
      <FontAwesomeIcon icon="fa-brands fa-facebook" />
      <FontAwesomeIcon icon="fa-brands fa-unsplash" />
      </div>
      {/* <i className="fa-brands fa-instagram">
        <i className="fa-brands fa-facebook">
          <i className="fa-brands fa-unsplash"></i>
        </i>
      </i> */}
    </div>
  );
}

export default Footer;
