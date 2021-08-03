import React from "react";

import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//This is a stateless component (presentational, dumb)
const ExpenseItem = (props) => {
  return (
    <li>
      <Card cls={classes.ExpenseItem}>
        <ExpenseDate date={props.date} />
        <div className={classes.ExpenseItemDescription}>
          <h2>{props.title}</h2>
          <div className={classes.ExpenseItemPrice}>{props.amount}$</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
