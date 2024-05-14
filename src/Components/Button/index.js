import React from 'react';
import ReuseButton from './ReuseButton';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <ReuseButton
        style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}
        title="Click me"
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
