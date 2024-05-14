import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Users from './Components/User';

const App = () => {
  return (
    <Provider store={store}>
      <div className='d-flex w-100'>
        <Users />
      </div>
    </Provider>
  );
};

export default App;
