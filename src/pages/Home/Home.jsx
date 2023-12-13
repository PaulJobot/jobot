import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Main from '../../components/Main/Main';
import Partners from '../../components/Slider/Partners';
import Infos from '../../components/Infos/Infos';
import Reviews from '../../components/Reviews/Reviews';
import Steps from '../../components/Steps/Steps';
import Newsletter from '../../components/Newsletter/Newsletter';
import Panel from '../../components/Panel/Panel';
import Input from '../../components/UI/Input/Input';

import classes from './Home.module.css';

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
        <Steps handleFindJob={handleModal} />
        <Newsletter />
        <Panel handleFindJob={handleModal} />
        { showModal && (
            <Modal>
              <div className={classes.modal}>
                <button className={classes.close} onClick={() => setShowModal(false)}>x</button>
                <div className={classes.modal_content}>
                  <h1><span className={classes.green}>Jobot</span> est <span className={classes.purple}>en contruction</span></h1>
                  <p>Nous mettons la touche finale à quelque chose d'exceptionnel.<br/>Ne ratez pas notre lancement en 2024 !</p>
                  <Input className={classes.mail} valueButton="Me notifier" />
                </div>
              </div>
              <div className={classes.modalbackgroung} onClick={() => setShowModal(false)} />
            </Modal>
        )}
      </div>
    </React.Fragment>
  )
}

export default Home;
