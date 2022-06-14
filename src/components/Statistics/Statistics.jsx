import { Component } from 'react';
import { StatisticList, StatisticItem } from './Statistics.styled';

export default class Statistics extends Component {
  render() {
    let { good, neutral, bad, total, positive } = this.props.dataFeedback;
    return (
      <StatisticList>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItem>Total: {total}</StatisticItem>
        <StatisticItem>
          Positive feedback: {isNaN(positive) ? 0 : Math.round(positive)}%
        </StatisticItem>
      </StatisticList>
    );
  }
}
