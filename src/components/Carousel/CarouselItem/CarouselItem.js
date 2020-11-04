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
    <div className="carousel__item">
      <div className="carousel__element">
        <div className="carousel__image">
          <img src={props.image} alt="New"></img>
          <div className="carousel__button-block">
            <Button
              classNames={"button button__carousel-item button__carousel-item_to-basket"}
              clickEvent={toBasket}
            />
            <Button
              classNames={"button button__carousel-item button__carousel-item_like"}
              clickEvent={toWishList}
            />
          </div>
        </div>
        <div className="carousel__item-info">
          <h4 className="carousel__item-title">{props.name}</h4>
          <div className="carousel__price-row">
            <div className="carousel__price">{props.price}</div>
            {props.oldPrice ? (
              <div className="carousel__price carousel__price_old">
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
