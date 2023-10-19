import React from 'react';
import Header from '../../Header/Header';
import Main from '../../Main/Main';
import Partners from '../../Slider/Partners';
import Infos from '../../Infos/Infos';
import Reviews from '../../Reviews/Reviews';
import Steps from '../../Steps/Steps';
import Newsletter from '../../Newsletter/Newsletter';
import Panel from '../../Panel/Panel';
import Footer from '../../Footer/Footer';

import './Home.module.css';

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Main />
        <Partners />
        <Infos /> 
        <Reviews />
        <Steps />
        <Newsletter />
        <Panel />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Home;
