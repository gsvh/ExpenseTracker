import React from "react";
import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
// import ExpenseDate from "../Expenses/ExpenseDate";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={classes.newExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
