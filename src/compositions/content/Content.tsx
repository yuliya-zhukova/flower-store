import React from "react";
import "./Content.scss";

import { Primary } from "../../components/primary/Primary";
import { Regular } from "../../components/regular/Regular";
import { Carousel } from "../../components/Carousel/Carousel";
import { carousel } from "../../demoData/carousel";

export class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: [],
      wishList: []
    };
  }

  onToBasket = (id) => {
    const basket = this.state.basket;

    basket.push(id);

    this.setState({
      basket
    });
  }

  onToWishList = (id) => {
    const wishList = this.state.wishList;

    wishList.push(id);

    this.setState({
      wishList
    });
  }

  render() {
    console.log(this.state);

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
