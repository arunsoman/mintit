import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { COUNTER_FEATURE_KEY, counterReducer } from '@mintit/redux-provider';

const store = configureStore({
  reducer: { [COUNTER_FEATURE_KEY]: counterReducer },
  // Additional middleware can be passed to this array
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
