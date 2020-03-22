import React from 'react';
import Top from '../Top/Top';
import About from '../About/About';
import Video from '../Video/Video';
import Industriels from '../Industriels/Industriels';
import Partnership from '../Partnership/Partnership';
import '../../assets/Style/main.scss';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <ParallaxProvider>
      <Top/>
      <Video/>
      <About/>
      <Industriels/>
      <Partnership/>
    </ParallaxProvider>
  );
}

export default App;
