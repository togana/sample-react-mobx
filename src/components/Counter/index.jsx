import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('count')
@observer
export default class Counter extends Component {
  static propTypes = {
    count: PropTypes.object.isRequired,
  };

  render() {
    const { count } = this.props;

    return (
      <div>
        Count: {count.num} <br />
        Double count: {count.getDoubleCount} <br />
        <button onClick={count.onIncrement}>+1</button>
        <button onClick={count.onDecrement}>-1</button>
        <button onClick={count.onAsyncIecrement}>After 1000ms +1</button>
        <DevTools />
      </div>
    );
  }
}
