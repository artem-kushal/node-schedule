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

function startCreatingSchedule () {
  Dispatcher.dispatch({
    type: actionTypes.APP_START_CREATING_SCHEDULE
  });
}

function endCreatingSchedule () {
  Dispatcher.dispatch({
    type: actionTypes.APP_END_CREATING_SCHEDULE
  });
}

function errorHttpQuery () {
  Dispatcher.dispatch({
    type: actionTypes.APP_HTTP_ERROR_QUERY
  });
}

export {
  changeDate,
  changeInterval,
  changeEmail,
  changeMessage,
  startCreatingSchedule,
  endCreatingSchedule,
  errorHttpQuery
};
