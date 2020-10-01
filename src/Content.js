import React from "react";
import "./content.scss";

import { Products } from "./Products";

import image_big from "./image_big.png";
import image_middle from "./image_middle.png";

export function Content() {
  return (
    <div className="content">
      <div className="content__item">
        <img src={image_big} alt="Discount"></img>
        <div className="content__item-info">
          <h2 className="content__item-title">Title</h2>
          <p className="content__item-description">Description</p>
          <button
            type="button"
            className="content__button content__button_shop-now"
          >
            Shop now
          </button>
        </div>
      </div>
      <div className="content__main">
        <div className="content__items">
          <div className="content__item">
            <img src={image_middle} alt="Gifts"></img>
            <div className="content__item-info">
              <h2 className="content__item-title">Title</h2>
              <p className="content__item-description">Description</p>
              <button
                type="button"
                className="content__button content__button_view-now"
              >
                View now
              </button>
            </div>
          </div>
          <div className="content__item">
            <img src={image_middle} alt="Plants"></img>
            <div className="content__item-info">
              <h2 className="content__item-title">Title</h2>
              <p className="content__item-description">Description</p>
              <button
                type="button"
                className="content__button content__button_view-now"
              >
                View now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <Products />
    </div>
  );
}
