import React from "react";
import "./primary.scss";

import { primaryItem } from "./primaryItem";

import image_big from "../images/image_big.png";

export function Primary() {
  return (
    <div className="primary">
      <img src={image_big} alt="Discount"></img>
        <div className="primary__info">
          <h2 className="primary__title">
              {primaryItem.title}
          </h2>
          <p className="primary__description">
              {primaryItem.description}
          </p>
          <button
            type="button"
            className="button button__shop-now"
          >
            Shop now
          </button>
        </div>
    </div>
  );
}
