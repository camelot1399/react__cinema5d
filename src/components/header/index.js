import React from "react";
import Logo from "./logo";
import UserBlock from "./userBlock";
import styles from "./style.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBody}>
          <Logo />
          <UserBlock />
        </div>
      </div>
    </div>
  )
}

export default Header;
