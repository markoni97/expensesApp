import React from 'react';

import ExpenseItem from './ExpenseItem';
import classes from './ExpensesList.module.css';

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className={classes.ExpensesListFallback}>No expenses found.</h2>;
  }

  return (
    <ul className={classes.ExpensesList}>
      {props.items.map((exp) => {
      return (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      );
    })}
    </ul>
  );
}

export default ExpensesList;