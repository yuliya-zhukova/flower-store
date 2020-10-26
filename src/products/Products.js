import React from "react";
import "./Products.scss";

import { productList } from "./productList";

import image_small from "../images/image_small.png";

export function Products() {
  return (
    <div className="product__row">
      {productList.map(function (product, i) {
        return (
          <div className="product__item" key={i}>
            <img src={image_small} alt="New"></img>
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
        );
      })}
    </div>
  );
}
