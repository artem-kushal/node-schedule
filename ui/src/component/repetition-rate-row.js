import React, {PropTypes} from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import DatePicker from 'react-toolbox/lib/date_picker';
import TimePicker from 'react-toolbox/lib/time_picker';
import {intervalsArray, INTERVALS, DAYS_OF_WEEK, daysOfWeekArray} from '../constants/app-constants';
import appStyle from '../index.css';
import {changeDate, changeInterval} from '../actions/main-actions';
import dateTools from '../tools/date-tools';

function onIntervalChange (value) {
  changeInterval(value);
}

function onDateChange (value) {
  changeDate(value);
}

class RepetitionRateRow extends React.Component {

  static propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    selectedInterval: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      selectedDayOfWeek: this.props.selectedDate.getDay()
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedDate.getDay() !== this.state.selectedDayOfWeek) {
      this.setState({selectedDayOfWeek: this.props.selectedDate.getDay()});
    }
  }

  onDayChange = (day) => {
    changeDate(dateTools.setDayOfWeek(this.props.selectedDate, day));
    this.setState({selectedDayOfWeek: day});
  };

  render () {
    const {selectedDate, selectedInterval} = this.props;
    const isDateWidgetVisible = selectedInterval !== INTERVALS.ONCE_DAY && selectedInterval !== INTERVALS.ONCE_WEEK;

    return (
      <section className={appStyle.row}>
        <div>
          <Dropdown
            auto
            onChange={onIntervalChange}
            source={intervalsArray}
            value={selectedInterval}
          />
        </div>
        {
          isDateWidgetVisible ? (
            <div className={appStyle.item}>
              <DatePicker
                autoOk
                label='Date'
                onChange={onDateChange}
                value={selectedDate}
              />
            </div>
          ) : null
        }
        {
          selectedInterval === INTERVALS.ONCE_WEEK ? (
            <div className={appStyle.item}>
              <Dropdown
                auto
                onChange={this.onDayChange}
                source={daysOfWeekArray}
                value={this.state.selectedDayOfWeek}
              />
            </div>
          ) : null
        }
        <div className={appStyle.item}>
          <TimePicker
            label='Time'
            onChange={onDateChange}
            value={selectedDate}
          />
        </div>
      </section>
    )
  }
}

export default RepetitionRateRow;
