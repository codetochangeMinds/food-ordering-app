import React, { Component } from 'react';
import { Media } from 'reactstrap';
import Dishdetail from './DishdetailComponent'

import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

class Menu extends Component {

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.props.OnDishSelect }>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          <Dishdetail dish={this.props.selectedDish}/>
        </div>
      </div>
    );
  }
}

export default Menu;