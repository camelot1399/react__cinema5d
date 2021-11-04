import React from "react";
import styles from "./style.module.scss";
import Item from "../item/index";

function Slider() {
  return (
    <div className={styles["slider"] + " container"}>

      <div className={styles["slider__header"]}>
        <div className={styles["slider__header-left"]}>
          <h4>
            Билеты в кино <span>155</span>
          </h4>
        </div>

        <div  className={styles["slider__header-right"]}>
          <h4>Все билеты</h4>
        </div>
      </div>

      <div className={styles["slider__body"]}>

        <button></button>

        <div className={styles["slider__body-items"]}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          
          
          
        </div>

        <button><i class="far fa-angle-right"></i></button>

      </div>
    </div>
  );
}

export default Slider;
