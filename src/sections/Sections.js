import React from "react";
import "./Sections.scss";

import { Products } from "../products/Products";
import { sectionList } from "./sectionList";

export function Sections() {
  return (
    <div className="section">
      {sectionList.map(function (section, i) {
          return (
            <div key={i} className="section__slider">
              <div className="section__header">
                <h3 className="section__title">
                  {section.title}
                </h3>
                <div className="section__navigation">
                  <a href="/" className="section__nav-item section__nav-item_disable">
                    <div className="section__direction_left"></div>
                  </a>
                  <a href="/" className="section__nav-item">
                    <div className="section__direction_right"></div>
                  </a>
                </div>
              </div>
              <Products />
            </div>
          );
        })}
    </div>
  );
}
