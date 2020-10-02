import React from "react";
import "./regular.scss";

import { regularList } from "./regularList";

import image_middle from "../images/image_middle.png";

export function Regular() {
  return (
    <div className="regular">
      {regularList.map(function (regularItem) {
        return (
          <div className="regular__item">
            <img src={image_middle} alt=""></img>
            <div className="regular__info">
              <h2 className="regular__title">{regularItem.title}</h2>
              <p className="regular__description">{regularItem.description}</p>
              <button type="button" className="button button__view-now">
                View now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
