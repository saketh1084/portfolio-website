import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id ="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Fell free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("skills/mailIcon.png")} alt ="Email"/>
                <a href="mailto:kamatamsaketh@gmail.com">kamatamsaketh@gmail.com</a>
                </li>
                <li className={styles.link}>
                <img src={getImageUrl("skills/linkedinIcon.png")} alt ="Linkedin.com "/>
                <a href="https://www.linkedin.com/in/sai-saketh-goud-094547229/">linkedin.com/saisaketh</a>
            </li>
            
            <li className={styles.link}>
                <img src={getImageUrl("skills/github.png")} alt ="Email Icon"/>
                <a href="https://github.com/saketh1084">github.com/saisaketh</a>
            </li>
            
        </ul>
    </footer>
  )
}

export default Contact
