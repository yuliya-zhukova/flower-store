import React from "react";
import "./sections.scss";

import { Products } from "../products/Products";
import { sectionList } from "./sectionList";

export function Sections() {
  return (
    <div className="section">
      {sectionList.map(function (section, i) {
          return (
            <div key={i}>
              <h3 className="section__title">
                {section.title}
              </h3>
              <Products />
            </div>
          );
        })}
    </div>
  );
}
