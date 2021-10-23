import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";

const Statistics = ({
  options,
  optionsValue,
  // good,
  // neutral,
  // bad,
  total,
  positivePercentage,
}) => (
  <section>
    <ul className={styles.list}>
      {options.map((name, idx) => (
        <li className={styles.listItem} key={idx}>
          {name}: {optionsValue[idx]}
        </li>
      ))}
      {/* <li className={styles.listItem}>Good: {good}</li>
      <li className={styles.listItem}>Neutral: {neutral}</li>
      <li className={styles.listItem}>Bad: {bad}</li> */}
      <li className={styles.listItem}>Total: {total ? total : "0"}</li>
      <li className={styles.listItem}>
        Positive feedback: {positivePercentage ? positivePercentage : "0"}%
      </li>
    </ul>
  </section>
);

export default Statistics;

Statistics.propTypes = {
  // good: PropTypes.number.isRequired,
  // neutral: PropTypes.number.isRequired,
  // bad: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  optionsValue: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
