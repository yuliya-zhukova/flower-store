import React from "react";
import "./Carousel.scss";

import { Button } from "../button/Button";
import { CarouselItem } from "./CarouselItem/CarouselItem";

export class Carousel extends React.Component {
  handleButtonClickLeft () {
    console.log('Left')
  }

  handleButtonClickRight () {
    console.log('Right')
  }

  render() {
    return (
      <div className="section">
        <div className="section__slider">
          <div className="section__header">
            <h3 className="section__title">
              {this.props.title} - {this.carouselType}
            </h3>
            <div className="section__navigation">
              <Button title={"←"} clickEvent={this.handleButtonClickLeft} classNames={"section__nav-item section__nav-item_left"} />
              <Button title={"→"} clickEvent={this.handleButtonClickRight}classNames={"section__nav-item section__nav-item_right"} />
            </div>
          </div>
          <div className="product__window">
            <div className="product__row">
              {this.props.items.map(function (item, i) {
                return (
                  <CarouselItem
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    oldPrice={item.oldPrice}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
