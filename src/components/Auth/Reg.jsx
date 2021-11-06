import React from "react";
import styles from "./styles.module.scss";
import { Button, PasswordInput, Input } from '@skbkontur/react-ui';
import { OAuth } from "./OAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

export const Reg = (props) => {
  return (
      <div className={styles.auth}>

        <div className="auth__body">
          <div className={styles['auth__header']}>
            <h2>Регистрация</h2>
            <FontAwesomeIcon className={styles.btnClose} icon={faWindowClose} onClick={props.closePopup}/>
          </div>

          <div className={styles.form}>
            <form className={styles['form']} action="#">
              <label for="login">Логин</label>
              <Input className={styles['form__input']} placeholder="логин"/>
              <label for="password">Пароль</label>
              <PasswordInput className={styles['form__input']} placeholder="пароль" />
              <PasswordInput className={styles['form__input']} placeholder="пароль еще раз" />
              <Button className={styles['form__btn']}>Регистрация</Button>
            </form>
          </div>
        </div>

        <div className={styles.helpLOgin} onClick={props.toggleAuth}>
          Перейти к авторизации
        </div>

        <OAuth />

      </div>
  );
};
