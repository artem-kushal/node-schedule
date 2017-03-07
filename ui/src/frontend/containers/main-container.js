import React from 'react';
import {Component} from 'react';
import {Container} from 'flux/utils';
import MainStore from '../stores/main-store';
import Main from '../component/main';

class MainContainer extends Component {
  static getStores () {
    return [MainStore];
  }

  static calculateState (prevState) {
    return {
      appState: MainStore.getState()
    };
  }

  render () {
    const {appState} = this.state;

    return (
      <Main
        selectedDate={appState.selectedDate}
        selectedInterval={appState.selectedInterval}
        selectedTime={appState.selectedTime}
        email={appState.email}
        message={appState.message}
        schedules={appState.schedules}
      />
    );
  }
}

export default Container.create(MainContainer);
