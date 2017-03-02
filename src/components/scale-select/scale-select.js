import React, { Component } from 'react';
import { SCALES } from '../../../src/constants/scales';
import './select.css';
import _ from 'lodash';

export default class ScaleSelect extends Component {
  constructor(props) {
    super(props);
    this.renderScaleLabel = this.renderScaleLabel.bind(this);
  }

  renderScaleLabel(note) {
    return _.find(SCALES, { name: this.props.value }).label;
  }

  render() {
    return (
      <div className='select-container u-flex-none'>
        <div className='select-container__label u-flex-direction-row'>
          { this.renderScaleLabel(this.props.value) }
        </div>

        <select className='select-container__select'
        value={ this.props.value }
        id='scale-select'
        onChange={ this.props.onChange }>
          { SCALES.map((scale, index) => {
            return <option key={index} value={ scale.name }>{ scale.label }</option>
          }) }
        </select>
      </div>
    );
  }
}
