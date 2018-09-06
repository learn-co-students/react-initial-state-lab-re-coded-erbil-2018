import React from 'react';


export default class ImageSlider extends React.Component{
  constructor(){
    super();
    this.state = {
      currentSlideIndex: 0
    }
  }
  
  render(){
    const message = `I am on slide ${this.state.currentSlideIndex}`
    return(
        <div>{message}</div>
      )
  }
}

