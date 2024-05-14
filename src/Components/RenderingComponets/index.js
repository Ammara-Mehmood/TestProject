import React, { useState } from 'react';
import firstComponets from './firstComponets';
import SecondCompoent from './SecondCompoent';

const MyComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <firstComponets />
      ) : (
        <SecondCompoent onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default MyComponent;
