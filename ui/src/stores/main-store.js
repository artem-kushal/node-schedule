import {ReduceStore} from 'flux/utils';
import {Record, List} from 'immutable';
import {INTERVALS, getIntervalLabel} from '../constants/app-constants';
import AppDispatcher from '../dispatcher/app-dispatcher';
import {actionTypes} from '../constants/app-constants';
import mainManager from '../managers/main-manager';

const StateRecord = Record({
  interval: INTERVALS.ONCE_WEEK,
  date: new Date(),
  email: '',
  message: '',
  isLoading: true,
  schedules: new List()
});

class MainStore extends ReduceStore {

  constructor (dispatcher) {
    super(dispatcher);
  }

  getInitialState () {
    mainManager.loadSchedules();
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

      case actionTypes.APP_START_CREATING_SCHEDULE:
        mainManager.createSchedule(state.interval, state.date, state.email, state.message);
        return state.set('isLoading', true);

      case actionTypes.APP_END_CREATING_SCHEDULE:
        const schedules = state.schedules;
        
        return new StateRecord({
          isLoading: false,
          schedules: schedules.push(action.info.schedule)
        });

      case actionTypes.APP_HTTP_ERROR_QUERY:
        return state.set('isLoading', false);

      case actionTypes.APP_SHEDULES_LOADED:
        return state.set('isLoading', false).set('schedules', action.info.schedules);

      default:
        return state;
    }
  }
}

export default new MainStore(AppDispatcher);
