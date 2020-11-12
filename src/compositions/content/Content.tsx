import React from 'react';
import './Content.scss';

import { Primary } from '../../components/primary/Primary';
import { Regular } from '../../components/regular/Regular';
import { Carousel } from '../../components/Carousel/Carousel';
import { carousel } from '../../demoData/carousel';

interface ContentState {
  basket: string[];
  wishList: string[];
}

export class Content extends React.Component<{}, ContentState> {
  constructor (props) {
    super(props);

    this.state = {
      basket: [],
      wishList: []
    };
  }

  onToBasket = (id: string): void => {
    const basket = this.state.basket;

    basket.push(id);

    this.setState({
      basket
    });
  }

  onToWishList = (id: string): void => {
    const wishList = this.state.wishList;

    wishList.push(id);

    this.setState({
      wishList
    });
  }

  render (): JSX.Element {
    return (
      <div className="content">
        <Primary />
        <Regular />
        <Carousel
          title={carousel.title}
          items={carousel.items}
          onToBasket={this.onToBasket}
          onToWishList={this.onToWishList}
        />
      </div>
    );
  }
}
