import classes from './ExpenseList.module.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

  return (
    <div className={classes.Expenses}>
      {props.expenses.map((exp) => {
        console.log(exp);
        return <ExpenseItem key={exp.id}  title={exp.title} amount={exp.amount} date={exp.date}/>;
      })}
    </div>
  );
};

export default ExpenseList;