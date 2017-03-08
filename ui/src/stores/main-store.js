import {ReduceStore} from 'flux/utils';
import {Record} from 'immutable';
import {INTERVALS, getIntervalLabel} from '../constants/app-constants';
import AppDispatcher from '../dispatcher/app-dispatcher';
import {actionTypes} from '../constants/app-constants';

const schedules = [
  {frequency: getIntervalLabel(INTERVALS.ONCE_DAY), date: new Date()},
  {frequency: getIntervalLabel(INTERVALS.ONCE_MONTH), date: new Date()},
  {frequency: getIntervalLabel(INTERVALS.ONCE_WEEK), date: new Date()}
];

const StateRecord = Record({
  interval: INTERVALS.ONCE_WEEK,
  date: new Date(),
  email: '',
  message: '',
  schedules: schedules
});

class MainStore extends ReduceStore {

  constructor (dispatcher) {
    super(dispatcher);
  }

  getInitialState () {
    return new StateRecord();
  }

  reduce (state, action) {
    switch (action.type) {
      case actionTypes.APP_CHANGE_DATE:
        return state.set('date', action.info.changedDate);

      case actionTypes.APP_CHANGE_INTERVAL:
        return state.set('interval', action.info.changedInterval);

      case actionTypes.APP_CHANGE_EMAIL:
        return state.set('email', action.info.changedEmail);

      case actionTypes.APP_CHANGE_MESSAGE:
        return state.set('message', action.info.changedMessage);

      default:
        return state;
    }
  }
}

export default new MainStore(AppDispatcher);
