import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import MainApp from './components/MainApp';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading ? <SplashScreen setLoading={setLoading} /> : <MainApp />}
    </div>
  );
};

export default App;
