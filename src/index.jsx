import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import Counter from './components/Counter';
import CountStore from './stores/CountStore';

const stores = {
  count: new CountStore(),
};

render(
  <Provider {...stores}>
    <Counter />
  </Provider>,
  document.getElementById('root'),
);
