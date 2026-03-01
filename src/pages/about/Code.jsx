import React from 'react'
import styles from './About.module.css'

const Code = () => {
  return (
   <section className={styles.aboutContainer}>
         <div className={`${styles.container} ${styles.aboutContent}`}>
           <div className={styles.aboutContent1}>
                <h2>About us</h2>
             <p>
               Curabitur efficitur ante vel mi bibendum, et maximus nisl<br />
               ultricies. Morbi nec tempus dui, sit amet facilisis nisl.
             </p>
             <p>
               Ut vel urna quis urna tristique tempus. Etiam lobortis est at
               <br />mauris eleifend, id tempor purus ultricies.
             </p>
             <p>
               Curabitur efficitur luctus enim nec sollicitudin. Fusce
               <br />venenatis venenatis lorem eu accumsan. Nunc sit amet mi
               <br />vitae odio porttitor feugiat. Sed quis sem elementum, viverra
               <br />ligula at, lobortis magna. Praesent congue nibh in dolor
               <br />rutrum, et euismod quam elementum.
             </p>
             <p>
               Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae
               est.<br />
               Aliquam porta ex elit, sit amet rutrum turpis egestas <br />viverra.
               Quisque at libero purus.
             </p>
   
             <h4>We strive to offer you best possible homes to stay.</h4>
           </div>
   
           <div className={styles.aboutContent2}>
             <img src="/assets/about-image.png" alt="about " />   
           </div>
           
   
         </div>
       </section>
  )
}

export default Code