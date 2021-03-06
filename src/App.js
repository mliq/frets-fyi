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
    this.getScaleNotes = this.getScaleNotes.bind(this);
    this.getScaleIntervals = this.getScaleIntervals.bind(this);
    this.getIntervalNote = this.getIntervalNote.bind(this);
    this.isActiveFret = this.isActiveFret.bind(this);
    this.handleHelpIconClick = this.handleHelpIconClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);

    this.state = {
      note: 'c',
      scale: 'major', // be nice to remember all these settings from local storage
      toggle: 'notes',
      isModalVisible: false,
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

  handleHelpIconClick(event) {
    this.setState({ isModalVisible: true });
  }

  handleModalClick(event) {
    if (event.target.id === 'modal-container') {
      this.setState({ isModalVisible: false });
    }
  }

  handleModalCloseClick() {
    this.setState({ isModalVisible: false });
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

  getScaleIntervals() {
    return _.get(_.find(SCALES, { name: this.state.scale }), 'intervals');
  }

  getNoteLabel(note) {
    return _.get(_.find(NOTES, { name: note }), 'label');
  }

  getInterval(string, position) {
    let interval =  _.find(INTERVALS, (interval) => {
      // Extra check that the interval name is in the current
      // scale — otherwise d5 & A4 can't be told apart. Would be good
      // to reconsider now that original assumption that interval can be derived
      // from key & note alone is not correct
      return _.includes(this.getScaleIntervals(), interval.name)
      && _.find(interval.notes, {
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

  getScaleNotes() {
    let intervals = _.get(_.find(SCALES, { name: this.state.scale }), 'intervals');

    return _.map(intervals, (interval) => {
      return this.getIntervalNote(this.getNoteLabel(this.state.note), interval);
    });
  }

  isActiveFret(string, position) {
    return _.some(this.getScaleNotes(), (note) => {
      return note === this.getFretNote(string, position);
    })
  }

  render() {
    return (
      <div className='App'>

        {
          this.state.isModalVisible ?
          <div id='modal-container'
          className='App__modal-container' onClick={ this.handleModalClick }>
            <div className='App__modal-content'>
              <img className='App__modal-close-button'
              alt='Close button'
              onClick={ this.handleModalCloseClick }
              src='close-icon.svg'/>

              <p className='u-margin-B'>
                <strong>frets.fyi</strong>
              </p>

              <p className='u-margin-B'>
                <a className='u-inline-code u-link-clean u-text-xxs'
                href='https://github.com/jamesshedden/frets-fyi/releases'
                target='_blank'>v1.2.1</a>
              </p>

              <p>
                Made by&nbsp;

                <a className='u-link'
                href='https://twitter.com/jamesshedden'
                target='_blank'>
                  @jamesshedden
                </a>
              </p>
            </div>
          </div> :
          null
        }

        <div className='App__container'>
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

              <div className='fretboard__markers'>
                <div className='string'>
                  <div className='fret fret--marker u-flex-direction-row'>
                    <div className='u-flex-none fret__dot fret__dot--open'></div>
                  </div>

                  <div className='fret fret--marker u-flex-direction-row'></div>
                  <div className='fret fret--marker u-flex-direction-row'></div>

                  <div className='fret fret--marker u-flex-direction-row'>
                    <div className='u-flex-none fret__dot'></div>
                  </div>

                  <div className='fret fret--marker u-flex-direction-row'></div>

                  <div className='fret fret--marker u-flex-direction-row'>
                    <div className='u-flex-none fret__dot'></div>
                  </div>

                  <div className='fret fret--marker u-flex-direction-row'></div>

                  <div className='fret fret--marker u-flex-direction-row'>
                    <div className='u-flex-none fret__dot'></div>
                  </div>

                  <div className='fret fret--marker u-flex-direction-row'></div>

                  <div className='fret fret--marker u-flex-direction-row'>
                    <div className='u-flex-none fret__dot'></div>
                  </div>

                  <div className='fret fret--marker u-flex-direction-row'></div>
                  <div className='fret fret--marker u-flex-direction-row'></div>

                  <div className='fret fret--marker u-flex-direction-row'>
                    <div className='u-flex-none fret__dot'></div>
                    <div className='u-flex-none fret__dot'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='App__help-icon' onClick={ this.handleHelpIconClick }>?</div>
      </div>
    );
  }
}
