import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from '../../assets/image/logo/logo.png';


function Logo() {
  return (
    <div className={styles.logoBlock}>
      <Link to="/" exact>
        <img className={styles.logoBlockImg} src={logo} alt="Логототип лучшего сервиса мира" />
        <div className={styles.logoBlockName} >CINEMA5D</div>
      </Link>

    </div>
  )
}

export default Logo;
