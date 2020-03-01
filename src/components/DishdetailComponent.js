import React, { Component } from 'react';
import { Media } from 'reactstrap';

import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

class Dishdetail extends Component{
    renderDish(dish) {
        if (dish != null)
          return (
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
        else
          return (
            <div></div>
          );
    }
    renderCommentsHelper(dish){
      dish.comments.forEach(element => {
        console.log(element.comment);
        return(
          <div key={element.id}>
            <h6>Comments</h6>
          </div>
        );
      })
    }

    renderComments(dish) {
      if (dish != null){
        return (
          <Card>
            <CardBody>
              <CardTitle>Comments</CardTitle>
              { this.renderCommentsHelper(dish)}
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
      // const renderComments = this.props.dish.comments.map((commentInfo) => {
      //   return (
      //     <div className="col-12 col-md-5 m-1">
      //       <Card key={commentInfo.id}>
      //         <CardBody>
      //         {commentInfo.comment}

      //         </CardBody>
      //       </Card>
      //     </div>
      //   );
      // });

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