import { Component } from 'react';
import { Message } from './Notification.styled';

export default class Notification extends Component {
  render() {
    let { message } = this.props;
    return <Message>{message}</Message>;
  }
}
