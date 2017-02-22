import React, { Component } from 'react';
import { NOTES } from '../../../src/constants/notes';
import '../scale-select/select.css';
import _ from 'lodash';

export default class NoteSelect extends Component {
  constructor(props) {
    super(props);
    this.renderNoteLabel = this.renderNoteLabel.bind(this);
  }

  renderNoteLabel(note) {
    return _.find(NOTES, { name: this.props.value }).label;
  }

  render() {
    return (
      <div className='select-container u-flex-none u-margin-R'>
        <div className='select-container__label u-flex-direction-row'>
          { this.renderNoteLabel(this.props.value) }
        </div>

        <select className='select-container__select'
        value={ this.props.value }
        onChange={ this.props.onChange }>
          { NOTES.map((note, index) => {
            return <option key={index} value={ note.name }>{ note.label }</option>
          }) }
        </select>
      </div>
    );
  }
}
