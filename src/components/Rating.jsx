import StarRatings from 'react-star-ratings';
import { Component } from 'react';

export class Bar extends Component {
  render() {
    const { rate } = this.props;

    return <StarRatings rating={rate} starDimension="24px" starSpacing="0px" starRatedColor="#FFAD33"/>;
  }
}
