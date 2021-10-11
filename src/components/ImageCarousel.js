import React from 'react';
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class  ImageCarousel extends Component {
 constructor(props) {
   super(props);
 }
 
 render() {

   return (

    <Carousel> {
    this.props.imageList.map(function(image){        
           return  <Carousel.Item> <img src={image}  alt="logo"/> </Carousel.Item>
    })
     } </Carousel>
     );
 }
 
}
 
export default ImageCarousel;