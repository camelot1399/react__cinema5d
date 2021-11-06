import React, { useState } from "react";
import { Auth } from "../Auth/Auth";
import { Reg } from "../Auth/Reg";

import styles from "./style.module.scss";

function UserBlock() {

  const [authIsOPen, setAuthIsOpen] = useState(false);
  const [regIsOpen, setRegIsOPen] = useState(false);

  function toggleAuth() {
    setAuthIsOpen(true);
    setRegIsOPen(false);
  }

  function toggleReg() {
    setAuthIsOpen(false);
    setRegIsOPen(true);
  }

  function closePopup() {
    setAuthIsOpen(false);
    setRegIsOPen(false);
  }

  return (
    <div className={styles.userBlock}>
      <div onClick={() => setAuthIsOpen(true)}>userBlock</div>

      {authIsOPen && <Auth onToggle={toggleAuth} toggleReg={toggleReg} closePopup={closePopup} />}
      {regIsOpen && <Reg onToggle={toggleReg} toggleAuth={toggleAuth} closePopup={closePopup}  />}

    </div>
  )
}

export default UserBlock;
