import React from 'react';
import RepetitionRateRow from '../repetition-rate-row/repetition-rate-row';
import MessageRow from '../message-row/message-row';

const HeaderPanel = (props) => (
  <div className={appStyle.headerContainer}>
    <RepetitionRateRow {...props} />
    <section className={appStyle.row}>
      <div>
        <Dropdown
          auto
          onChange={this.onIntervalChange}
          source={intervalsArray}
          value={this.state.selectedInterval}
        />
      </div>
      <div className={appStyle.item}>
        <DatePicker
          sundayFirstDayOfWeek
          label='Date'
          onChange={this.onDateChange}
          value={this.state.selectedDate}
        />
      </div>
      <div className={appStyle.item}>
        <TimePicker
          label='Time'
          onChange={this.onTimeChange}
          value={this.state.selectedTime}
        />
      </div>
    </section>
    <section className={appStyle.row}>
      <div>
        <Input
          required
          type='email'
          label='Email address'
          icon='email'
          value={this.state.email}
          onChange={this.onChangeText.bind(this, 'email')}
        />
      </div>
      <div className={appStyle.item}>
        <Input
          required
          type='text'
          value={this.state.hint}
          label='Message'
          onChange={this.onChangeText.bind(this, 'hint')}
          icon='message'
        />
      </div>
      <div className={appStyle.item}>
        <Button icon='add' label='CREATE' raised primary />
      </div>
    </section>
  </div>
);

export default HeaderPanel;