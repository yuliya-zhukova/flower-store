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
      <div className="carousel">
        <div className="carousel__slider">
          <div className="carousel__header">
            <h3 className="carousel__title">
              {this.props.title}
            </h3>
            <div className="carousel__controls">
              <Button title="←" clickEvent={this.handleButtonClickLeft} classNames="button__nav-item" />
              <Button title="→" clickEvent={this.handleButtonClickRight} classNames="button__nav-item" />
            </div>
          </div>
          <div className="carousel__viewport">
            <div className="carousel__item-list">
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
