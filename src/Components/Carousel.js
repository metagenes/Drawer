import React from "react";
import { Carousel } from "react-responsive-carousel";
import logo from './logo.svg';

function Slider() {
  return (
  <Carousel autoPlay showThumbs = {false}>
    <div>
    <img src={logo} className="App-logo" alt="logo" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
    <img src={logo} className="App-logo" alt="logo" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
    <img src={logo} className="App-logo" alt="logo" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>

);
  }

export default Slider;


