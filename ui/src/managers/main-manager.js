'use strict';

import promise from 'es6-promise/auto';
import fetch from 'isomorphic-fetch';
import * as mainActions from '../actions/main-actions';

const MainManager = {

  createSchedule (interval, date, email, message) {
    fetch('/api/shedules/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        interval, date, email, message
      })
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      mainActions.endCreatingSchedule();
    }).catch(function (err) {
      mainActions.errorHttpQuery();
    });
  }

};

export default MainManager;
