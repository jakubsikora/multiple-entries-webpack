import React, { Component } from 'react';
import { Foo } from '../../common/main';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Client</div>
        <Foo />
      </div>
    );
  }
}
