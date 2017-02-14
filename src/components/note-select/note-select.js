import React, { Component } from 'react';
import { NOTES } from '../../../src/constants/notes';

export default class NoteSelect extends Component {
  render() {
    return (
      <select value={ this.props.value } onChange={ this.props.onChange }>
        { NOTES.map((note, index) => {
          return <option key={index} value={ note.name } label={ note.label } />
        }) }
      </select>
    );
  }
}
