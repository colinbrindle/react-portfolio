import React from "react";
import "../../styles/Contact.css";

function Contact() {
  return (
    <div>
      <a className="Contact"></a>
      <div className="container contact-margin">
        <div className="row">
          <div className="col-lg-3 col-sm-12 text-lg-end text-sm-start">
            <h2>Contact</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <div>
              Checkout my <a href="https://github.com/colinbrindle">GitHub</a>
            </div>
            <div>
              Connect with me on{" "}
              <a href="https://www.linkedin.com/in/colin-brindle/">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
