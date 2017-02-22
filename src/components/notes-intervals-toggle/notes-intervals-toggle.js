import React, { Component } from 'react';
import classNames from 'classnames';
import './notes-intervals-toggle.css';

export default class NotesIntervalsToggle extends Component {
  render() {
    return (
      <div className='u-flex-direction-row'>
        <label className={ classNames('notes-intervals-toggle__label u-margin-R', {
          'is-active': this.props.value === 'notes',
        }) }>
          <input type="radio"
          className='u-display-none'
          name="toggle"
          id="notes"
          value="notes"
          onChange={ this.props.onChange }
          checked={ this.props.value === 'notes' } />

          Notes
        </label>

        <label className={ classNames('notes-intervals-toggle__label', {
          'is-active': this.props.value === 'intervals',
        }) }>
          <input type="radio"
          className='u-display-none'
          name="toggle"
          id="intervals"
          value="intervals"
          onChange={ this.props.onChange }
          checked={ this.props.value === 'intervals' } />

          Intervals
        </label>
      </div>
    );
  }
}
