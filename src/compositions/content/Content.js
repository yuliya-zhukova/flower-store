import React from "react";
import "./Content.scss";

import { Primary } from "../../components/primary/Primary";
import { Regular } from "../../components/regular/Regular";
import { Carousel } from "../../components/Carousel/Carousel";
import { carousel } from "../../demoData/carousel";
import { carouselNew } from "../../demoData/carouselNew";

export function Content() {
  return (
    <div className="content">
      <Primary />
      <Regular />
      <Carousel title={carouselNew.title} items={carouselNew.items} />
      <Carousel title={carousel.title} items={carousel.items} />
    </div>
  );
}
