'use strict';

import {Record} from 'immutable';

const ScheduleRecord = Record({
  id: null,
  frequency: null,
  date: null,
  email: null,
  message: null
});

ScheduleRecord.parse = function (data) {
  return new ScheduleRecord({
    id: data.id,
    frequency: data.interval,
    date: data.date,
    email: data.email,
    message: data.message
  });
};

export default ScheduleRecord;
