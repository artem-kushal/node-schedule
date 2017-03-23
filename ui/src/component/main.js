import React, {PropTypes} from 'react';
import Immutable from 'immutable';
import {AppBar} from 'react-toolbox/lib/app_bar';
import Snackbar from 'react-toolbox/lib/snackbar';
import appStyle from '../index.css';
import RepetitionRateRow from './repetition-rate-row';
import MessageRow from './message-row';
import ScheduleTable from './schedule-table';
import {startCreatingSchedule} from '../actions/main-actions';
import {EMAIL_REGEX} from '../constants/app-constants';

class Main extends React.Component {

  static propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    selectedInterval: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    schedules: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      isWarningActive: false
    }
  }

  onCreateSchedule = () => {
    const {message, email} = this.props;
    if (!EMAIL_REGEX.test(email) || message === '') {
      this.setState({isWarningActive: true});
    } else {
      startCreatingSchedule();
    }
  };

  onWarningTimeout = () => {
    this.setState({isWarningActive: false});
  };

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
            />
            <MessageRow
              email={this.props.email}
              message={this.props.message}
              onCreateSchedule={this.onCreateSchedule}
              isLoading={this.props.isLoading}
            />
          </div>
          <div className={appStyle.tableContainer}>
            {
              (this.props.schedules.count() === 0) ? (
                <p className={appStyle.noSchedulesWarning}>No schedules added.</p>
              ) : (
                <ScheduleTable schedules={this.props.schedules} />
              )
            }
          </div>
        </div>
        <Snackbar
          active={this.state.isWarningActive}
          label='Please, fill all fields or email is not valid.'
          ref='snackbar'
          type='warning'
          timeout={2000}
          onTimeout={this.onWarningTimeout}
        />
      </div>
    );
  }
}

export default Main;
