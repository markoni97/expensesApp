import React from 'react';

import classes from './NewExpense.module.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  /*
  Creating a function that I am gonna call inside the ExpenseForm component so that I can get the expenseData object.
  Super important pattern. This is how a child component can communicate up to the parent component.
  */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={classes.NewExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;