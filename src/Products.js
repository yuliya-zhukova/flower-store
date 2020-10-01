import React from "react";
import "./content.scss";

import { productList } from "./productList"

import image_small from "./image_small.png";

export function Products() {
  return (
    <div className="content__bar">
      <div className="content__bar-title">New</div>
      <div className="content__items">
          {productList.map(function(product) {
              return (
                <div className="content__item">
                  <img src={image_small} alt="New"></img>
                  <div className="content__item-info content__item-info_small">
                    <h2 className="content__item-title">{product.title}</h2>
                    <p className="content__item-price">{product.price}</p>
                  </div>
              </div>
              )
          })}
      </div>
    </div>
  );
}
