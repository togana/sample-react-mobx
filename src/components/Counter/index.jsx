import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('count')
@observer
export default class Counter extends Component {
  render() {
    const { count } = this.props;

    // count.numで表示しているがcount.getCountでも同じものが表示できる
    // getCountはcomputedを利用している
    // computedは[reselect](https://github.com/reactjs/reselect)と同じようなものって認識
    return (
      <div>
        {count.num}
        <button onClick={count.onIncrement}>+1</button>
        <button onClick={count.onDecrement}>-1</button>
        <button onClick={count.onAsyncIecrement}>After 1000ms +1</button>
        <DevTools />
      </div>
    );
  }
}

Counter.wrappedComponent.propTypes = {
  count: PropTypes.object.isRequired,
};
