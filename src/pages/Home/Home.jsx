import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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

const Modal = ({ children }) => {
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(elRef.current);
    return () => document.body.removeChild(elRef.current)
  }, []);

  return createPortal(children, elRef.current);
}

const Home = () => {

  const partnersRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleScrollToPartners = () => {
    if(partnersRef.current) {
      partnersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <React.Fragment>
      <div>
        <Main 
          handleFindJob={handleModal} 
          scroll={handleScrollToPartners} 
        />
        <Partners ref={partnersRef}/>
        <Infos /> 
        <Reviews />
        <Steps />
        <Newsletter />
        <Panel />
        { showModal && (
            <Modal>
              <div>
                <h1>Modal Title</h1>
                <p>Modal Content</p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </Modal>
        )}
      </div>
    </React.Fragment>
  )
}

export default Home;
