import React from "react";
import "./Regular.scss";

import { regularList } from "../../demoData/regularList";
import { Button } from "../button/Button";

const buttonName = "View now";

function pressButton () {
  console.log("Ba-bamm!");
}

export function Regular() {
  const image_middle = "images/image_middle.png";

  return (
    <div className="regular">
      {regularList.map(function (regularItem, i) {
        return (
          <div className="regular__item" key={i}>
            <img src={image_middle} alt=""></img>
            <div className="regular__info">
              <h2 className="regular__title">{regularItem.title}</h2>
              <p className="regular__description">{regularItem.description}</p>
              <Button classNames={"button button_transparent"} clickEvent={pressButton} title={buttonName}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}
