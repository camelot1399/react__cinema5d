import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faGoogle, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const OAuth = () => {
  return (
    <div className={styles['OAuth']}>
      <div>Войти через:</div>
      <div className={styles['OAuth__link']}>
        <Link to="#">
          <FontAwesomeIcon icon={faVk} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faGoogle} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </div>
    </div>
  );
};
