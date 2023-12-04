import React, { useRef } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Partners from '../../components/Slider/Partners';
import Infos from '../../components/Infos/Infos';
import Reviews from '../../components/Reviews/Reviews';
import Steps from '../../components/Steps/Steps';
import Newsletter from '../../components/Newsletter/Newsletter';
import Panel from '../../components/Panel/Panel';
import Footer from '../../components/Footer/Footer';

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
