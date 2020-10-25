import React from "react";
import "./regular.scss";

import { regularList } from "./regularList";
import { Button } from "../button/Button";

import image_middle from "../images/image_middle.png";

const buttonName = "View now";

function pressButton () {
  console.log("Ba-bamm!");
}

export function Regular() {
  return (
    <div className="regular">
      {regularList.map(function (regularItem, i) {
        return (
          <div className="regular__item" key={i}>
            <img src={image_middle} alt=""></img>
            <div className="regular__info">
              <h2 className="regular__title">{regularItem.title}</h2>
              <p className="regular__description">{regularItem.description}</p>
              <Button clickEvent={pressButton} title={buttonName}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}
