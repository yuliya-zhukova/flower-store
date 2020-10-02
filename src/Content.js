import React from "react";
import "./content.scss";

import { Primary } from "./Primary";
import { Regular } from "./Regular";
import { Sections } from "./Sections";

export function Content() {
  return (
    <div className="content">
      <Primary />
      <Regular />
      <Sections />
    </div>
  );
}
