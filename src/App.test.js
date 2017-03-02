import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { NOTES } from '../src/constants/notes';
import { SCALES } from '../src/constants/scales';

const component = mount(<App />);
const noteSelectEl = component.find('#note-select');
const scaleSelectEl = component.find('#scale-select');
const notesToggleEl = component.find('#notes');
const intervalsToggleEl = component.find('#intervals');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

NOTES.forEach((note) => {
  SCALES.forEach((scale) => {
    it(`renders ${note.name} ${scale.name}`, () => {
      noteSelectEl.simulate('change', { target: { value: note.name }});
      scaleSelectEl.simulate('change', { target: { value: scale.name }});
      notesToggleEl.simulate('change', { target: { checked: true }});
      expect(toJson(component)).toMatchSnapshot();

      intervalsToggleEl.simulate('change', { target: { checked: true }});
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
