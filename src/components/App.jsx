import React, { Component } from 'react';
import FeedbackOption from '../components/feedback/FeedbackOption';
import Statistic from './statistic/Statistic';
import SectionTitle from './sectionTitle/SectionTitle';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option.toLowerCase()]: prevState[option.toLowerCase()] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <>
        <FeedbackOption
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {good === 0 && neutral === 0 && bad === 0 ? (
          <SectionTitle>No feedback yet.</SectionTitle>
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            positiveFeedback={Math.round((good / total) * 100)}
            total={total}
          />
        )}
      </>
    );
  }
}

export default App;
