import React from "react";
import "./content.scss";

import { Primary } from "../primary/Primary";
import { Regular } from "../regular/Regular";
import { Sections } from "../sections/Sections";

export function Content() {
  return (
    <div className="content">
      <Primary />
      <Regular />
      <Sections />
    </div>
  );
}
