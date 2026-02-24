import React from "react"
import styles from "./Home.module.css" 

    
const Hero = () => {
  return (
    <>
      <div className={styles.heroContent}>
        <div className={`${styles.container} ${styles.heroContent1}`}>
          <h1>Be our Guest</h1>
          <h4>LIVE like a king in our best houses</h4>
        </div>

        <div className={styles.heroContent2}>
          <form>
            <select>
              <option value="">italy</option>
              <option value="">greece</option>
              <option value="">greece</option>
              <option value="">greece</option>
            </select>

            <select>
              <option value="date">date</option>
            </select>

            <select>
              <option value="Guest">Guest</option>
            </select>

            <select>
              <option value="price">price</option>
            </select>

            <button>
              <h5>search</h5>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
     
    </>
  );
}

export default Hero