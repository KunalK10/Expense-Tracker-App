import React, {useState} from "react"
import Expense from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPNESE = [];

const App = () => {
  const [expenses, setExpenses]=useState(DUMMY_EXPNESE);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses  => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </div>
  );
};

export default App;
