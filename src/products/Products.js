import React from "react";
import "./products.scss";

import { productList } from "./productList";

import image_small from "../images/image_small.png";

export function Products() {
  return (
    <div className="products">
      {productList.map(function (product) {
        return (
          <div className="products__item">
            <img src={image_small} alt="New"></img>
            <div className="products__item-info">
              <h4 className="products__item-title">{product.title}</h4>
              <p className="products__item-price">{product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
