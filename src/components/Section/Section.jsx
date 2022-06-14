import { Component } from 'react';
import { FeedbackTitle } from './Section.styled';

export default class Section extends Component {
  render() {
    let { title, children } = this.props;
    return (
      <>
        <FeedbackTitle>{title}</FeedbackTitle>
        {children}
      </>
    );
  }
}
