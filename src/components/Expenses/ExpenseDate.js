import React from 'react';

import classes from './ExpenseDate.module.css';

const ExpenseDate = (props) => {
  //toLocaleString() is built in date object. Check mdn for detailed explanation
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day:'2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className={classes.ExpenseDate}>
      <div className={classes.ExpenseDateMonth}>{month}</div>
      <div className={classes.ExpenseDateYear}>{year}</div>
      <div className={classes.ExpenseDateDay}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
