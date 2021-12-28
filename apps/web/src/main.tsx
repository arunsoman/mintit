import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { Provider } from 'react-redux';

import { store } from '@mintit/redux-provider';
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
