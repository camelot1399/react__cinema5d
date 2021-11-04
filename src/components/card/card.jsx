import React from "react";
import styles from "./card.module.scss"

function Card() {
    return (
        <div className={styles["card"]}>
            <a className={styles["card__poster"]} href="/">
                <img src="https://www.ovideo.ru/images/posters/0031/0074/0001.jpg" alt="poster" />
                <span>7.2</span>
            </a>
            <div className={styles["card__details"]}>
                <a href="/">Не время умирать</a>
                <span>2021, боевик</span>
            </div>
        </div>
    )
}


export default Card;