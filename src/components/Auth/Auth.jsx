import React from "react";
import styles from "./styles.module.scss";
import { Button, PasswordInput, Input } from '@skbkontur/react-ui';
import { OAuth } from "./OAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

export const Auth = (props) => {
  return (
      <div className={styles.auth}>

        <div className="auth__body">
          <div className={styles['auth__header']}>
            <h2>Авторизация</h2>
            <FontAwesomeIcon className={styles.btnClose} icon={faWindowClose} onClick={props.closePopup}/>
          </div>

          <div className={styles.form}>
            <form className={styles['form']} action="#">
              <label for="login">Логин</label>
              <Input className={styles['form__input']} placeholder="логин"/>
              <label for="password">Пароль</label>
              <PasswordInput className={styles['form__input']} placeholder="пароль" />
              <Button className={styles['form__btn']}>Войти</Button>
            </form>
          </div>
        </div>

        <div className={styles.goToRegistration} onClick={props.toggleReg}>
          Пройти регистрацию
        </div>

        <OAuth />

      </div>
  );
};
