import promise from 'es6-promise/auto';
import fetch from 'isomorphic-fetch';
import Schedule from '../view-models/schedule';
import {List} from 'immutable';
import * as mainActions from '../actions/main-actions';

function parseShedules (response) {
  const schedulesArray = response.map((item) => {
    return Schedule.parse(item);
  });

  return new List(schedulesArray);
}

const MainManager = {

  loadSchedules () {
    fetch('/api/shedules').then(function (response) {
      return response.json();
    }).then(function (response) {
      mainActions.loadedShedules(parseShedules(response));
    }).catch(function (err) {
      mainActions.errorHttpQuery();
    });
  },

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
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    }).then(function (response) {
      mainActions.endCreatingSchedule(Schedule.parse(response));
    }).catch(function (err) {
      mainActions.errorHttpQuery();
    });
  },

  deleteSchedule (idToDelete) {
    fetch('/api/shedules/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: idToDelete
      })
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    }).then(function (response) {
      mainActions.endDeletingSchedule(Schedule.parse(response));
    }).catch(function (err) {
      mainActions.errorHttpQuery();
    });
  }

};

export default MainManager;
