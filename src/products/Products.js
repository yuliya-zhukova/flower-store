import React from "react";
import "./Products.scss";

import { productList } from "./productList";
import { Button } from "../button/Button";

import image_small from "../images/image_small.png";

function toBasket () {
  console.log("To the Basket!");
}

function toWishList () {
  console.log("To the Wish List!");
}

export function Products() {
  return (
    <div className="product__window">
      <div className="product__row">
        {productList.map(function (product, i) {
          return (
            <div className="product__row-item" key={i}>
              <div className="product__item">
                <div className="product__image">
                  <img src={image_small} alt="New"></img>
                  <div className="product__button-block">
                    <Button classNames={"button button__product button__product_to-basket"} clickEvent={toBasket}/>
                    <Button classNames={"button button__product button__product_like"} clickEvent={toWishList} />
                  </div>
                </div>
                <div className="product__item-info">
                  <h4 className="product__item-title">{product.title}</h4>
                  <div className="product__price-row">
                    <div className="product__price">{product.price}</div>
                    {
                      product.oldPrice ? (
                      <div className="product__price product__price_old">{product.oldPrice}</div>
                      ) : (
                        <></>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
