import React, { Component } from 'react';

export default class NotesIntervalsToggle extends Component {
  render() {
    return (
      <div>
        <label>
          <input type="radio"
          name="toggle"
          id="notes"
          value="notes"
          onChange={ this.props.onChange }
          checked={ this.props.value === 'notes' } />

          Notes
        </label>

        <label>
          <input type="radio"
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
