import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {Link} from 'react-router-dom'

import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
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

    renderCommentsHelper(comments){
      const info = comments.map((element) => {
        return(
          <div key={element.id}>
            <p>{element.comment}</p>
            <p>--{element.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(element.date)))}</p>
          </div>
        );
      })
      return info;
    }

    renderComments(comments) {
      if (comments != null){
        return (
          <Card>
            <CardBody>
              <CardTitle><h4>Comments</h4></CardTitle>
              {this.renderCommentsHelper(comments)}
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
              <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>{this.props.dish.name}</h3>
                  <hr />
              </div>                
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.comments)}
            </div>
          </div>
        </div>
      );
    }
}

export default Dishdetail;