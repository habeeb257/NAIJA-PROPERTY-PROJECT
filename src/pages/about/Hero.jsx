import React from 'react'
import styles from './About.module.css';

const Hero = () => {
  return (
         <section className={styles.heroContainer}>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroContent1}>
            <img src="/assets/our-about-image.png" alt="" />
          </div>
          <div className={styles.heroContent2}>
            <h3>Your peace of mind, our priority</h3>

            
            <p>
                Curabitur efficitur ante vel mi bibendum, et maximus nisl
              ultricies. Morbi <br />nec tempus dui, sit amet facilisis nisl.
            </p>
        <p>
                Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis
              venenatis <br />lorem eu accumsan. Nunc sit amet mi vitae odio porttitor
              feugiat. Sed <br />quis sem elementum, viverra ligula at, lobortis
              magna. Praesent congue <br />nibh in dolor rutrum, et euismod quam
              elementum.  
        </p>
        <p>      Mauris justo felis, iaculis quis sagittis sit amet,
              feugiat vitae est. Aliquam <br />porta ex elit, sit amet rutrum turpis
              egestas viverra. Quisque at libero <br />purus.</p>

          </div>
        </div>
      </section>
  )
}

export default Hero