import React, { useState } from "react";

import classes from "./ExpenseList.module.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = (props) => {
  //useState always return an array with 2 values. The frist is the actual value and the second is the updating function
  //Here we are using array destructuring and making two constants that hold the value and a function.
  const [year, setYear] = useState('2021');

  const getSelectedYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div>
      <Card cls={classes.Expenses}>
      <ExpenseFilter onGetSelectedYear={getSelectedYearHandler} selected={year} />
        {props.expenses.map((exp) => {
          const expYear = exp.date.getFullYear() + '';
          if (year === expYear) {
            return (
              <ExpenseItem
                key={exp.id}
                title={exp.title}
                amount={exp.amount}
                date={exp.date}
              />
            );
          } else {
            return null;
          }
        })}
      </Card>
    </div>
  );
};

export default ExpenseList;
