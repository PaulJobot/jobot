import React, { useRef } from 'react';
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

  const partnersRef = useRef(null);

  const handleScrollToPartners = () => {
    if(partnersRef.current) {
      partnersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <React.Fragment>
      <div>
        <Main scroll={handleScrollToPartners} />
        <Partners ref={partnersRef}/>
        <Infos /> 
        <Reviews />
        <Steps />
        <Newsletter />
        <Panel />
      </div>
    </React.Fragment>
  )
}

export default Home;
