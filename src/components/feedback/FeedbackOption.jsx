import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.boxWrap}>
      {options.map(option => (
        <button
          className={styles.button}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
