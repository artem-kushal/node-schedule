import {actionTypes} from '../constants/app-constants';
import Dispatcher from '../dispatcher/app-dispatcher';

function changeDate (changedDate) {
  Dispatcher.dispatch({
    type: actionTypes.APP_CHANGE_DATE,
    info: {
      changedDate
    }
  });
}

function changeTime (changedTime) {
  Dispatcher.dispatch({
    type: actionTypes.APP_CHANGE_TIME,
    info: {
      changedTime
    }
  });
}

function changeInterval (changedInterval) {
  Dispatcher.dispatch({
    type: actionTypes.APP_CHANGE_INTERVAL,
    info: {
      changedInterval
    }
  });
}

function changeEmail (changedEmail) {
  Dispatcher.dispatch({
    type: actionTypes.APP_CHANGE_EMAIL,
    info: {
      changedEmail
    }
  });
}

function changeMessage (changedMessage) {
  Dispatcher.dispatch({
    type: actionTypes.APP_CHANGE_MESSAGE,
    info: {
      changedMessage
    }
  });
}

export {changeDate, changeTime, changeInterval, changeEmail, changeMessage};
