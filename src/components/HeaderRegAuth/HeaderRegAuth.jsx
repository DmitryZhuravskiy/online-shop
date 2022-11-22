import React from 'react'
import styles from "./styles.module.scss";

const HeaderRegAuth = () => {
  return (
    <article className={styles.headerTitle}>
        <h2 className={styles.title}>Салыкин:Lights</h2>
        <p className={styles.description}>
          Техника для любителей и профессионалов
        </p>
        <ul className={styles.social}>
          <li className={styles.linkItem}>
            <a className={styles.link} href="#">
              <img
                className={styles.linkImage}
                src="../images/instagram.svg"
                alt="instagram"
                width="50"
                height="46"
              />
            </a>
          </li>
          <li className={styles.linkItem}>
            <a className={styles.link} href="#">
              <img
                className={styles.linkImage}
                src="../images/telegram.svg"
                alt="telegram"
                width="50"
                height="46"
              />
            </a>
          </li>
          <li className={styles.linkItem}>
            <a className={styles.link} href="#">
              <img
                className={styles.linkImage}
                src="../images/whatsapp.svg"
                alt="whatsapp"
                width="50"
                height="46"
              />
            </a>
          </li>
          <li className={styles.linkItem}>
            <a className={styles.link} href="#">
              <img
                className={styles.linkImage}
                src="../images/twitter.svg"
                alt="twitter"
                width="50"
                height="46"
              />
            </a>
          </li>
          <li className={styles.linkItem}>
            <a className={styles.link} href="#">
              <img
                className={styles.linkImage}
                src="../images/facebook.svg"
                alt="facebook"
                width="50"
                height="46"
              />
            </a>
          </li>
        </ul>
      </article>
  )
}

export default HeaderRegAuth