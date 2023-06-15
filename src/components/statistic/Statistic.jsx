import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = props => {
  const { good, neutral, bad, positiveFeedback, total } = props;
  return (
    <>
      <ul className={styles.listItem}>
        <li className={styles.item}>good:{good}</li>
        <li className={styles.item}> bad:{bad}</li>
        <li className={styles.item}> neutral:{neutral}</li>
        <li className={styles.item}> total:{total}</li>
        <li className={styles.item}> positiveFeedback:{positiveFeedback}%</li>
      </ul>
    </>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistic;
