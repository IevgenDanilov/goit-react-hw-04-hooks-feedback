import React, { useState } from "react";
// import styles from "./FeedbackList.module.scss";
import Statistics from "../statistics/Statistics.jsx";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions.jsx";
import Section from "../section/Section.jsx";
import Notification from "../notification/Notification.jsx";

const FeedbackList = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (e) => {
    e.preventDefault();
    const currentStateName = e.currentTarget.name;
    setFeedback((prevState) => ({
      ...prevState,
      [currentStateName]: prevState[currentStateName] + 1,
    }));
    countTotalFeedback();
  };

  const countTotalFeedback = () => {
    const total = feedback.good + feedback.neutral + feedback.bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = Math.round((feedback.good / total) * 100);
    return positivePercentage;
  };

  // НЕ ВПЕВНЕНИЙ, ЩО ЦЯ КОНСТРУКЦІЯ КРАЩА АЛЕ ЗРОБИВ ЯК ТИ ПРОСИВ

  // const { good, neutral, bad } = feedback;
  const options = Object.keys(feedback);
  const optionsValue = Object.values(feedback);
  const total = countTotalFeedback();

  // console.log(options);
  // console.log(optionsValue);
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            options={options}
            optionsValue={optionsValue}
            // good={good}
            // neutral={neutral}
            // bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given!" />
        )}
      </Section>
    </div>
  );
};

export default FeedbackList;
