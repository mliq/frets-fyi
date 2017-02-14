import React, { Component } from 'react';
import classNames from 'classnames';
import './fret.css';
import { INTERVAL_NAMES } from '../../../src/constants/intervals';

export default class String extends Component {
  render() {
    return (
      <div className={classNames('fret', {
        'fret--active': this.props.isActiveFret,
        'fret--root': this.props.interval === INTERVAL_NAMES.ROOT,
      })}>
        { this.props.toggle === 'notes' ? this.props.note : this.props.interval }
      </div>
    );
  }
}
