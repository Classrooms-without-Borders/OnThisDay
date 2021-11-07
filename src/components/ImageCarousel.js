import React from 'react';
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../styling/Details.css'

class ImageCarousel extends Component {
 render() {
  return (
    <Carousel> 
      {this.props.imageList.map(imageObject =>     
        <Carousel.Item> 
          <img src={imageObject.image} height={this.props.height} alt="Classrooms Without Borders logo"/> 
     
            <h2 class="caption">{imageObject.caption}</h2>
       
        </Carousel.Item>
      )}
    </Carousel>
  );
 }
}
 
export default ImageCarousel;