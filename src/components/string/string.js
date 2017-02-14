import React, { Component } from 'react';
import _ from 'lodash';
import Fret from '../../../src/components/fret/fret';
import './string.css';

export default class String extends Component {
  render() {
    let TOTAL_FRETS = 13;

    return (
      <div className='string'>
        {
          [...Array(TOTAL_FRETS)].map((_, index) => {
            return (
              <Fret key={ index }
              toggle={ this.props.toggle }
              isActiveFret={ this.props.isActiveFret(this.props.number, index) }
              interval={ this.props.getInterval(this.props.number, index) }
              note={ this.props.getFretNote(this.props.number, index) }/>
            );
          })
        }
      </div>
    );
  }
}
