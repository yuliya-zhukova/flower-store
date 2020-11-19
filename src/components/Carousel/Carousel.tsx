import React from 'react';
import './Carousel.scss';

import { Button } from '../button/Button';
import { CarouselItem } from './CarouselItem/CarouselItem';
import { CarouselItemData } from '../../demoData/carousel';

interface CarouselProps {
  onToBasket: (id: string) => void;
  onToWishList: (id: string) => void;
  title: string;
  items: CarouselItemData[];
  seeMoreTitle?: string;
  seeMoreLink?: string;
}

interface CarouselState {
  visibleIndex: number;
}

export class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor (props: any) {
    super(props);

    this.state = {
      visibleIndex: 0
    };
  }

  private handleButtonClickLeft = (): void => {
    this.setState({
      visibleIndex: this.state.visibleIndex - 1
    });
  }

  private handleButtonClickRight = (): void => {
    this.setState({
      visibleIndex: this.state.visibleIndex + 1
    });
  }

  onToBasketClick = (id: string): void => {
    console.log(id + ' to the Basket.');
    this.props.onToBasket(id);
  }

  onToWishList = (id: string): void => {
    console.log(id + ' to the WishList.');
    this.props.onToWishList(id);
  }

  pressButton (): void {
    console.log('See more!');
  }

  render (): JSX.Element {
    console.log(this.state.visibleIndex);
    const itemWidth = 300;
    const itemsInPage = 4;
    const offset = -this.state.visibleIndex * itemWidth;

    const itemListStyle = (this.state.visibleIndex > 0) && ((this.props.items.length - this.state.visibleIndex) >= itemsInPage - 1) ?
      { transform: `translateX(${offset}px)` } :
      {};
    const disabledLeftButton = this.state.visibleIndex === 0 ?
      true : false;
    const disabledRightButton = (this.props.items.length - this.state.visibleIndex) >= itemsInPage ?
      false : true;

    return (
      <div className="carousel">
        <div className="carousel__slider">
          <div className="carousel__header">
            <h3 className="carousel__title">
              {this.props.title}
            </h3>
            <div className="carousel__controls">
              <Button title="←" clickEvent={this.handleButtonClickLeft} className="button button_transparent button__nav-item" disabled={disabledLeftButton} />
              <Button title="→" clickEvent={this.handleButtonClickRight} className="button button_transparent button__nav-item" disabled={disabledRightButton} />
            </div>
          </div>
          <div className="carousel__viewport">
            <div className="carousel__item-list" style={itemListStyle}>
              {this.props.items.map((item: CarouselItemData): JSX.Element => (
                <CarouselItem
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  id={item.id}
                  key={item.id}
                  toBasket={this.onToBasketClick}
                  toWishList={this.onToWishList}
                />
              ))}
              <div className="carousel__see-more">
                <h3 className="carousel__see-more_title">
                  {this.props.seeMoreTitle}
                </h3>
                <a href={this.props.seeMoreLink}>
                  <Button className="button button_transparent button__see-more" clickEvent={this.pressButton} title="See more" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
