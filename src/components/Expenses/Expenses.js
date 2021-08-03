import React, { useState } from "react";

import classes from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  //useState always return an array with 2 values. The frist is the actual value and the second is the updating function
  //Here we are using array destructuring and making two constants that hold the value and a function.
  const [year, setYear] = useState("2021");

  const getSelectedYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  //First filter the array, then show it
  const filteredExpenses = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card cls={classes.Expenses}>
        <ExpenseFilter
          onGetSelectedYear={getSelectedYearHandler}
          selected={year}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
