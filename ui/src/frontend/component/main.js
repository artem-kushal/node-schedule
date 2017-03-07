import React, {PropTypes} from 'react';
import {AppBar} from 'react-toolbox/lib/app_bar';
import appStyle from '../index.css';
import RepetitionRateRow from './repetition-rate-row';
import MessageRow from './message-row';
import ScheduleTable from './schedule-table';

class Main extends React.Component {

  static propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    selectedInterval: PropTypes.number.isRequired,
    selectedTime: PropTypes.instanceOf(Date).isRequired,
    message: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    schedules: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={appStyle.appContainer}>
        <AppBar>
          SCHEDULER
        </AppBar>
        <div className={appStyle.contentContainer}>
          <div className={appStyle.headerContainer}>
            <RepetitionRateRow
              selectedDate={this.props.selectedDate}
              selectedInterval={this.props.selectedInterval}
              selectedTime={this.props.selectedTime}
            />
            <MessageRow
              email={this.props.email}
              message={this.props.message}
            />
          </div>
          <div className={appStyle.tableContainer}>
            {
              (this.props.schedules.length === 0) ? (
                <p className={appStyle.noSchedulesWarning}>No schedules added.</p>
              ) : (
                <ScheduleTable schedules={this.props.schedules} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
