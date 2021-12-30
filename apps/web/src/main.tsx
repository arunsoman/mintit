import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { Provider } from 'react-redux';

import { store } from '@mintit/redux-provider';
import { ChakraProvider } from '@chakra-ui/react';
ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
    <StrictMode>
      <App />
    </StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
