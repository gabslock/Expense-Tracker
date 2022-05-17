import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Header from "./components/Header/Header";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Microwave",
    amount: 69.0,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Chair", amount: 79.7, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Mirror",
    amount: 29.5,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "Living Room TV",
    amount: 699.99,
    date: new Date(2021, 11, 23),
  },
  {
    id: "e5",
    title: "Sofa",
    amount: 300,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Header />
      <Expenses items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default App;
