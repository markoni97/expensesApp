import classes from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  
  return (
    <div className={classes.ExpenseItem}>
      <ExpenseDate date={props.date}/>
      <div className={classes.ExpenseItemDescription}>
        <h2>{props.title}</h2>
        <div className={classes.ExpenseItemPrice}>{props.amount}$</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
