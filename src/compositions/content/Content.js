import React from "react";
import "./Content.scss";

import { Primary } from "../../components/primary/Primary";
import { Regular } from "../../components/regular/Regular";
import { Carousel } from "../../components/Carousel/Carousel";

export function Content() {
  return (
    <div className="content">
      <Primary />
      <Regular />
      <Carousel />
    </div>
  );
}
