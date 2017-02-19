import React, { Component } from 'react';
import classNames from 'classnames';
import './fret.css';
import { INTERVAL_NAMES } from '../../../src/constants/intervals';

export default class String extends Component {
  render() {
    return (
      <div className='fret'>
        <div className={classNames('fret__label u-flex-none', {
          'fret__label--active': this.props.isActiveFret,
          'fret__label--root': this.props.interval === INTERVAL_NAMES.ROOT,
        })}>
          { this.props.toggle === 'notes' ? this.props.note : this.props.interval }
        </div>

        <div className={classNames('fret__divider', {
          'fret__divider--bottom-string': this.props.string === 'E1',
        })}></div>
      </div>
    );
  }
}
