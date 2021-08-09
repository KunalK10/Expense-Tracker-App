import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart"

import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
 

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
