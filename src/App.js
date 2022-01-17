import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Steak",
      amount: 288.49,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Electricity",
      amount: 843.32,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Petrol",
      amount: 1256.81,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e4",
      title: "New Rollerblades",
      amount: 420.69,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
