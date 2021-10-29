import React from "react";
import styles from "./style.module.scss";
import logo from '../../assets/image/logo/logo.png';

function Logo() {
  return (
    <div className={styles.logoBlock}>
      <img className={styles.logoBlockImg} src={logo} alt="Логототип лучшего сервиса мира" />
      <div className={styles.logoBlockName} >CINEMA5D</div>
    </div>
  )
}

export default Logo;
