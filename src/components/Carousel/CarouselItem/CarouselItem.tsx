import React from "react";
import "./CarouselItem.scss";

import { Button } from "../../button/Button";

export class CarouselItem extends React.Component {
  onToBasket = () => {
    this.props.toBasket(this.props.id);
  }

  onToWishList = () => {
    this.props.toWishList(this.props.id);
  }

  render() {
    return (
      <div className="carousel__item">
        <div className="carousel__element">
          <div className="carousel__image">
            <img src={this.props.image} alt="New"></img>
            <div className="carousel__button-block">
              <Button
                classNames={"button button__carousel-item button__carousel-item_to-basket"}
                clickEvent={this.onToBasket}
              />
              <Button
                classNames={"button button__carousel-item button__carousel-item_like"}
                clickEvent={this.onToWishList}
              />
            </div>
          </div>
          <div className="carousel__item-info">
            <h4 className="carousel__item-title">{this.props.name}</h4>
            <div className="carousel__price-row">
              <div className="carousel__price">{this.props.price}</div>
              {this.props.oldPrice ? (
                <div className="carousel__price carousel__price_old">
                  {this.props.oldPrice}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
