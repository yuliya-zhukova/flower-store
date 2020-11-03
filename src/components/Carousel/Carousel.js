import React from "react";
import "./Carousel.scss";

import { Button } from "../button/Button";
import { CarouselItem } from "./CarouselItem/CarouselItem";

export function Carousel(props) {
  return (
    <div className="section">
      <div className="section__slider">
        <div className="section__header">
          <h3 className="section__title">
            {props.title}
          </h3>
          <div className="section__navigation">
            <Button title={"←"} classNames={"section__nav-item section__nav-item_left"} />
            <Button title={"→"} classNames={"section__nav-item section__nav-item_right"} />
          </div>
        </div>
        <div className="product__window">
          <div className="product__row">
            {props.items.map(function (item, i) {
              return (
                <CarouselItem
                image={item.image}
                name={item.name}
                price={item.price}
                oldPrice={item.oldPrice}
                key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
