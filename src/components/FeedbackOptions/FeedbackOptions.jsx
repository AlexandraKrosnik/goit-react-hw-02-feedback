import { Component } from 'react';
import { OptionList, FeedbackItem } from './FeedbackOptions.styled';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onFeedbackLeave } = this.props;
    return (
      <OptionList>
        {options.map(option => {
          return (
            <FeedbackItem
              key={shortid.generate()}
              type="button"
              name={option}
              onClick={onFeedbackLeave}
            >
              {option[0].toUpperCase() + option.slice(1)}
            </FeedbackItem>
          );
        })}
      </OptionList>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedbackLeave: PropTypes.func.isRequired,
};
