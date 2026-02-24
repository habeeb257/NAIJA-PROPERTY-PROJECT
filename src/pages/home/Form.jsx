import React from 'react'
import styles from "./Home.module.css"

const Form = () => {
  return (
    <section className={styles.biggestContainer}>
    
      <section className={styles.backgroundContainer}></section>

      <section className={styles.messageContainer}>
        <div className={`${styles.container} ${styles.messageContent}`}>
          <div className={styles.messageContent1}>
            <h2>Let’s connect</h2>
            <div className={styles.messageContent1items}>
              <h5>Phone</h5>
              <p>+385 91 322 8444</p>
            </div>
            <div className={styles.messageContent1items}>
              <h5>Email</h5>
              <p>prospekt@prospekt.hr</p>
            </div>
            <div className={styles.messageContent1items}>
              <h5>Address</h5>
              <p>
                Prospekt Ltd <br />
                Drazice 138, 51 000 Rijeka <br />
                Croatia
              </p>
            </div>

            <div className={styles.icons}>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>

          <div className={styles.messageContent2}>
            <h2>We’d love to hear from you</h2>
            <form className="form-input">
              <div>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Email" />
              </div>
              <textarea defaultValue="Message" />

              <p>Search I accept the Terms and conditions</p>
              <button>send</button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Form