import styles from "./Hero.module.css"
import { getImageUrl } from "../../../utils"
const Hero = () => {
  return (
    <section className ={styles.container}>
       <div  className={styles.content}>
            <h1 className={styles.title}> Hi, I,m Saketh</h1>
            <p className={styles.description}>
               I'm a Passionate Java full stack developer. Transforming ideas  into powerfull solutions. Seeking for fresher oppourtunities!.
            </p>
            <a href ="mailto:kamatamsaketh@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
      <img src={getImageUrl("nav/image1.png")} alt="Her hero image" className ={styles.image1}/> 
       <div className={styles.topBlur}/>
       <div className={styles.bottomBlur}/>
    </section>
  )
   
  
}

export default Hero
