import React from "react";
import "./Carousel.scss";

import { Button } from "../button/Button";
import { carouselItemContent } from "./CarouselItem/carouselItemContent";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import { carouselList } from "./carouselList";

let clickMoveLeft = 300;
let clickMoveRight = 0;
let productRowLength = carouselItemContent.length;

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

export function Carousel() {
  return (
    <div className="section">
      {carouselList.map(function (section, i) {
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
              <CarouselItem />
            </div>
          );
        })}
    </div>
  );
}
