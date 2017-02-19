import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';
import NoteSelect from '../src/components/note-select/note-select';
import ScaleSelect from '../src/components/scale-select/scale-select';
import NotesIntervalsToggle from '../src/components/notes-intervals-toggle/notes-intervals-toggle';
import String from '../src/components/string/string';

import { NOTES } from '../src/constants/notes';
import { INTERVALS } from '../src/constants/intervals';
import { SCALES } from '../src/constants/scales';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.getInterval = this.getInterval.bind(this);
    this.getScale = this.getScale.bind(this);
    this.getIntervalNote = this.getIntervalNote.bind(this);
    this.isActiveFret = this.isActiveFret.bind(this);

    this.state = {
      note: 'c',
      scale: 'major', // be nice to remember all these settings from local storage
      toggle: 'notes',
    };
  }

  handleNoteChange(event) {
    this.setState({ note: event.target.value });
  }

  handleScaleChange(event) {
    this.setState({ scale: event.target.value });
  }

  handleToggle(event) {
    this.setState({ toggle: event.target.value });
  }

  getStrings() {
    return ['E1', 'A1', 'D1', 'G1', 'B1', 'E2'];
  }

  getFretNote(string, position) {
    let note = _.find(NOTES, (note) => {
      return _.find(note.positions, { string, position });
    });

    return _.get(note, 'label');
  }

  getNoteLabel(note) {
    return _.get(_.find(NOTES, { name: note }), 'label');
  }

  getInterval(string, position) {
    let interval =  _.find(INTERVALS, (interval) => {
      return _.find(interval.notes, {
        key: this.getNoteLabel(this.state.note),
        note: this.getFretNote(string, position),
      });
    });

    return _.get(interval, 'name');
  }

  getIntervalNote(key, interval) {
    let foundInterval = _.find(INTERVALS, { name: interval });
    return _.get(_.find(foundInterval.notes, { key }), 'note');
  }

  getScale() {
    let intervals = _.get(_.find(SCALES, { name: this.state.scale }), 'intervals');

    return _.map(intervals, (interval) => {
      return this.getIntervalNote(this.getNoteLabel(this.state.note), interval);
    });
  }

  isActiveFret(string, position) {
    return _.some(this.getScale(), (note) => {
      return note === this.getFretNote(string, position);
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='nav u-flex-none u-flex-direction-row'>
          <div className='u-flex-direction-row'>
            <NoteSelect value={ this.state.note } onChange={ this.handleNoteChange } />
            <ScaleSelect value={ this.state.scale } onChange={ this.handleScaleChange } />
          </div>

          <div className='u-flex-none'>
            <NotesIntervalsToggle value={ this.state.toggle } onChange={ this.handleToggle }/>
          </div>
        </div>

        <div className='fretboard'>
          <div className='fretboard__strings'>
            { _.reverse(this.getStrings()).map((string, index) => {
              return (
                <String key={ index }
                number={ string }
                toggle={ this.state.toggle }
                isActiveFret={ this.isActiveFret }
                getFretNote={ this.getFretNote }
                getInterval={ this.getInterval } />
              );
            }) }
          </div>
        </div>
      </div>
    );
  }
}
