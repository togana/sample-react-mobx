import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('count')
@observer
export default class Counter extends Component {
  render() {
    const { count } = this.props;

    return (
      <div>
        {count.num}
        <button onClick={count.onIncrement}>+</button>
        <button onClick={count.onDecrement}>-</button>
      </div>
    );
  }
}

Counter.wrappedComponent.propTypes = {
  count: PropTypes.object.isRequired,
};
