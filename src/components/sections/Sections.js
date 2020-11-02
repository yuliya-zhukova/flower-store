import React from "react";
import "./Sections.scss";

import { Button } from "../button/Button";
import { productList } from "./products/productList";
import { Products } from "./products/Products";
import { sectionList } from "./sectionList";

let clickMoveLeft = 300;
let clickMoveRight = 0;
let productRowLength = productList.length;

function pressButtonLeft () {
  document.querySelector('.product__row').style.left = "-" + clickMoveLeft + "px";
  if ((clickMoveLeft / 300) <= (productRowLength - 4)) {
    clickMoveLeft = clickMoveLeft + 300;
    clickMoveRight = clickMoveRight - clickMoveLeft;
  } else {
    document.querySelector('.section__nav-item').classList.add('section__nav-item_disable');
  }
}

function pressButtonRight () {
  document.querySelector('.product__row').style.left = clickMoveRight + "px";
  clickMoveRight = clickMoveRight + 300;
}

export function Sections() {
  return (
    <div className="section">
      {sectionList.map(function (section, i) {
          return (
            <div key={i} className="section__slider">
              <div className="section__header">
                <h3 className="section__title">
                  {section.title}
                </h3>
                <div className="section__navigation">
                  <Button title={"←"} classNames={"section__nav-item section__nav-item_left"} clickEvent={pressButtonLeft} />
                  <Button title={"→"} classNames={"section__nav-item section__nav-item_right"} clickEvent={pressButtonRight}/>
                </div>
              </div>
              <Products />
            </div>
          );
        })}
    </div>
  );
}
