import React from "react";
import Logo from "./logo";
import styles from "./style.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerСontainer}>
        <div className={styles.headerBody}>
          <Logo />
          <div>userBlock</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
