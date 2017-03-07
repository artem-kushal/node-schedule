import {ReduceStore} from 'flux/utils';
import {Record} from 'immutable';
import {INTERVALS, getIntervalLabel} from '../constants/app-constants';
import AppDispatcher from '../dispatcher/app-dispatcher';
import {actionTypes} from '../constants/app-constants';

const schedules = [
  {frequency: getIntervalLabel(INTERVALS.ONCE_DAY), date: new Date(), time: new Date()},
  {frequency: getIntervalLabel(INTERVALS.ONCE_MONTH), date: new Date(), time: new Date()},
  {frequency: getIntervalLabel(INTERVALS.ONCE_WEEK), date: new Date(), time: new Date()}
];

const StateRecord = Record({
  selectedInterval: INTERVALS.ONCE_WEEK,
  selectedDate: new Date(),
  selectedTime: new Date(),
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
        return state.set('selectedDate', action.info.changedDate);

      case actionTypes.APP_CHANGE_INTERVAL:
        return state.set('selectedInterval', action.info.changedInterval);

      case actionTypes.APP_CHANGE_TIME:
        return state.set('selectedTime', action.info.changedTime);

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
