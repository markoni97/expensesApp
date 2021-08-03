import React, {useState} from 'react';

import classes from './ExpenseForm.module.css';

//This is a smart or statefull component
const ExpenseForm = (props) => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const onTitleChangeHandler = (event) => {
    //When you depend on the previous state. This is the correct way to set state
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
      };
    });
  };

  const onAmountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value
      };
    });
  }

  const onDateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
      };
    });
  }

  //When you click submit the page reloads. This is how you prevent that.
  const formSubmitHandler = (event) => {
    //Prevents the default of this request being sent.
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    };
    //Pointer to a function
    props.onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.NewExpenseControls}>
        <div className={classes.NewExpenseCtrl}>
          <label>Title</label>
          <input type='text' value={userInput.enteredTitle} onChange={onTitleChangeHandler}/>
        </div>
        <div className={classes.NewExpenseCtrl}>
          <label>Amount</label>
          <input type='number' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={onAmountChangeHandler}/>
        </div>
        <div className={classes.NewExpenseCtrl}>
          <label>Date</label>
          <input type='date' value={userInput.enteredDate} min='2019-01-01' max='2022-12-31' onChange={onDateChangeHandler}/>
        </div>
      </div>
      <div className={classes.NewExpenseActions}>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;