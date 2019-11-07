import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import MediaCard from './Components/Menu';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'material-ui-search-bar'
import Slider from './Components/Carousel'
// import Detail from './Components/Detail';

function App() {
  return (
    <div>
     <Sidebar/>
     <Slider/>
     <MediaCard/>
     {/* <Detail/> */}
    </div>
  );
}

export default App;
