import React, { useState } from "react";
import styles from "./Home.module.css";
import properties from "../../utils/properties";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(properties.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleProperties = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return properties.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className={styles.container}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceContent1}>
          <h1>Top pick villas</h1>
          <h4>Your premium selection</h4>
        </div>

        <div className={styles.serviceContent2}>
          <div className={styles.sliderContainer}>
            <button className={styles.prevBtn} onClick={prevSlide}>
              &#10094;
            </button>
            <div className={styles.sliderWrapper}>
              {getVisibleProperties().map((property) => (
                <div key={property.id} className={styles.sliderItem}>
                  <div className={styles.propertyCard}>
                    <img src={property.image} alt={property.title} />
                    <h3>{property.title}</h3>
                    <p>{property.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.nextBtn} onClick={nextSlide}>
              &#10095;
            </button>
          </div>
          <div className={styles.dotsContainer}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  index === currentSlide ? styles.activeDot : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
