import React from 'react'
import Style from './Contact.module.css'



const Hero = () => {
  return (
    <section className={Style.heroContainer}>
      <div className={`${Style.container} ${Style.heroContent}`}>
        <h2>Contact Us</h2>

        <p>
          We're always here to answer your questions. <br />
          Reach out and we'll get back to you as soon as possible.
        </p>
        <div className={Style.heroContent2}>
          <img src="/assets/contact-image.png" alt="" />

          <div className={Style.messageContent1}>
            <h2>Let’s connect</h2>
            <div className={Style.messageContent1items}>
              <h5>Phone</h5>
              <p>+385 91 322 8444</p>
            </div>
            <div className={Style.messageContent1items}>
              <h5>Email</h5>
              <p>prospekt@prospekt.hr</p>
            </div>
            <div className={Style.messageContent1items}>
              <h5>Address</h5>
              <p>  
                Prospekt Ltd <br />
                Drazice 138, 51 000 Rijeka <br />
                Croatia
              </p>
            </div>

            <div className={Style.icons}>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero