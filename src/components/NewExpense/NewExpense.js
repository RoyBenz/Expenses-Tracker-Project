import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  const startAddingExpenses = () => {
    setIsEditing(true);
  };

  const stopAddingExpenses = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startAddingExpenses}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopAddingExpenses}
        />
      )}
    </div>
  );
};

export default NewExpense;
