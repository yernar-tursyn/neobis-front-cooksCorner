import React, { useEffect } from 'react';
import './SplashScreen.css'; 
import logo from '../assets/images/logo.svg';

const SplashScreen = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" />
      <p>Version 0.0.1</p>
    </div>
  );
};

export default SplashScreen;
