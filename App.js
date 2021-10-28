import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

import PortraitView from './Components/PortraitView';
import LandscapeView from './Components/LandscapeView';

const mexp = require('math-expression-evaluator');

const App = () => {

  const [count, setCount] = useState('');
  const [orientation, setOrientation] = useState('portrait');

  const calculateResult = () => {
    let modifiedExpression = count.replace('√', 'root').replace('π', 'pi');
    try {
      setCount(mexp.eval(modifiedExpression));
    } catch (e) {
      alert(e.message);
    }
  }

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener('change', () => {
    let changed = isPortrait() ? 'portrait' : 'landscape';
    setOrientation(changed);
  });

  useEffect(() => {
    let changed = isPortrait() ? 'portrait' : 'landscape';
    setOrientation(changed);
  }, [])
  
  return (
    orientation == 'portrait' ? (
      <PortraitView count={count} setCount={setCount} calculateResult={calculateResult} /> 
    ) : ( 
      <LandscapeView count={count} setCount={setCount} calculateResult={calculateResult} />
    )
  );
};

export default App;