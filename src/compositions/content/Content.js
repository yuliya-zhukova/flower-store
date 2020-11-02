import React from "react";
import "./Content.scss";

import { Primary } from "../../components/primary/Primary";
import { Regular } from "../../components/regular/Regular";
import { Carousel } from "../../components/Carousel/Carousel";
import { carousel } from "../../demoData/carousel";

export function Content() {
  return (
    <div className="content">
      <Primary />
      <Regular />
      <Carousel title={carousel.title} />
    </div>
  );
}
