import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import ComplexGrid from './Components/Menu';
import Slider from "./Components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'material-ui-search-bar'
function App() {
  return (
    <div>

     <Sidebar/>
     <Slider/>
     <ComplexGrid/>
    </div>
  );
}

export default App;
