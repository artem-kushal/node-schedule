import React, {PropTypes} from 'react';
import Immutable from 'immutable';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';
import {IconButton} from 'react-toolbox/lib/button';
import moment from 'moment';
import {getIntervalLabel} from '../constants/app-constants';
import {startDeletingSchedule} from '../actions/main-actions';

const ScheduleTable = ({schedules}) => (
  <Table selectable={false}>
    <TableHead>
      <TableCell>
        Frequency
      </TableCell>
      <TableCell>
        Date
      </TableCell>
      <TableCell>
        Time
      </TableCell>
      <TableCell>
        {null}
      </TableCell>
    </TableHead>
    {
      schedules.map((schedule, i) => (
        <TableRow key={i}>
          <TableCell>{getIntervalLabel(schedule.frequency)}</TableCell>
          <TableCell>{moment(schedule.date).format('MM/DD/YYYY')}</TableCell>
          <TableCell>{moment(schedule.date).format('HH:mm')}</TableCell>
          <TableCell><IconButton icon='close' primary onClick={startDeletingSchedule.bind(this, schedule.id)} /></TableCell>
        </TableRow>
      ))
    }
  </Table>
);

ScheduleTable.propTypes = {
  schedules: PropTypes.instanceOf(Immutable.Iterable).isRequired
};

export default ScheduleTable;
