import React, { useState } from 'react'
import properties from '../../utils/properties';
import styles from './Villas.module.css';

const Service = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 1;
  const totalSlides = properties.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      {/* Desktop Grid View */}
      <div className={styles.desktopView}>
        <div className={styles.serviceContent2}>
          {properties.map((property) => (
            <div key={property.id} className={styles.propertyCard}>
              <img src={property.image} alt={property.title} />
              <h3>{property.title}</h3>
              <p>{property.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Slider View */}
      <div className={styles.mobileView}>
        <div className={styles.mobileSliderContainer}>
          <button className={styles.mobilePrevBtn} onClick={prevSlide}>
            &#10094;
          </button>
          <div className={styles.mobileSliderWrapper}>
            {[properties[currentSlide]].map((property) => (
              <div key={property.id} className={styles.mobileSliderItem}>
                <div className={styles.propertyCard}>
                  <img src={property.image} alt={property.title} />
                  <h3>{property.title}</h3>
                  <p>{property.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.mobileNextBtn} onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <div className={styles.mobileDotsContainer}>
          {properties.map((_, index) => (
            <span
              key={index}
              className={`${styles.mobileDot} ${
                index === currentSlide ? styles.activeMobileDot : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;