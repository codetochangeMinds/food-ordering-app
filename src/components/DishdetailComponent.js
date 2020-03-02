import React, { Component } from 'react';
import { Media } from 'reactstrap';

import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

class Dishdetail extends Component{
    renderDish(dish) {
        if (dish != null){
          return (
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
        }
        else
          return (
            <div></div>
          );
    }

    renderCommentsHelper(dish){
        const info = dish.comments.map((element) => {
        return(
          <div key={element.id}>
            <p>{element.comment}</p>
            <p>--{element.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(element.date)))}</p>
          </div>
        );
      })
      return info;
    }

    renderComments(dish) {
      if (dish != null){
        return (
          <Card>
            <CardBody>
              <CardTitle><h4>Comments</h4></CardTitle>
              {this.renderCommentsHelper(dish)}
            </CardBody>
          </Card>
        );
      }
      else
        return (
          <div></div>
        );
    }
    

    render(){
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.dish)}
            </div>
          </div>
        </div>
      );
    }
}

export default Dishdetail;