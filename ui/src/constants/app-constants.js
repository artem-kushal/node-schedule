import keyMirror from 'keyMirror';

const actionTypes = keyMirror({
  APP_CHANGE_DATE: null,
  APP_CHANGE_INTERVAL: null,
  APP_CHANGE_MESSAGE: null,
  APP_CHANGE_EMAIL: null,
  APP_START_CREATING_SCHEDULE: null,
  APP_END_CREATING_SCHEDULE: null,
  APP_START_DELETING_SCHEDULE: null,
  APP_END_DELETING_SCHEDULE: null,
  APP_HTTP_ERROR_QUERY: null,
  APP_SHEDULES_LOADED: null
});

const INTERVALS = {
  ONCE_MONTH: 0,
  ONCE_WEEK: 1,
  ONCE_DAY: 2,
  CERTAIN_DAY: 3
};

const DAYS_OF_WEEK = {
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 0
};

const intervalsArray = [
  {value: INTERVALS.ONCE_MONTH, label: 'Once a month'},
  {value: INTERVALS.ONCE_WEEK, label: 'Once a week'},
  {value: INTERVALS.ONCE_DAY, label: 'Once a day'},
  {value: INTERVALS.CERTAIN_DAY, label: 'Certain day'}
];

const daysOfWeekArray = [
  {value: DAYS_OF_WEEK.MONDAY, label: 'Monday'},
  {value: DAYS_OF_WEEK.TUESDAY, label: 'Tuesday'},
  {value: DAYS_OF_WEEK.WEDNESDAY, label: 'Wednesday'},
  {value: DAYS_OF_WEEK.THURSDAY, label: 'Thursday'},
  {value: DAYS_OF_WEEK.FRIDAY, label: 'Friday'},
  {value: DAYS_OF_WEEK.SATURDAY, label: 'Saturday'},
  {value: DAYS_OF_WEEK.SUNDAY, label: 'Sunday'}
];

function getIntervalLabel (interval) {
  return intervalsArray.find((intervalWithLabel) => interval === intervalWithLabel.value).label;
}

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export {INTERVALS, intervalsArray, DAYS_OF_WEEK, daysOfWeekArray, getIntervalLabel, actionTypes, EMAIL_REGEX};
