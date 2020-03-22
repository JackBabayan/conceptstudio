import React from 'react';
import Header from '../Header/Header';
import HomeTop from '../HomeTop/HomeTop';
import  './style.scss';


function Top() {
  return (
      <div className="TopSectionBeckLineContainer">
        <Header/>
        <HomeTop/>
        <div className="TopSectionBeckLine row align-center">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
  )
}

export default Top;