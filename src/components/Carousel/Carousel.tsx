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

  handleButtonClickLeft (): void {
    console.log('Left');
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

  render (): JSX.Element {
    const itemListClassName = this.state.visibleIndex > 0 ?
      'carousel__item-list carousel__item-list_translate' :
      'carousel__item-list';

    return (
      <div className="carousel">
        <div className="carousel__slider">
          <div className="carousel__header">
            <h3 className="carousel__title">
              {this.props.title}
            </h3>
            <div className="carousel__controls">
              <Button title="←" clickEvent={this.handleButtonClickLeft} classNames="button button_transparent button__nav-item" />
              <Button title="→" clickEvent={this.handleButtonClickRight} classNames="button button_transparent button__nav-item" />
            </div>
          </div>
          <div className="carousel__viewport">
            <div className={itemListClassName}>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
