import React from "react";
import "./CarouselItem.scss";

import { Button } from "../../button/Button";

function toBasket() {
  console.log("To the Basket!");
}

function toWishList() {
  console.log("To the Wish List!");
}

export function CarouselItem(props) {
  return (
    <div className="product__row-item">
      <div className="product__item">
        <div className="product__image">
          <img src={props.image} alt="New"></img>
          <div className="product__button-block">
            <Button
              classNames={"button button__product button__product_to-basket"}
              clickEvent={toBasket}
            />
            <Button
              classNames={"button button__product button__product_like"}
              clickEvent={toWishList}
            />
          </div>
        </div>
        <div className="product__item-info">
          <h4 className="product__item-title">{props.name}</h4>
          <div className="product__price-row">
            <div className="product__price">{props.price}</div>
            {props.oldPrice ? (
              <div className="product__price product__price_old">
                {props.oldPrice}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
