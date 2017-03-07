import React, {PropTypes} from 'react';
import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import appStyle from '../index.css';
import {changeEmail, changeMessage} from '../actions/main-actions';

function onChangeMessage (value) {
  changeMessage(value);
}

function onChangeEmail (value) {
  changeEmail(value);
}

const MessageRow = ({email, message}) => (
  <section className={appStyle.row}>
    <div>
      <Input
        required
        type='email'
        label='Email address'
        icon='email'
        value={email}
        onChange={onChangeEmail}
      />
    </div>
    <div className={appStyle.item}>
      <Input
        required
        type='text'
        value={message}
        label='Message'
        onChange={onChangeMessage}
        icon='message'
      />
    </div>
    <div className={appStyle.item}>
      <Button icon='add' label='CREATE' accent raised />
    </div>
  </section>
);

MessageRow.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default MessageRow;
