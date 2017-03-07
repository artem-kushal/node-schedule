import keyMirror from 'keyMirror';

const actionTypes = keyMirror({
  APP_CHANGE_DATE: null,
  APP_CHANGE_TIME: null,
  APP_CHANGE_INTERVAL: null,
  APP_CHANGE_MESSAGE: null,
  APP_CHANGE_EMAIL: null
});

const INTERVALS = {
  ONCE_MONTH: 0,
  ONCE_WEEK: 1,
  ONCE_DAY: 2,
  CERTAIN_DAY: 3
};

const intervalsArray = [
  {value: INTERVALS.ONCE_MONTH, label: 'Once a month'},
  {value: INTERVALS.ONCE_WEEK, label: 'Once a week'},
  {value: INTERVALS.ONCE_DAY, label: 'Once a day'},
  {value: INTERVALS.CERTAIN_DAY, label: 'Certain day'}
];

function getIntervalLabel (interval) {
  return intervalsArray.find((intervalWithLabel) => interval === intervalWithLabel.value).label;
}

export {INTERVALS, intervalsArray, getIntervalLabel, actionTypes};
