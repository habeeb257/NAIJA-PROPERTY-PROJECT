import React from 'react'
import styles from "./Home.module.css"

const Properties = () => {
  return (
    <section>
      <div className={`${styles.container} ${styles.propertiesContainer}`}>
        <h2>Our properties specialities</h2>
        <div className={styles.propertiesContent}>
          <div className={styles.propertiesContent1}>
            {/* */}
            <div className={styles.media}>
              <img src="/assets/property-icon-1.png" alt="" />
              <h4>Seafront</h4>
            </div>
            <p>
              Have a look <i className="fa-solid fa-arrow-right"></i>
            </p>
          </div>

          {/*  */}
          <div className={styles.propertiesContent2}></div>
          {/*  */}

          <div className={styles.propertiesContent1}>
            {/* */}
            <div className={styles.media}>
              <img src="/assets/property-icon-2.png" alt="" />
              <h4>Pet friendly</h4>
            </div>
            <p>
              Pets allowed <i className="fa-solid fa-arrow-right"></i>
            </p>
          </div>

          {/*  */}
          <div className={styles.propertiesContent2}></div>
          {/*  */}

          <div className={styles.propertiesContent1}>
            {/* */}
            <div className={styles.media}>
              <img src="/assets/property-icon-3.png" alt="" />
              <h4>Pet friendly</h4>
            </div>
            <p>
              Pets allowed <i className="fa-solid fa-arrow-right"></i>
            </p>
          </div>

          {/*  */}
          <div className={styles.propertiesContent2}></div>
          {/*  */}

          <div className={styles.propertiesContent1}>
            {/* */}
            <div className={styles.media}>
              <img src="/assets/property-icon-4.png" alt="" />
              <h4>Pet friendly</h4>
            </div>
            <p>
              Pets allowed <i className="fa-solid fa-arrow-right"></i>
            </p>
          </div>

          {/*  */}
          <div className={styles.propertiesContent2}></div>
          {/*  */}

          <div className={styles.propertiesContent1}>
            {/* */}
            <div className={styles.media}>
              <img src="/assets/property-icon-5.png" alt="" />
              <h4>Pet friendly</h4>
            </div>
            <p>
              Pets allowed <i className="fa-solid fa-arrow-right"></i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Properties