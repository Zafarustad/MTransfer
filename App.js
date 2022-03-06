import React from 'react';
import Router from './src/Router/router';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import Toast, {BaseToast} from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  );
};

export default App;
