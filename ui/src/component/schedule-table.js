import React, {PropTypes} from 'react';
import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';
import moment from 'moment';

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
    </TableHead>
    {
      schedules.map((schedule, i) => (
        <TableRow key={i}>
          <TableCell>{schedule.frequency}</TableCell>
          <TableCell>{moment(schedule.date).format('MM/DD/YYYY')}</TableCell>
          <TableCell>{moment(schedule.date).format('HH:MM')}</TableCell>
        </TableRow>
      ))
    }
  </Table>
);

ScheduleTable.propTypes = {
  schedules: PropTypes.array.isRequired
};

export default ScheduleTable;
