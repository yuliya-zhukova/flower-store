import React from "react";
import "./Content.scss";

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
