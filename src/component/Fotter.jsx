import React from "react";

const Fotter = () => {
  return (
    <section className="container footerContainer">
      <div className="footerContent">
        <div className="footerContent1">
          <h5>Luxury RENTALS</h5>
          <p>
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
        </div>
        <div className="footerContent2">
          <h2>Connect with us</h2>
          <p>+00 000 000 00</p>
          <p>info@luxuryrentals.com</p>
          <div className="footerIcon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
            <img src="/assets/fotter-image-1.png" alt="" />
            <img src="/assets/footer-image-2.png" alt="" />
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <div className="footerContent3">
        <div className="footerContent3Item1">
          <p>Terms & Conditions</p>
          <p>Privacy Notice and Cookies</p>
          <p>Imprint</p>
        </div>
        <div className="footerContent3Item2">
          <p>Luxury rentals. | © All rights reserved 2022-2023</p>
        </div>
      </div>
    </section>
  );
};

export default Fotter;
