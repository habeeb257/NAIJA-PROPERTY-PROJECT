import React from 'react'
import styles from "./Villas.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContent}>
      <div className={`${styles.container} ${styles.heroContent1}`}>
        <h2>All villas</h2>
        <h6>124 results</h6>
      </div>

      <div className={styles.heroContent2}>
        <form>
          <select name="country">
            <option value="italy">Italy</option>
            <option value="greece">Greece</option>
            <option value="spain">Spain</option>
            <option value="france">France</option>
          </select>

          <select name="date">
            <option value="date">Date</option>
          </select>

          <select name="guests">
            <option value="guest">Guest</option>
          </select>

          <select name="price">
            <option value="price">Price</option>
          </select>

          <button type="submit">
            Search
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero