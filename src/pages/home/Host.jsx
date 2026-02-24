import React from 'react'
import styles from "./Home.module.css"

const Host = () => {
  return (
    <section className={styles.hostContainer}>
      <div className={styles.hostContent}>
        <div className={styles.hostContent1}>
          <h4>Become a host</h4>

          <h2>Become a host</h2>
          <p>
            Join the elite league of hosts specializing in luxury villas
            <br />
            and unlock a world of exclusive opportunities.
          </p>

          <button>join today</button>
        </div>
      </div>
    </section>
  );
}

export default Host