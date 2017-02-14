import React, { Component } from 'react';
import { SCALES } from '../../../src/constants/scales';

export default class ScaleSelect extends Component {
  render() {
    return (
      <select value={ this.props.value } onChange={ this.props.onChange }>
        { SCALES.map((scale, index) => {
          return <option key={index} value={ scale.name } label={ scale.label } />
        }) }
      </select>
    );
  }
}
