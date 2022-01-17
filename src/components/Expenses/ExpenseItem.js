import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHander = () => {
    setTitle("Updated");
  };
  return (
    <Card className={classes.expenseItem}>
      <ExpenseDate date={props.date} />
      <div className={classes.expenseItem__description}>
        <h2>{title}</h2>
        <div className={classes.expenseItem__price}>${props.amount}</div>
      </div>
      <button onClick={clickHander}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
