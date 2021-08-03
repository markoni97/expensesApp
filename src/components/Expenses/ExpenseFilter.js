import React from 'react';

import classes from './ExpenseFilter.module.css';

//This is a controled component. The value and the changes to the value are handled in the parent component
//This is a stateless component
const ExpenseFilter = (props) => {

  const yearChangeHandler = (event) => {
    props.onGetSelectedYear(event.target.value);
  };

  return (
    <div className={classes.ExpenseFilter}>
      <div className={classes.ExpenseFilterControl}>
        <label>Filter by Year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;