import React from 'react'
import Style from './Contact.module.css'

const Message = () => {
  return (
    <section className={Style.messageContainer}>
      <div className={Style.messageContent2}>
        <h2>We’d love to hear from you</h2>
        <form className={Style.formInput}>
          <div>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Email" />
          </div>
          <textarea defaultValue="Message" />

          <p>Search I accept the Terms and conditions</p>
          <button>send</button>
        </form>
      </div>
    </section>
  );
}

export default Message