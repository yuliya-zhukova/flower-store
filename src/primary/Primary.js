import React from "react";
import "./primary.scss";

import { primaryItem } from "./primaryItem";
import { Button } from "../button/Button";

import image_big from "../images/image_big.png";

const buttonName = "Shop now";

function pressButton () {
  console.log("Bamm!");
}

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
          <Button classNames={"button"} clickEvent={pressButton} title={buttonName} />
        </div>
    </div>
  );
}
