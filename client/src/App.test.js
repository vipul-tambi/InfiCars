import { render, screen } from '@testing-library/react';
import App from './App';


import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


test('renders learn react link', () => {

  render(
    <Provider>
      <App />
    </Provider>
  )
});
