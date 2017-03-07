import React, {PropTypes} from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import DatePicker from 'react-toolbox/lib/date_picker';
import TimePicker from 'react-toolbox/lib/time_picker';
import {intervalsArray} from '../constants/app-constants';
import appStyle from '../index.css';
import {changeDate, changeTime, changeInterval} from '../actions/main-actions';

function onIntervalChange (value) {
  changeInterval(value);
}

function onDateChange (value) {
  changeDate(value);
}

function onTimeChange (value) {
  changeTime(value);
}

const RepetitionRateRow = ({
  selectedInterval,
  selectedDate,
  selectedTime
}) => (
  <section className={appStyle.row}>
    <div>
      <Dropdown
        auto
        onChange={onIntervalChange}
        source={intervalsArray}
        value={selectedInterval}
      />
    </div>
    <div className={appStyle.item}>
      <DatePicker
        sundayFirstDayOfWeek
        label='Date'
        onChange={onDateChange}
        value={selectedDate}
      />
    </div>
    <div className={appStyle.item}>
      <TimePicker
        label='Time'
        onChange={onTimeChange}
        value={selectedTime}
      />
    </div>
  </section>
);

RepetitionRateRow.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  selectedInterval: PropTypes.number.isRequired,
  selectedTime: PropTypes.instanceOf(Date).isRequired
};

export default RepetitionRateRow;
