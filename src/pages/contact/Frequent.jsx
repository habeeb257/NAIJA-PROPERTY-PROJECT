import React from 'react'
import styles from './Contact.module.css'

const Frequent = () => {
  return (
      <section className={styles.FrequentlyContainer}>
        <div className={`${styles.container} ${styles.FrequentlyContent}`}>
          <div className={styles.FrequentlyContent1}>
            <h2>Frequently asked questions</h2>
            <h6>Everything you need to know about the product and billing.</h6>
          </div>
         <div className={styles.FrequentlyContent2}>
           <div className={styles.FrequentlyContent2Item}>
            <p>
              <i className="fa-solid fa-plus"></i> Where can I find the offer of
              villa and service prices?
            </p>

            <p>
              <i className="fa-solid fa-plus"></i> What is included in the price of
              Accommodation?
            </p>

            <p>
              <i className="fa-solid fa-plus"></i> What is the procedure for
              arranging and booking Accommodation?
            </p>

            <p>
              <i className="fa-solid fa-plus"></i> How do I pay the rest of the
              Accommodation price, at once or in several installments?
            </p>

            <p>
              <i className="fa-solid fa-plus"></i> What if I am late with paying the
              advance payment or the remaning amount?
            </p>

            <p>
              <i className="fa-solid fa-plus"></i> How can I cancel the
              Accommodation after having paid the advance payment or the
              remaining amount?
            </p>
          </div>

          <div className={styles.FrequentlyContent2Item}>
            <p>
              <i className="fa-solid fa-plus"></i>
              Will I receive a refund of the advance payment or the remaining
              amount for the Accommodation in case of cancellation?
            </p>

            <p>
              <i className="fa-solid fa-plus"></i> What are the terms of payment by
              bank transfer and can I pay by credit card?
            </p>

            <p>
              <i className="fa-solid fa-plus"></i> Is it possible to rent the villa
              outside the Saturday to Saturday period?
            </p>

            <p><i className="fa-solid fa-plus"></i> Is a deposit required?</p>  
            <p>
              <i className="fa-solid fa-plus"></i> Is it possible to check in before
              the time period?
            </p>

            <p>
              <i className="fa-solid fa-plus"></i> Is it cheaper if I book directly
              through the owner?
            </p>
          </div>

         </div>
        </div>
      </section>
  )
}

export default Frequent