import React from 'react';
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class ImageCarousel extends Component {
 render() {
  return (
    <Carousel> 
      {this.props.imageList.map(image =>     
        <Carousel.Item> 
          <img src={image} height={this.props.height} alt="Classrooms Without Borders logo"/> 
        </Carousel.Item>
      )}
    </Carousel>
  );
 }
}
 
export default ImageCarousel;