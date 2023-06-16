import React, { Component } from 'react';
import FeedbackOption from '../components/feedback/FeedbackOption';
import Statistic from './statistic/Statistic';
import SectionTitle from './sectionTitle/SectionTitle';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <FeedbackOption
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {!total ? (
          <SectionTitle>No feedback yet.</SectionTitle>
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
            total={total}
          />
        )}
      </>
    );
  }
}

export default App;
