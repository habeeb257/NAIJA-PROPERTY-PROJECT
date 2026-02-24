import React from 'react'
import styles from "./Home.module.css"

const Region = () => {
  return (
    <section className={styles.region}>
      <div className={`${styles.container} ${styles.regionContent}`}>
        <div className={styles.regionContent1}>
          <h2>OUR REGIONS</h2>
          <p>
            Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus.
            Quisque feugiat felis a <br />
            quam volutpat, non scelerisque nibh scelerisque.
          </p>
        </div>
        <div className={styles.regionContent2}>
          <div className={styles.regionContent2Inner}>
            <h2>Mountains</h2>
            <p>87 properites</p>
          </div>
          <div className={styles.regionContent2Inner}>
            <h2>Coastline</h2>
            <p>64 properites</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Region